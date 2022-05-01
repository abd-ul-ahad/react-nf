import React from 'react';

export default function List({children, className, bg, col }) {
    let style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: `${col}%`,
        backgroundColor: bg,
        listStyle: `none`
    }
    return (
        <ul style={style} className={className}>{children}</ul>
    );
};