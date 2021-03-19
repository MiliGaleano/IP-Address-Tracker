import React from 'react'
import bg from '../assets/pattern-bg.png'
import './styles.css'

const Header = ({handleIp, handleChange}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleIp()
    }

    return(
        <div className='divHeader' style={{backgroundImage: `url(${bg})`}}>
            <h1 className='h1header'>IP Address Tracker</h1>
            <form className='divInput'>
                <input type='text' onChange={handleChange} className='inputHeader' placeholder='Search for any IP address or domain'/>
                <button className='buttonHeader' onClick={handleClick} >{'>'}</button>
            </form>
        </div>
    )
}

export default Header
