import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import './styles.css'

const Map = ({actualData}) => {

    const position = [actualData.lat, actualData.lng]
    console.log(position)

    return(
        <div className='divMap'>
            <MapContainer 
            center={position}
            zoom={12} 
            scrollWheelZoom={false}
            style={{ height: "67vh", width: "100vw" }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} className='marker'>
                    <Popup>
                        {actualData.newip} <br /> {`${actualData.city}, ${actualData.country}`}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map