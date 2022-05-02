import React from 'react';

export default function Div({ children, className, width, variant, content  }) {
    let style = {
        display: 'flex',
        justifyContent: content,
        alignItems: 'center',
        flexDirection: variant,
        width: `${width}%`
    }
    return (
        <div style={style} className={className} >{children}</div>
    );
};

Div.defaultProps = {
    width: 100,
    variant: 'row',
    justifyContent: 'center',
};
