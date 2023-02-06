import React from "react";
import logo from '../assets/logo.png';
import { IoIosBeer } from 'react-icons/io';
import { GiBloodySword, GiSmallFishingSailboat } from 'react-icons/gi';
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { Btn } from "./Btn";

export function Header() {

    //Styles
    const styleHeader = {
        backgroundColor: '#C2B092',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 5vw'
    }

    const styleDivs = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    }
    const styleP = {
        marginLeft: '5px',
        marginTop: '2px'
    }
    const divRrss = {
        width: '35%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
    //END Styles
    const iconSize = '32';
    const iconRrssSize = '22';

    return (
        <header style={styleHeader}>
            <div style={styleDivs}>
                <Btn type={'nav'}>
                    <IoIosBeer size={iconSize} />
                    <p style={styleP}>Productos</p>
                </Btn>

                <Btn type={'nav'}>
                    <GiBloodySword size={iconSize} />
                    <p style={styleP}>Servicios</p>
                </Btn>
            </div>

            <div style={styleDivs}>
                <img src={logo} style={{
                    height: '180px'
                }} />
            </div>
            <div style={styleDivs}>
                <Btn type={'nav'}>
                    <GiSmallFishingSailboat size={iconSize} />
                    <p style={styleP}>Contacto</p>
                </Btn>
                <div style={divRrss}>
                    <FaInstagram size={iconRrssSize} />
                    <FaWhatsapp size={iconRrssSize} />
                    <FaTelegramPlane size={iconRrssSize} />
                </div>
            </div>



        </header>
    )
}