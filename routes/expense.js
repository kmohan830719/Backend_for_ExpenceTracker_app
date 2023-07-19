const express=require('express');
const router=express.Router();
const expenseController=require('../controllers/expense');

router.get('/expense', expenseController.getExpenseData);
router.post('/expense',expenseController.postExpenseData);
router.delete('/expense/:Id',expenseController.deleteExpenseData);
router.get('/expense/:Id',expenseController.getExpenseById);
router.put('/expense/:Id',expenseController.updateExpenseData);
module.exports=router;

