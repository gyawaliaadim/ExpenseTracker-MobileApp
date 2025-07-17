import ExpensesOutput from '@/componenets/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '@/store/expenses-context';
import { getDateMinusDays } from '@/util/date';
import { useContext } from 'react';
function RecentExpenses() {

  const expensesCtx = useContext(ExpensesContext);
  

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
      const today = new Date();
      const expenseDate = new Date(expense.date);
      const date7DaysAgo = getDateMinusDays(today, 7);
      // console.log(expenseDate>date7DaysAgo)
      return (expenseDate > date7DaysAgo) && (expenseDate <= today);
    });
       
  
  return <ExpensesOutput expenses={recentExpenses}expensesPeriod="Last 7 Days"fallbackText='No expenses registered for the last 7 days'/>;
}

export default RecentExpenses;

