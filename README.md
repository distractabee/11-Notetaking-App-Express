# Note Taking App

## Description

This note taking app makes use of expressjs to allow users to create and save notes and reminders for upcoming tasks, chores, events etc.

In building this app, I learned how to use express middleware to post and retrieve data. I also found a useful nodejs library called uuid that easily creates unique IDs for you. Figuring out how to write the delete route was a little tricky because I am used to doing it with sequelize and the .destroy method, but eventually I remembered that I could remove a note off the db.json file using the .splice method built into node.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

The package.json file will let you know what dependencies you will need to install to run the app on your local machine, which you can do by using `npm i` in the command line.

## Usage


## Credits

The bulk of this application was provided already coded by the EdX full stack programming boot camp.

The routes and server.js file were written by Jessica Jones, and you can [follow her on Github](https://www.github.com/distractabee).

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

2024 (c) Jessica Jones