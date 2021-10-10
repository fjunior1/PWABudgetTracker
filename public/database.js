let database;
// local database cache
const request = window.indexedDB.open("localDB", 1); /* BudgetDB */

request.onupgradeneeded = function (event) {
  database = event.target.result;
  database.createObjectStore("localStore", { /*BudgetStore*/
    keyPath: "id",
    autoIncrement: true
  });  
};

request.onsuccess = function () {
  database = request.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  console.log("Error: ", request.error)
};

function saveRecord(record) {
  //console.log(record)
  const transaction = database.transaction(["localStore"], "readwrite");
  const localStore = transaction.objectStore("localStore");
  localStore.add(record)
}

function checkDatabase() {
  const transaction = database.transaction(["localStore"], "readwrite");
  const localStore = transaction.objectStore("localStore");
  const getAll = localStore.getAll();
  
  getAll.onsuccess = function () {
    console.log(getAll.result);
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          const transaction = database.transaction(["localStore"], "readwrite");
          const BudgetStore = transaction.objectStore("localStore");
          // after saving all the temporary record , clear them from the local storage
          BudgetStore.clear();
        });
    }
  };
}

window.addEventListener('online', checkDatabase);
