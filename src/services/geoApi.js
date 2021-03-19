    let apiKey='at_pl4aycT5BcNAUnM27H5xBQjqcUHAl'
    let apiurl= "https://geo.ipify.org/api/v1?"

    const url = apiurl + 'apiKey=' + apiKey + '&domain='

    const GetIp = (ip) => {
        return fetch(url+ip)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            let newIp = {
                newip: response.ip,
                city: response.location.city,
                country: response.location.country,
                postalCode: response.location.postalCode,
                timezone: response.location.timezone,
                lat: response.location.lat,
                lng: response.location.lng,
                domainsip: response.isp
            }
            return newIp
        }).catch((err) => {
            console.log(err)
            return 'error'
        })
    }

    export default GetIp



