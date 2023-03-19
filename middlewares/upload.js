const util = require("util");
const path = require("path");
const multer = require("multer");
const courseModel = require('../models/courses')

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log(req.body)
    //console.log(req)
    callback(null, path.join(`${__dirname}/../../digitized/${req.body.year}`));
  },
  filename: async (req, file, callback) => {
    const match = ["image/png", "image/jpeg","application/pdf"];
    const courses = await courseModel.all();
    console.log(courses);
    if (match.indexOf(file.mimetype) === -1) {
      var message = "<script>window.location.href = '/'; window.alert('Invalid file type'); </script>"
      return callback(message, null);
    }
    console.log(req.body.course_id);
    let course = courses.find((course)=>{
      return course.id == req.body.course_id;
    });
    console.log(course);
    var filename = `${req.body.year}-${course.shortname}-${file.originalname}`;
    callback(null, filename);
  }
});

var uploadFiles = multer({ storage: storage }).array("documents", 10);
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;