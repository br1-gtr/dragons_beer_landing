import React from "react";
import logo from '../assets/logo.png';
import { Btn } from "./Btn";
export function Header() {
    return (
        <header style={{
            backgroundColor: '#C2B092',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Btn
                txt={'Productos'}
                type={'nav'}
            />
            <Btn
                txt={'Servicios'}
                type={'nav'}
            />
            <div>
                <img src={logo} style={{
                    height: '150px'
                }} />
            </div>

            <Btn
                txt={'Contacto'}
            />

        </header>
    )
}