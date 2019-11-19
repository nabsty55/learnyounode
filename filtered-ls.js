const fs = require('fs');
const path = require('path');
const pathName = process.argv[2];
const extension = `.${process.argv[3]}`;


fs.readdir(pathName, function (err, list){
    if(err) return console.log(err);

    list.forEach(file =>{

        if(path.extname(file) === extension){
            console.log(file);
            
        }
    })
    
})