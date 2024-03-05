import express from "express";
import mysql from 'mysql2';

const app= express();
app.use(express.json())

const db =mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'creator'
}).promise();

app.get('/commissions', async (req,res)=>{
    const temp=await db.query('select * from muvesz')
    const row=temp[0]
    res.send(row)
})

app.post('/commissions',async (req,res)=>{
   
        try{

            const [data,fields]=  await  db.query('INSERT INTO muvesz (id,leiras,price) VALUES (?,?,?)',[req.body.id,req.body.leiras,req.body.price])
            res.status(203).send()
        }
        catch(e) {
            res.status(400).send()
        }
       
 
  
   
     
   })
app.listen(3000)