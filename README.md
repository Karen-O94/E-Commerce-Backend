# E-Commerce-Backend
A backend server for an e-commerce website that uses the latest technologies

## Screenshots
*Insomnia App*
![image](https://user-images.githubusercontent.com/74797740/111865021-5de1ae80-895c-11eb-8b2b-520d852396a3.png)

![image](https://user-images.githubusercontent.com/74797740/111865037-7baf1380-895c-11eb-8f4f-105ac7c777ab.png)

## Technology
* XAMPP / MySQL
* MySQl workbench
* Javascript
* Insomnia app

## Installation
In order to use the ecommerce server, you will need to run `npm init -y` to initialise the `package.json ` and then install the following list of dependencies:
`npm i mysql2`
`npm i express`
`npm i sequelize`
`npm i dotenv`: to make sure this sensitive information i.e. password is hidden. 

The sequelize package allows us to map our object syntax on our database schemas. 

The mysql2 package connects you directly to the database created in the MySQL Workbench and the console.table package allow the data in database to be printed in a table format within the command line. 

Once all the dependencies are installed, you can initialise the application itself by running `node server.js` in the command line

##Link to video walkthrough
*Please see the video walkthrough for this application below*

[Google Drive Link to video walkthrough](https://drive.google.com/file/d/1CN6Mg8UYk5xjRHbdQTDy-Zs6cGJrJ5tp/view?usp=sharing)

## Usage 
After running `node server.js` to start the server and then go to Insomnia app and type in the routes you require to send or make a request and select the methods GET(READ), POST(CREATE), PUT(UPDATE), DELETE from the drop down list before clicking 'SEND'. 

GET routes - localhost:`${PORTnumber}`/api/`${specifiedModel}` eg. localhost:3001/api/categories
GET by ID routes - localhost:`${PORTnumber}`/api/`${specifiedModel}`/`idNum` 
POST routes - localhost:`${PORTnumber}`/api/`${specifiedModel}`
UPDATE/PUT by ID routes - localhost:`${PORTnumber}`/api/`${specifiedModel}`/`idNum`
DELETE by ID routes - localhost:`${PORTnumber}`/api/`${specifiedModel}`/`idNum`

If all requests are successfully made, you will see the data populated in the Preview box and a status '200 OK'. A '404' or '400' status will show up if there is an error or bad request made

![image](https://user-images.githubusercontent.com/74797740/111864983-2e32a680-895c-11eb-820e-ace2b95886ed.png)

## Test
We do not have any test packages for this app but always check the error messages within terminals and debug using console.log(s). 

## License
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

> This project was created under the standard MIT licence.

> [Learn more about this licence.](https://lbesson.mit-license.org/)


## Questions?

Please contact me on the links below if you have any queries on how the application works or to view my other projects:

My GitHub username is Karen-O94 

Link to GitHub Profile: https://github.com/Karen-O94