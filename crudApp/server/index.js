const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));




const db = mysql.createPool({

    database: "personels",
    host: "localhost",
    user: "root",
    password: "password"

});

app.post("/create", (req, res) => {
    const name = req.body.name;
    const department = req.body.department;

    if (name !== '' && department !== '') {
        const insertDb = "insert into personel (name, dept) values (?,?)";
        db.query(insertDb, [name, department], (err, result) => {
            console.log(err);
        })
        name = "";
        department = "";
    }


});


app.get("/get", (req, res) => {

    const getdata = "SELECT * FROM personels.personel"

    db.query(getdata, (err, result) => {
        res.send(result)
    })

})

app.get("/getper/:id", (req, res) => {


    const id = req.params.id;

    const getPer = "SELECT * FROM personels.personel where  idPer=?"

    db.query(getPer, id, (err, result) => {
        res.send(result);
    })

})

app.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const department = req.body.department;



     //her ikiside dolu ise
     if(name !=='' & department!=='' )
     { 
         const updatePer = "UPDATE personels.personel SET name=?, dept=? WHERE idPer=?";
         db.query(updatePer,[name,department,id], (err,res)=>{
         console.log(err);
     })}


// sadece name dolu ise
if(name !==''  & department==='')
{
    const sqlUpdate = "Update personels.personel set name=? where idPer=?";
    db.query(sqlUpdate,[name,id], (err,res)=>{
    console.log(err);
})}



//sadece department dolu ise
if(name==='' & department!=='')
{
    const sqlUpdate = "Update personels.personel set moviereview=? where idPer=?";
    db.query(sqlUpdate,[department,id], (err,res)=>{
    console.log(err);
})}

 
    
    // const updatePer = "UPDATE personels.personel SET name=?, dept=? WHERE idPer=?";
    // db.query(updatePer, [name, department, id], (err, result) => {
    //     console.log(err);
    // })
})



app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    const delPersonel = "delete from personels.personel where idPer=?";
    db.query(delPersonel, id, (err, result) => {
        console.log(err);
    })
})


app.listen(3001, () => {

    console.log("Bağlantı Kuruldu!")
});