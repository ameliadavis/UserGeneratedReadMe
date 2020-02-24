const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
let avatar = "";

inquirer
    .prompt([
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    }
    ])
    .then(function(response) {    
        console.log("thanks for answering!")
        // var username = response.username;
        // var email = response.email;
        try {
        init(response);
        } catch (error){
            console.log(error);
        }
    });

function writeToFile(filename, data) {
    console.log(data);
    // fs.writeFile("TEST.md", "helloWorld",function(err){
    //     if(err){
    //         return console.log(err);
    //     }
    // })
    fs.writeFile(filename, data.join(""), function(err){
        if(err){
            return console.log(err);
        }
    });
}

function init(promptResponse) {
    console.log(promptResponse.username)
    axios
        .get(`https://api.github.com/users/${promptResponse.username}`)
        .then(function(apiResponse){
            console.log(apiResponse.data);
            console.log(apiResponse.data.avatar_url)
            let avatar = apiResponse.data.avatar_url// pushes the image to the prompt array
            let username = promptResponse.username;
            //let data = '${promptResponse.username} ${promptResponse.email}'
            //let data = {username};
            //let data = {`username` " \n" + promptResponse.email} // \n = next line 
            let data = [promptResponse.username, "\n" , promptResponse.email]
            writeToFile("USERREADME.md", data);
        })
};


//init();
