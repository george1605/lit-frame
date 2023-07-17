const fs = require('fs');
const { exec } = require('child_process');
const colors = require('colors');

exec('node output.js');
exec('cd server & node ./', (err, stdout) => {
    if(err)
        console.log("Server error: \n".red, err);
    else
        console.log("Server message: \n".cyan, stdout);
})