import React from 'react';

export default function Item({ children, className, color, py, px, my, mx, href }) {
    let style = {
        padding: `${py} ${px}`
    }
    let aStyle = {
        color: color,
        textDecoration: "none",
        margin: `${my} ${mx}` 
}
return (
    <li style={style} className={className}><a href={href} style={aStyle} >{children}</a></li>
);
};

Item.defaultProps = {
    color: "black",
    px: "0.625rem",
    py: "0.625rem",
    mx: "0.225rem",
    my: "0.625rem",
    href: "/"
};

