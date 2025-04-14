import { useState } from 'react';
import './App.css'; // Optional, for styling

function App() {
  // App state
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    amount: '',
    date: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission delete
  function handleDelete(id){
    setExpenses((prevExpenses) => prevExpenses.filter(exp => exp.id !== id))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prev) => [...prev, formData]);
    setFormData({ id: Date.now(), name: '', description: '', amount: '', date: '' });
  };

  // Filtered expenses
  const filteredExpenses = expenses.filter((exp) =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Expense Tracker</h1>

      {/* Search bar */}
      <input id='srhipt'
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />

      {/* Expense form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button id='expbtn' type="submit">Add Expense</button>
      </form>

      {/* Expense table */}
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((exp) => (
            <tr key = {Date.now()}>
              <td>{exp.name}</td>
              <td>{exp.description}</td>
              <td>${exp.amount}</td>
              <td>{exp.date}</td>
              <button id='dltbtn' onClick={() => handleDelete(exp.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
