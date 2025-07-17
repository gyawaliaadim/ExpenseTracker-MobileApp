import { StyleSheet, Text, View } from 'react-native';

import Colors from '@/constants/Colors';
import { ExpenseObject } from '@/types/expense';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }: { expenses: ExpenseObject[], expensesPeriod: string, fallbackText: string }) {
  let content = <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>{fallbackText}</Text>;
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: Colors.gray700
  }
});