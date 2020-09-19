const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

aws.config.update({
    secretAccessKey:'roWVP4HK6SwMCoAIoAdnx7OhHvcpqlnTLHh+qLJK',
    accessKeyId:'AKIAIUKALY5WBWIL4HTA',
    region:'ap-south-1'
})

const s3 = new aws.S3();

const upload = multer({
    storage:multerS3({
        s3:s3,
        bucket:'examplebucketrishav',
        metadata:function(req,file,cb){
            cb(null,{fieldName:"Testing Meta Data"});
        },
        key:function(req,file,cb){
            cb(null,Date.now().toString())
        }
    })
})

module.exports = upload;