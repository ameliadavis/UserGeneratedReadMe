var inquirer = require("inquirer");
var fs = require("fs");
var requiredContent = [
    {
        badge = "[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()", 
        projectTitle = "# **A User-Generated ReadMe**",
        description = "Test",
        tableOfConents ="*test *test *test",
        Installation= "Test",
        usage= "Test",
        lcense ="Test",
        contributing ="test",
        tests = "test",
        response
        }
]
fs.writeFile("content.json",requiredContent, function(err){
    if(err){
        return console.log(err);
    }
    JSON.parse

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

      } 
         fs.writeFile("UserReadMe.md", response , function(err){
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

