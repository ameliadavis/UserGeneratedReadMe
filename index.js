var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
        type: "email",
        message: "What is your email address?",
        name: "confirm"
      },
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    },
  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
         fs.watchFile("README.md", response , function(err){
            if(err){
                return console.log(err);
            }
            console.log("checkout the README!");
            
    })
    }
    else {
      console.log("You forgot your password already?!");
    }
  });

