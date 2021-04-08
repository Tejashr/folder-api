const os= require("os");
const fs= require("fs");
const express=require("express");
let app=express();
const path = require('path');
const cors = require("cors");
app.use(cors());

app.listen(8080,function(){
    console.log("server")
})


// app.get("/batch",function(req,res){
//     res.json(os.cpus())
// })


// fs.writeFile("message.txt","hello this the file created by tejas hr",function(err){
//    if(err) throw err;
//    console.log("file successfully created");
// })

// fs.readFile("message.txt","utf8",function(err,data){
//     if(err) throw err;
//     console.log(data);
//  })



app.get("/batch",function(req,res){
    fs.readdir("../../../",{withFileTypes:true},function(err,files){
        if (err) throw err;
        let allFiles=[]
        files.forEach(element => {

            const ext =element.name.split(".").pop();

            if(element.isDirectory()){
                allFiles.push({
                    name:element.name,
                    file:"fas fa-folder fa-lg"
                })
            }
            else if (ext=== "mp3" )
            {
                allFiles.push({
                    name:element.name,
                    file:"fas fa-file-audio fa-lg"
                })
            }
            else if(ext==="jpeg" || ext==="png" || ext==="jpg")
            {
                allFiles.push({
                    name:element.name,
                    file:"fas fa-file-image fa-lg"
                })
            }
            else if (ext=== "mp4")
            {
                allFiles.push({
                    name:element.name,
                    file:"fas fa-file-vedio fa-lg"
                })
            }
            else
            {
                allFiles.push({
                    name:element.name,
                    file:"fas fa-file fa-lg"
                })
            }
        })
        res.json(allFiles)
    })
})
 const time= new Date().toLocaleTimeString();

 fs.writeFile('timestamp.txt',time,'utf8',(err)=>{
     if (err) throw err;
 })