import React from 'react';

export default function Text({ children, className, bg, color, float }) {
    let style = {
        backgroundColor: bg,
        color: color,
        textAlign: float
    }
    return <p style={style} className={className} >{children}</p>;
};
