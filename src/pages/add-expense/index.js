import React from 'react'
import AddForm from '../../components/add-form';
import TopFold from '../../components/topfold';
import './add-expense.css';

const AddExpense = () => {
  return (
    <div className="add-expense">
      <TopFold/>
      <AddForm/>
    </div>
  )
}

export default AddExpense;