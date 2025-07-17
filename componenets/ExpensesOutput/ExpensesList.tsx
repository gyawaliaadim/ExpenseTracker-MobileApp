import { ExpenseObject } from '@/types/expense';
import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData: { item: ExpenseObject }) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }:{expenses:ExpenseObject[]}) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id? item.id : Math.random().toString()}
    />
  );
}

export default ExpensesList;
