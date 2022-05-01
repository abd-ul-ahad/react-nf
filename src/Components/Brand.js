import React from 'react';

export default function brand({ children, className, bg, color }) {
    let style = {
        backgroundColor: bg,
        color: color
    }
    return (
        <h2 style={style} className={className} >{children}</h2>
    );
};