import express from 'express';
import cors from "cors";
import mysql from "mysql"

const app = express();

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "MY_DATA"
})

app.get('/', (req,res) => {
    const sql = "SELECT * FROM StudentList";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside Server"});
        return res.json(result);
    })
})

app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM StudentList WHERE ID = ?"
        
   const id = req.params.id;
    db.query(sql, [id], (err,result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})


app.put('/edit/:id', (req, res) => {
const sql = "UPDATE StudentList SET `Name` = ?, `Email` = ? WHERE `ID` = ?"


db.query(sql, [req.body.name, req.body.email, req.params.id], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
})
})

app.delete('/delete/:id', (req, res) => {
    const sql ="DELETE FROM StudentList WHERE ID = ?"
    db.query(sql, [req.params.id],(err, result) => {
        if (err) return res.json(res);
        return res.json(result);
    })
})

app.post('/student',(req, res) => {
    const sql = "INSERT INTO StudentList (Name, Email) VALUES (?)"
   console.log(req.body)
    const values = [req.body.name,
                    req.body.email]
        db.query(sql, [values], (err, result) => {
            if(err) return res.json(err);
            return res.json(result);
        })
})
app.listen(8081, () => {
    console.log("I'm Listening!");
})
