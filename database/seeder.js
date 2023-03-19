const pool = require('./connection')

function addCourses(courses){
    sql = "INSERT INTO courses(name,shortname) VALUES ?";
    pool.query(sql, [courses], (err, result) =>{
        if(err) throw err;
        console.log(result.affectedRows);
    })
}
function seed(){
    courses = [
        ['DICT - Diploma in Information Communication Technology', 'DICT'],
        ['DIT - Diploma in Information Technology', 'DIT'],
        ['DOMT - Diploma in Office Management Technology', 'DOMT'],
        ['DCET - Diploma in Computer Engineering Technology', 'DCET'],
        ['DRET - Diploma in Railway Engineering Technology', 'DRET'],
        ['DECET - Diploma in Electronics Engineering Technology', 'DECET'],
        ['DEET - Diploma in Electrical Engineering Technology', 'DEET'],
        ['DMET - Diploma in Mechanical Engineering Technology', 'DMET']
    ]

    addCourses(courses);
}

seed()