const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer
    .prompt([
    {  
        type: "input",
        message: "What is your project title?",
        name: "projectTitle"
    },
    {  
        type: "input",
        message: "Please describe your project",
        name: "description"
    },
    {  
        type: "input",
        message: "How do I install it?",
        name: "Installation"
    },
    {  
        type: "input",
        message: "What is your project used for?",
        name: "usage"
    },
    {  
        type: "input",
        message: "Which license?",
        name: "license"
    },
    {  
        type: "input",
        message: "Who contributed to your project?",
        name: "contributing"
    },
    {  
        type: "input",
        message: "What tests should I run?",
        name: "tests"
    },
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
        try {
        init(response);
        } catch (error){
            console.log(error);
        }
    });

function writeToFile(filename, data) {
    console.log(data);
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
            console.log(apiResponse.data.avatar_url);
            let avatar = apiResponse.data.avatar_url;
            let badge = "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)"
            const tableOfContents = " Table of Contents \n * Project Title \n * Description \n * Installation \n * Usage \n * License \n * Contributing \n * Tests \n * Personal Info \n";
            let data = ["# ",promptResponse.projectTitle,"\n", "## ",promptResponse.description,"\n", "##", tableOfContents, "\n", "## ", promptResponse.installation,"\n",  "### ",promptResponse.usage,"\n", "### ", promptResponse.contributing, "\n", "## ", promptResponse.tests,"\n",  "![user Avatar](",avatar,")", "\n",  "* my email: ", promptResponse.email, "\n", badge]
            writeToFile("USERREADME.md", data);
        })
};
