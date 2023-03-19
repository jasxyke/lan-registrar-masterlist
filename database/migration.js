const pool = require('./connection')
require('dotenv').config()

function courseTb(){
    return new Promise((resolve, reject)=>{
        const courseSql = "CREATE TABLE courses(id tinyint NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, shortname varchar(5) NOT NULL, PRIMARY KEY(id));"
                        
        pool.query(courseSql, (err, result)=>{
            if(err) return reject(err);
            console.log('tables created'); 
            console.log(result);
            resolve('ok')
        })
    })
    
}

function masterlistTb(){
    return new Promise((resolve, reject)=>{
        var masterlistSql = "CREATE TABLE masterlist(id bigint NOT NULL AUTO_INCREMENT, " +
        "year smallint NOT NULL, course_id tinyint NOT NULL," +
        "fullname varchar(255) NOT NULL," +
        "PRIMARY KEY (id), FOREIGN KEY (course_id) REFERENCES courses(id));"

        pool.query(masterlistSql, (err, result)=>{
            if(err) return reject(err)
            console.log('created masterlist');
            resolve(result)
        })
    })
}



    
async function initDB(){
    await courseTb()
    await masterlistTb();
}

initDB();



