const masterlist = require('../models/masterlist')
const course = require('../models/courses')
const store = require('../middlewares/upload')

class DigitizedController{

    static async index(req, res){
        try{
            return await masterlist.all()
        }catch(err){
            console.log(err);
        }
        
    }

    static async store(req, res){
        try{
            await store(req, res);

            console.log(req.files);

            if (req.files.length <= 0) {
              return res.send(`You must select at least 1 file.`);
            }
            console.log('hello');
            let documents = []
            let year = req.body.year;
            let course_id = req.body.course_id;
            let files = req.files
            console.log('files:',files);
            files.forEach(file => {
                documents.push([
                    file.originalname,
                    year,
                    course_id
                ])
            });
            await masterlist.add(documents)
            
            return res.send("<script>window.location.href = '/'; window.alert('Files have been uploaded'); </script>");


        }catch(err){
            console.log(err);
            res.send(err);
        }
    }
}

module.exports = DigitizedController
