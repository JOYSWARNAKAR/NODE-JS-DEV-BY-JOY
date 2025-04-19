 const fs = require('fs')  // Flie System(fs)

// fs.readFile('example.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error(err)
//         return;
//     }
//     console.log(data);
// })

const content ='Hello, NodeJs'

fs.writeFile('output.ext',content,(err)=>{
if(err){
            console.error(err)
            return;
    }
     console.log('file witten succses');
})