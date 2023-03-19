const TITLE = "Registrar's Office Digitizer"
const Course = require('../models/courses')
const Masterlist = require('../models/masterlist')
const { generateExcel } = require('../services/excel')
const years = ['2018', '2019', '2020', '2021', '2022', '2023']


async function index(req, res){
    let courses = await Course.all()
    res.render('index', {title: TITLE, courses: courses, years: years})
}

async function excel(req, res){
    let masterlist = await Masterlist.all()
    let file = await generateExcel(masterlist);
    console.log('hello?', file);
    res.download(file)
}


module.exports={
    index,
    excel
}