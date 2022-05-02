import React from 'react';
import Brand from './Brand';
import Divider from './Divider';
import { List } from './List';
import Item from "./Item";
import Text from "./Text";
import Div from "./Div";

function Footer({ children, className, bg, variant, py, px, my, mx }) {

    let style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: variant,
        backgroundColor: bg,
        padding: `${py} ${px}`
    }
    return <footer style={style} className={className} >{children}</footer>;
};

Footer.defaultProps = {
    variant: 'row',
    bg: 'transparent',
    py: "0.625rem",
    px: "1.25rem",
};

Footer.displayName = 'Footer';
export default Object.assign(Footer, {
    Brand: Brand,
    Divider: Divider,
    List: List,
    Item: Item,
    Text: Text,
    Div: Div
});


