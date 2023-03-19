const pool = require('../database/connection')

class Masterlist{
    constructor() {
    }

    static all(){
        return new Promise((resolve, reject)=>{
            let sql = "SELECT masterlist.*, courses.name AS course FROM masterlist "+
                        "JOIN courses ON masterlist.course_id = courses.id"
            pool.query(sql, (err, result)=>{
                if(err) return reject(err)
                console.log('Getting ditized masterlist...');
                console.log(result);
                resolve(result)
            })
        })
        
    }

    static add(documents){
        return new Promise((resolve, reject)=>{
            let sql = "INSERT INTO masterlist(fullname, year, course_id) VALUES ?"
            pool.query(sql, [documents], (err, result)=>{
                if(err) return reject(err);
                console.log('Adding documents...');
                resolve(`added: ${result.affectedRows} documents`)
                return
            })
        })
        
    }


}

module.exports = Masterlist;