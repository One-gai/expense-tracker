import React, {useState} from "react"
function ExpenseTable({filterExpenses}){
    return(
        <table border = "1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filterExpenses.map(function(exp, index){
            
            return(
            <tr key = {index}>
              <td>{exp.name}</td>
              <td>{exp.description}</td>
              <td>{exp.amount}</td>
              <td>{exp.date}</td>
            </tr>
          )})}
        </tbody>
      </table>
    )
   
}

export default ExpenseTable
