import React from "react";
import { IoIosBeer } from 'react-icons/io';
export function Marquee() {

    const marqueeStyle = {
        backgroundColor: '#1B1A17',
        color: '#E6D5B8',
        fontSize: '13px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4px 0px',
        fontWeight: 'lighter !important',
        letterSpacing: '1px',
        wordSpacing: '2px'


    }

    return (
        <div style={marqueeStyle}>
            <p>Bienvenid@ a nuestro website de productos y servicios de calidad</p>
            <IoIosBeer style={{ paddingBottom: '2px', paddingLeft: '5px' }} />
        </div>
    )
}