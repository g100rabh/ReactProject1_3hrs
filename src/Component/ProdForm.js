import React, { useState } from 'react';

const ProdForm = (props) => {
    const [enteredId, setEnteredId] = useState('');
    const [enteredSp, setEnteredSp] = useState('');
    const [enteredProdName, setEnteredProdName] = useState('')

    const idChangeHandler = (event)=> {
        setEnteredId(event.target.value);
    }

    const spChangeHandler = (event) => {
        setEnteredSp(event.target.value)
    }
    const nameChangeHandler = (event) => {
        setEnteredProdName(event.target.value)
    }

    const clickSubmitHandler = (event) => {
        event.preventDefault();

        const prodData ={
            id: enteredId,
            prodName: enteredProdName,
            prodSp: enteredSp
        }
        props.onAddProd(prodData);
    }

    return (
        <form onSubmit={clickSubmitHandler}>
            <label>Product ID:</label>
            <input type='number' onChange={idChangeHandler} value={enteredId} />
            <label>Selling Price:</label>
            <input type='text' onChange={spChangeHandler} value={enteredSp} />
            <label>Product Name:</label>
            <input type='text'onChange={nameChangeHandler} value={enteredProdName} />
            <button>Add product</button>
        </form>
    );
}

export default ProdForm;