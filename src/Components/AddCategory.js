import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

const [InputValue, setInputValue] = useState(' ');

const handleInputChange = (e) => {
    setInputValue( e.target.value );
};

const handleSubmit = (e) => {
   e.preventDefault();
    if (InputValue.trim().length > 1) {
        setCategories( cates => [ InputValue, ...cates]);
        setInputValue(' ');
    }

    console.log('Formulario enviado');
};




    return (
        <form onSubmit={handleSubmit} >
            <input 
            type="text"
            value={InputValue}
            onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}