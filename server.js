const fs = require('fs');
let allData = '';

// fs.readFile(`${process.cwd()}/file1.txt`,(err,data)=>{
//     allData += data;
//     fs.readFile(`${process.cwd()}/file2.txt`,(err,data)=>{
//         allData += data;
//         console.log(allData);
//     })
// });
const readFile = (file)=> {
    return new Promise((resolve, reject) =>{
        fs.readFile(file,"utf8",(err,data)=>{
            if (err) reject(err);
            resolve(data);
        });
    });
}
Promise.all([readFile(`${process.cwd()}/file1.txt`),readFile(`${process.cwd()}/file2.txt`)])
    .then(data =>{
        console.log(data);
    }).catch(err =>{
        console.log(err);
    });
