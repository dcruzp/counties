
const sqlite3 = require('sqlite3').verbose();



// let query = `SELECT  CountryId, CountryName, Numbers, Percent, Date, Source, Notes
// FROM population`;

// db.all(query,[],(err,rows)=>{
//     if (err){throw err;}
//     rows.forEach((row)=>{
//         console.log(row.CountryName , row.Percent);
//     });
// });


const db_path = '../countries.sqlite';

const getNamesOfColumns = (table_name) => {
    let db = new sqlite3.Database(db_path);
    let query = `PRAGMA table_info (${table_name})`;
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all(query, [], (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            });
        });
    });
}

async function get_columns_names(table_name){
    let names = []; 
    let data = await getNamesOfColumns(table_name);
    data.forEach(element => {
        names.push(element.name);
    });
    return names;
}

async function get_all_records(table_name){
    let db = new sqlite3.Database(db_path);
    let query = `SELECT CountryId, CountryName, Numbers, Percent, Date, Source, Notes FROM ${table_name};`
    db.all(query, [] , (err,rows) =>{
        if (err) {throw err;}
        console.log(rows);
    })
}

get_columns_names('population').then(x => {
        console.log(x)
    });

get_all_records('population');
