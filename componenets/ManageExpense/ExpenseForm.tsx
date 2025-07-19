import Button from '@/componenets/UI/Button'
import IconButton from '@/componenets/UI/IconButton'
import Colors from '@/constants/Colors'
import { ExpenseObject } from "@/types/expense"
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from './Input'
// If Input is a named export, use:
// import { Input } from './Input'

const ExpenseForm = ({
  onSubmit,
  cancelHandler,
  isEditing,
  defaultValues,
  deleteExpenseHandler
}:

  {
    onSubmit: (expenseData: ExpenseObject) => void,
    cancelHandler: () => void,
    deleteExpenseHandler: () => void,
    isEditing?: boolean,
    defaultValues?: ExpenseObject
  }) => {
    const [error, setError] = useState<string | null>(null);


  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : (new Date(Date.now())).toISOString().split('T')[0],
    description: defaultValues ? defaultValues.description : '',
  })

  function inputChangeHandler(inputIdentifier: string, enteredValue: string | number) {
    setInputValues((currentValues) => {
      return {
        ...currentValues,
        [inputIdentifier]: enteredValue
      }
    })
  }
  const submitHandler = () => {
    if (!inputValues.amount || !inputValues.date || !inputValues.description) {
      setError('Please fill in all fields.');
      return;
    }
    if (isNaN(+inputValues.amount) || inputValues.amount.trim() === "" || +inputValues.amount <= 0) {
      setError('Enter a valid amount that is greater than 0.');
      return;
    }
    if (isNaN(new Date(inputValues.date).getTime())) {
      setError('Invalid date format. Use YYYY-MM-DD.');
      return;
    }
    
    setError(null); // Clear any previous errors


    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description
    }
    onSubmit(expenseData);
  }

  return (
    <View>

      <Input label='Amount'
        textInputConfig={{
          keyboardType: 'decimal-pad',
          placeholder: '0.00',
          maxLength: 10,
          onChangeText: inputChangeHandler.bind(this, 'amount'),
          value: inputValues.amount,
        }}
      />
      <Input label='Date'
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          keyboardType: 'default',
          onChangeText: inputChangeHandler.bind(this, 'date'),
          value: inputValues.date,
        }}
      />
      <Input label='Description'
        textInputConfig={{
          placeholder: 'Buy groceries',
          multiline: true,
          keyboardType: 'default',
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
      {error ? <Text style={{ color: "#ff4336", textAlign: 'center', marginVertical: 8, fontSize:16, fontWeight:"bold" }}>{error}</Text>:
               <Text style={{ color: 'white', textAlign: 'center', marginVertical: 8,  fontSize:16, fontWeight:"bold"  }}> </Text>}
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={submitHandler}>
          <Text>{isEditing ? 'Update' : 'Add'}</Text>
        </Button>
        {isEditing ? (
          <View style={styles.deleteContainer}>
            <IconButton
              icon="trash"
              color={Colors.error50}
              size={32}
              onPress={deleteExpenseHandler}
            />
          </View>
        ) : null}
      </View>
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth:2,
    borderTopColor: Colors.gray300,
    paddingTop: 16,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  
  deleteContainer: {
    alignItems: 'center',
  }
})