const router = require("express").Router()
const multer = require('multer')
const env = require("dotenv")
const Item = require("../models/Item")

env.config()

const Storage = multer.diskStorage({
    destination : 'uploads',
    filename : (req,file,cb) => {
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage : Storage,
}).single("testImage")

router.post("/upload-item", async(req,res) => {
    upload(req,res,async (err) => {
        if(err)
        {
            console.log('\x1b[41m%s\x1b[0m',"[FAILED] Cannot upload image at endpoint (upload-item)!")
            res.status(500).json("Failed uploading image.")
        }
        else {
            try{  

            const newItem = new Item({
                name : req.body.name,
                shortDescription : req.body.shortDescription,
                longDescription : req.body.longDescription,
                price : req.body.price,
                category : req.body.category,
                image : {
                    data : req.file.filename,
                    contentType : 'image/png'
                }
            })
                const itemSaved = await newItem.save()
                console.log('\x1b[42m%s\x1b[0m',"[SUCCESS] Uploading a new item.")
                res.status(200).json(itemSaved)   
            }
            catch(err)
            {
                console.log('\x1b[41m%s\x1b[0m',"[FAILED] Uploading a new item.")
                res.status(500).json(err)
            }
        }
    })
})

module.exports = router