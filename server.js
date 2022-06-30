const express = require('express');
const app = express();
const multer = require('multer');
const mimeTypes = require('mime-types');

const storage = multer.diskStorage({
    destination: 'archivos/', filename: function(req,file,cb){
        cb("",Date.now() + file.originalname);
    }
})

//"",Date.now() + otro + mimeTypes.extension(file.mimetype)

const upload = multer({
    storage: storage
})

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/Campaña.html");

})

app.post("/files", upload.single('Objeto3D') ,(req,res) => {
    //res.send("Todo bien");
})



app.listen(8080, ()=> console.log("server started"));