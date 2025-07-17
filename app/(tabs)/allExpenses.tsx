import ExpensesOutput from '@/componenets/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '@/store/expenses-context';
import { useContext } from 'react';
import { Text } from 'react-native';
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  if (expensesCtx.expenses.length === 0) {
    return <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>No expenses found!</Text>;
  }
  return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" />;
}

export default AllExpenses;
