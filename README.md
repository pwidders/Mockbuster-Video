# Mockbuster-video
A mock video rental storefront and inventory management app inspired by the great 'Blockbuster Video' of my generation. This app takes you through the 'new releases' wall circa summer of 1998- when Blockbuster reigned supreme with top hits like "Armageddon" and "The Truman Show."


## Getting Started

Mockbuster-Video is a command line interface app. These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. The app is designed to perform 3 main processes: rent a movie, return a movie and allow admins to perform some inventory management features, like update movie stock, price and detials, as well as add new movies into the database.

* Some admin functions are still being improved and aren't fully functional on this version of the app.

Rent a movie:

    User enters a phone number to 'login' and then is presented a chart of current movies in stock. Users select the movie they wish to rent by entering the movie's unique ID number. The application then takes one copy of the movie out of inventory.

    ![](\images\movie-rental.gif)

Return a movie:

    User can return a movie, which then puts it back into stock.

    ![](\images\movie-return.gif)

    
Admin:

    Admins can log in via password protected area to perform some inventory management related functions like update stock and item details, as well as add movies. 

    ![](\images\admin.gif)

### Prerequisites

Mockbuster was created using the following setup:

Mysql database:
    You'll need to create and link to your own database for testing and functionality.

Nodejs: 
    Modules: 
        Mysql- used to connect node with Mysql database. 
        Inquirer- Used to prompt user through various menus.

### Installing

Use the tools listed above and make sure to match your Javascript code with mine and use your own modifications as you please.


## Running the tests

Make sure you have a local Mysql server installed to run tests and functionality.


## Deployment

No live deployment for this app as it is a command line interface application.


## Built With

Mysql
Visual Studio Code
Javascript
Node.js
Inquirer module
Mysql module

## Contributing 
This was built solely by myself.
