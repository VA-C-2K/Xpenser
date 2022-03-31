import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchExpense } from '../../redux/actions/expenses';
import './topfold.css';
import {FaSearch} from 'react-icons/fa';

const TopFold = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch()
    const handleQuery = (e) => {
        setQuery(e.target.value)
        if(query){
            dispatch(searchExpense(e.target.value))
        }
        else{dispatch(searchExpense(""))}
    };
     return (
        <div className='topfold'>
            {window.location.pathname === '/' ? (

                <div className="home-topfold">
                    <div className="searchbar">
                        <FaSearch/>
                        <input
                            autoFocus 
                            placeholder="Search for expenses"
                            value={query}
                            onFocus={(e) => handleQuery(e)}
                            onChange={(e) =>handleQuery(e)}
                        />
                    </div>
                    <Link to="/add-expense">
                        <div className="add-button">
                            <i className="fi-rr-add"></i>
                            <label>Add</label>
                        </div>
                    </Link>

                </div>
            ) : (
                <div className="add-topfold">
                    <Link to="/">
                        <div className="add-topfold-button">
                            <i className="fi-rr-angle-left"></i>
                            <label>Back</label>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="add-topfold-button">
                            <i className="fi-rr-cross-circle"></i>
                            <label>Cancel</label>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default TopFold;