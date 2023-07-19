const Expense=require('../models/expense');

exports.getExpenseData=(req,res,next)=>{
    Expense.findAll().then(expenses=>{
        res.send(expenses);
    })
    .catch(err=>console.log(err));
};

exports.postExpenseData=(req,res,next)=>{
    const amount=req.body.amount;
    const desc=req.body.description;
    const category=req.body.category;
    Expense.create({
        amount:amount,
        description:desc,
        category:category
    }).then(result=>{
        res.send(result);
    })
    .catch(err=>console.log(err));
}

exports.deleteExpenseData=(req,res,next)=>{
    const expenseId=req.params.Id;
    Expense.findByPk(expenseId).then(expense=>{
      expense.destroy();
      console.log('USER DELETED')
    })
    .catch(err=>console.log(err));
}

exports.getExpenseById=(req, res, next) => {
    const expenseId = req.params.Id;
    Expense.findByPk(expenseId)
    .then(expense=>{
       res.send(expense);
    }).catch(err=>console.log(err));
};

exports.updateExpenseData=(req, res, next) => {
    const expenseId = req.params.Id;
    const amount=req.body.amount;
    const desc=req.body.description;
    const category=req.body.category;
    Expense.findByPk(expenseId)
    .then(expense=>{
       expense.amount=amount;
       expense.description=desc;
       expense.category=category;
       expense.save();
    })
    .catch(err=>console.log(err));
};
