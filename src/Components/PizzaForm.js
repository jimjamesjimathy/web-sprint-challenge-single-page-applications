import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import formSchema from "../Validation/formSchema";
import * as yup from 'yup';
import axios from "axios";

const initialFormValues = {
    name: '',
    lastName: '',
    email: '',
    size: '',
    pepperoni: false,
    chicken: false,
    bananaPepper: false,
    bellPepper: false,
    jalapeno: false,
    xtraCheese: false,
    spec: '',
}

function PizzaForm() {
    const [order, setOrder] = useState(initialFormValues);
    const [isValid, setIsValid] = useState(true);
    const [varError, setError] = useState({
        firstName: '',
        size: '',
        pepperoni: '',
        chicken: '',
        bananaPepper: '',
        bellPepper: '',
        jalapeno: '',
        xtraCheese: '',
        spec: '',
    })

    useEffect(() => {
        formSchema.isValid(order)
            .then(res => {});
        }, [order]);

    const validate = (event) => {
        yup.reach(formSchema, event.target.name).validate(event.target.value)
          .then(() => setError({ ...varError, [event.target.name]: '' }))
          .catch(err => setError({...varError, [event.target.name]: err.errors[0]}))
          console.log(event)
      }

    const changeHandler = event => {
        event.persist();
        validate(event);

        const theValue = event.target.type === "checkbox" ? event.target.checked : event.target.value
        setOrder({ ...order, [event.target.name]: theValue });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post(`https://reqres.in/api/orders`, order)
            .then(res => { console.log('Response', res) })
            .catch(err => console.log(err.response));
        setOrder(initialFormValues)
    };


    return(
            <div className='form-wrapper' onSubmit={submitHandler}>
                <Link to='/'><button id='home-button'>Home</button></Link>
                <div className='errors'>{varError.name}</div>
                <form id='pizza-form'>
                    <label>
                    <div className='name-wrap'>
                    <h3>Name: </h3>
                        <input
                            type='text'
                            id='name-input'
                            name='name'
                            required='required'
                            placeholder='Name'
                            minLength={2}
                            value={order.name}
                            onChange={changeHandler}
                        />
                        </div>
                    </label>

                    <label>
                    <div className='size-wrap'>
                    <h3>Choose Pizza Size! </h3>
                        <select name='size' value={order.size} id='size-dropdown' onChange={changeHandler}>
                            <option>Select a Pizza size!</option>
                            <option value='small'>Small - 12"</option>
                            <option value='medium'>Medium - 16"</option>
                            <option value='large'>Large - 20"</option>
                            <option value='xlarge'>X-Large - 24"</option>
                            <option value='xxlarge'>XX-Large - 28"</option>
                        </select>
                        </div>
                    </label>

                    <label htmlFor='toppings'>
                        <div className='toppings-wrap'>
                        <div className='select'>Select your toppings! </div>
                        <p>Pepperoni</p>
                        <input
                            id='toppings'
                            type='checkbox' 
                            name='pepperoni'
                            checked={order.pepperoni}
                            onChange={changeHandler}
                        />
                        <p>Chicken</p>
                        <input
                            id='toppings'
                            type='checkbox' 
                            name='chicken'
                            checked={order.chicken}
                            onChange={changeHandler}
                        />
                        <p>Banana pepper</p>
                        <input
                            id='toppings'
                            type='checkbox' 
                            name='bananaPepper'
                            checked={order.bananaPepper}
                            onChange={changeHandler}
                        />
                        <p>Bell pepper </p>
                        <input
                            id='toppings'
                            type='checkbox' 
                            name='bellPepper'
                            checked={order.bellPepper}
                            onChange={changeHandler}
                        />
                        <p>Jalapeno</p>
                        <input
                            id='toppings'
                            type='checkbox' 
                            name='jalapeno'
                            checked={order.jalapeno}
                            onChange={changeHandler}
                        />
                        <p>Extra Cheese</p>
                        <input
                            id='toppings'
                            type='checkbox' 
                            name='xtraCheese'
                            checked={order.xtraCheese}
                            onChange={changeHandler}
                        />
                        </div>
                    </label>

                        <label htmlFor="specialInstructions">
                        <div className='inst-wrap'>
                            <h3>Special Instructions: </h3>
                    <textarea
                        name="spec"
                        id="special-text"
                        placeholder="Instructions Here"
                        value={order.spec}
                        onChange={changeHandler}
                    />
                    </div>
                    </label>

                <button name="order-button" id="order-button" type="submit">
                    Submit Order
                </button>
                </form>
            </div>
    )
}
export default PizzaForm;
