import { ExpenseObject } from "@/types/expense";
import { createContext, useReducer } from 'react';


type ExpensesContextType = {
    expenses: ExpenseObject[];
    addExpense: (expense: ExpenseObject) => void;
    deleteExpense: (id: string) => void;
    updateExpense: (id: string, updatedExpense: ExpenseObject) => void;
};


const DUMMY_EXPENSES:  ExpenseObject[]= [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05')
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18')
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05')
    },
    {
        id: 'e7',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e8',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19')
    },
    {
        id: 'e9',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18')
    },
    {
        id: 'e10',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2025-07-13')
    },
        {
        id: 'e11',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2025-07-11')
    }
];

export default DUMMY_EXPENSES;



export const ExpensesContext = createContext<ExpensesContextType>({
    expenses: [],
    addExpense: (expense: ExpenseObject) => { },
    deleteExpense: (id: string) => { },
    updateExpense: (id: string, updatedExpense: ExpenseObject) => { }
});

function expensesReducer(state: Array<ExpenseObject>, action: { type: string, payload?: any }) {
    switch (action.type) {
        case 'ADD':
            return [{ ...action.payload, id: new Date().toISOString() }, ...state];
        case 'UPDATE':
            const updatedExpenseIndex = state.findIndex(expense => expense.id === action.payload.id);
            const updatableExpense = state[updatedExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatedExpenseIndex] = updatedItem;
            return updatedExpenses;

        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

export function ExpensesContextProvider({ children }: { children: React.ReactNode }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
    const addExpense = (expenseData: ExpenseObject) => {
        dispatch({ type: 'ADD', payload: expenseData });
    }
    const deleteExpense = (id: ExpenseObject["id"]) => {
        dispatch({ type: 'DELETE', payload: id });
    }
    const updateExpense = (id: ExpenseObject["id"],expenseData: ExpenseObject) => {
        dispatch({ type: 'UPDATE', payload:{ id: id, data: expenseData}  });
    }

    const value: ExpensesContextType  = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };
    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

