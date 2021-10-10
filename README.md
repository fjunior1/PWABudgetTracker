# PWABudgetTracker
Add functionality to our existing Budget Tracker application to allow for offline access and functionality.

## TABLE OF CONTENTS
- [USER STORY](#user-sStory)
- [Business Context](#Business Context)
- [Acceptance Criteria](#Acceptance Criteria)
- [INSTALLATION](#INSTALLATION)
- [SCREENSHOTS](#SCREENSHOTS)
- [LINKS](#LINKS)
- [QUESTIONS](#QUESTIONS)


#DESCRIPTION
The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

Offline Functionality:

  * Enter deposits offline

  * Enter expenses offline

When brought back online:

  * Offline entries should be added to tracker.

## User Story
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling

## Business Context

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Acceptance Criteria
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.

## INSTALLATION
Install node
type " node " on the terminal, if you have it installed it will show something like the lines below    
 Welcome to Node.js v14.17.0.
 Type ".help" for more information.
 >
If you dont have node installed then download node from [here](https://nodejs.org/en/download/)
after download, install node.

prepare to run the application:
1-clone the repo from [PWA Budget Tracker](https://github.com/fjunior1/PWABudgetTracker)
install dependencies typing in the terminal "npm install"

#USAGE
1- Go to the directory where the applicaiton is
2- Run the application "npm start"
3- Open a browser and fo to the link: "locahost:3000"

from Heroku:
2- Go to the HEROKU applicaiotn link  
Steps to run in the application
A- To enter a deposit, type a name for the transaction and the amount and click "Add Funds"
B- To enter an expense, type a name for the transactino and the amount and click "Subtract Funds".
C- If you enter deposits or expenses offline, the offline entries will be added to the tracker when brought back online.

Note: Any deposits or expenses will be listed in the Chart.  

## SCREENSHOTS

## LINKS
- The [repository](https://github.com/fjunior1/PWA-Budget-Tracker) for this application.
- The [deployed application](https://.herokuapp.com/).

## QUESTIONS
For any questions, please check out my GitHub profile or send me an email:

- GitHub: [fjunior1](https://github.com/fjunior1)

