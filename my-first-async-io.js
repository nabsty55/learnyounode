const fs = require('fs');
const filePath = process.argv[2];
const str = fs.readFile(filePath, 'utf-8', function(err, data){
    if(err){
        return err;
    }

    else{
        const splt = data.split('\n');
        const l = splt.length-1;
        console.log(l);
        
    }

})