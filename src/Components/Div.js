import React from 'react';

export default function Div({ children, className, col, variant, content  }) {
    let style = {
        display: 'flex',
        justifyContent: content,
        alignItems: 'center',
        flexDirection: variant,
        width: `${col}%`
    }
    return (
        <div style={style} className={className} >{children}</div>
    );
};

Div.defaultProps = {
    col: 100,
    variant: 'row',
    justifyContent: 'center',
};
