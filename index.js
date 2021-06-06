// Packages
const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('generateMarkdown');

// Array of resume questions
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your full name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you located?',
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is your primary phone number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: function(email)
                {
                    valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                    if (valid) {
                        return true;
                    }
                    else{
                        console.log("\nEnter valid email");
                        
                        return false;
                    }
                }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Write an about you paragraph.',
        }])

        .then((answers) => {
            console.log(answers);
            const userInput = generateMarkdown(answers);
        //    actually write the file
            fs.writeFile("Resume.md", userInput, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
        })