import React, {useEffect, useState} from 'react'
import Map from './map'
import Header from './header'
import IpCard from './ipCard'
import GetIp from '../services/geoApi'
import Loading from './loading'

function Home() {

    const [loading, setLoading] = useState(false)
    const [ip, setIp] = useState('')
    const [inputIP, setInputIP] = useState('')
    const [actualData, setActualData] = useState({
                                        newip:'',
                                        city:'',
                                        country:'',
                                        postalCode:'',
                                        timezone:'',
                                        domainsip:'',
                                        lat:'',
                                        lng:''
                                        })

    useEffect(() => {
        setLoading(true)
        GetIp(ip)
        .then((newIp) => {
            if (newIp === 'error') {
                alert('Wrong search, please try again!')
            } else {
                let {newip,city,country,postalCode, timezone, domainsip, lat, lng} = newIp
                setActualData({
                    newip:newip,
                    city:city,
                    country:country,
                    postalCode:postalCode,
                    timezone:timezone,
                    domainsip:domainsip,
                    lat:lat,
                    lng:lng
                })
            }
        }).then(()=> setLoading(false))
    }, [ip])

    const handleIp = () => {
        setIp(inputIP)
    }

    const handleChange = (e) => {
        setInputIP(e.target.value)
        console.log(inputIP)
    }

    if (loading === false) {
        return (
                <div>
                    <Header handleIp={handleIp} handleChange={handleChange} />
                    <Map actualData={actualData} />
                    <IpCard actualData={actualData} />
                </div>
        )
    } else {
        return <Loading></Loading>
    }
}

export default Home
