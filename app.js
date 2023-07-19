const express=require('express');
const cors=require('cors');
const sequelize=require('./util/database');
const app = express();

const expenseRouter=require('./routes/expense');

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.use(expenseRouter);

sequelize.sync().then(result=>{
    app.listen(4000);
}).catch(err=>console.log(err));