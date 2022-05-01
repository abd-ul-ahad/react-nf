import React from 'react';

export default function Item({children, className, color, py, px }) {
    let style = {
        color: color,
        padding: `${py} ${px}`
    }
    return (
        <li style={style} className={className}><a href='/'>{children}</a></li>
    );
};

