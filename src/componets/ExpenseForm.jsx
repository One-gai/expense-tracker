// import React, { useState } from "react";
// function ExpenseForm(onAddExpense){
//     const [description, setDescription] = useState('')
//     const [category, setCategory] = useState('')
//     const [amount, setAmount] = useState('')
//     const [date, setDate] = useState('')

//     function handleSubmit(e){
       
//             e.preventDefault();
//             const newExpense= {
//                 id : {index},
//                 description,
//                 category,
//                 amount: parseFloat(amount),
//                 date,
//             }

        
//     }
//     onAddExpense(newExpense)

//     setDescription('')
//     setCategory('')
//     setAmount('')
//     setDate('')

//     return 
// }

import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newExpense = {
      id: Date.now(), // unique id
      description,
      category,
      amount: parseFloat(amount),
      date,
      
    };
    onAddExpense(newExpense); // send data to parent

    // clear form
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
    
    

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;