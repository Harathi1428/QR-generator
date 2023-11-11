
import inquirer from "inquirer";
import qr from "qr-image";
import fs, { writeFile } from "fs";
inquirer
.prompt({
    message:"type in your url: ",
    name: "URL",
})
.then((answers)=>{
    const url=answers.URL;
    var QR=qr.image(url);
    QR.pipe(fs.createWriteStream("qr_img.png"));
    writeFile("msg.txt","this is my qr code",(err)=>{
        if (err) throw err;
        console.log("the file has been saved..!");
    });
})

