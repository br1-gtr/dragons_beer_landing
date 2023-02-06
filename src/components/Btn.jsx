import React from "react";
import { useState } from "react";

export function Btn({ children, type }) {
    const [isHover, setIsHover] = useState(false);

    const btnStyle = {

        color: '#1B1A17',
        color: '#FFCB57',
        backgroundColor:
            type
                ? isHover
                    ? '#524F46' : '#1B1A17'
                : isHover
                    ? '#D5E7F2' : '#A1CAE2',
        border: `3px solid ${type ? '#FFCB57' : '#A1CAE2'}`,
        borderRadius: '25px',
        fontSize: '24px',
        padding: '6px 13px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.25s',
        cursor: 'pointer'

    }
    return (
        <button style={btnStyle} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
            {children}
        </button >
    )
}