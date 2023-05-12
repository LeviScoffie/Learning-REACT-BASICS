import {React,  useState } from 'react';

// Logic --> creates a state that is empty.
const AddPlayerForm = (props) => {
    const [value, setValue] = useState('');

// Logic --> this function prevents the default action that happens when the onSubmit event is called
// then accesses the addPlayer prop that is a function defined in the App compnonent with the values that have been input.
//
    const handleSubmit = (event) => {
        event.preventDefault();

        props.addPlayer(value);
    }
// the function component returns a JSX component that runs the handleSubmit callback
    return (
        <form onSubmit={(e)=> handleSubmit(e)}>
        <input
            type ='text'
            value ={value}
    
            placeholder ="Enter a player's name"
            //Handles the setValue change when you input another name 
            //after the one you have added and targets the value.
            onChange = {(event) => setValue(event.target.value)}
        />
        <input
            type ="submit"
            value = "Add Player"
            />
        </form>
    );
}

export default AddPlayerForm;