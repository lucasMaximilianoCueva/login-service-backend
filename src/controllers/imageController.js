import { Image } from "../models/imageModel.js";
import multer from "multer";

//MULTER
const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("testImage");

async function imageController(req, res) {
    upload(req, res, (err) => {
        if(err){
             console.log(err)
        } else {
            const newImage = new Image({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            })
            newImage.save()
            .then(() => res.send('successfully uploaded')).catch((err) => console.log(err));
        }
    })
}

export {
    imageController
};