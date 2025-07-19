import { ExpenseObject } from '@/types/expense';
import axios from 'axios';

const BACKEND_URL = "https://expense-tracker-by-aadimgy-default-rtdb.firebaseio.com/expenses.json";

export function storeExpense(expenseData: ExpenseObject) {
    axios.post(BACKEND_URL, expenseData)
}

export function fetchExpenses() {
    axios.get(BACKEND_URL)
    .then(response => {
        const expenses: ExpenseObject[] = [];
        for (const key in response.data) {
            const expenseObj: ExpenseObject = {
                id: key,
                ...response.data[key]
            };
            expenses.push(expenseObj);
        }
        console.log( expenses) ;
    })
}