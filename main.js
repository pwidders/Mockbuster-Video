// Require Node modules
var mysql = require('mysql');
var inquirer = require('inquirer');

// Create mySQL connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'mockbuster_db',
  // port: 3306
});
 
connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
});

// // DB query test
//   connection.query("SELECT * FROM movies", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });

// Main menu function
function mainMenu () {
    // Inquirer user menu
    inquirer
      .prompt([
        /* Pass your questions in here */
        {
          type: "list",
          name: "menuChoice",
          message: "Hi! Welcome to Mockbuster Video. Please select an option below:",
          choices: ['Rent a movie', 'Return a movie', 'Admin: inventory manager']
        }
      ]).then(function (userChoice) {
          // depending on the user selection, 
          switch (userChoice.menuChoice) {
          case 'Rent a movie':
            authIt();
            break;
          // call on returnIt
          case "Return a movie":
            queryItStock();
            returnIt();
            break;
          // call on stockIt
          case "Admin: inventory manager":
              queryIt();
              stockIt();
              break;
        }
    }) 
} 
mainMenu() 

// "Phone number login"
function authIt() {
    inquirer.prompt([
        {
        type: "input",
        message: "Please enter your phone number (xxx-xxx-xxxx): ",
        name: "phoneID",    
        }
    ])
    .then(function () {
         console.log("\n Thanks. Here's our current films:");
        queryIt();
    })
}

function queryIt() {
    // Query the database to present full UI menu
    connection.query("SELECT * FROM movies", function(err, res, fields) {
      if (err) throw err;
      console.log("\nID #" + " | " + "Movie Name" + " | " + "Genre" + " | " + "In-stock" + " | " + "Price" + " | " + "Rating" + " | \n");
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + "  |  " + res[i].movie_name + "  |  " + res[i].genre + "  |  " + res[i].in_stock + "  |  " + res[i].price + "  |  " + res[i].rating + "  |  \n");
      }
      console.log("-------------------------------------------");
      rentIt()
    }) 
}

function rentIt() {
    // Prompt user for input
    inquirer.prompt([
        {
        type: "input",
        message: "Please enter movie selection's ID: ",
        name: "movieID",    
        }
    ])
    .then(function (userChoice) {
        var movie = userChoice.movieID;
         console.log("You've chosen " + movie);
        //Check if qty is available in database
        connection.query("SELECT in_stock FROM movies WHERE id = " + parseInt(movie), function (err, res) {
            if (err) throw err;
            // If not available --> console Title is unavailable, choose another selection
            if (newMovieStock <= 0) {
                console.log("That title is not available. Please choose another");
            }
            else {
                // If yes --> proceed to checkout
                console.log("Movie is now checked out. $3.50 will be charged to the account.");
                // update statment
                var movieStock = res;
                var newMovieStock = movieStock[0].in_stock;
                //console.log(movieStock[0].in_stock); --test value returned
                var sql = `UPDATE movies
                SET in_stock = ?
                WHERE id = ?`;
                var data = [newMovieStock - 1, movie];
                
                // execute the UPDATE statement
                connection.query(sql, data, (error, results) => {
                    if (error){
                    return console.error(error.message);
                    }
                    console.log('Rows affected:', results.affectedRows);
                });
                console.log("-------------------------------------------");
                mainMenu();
            }
        })
    })
}

