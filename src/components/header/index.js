import React from 'react';
import { useSelector } from "react-redux";
import './header.css';

const Header = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);
  let totalAmount = 0;
  for (let i=0;i<list.length;i++){
      totalAmount += list[i].amount;
  }
  return (
    <div className='header-container'>
        <div className="header">
            <div className="header-logo">
            Xpensr <i className="fi-rr-credit-card"></i>
            </div>
        <div className="header-button">
         Total:<span>₹{totalAmount}</span>
        </div>
        </div>
    </div>
  )
}

export default Header