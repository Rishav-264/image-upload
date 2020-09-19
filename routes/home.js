const express = require('express');
const router = express.Router();
const upload = require('../services/file-upload');

const singleUpload = upload.single('image');

router.get('/',(req,res)=>{
    res.render('home');
})

router.post('/',(req,res)=>{
    singleUpload(req,res,(err)=>{
        if(err) return res.json({"error":err})
        return res.json({"imageUrl":req.file.location});;
    })
})

module.exports = router;