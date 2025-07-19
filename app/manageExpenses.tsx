import ExpenseForm from '@/componenets/ManageExpense/ExpenseForm';
import Colors from '@/constants/Colors';
import { ExpensesContext } from '@/store/expenses-context';
import { ExpenseObject } from '@/types/expense';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
function ManageExpense() {
  const expensesCtx = useContext(ExpensesContext);

  const { expenseId } = useLocalSearchParams<{ expenseId: string }>();
  const editedExpenseId = expenseId ? expenseId : '';
 const selectedExpense = expensesCtx.expenses.find((expense) => expense.id === editedExpenseId);
  const isEditing = !!editedExpenseId;


  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    router.back();
  }

  function cancelHandler() {
    router.back()
  }

  function confirmHandler(expenseData: ExpenseObject) {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      // storeExpense(expenseData);  
      expensesCtx.addExpense(expenseData);
    }
    router.back();

  }

  return (
    <>
      <Stack.Screen
        name="manageExpenses"
        options={{
          presentation: 'modal',
          headerShown: true,
          headerStyle: { backgroundColor: Colors.gray300 },
          headerTitleStyle: { color: Colors.secondary500 },
          headerTintColor: Colors.secondary500,
          title: isEditing ? 'Edit Expense' : 'Add Expense',
        }}
      />
      <View style={styles.container}>

        <ExpenseForm
          onSubmit={confirmHandler}
        cancelHandler={cancelHandler}
  isEditing={isEditing}
        defaultValues={selectedExpense}
        deleteExpenseHandler={deleteExpenseHandler}
  />
  
        
      </View>
    </>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.gray700,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.gray300,
    alignItems: 'center',
  },
});
