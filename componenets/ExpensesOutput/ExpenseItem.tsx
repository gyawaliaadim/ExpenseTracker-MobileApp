import Colors from '@/constants/Colors';
import { ExpenseObject } from '@/types/expense';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { getFormattedDate } from '../../util/date';

type RootStackParamList = {
  manageExpenses: { expenseId: string };
  // add other routes here if needed
};

function ExpenseItem({ id, description, amount, date }:ExpenseObject) {

  function expensePressHandler() {

    router.push({
      pathname: '/manageExpenses',
      params: { expenseId: id }
    });

  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed ? styles.pressed: ""}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description.length > 48 ? description.slice(0, 24) + '...' : description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount ? amount.toFixed(2): 0.00}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.gray300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: Colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: Colors.secondary300,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.secondary300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: Colors.gray500,
    fontWeight: 'bold',
  },
});
