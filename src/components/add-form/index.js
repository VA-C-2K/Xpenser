import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { categories } from "../../constants/add-expense";
import { addExpense } from '../../redux/actions/expenses';
import { toast, ToastContainer } from "react-toastify";
import SuccessModal from "./success-modal";
import './add-form.css';
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
    const cat = categories;
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleAmount = (e) => {
        const val = parseFloat(e.target.value);
        if (isNaN(val)) {
            setAmount("");
            return;
        }
        setAmount(val);
    };
    const handleCategory = (category) => {
        setCategory(category);
        setCategoryOpen(false);
        console.log(category);
    };
    const handleSubmit = () => {
        if (title === "" || amount === "" || !category) {
            console.log("here");
            const notify = () => toast("Please enter complete data");
            notify();
            return;
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date(),
        };
        dispatch(addExpense(data));
        setModalOpen(!modalOpen);
    };

    return (
        <div className="add-form">
            <SuccessModal modalOpen={modalOpen} ariaHideApp='false' />
            <ToastContainer
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            />
            <div className="form-item">
                <label>Title</label>
                <input placeholder="Given a name to your expenditure"
                    value={title}
                    onChange={(e) => handleTitle(e)} />
            </div>
            <div className="form-item">
                <label>Amount ₹</label>
                <input
                    placeholder="Enter Amount"
                    className="amount-input"
                    onChange={(e) => handleAmount(e)}
                    value={amount}
                />
            </div>
            <div className="category-container-parent">
                <div className="category">
                    <div
                        className="category-dropdown"
                        onClick={() => setCategoryOpen(!categoryOpen)}
                    >
                        <label style={{ marginLeft: `10px` }}>{category ? category.title : "Category"}</label>
                        <i className="fi-rr-angle-down"></i>
                    </div>
                    {categoryOpen && (
                        <div className="category-container">
                            {cat.map((category) => (
                                <div
                                    className="category-item"
                                    style={{ borderRight: `5px solid ${category.color}` }}
                                    key={category.id}
                                    onClick={() => handleCategory(category)}
                                >
                                    <label style={{ marginLeft: `10px` }}>{category.title}</label>
                                    <img src={category.icon} alt={category.title} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="form-add-button">
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i className="fi-rr-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}

export default AddForm;