import React from 'react'
import './styles.css'

const IpCard = ({actualData}) => {

    let {newip,city,country,postalCode, timezone, domainsip} = actualData
    return(
        <div className='divIpCard'>
            <div className='divSectionCard firstdiv'>
                <h2 className='h2Card'>IP ADDRESS</h2>
                <h1 className='h1Card'>{newip}</h1>
            </div><hr/>
            <div className='divSectionCard'>
                <h2 className='h2Card'>LOCATION</h2>
                <h1 className='h1Card'>{`${city}, ${country} ${postalCode}`}</h1>
            </div><hr/>
            <div className='divSectionCard'>
                <h2 className='h2Card'>TIMEZONE</h2>
                <h1 className='h1Card'>{timezone}</h1>
            </div><hr/>
            <div className='divSectionCard noBorder'>
                <h2 className='h2Card'>ISP</h2>
                <h1 className='h1Card'>{domainsip}</h1>
            </div>
        </div>
    )
}

export default IpCard