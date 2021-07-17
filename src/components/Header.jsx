import React from 'react'
import '../App.css'
import PropTypes from 'prop-types'




const Header = ({text,toggleForm,btnText}) => {
    return (
        <div className='header'>
            <h3>{text.toUpperCase()}</h3>  
            <button className='main' onClick={toggleForm}>{btnText}</button> 
        </div>
    )
}
Header.propTypes = {
    text:PropTypes.string
}

export default Header
