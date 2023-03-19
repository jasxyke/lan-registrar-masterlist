const pool = require("../database/connection")

class Course{

    static all(){
        return new Promise((resolve, reject)=>{
            let sql = "SELECT * FROM courses"
            pool.query(sql, (err, result)=>{
                if(err) throw err;
                console.log('Getting courses...');
                return resolve(result) 
            })
        })
    }
}

module.exports = Course;