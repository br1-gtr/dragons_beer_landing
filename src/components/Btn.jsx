import React from "react";

export function Btn({ txt, type }) {
    //
    const btnStyle = {

        color: '#1B1A17',
        backgroundColor: type ? '#C2B092' : '#A1CAE2',
        border: `2px solid ${type ? '#E45826' : '#A1CAE2'}`,
        borderRadius: '10px'

    }
    return (
        <button style={btnStyle}>
            {txt}
        </button >
    )
}