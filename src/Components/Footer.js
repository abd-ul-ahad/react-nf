import React from 'react';
import PropTypes from 'prop-types';
import Brand from './Brand';
import Divider from './Divider';
import List from './List';
import Item from "./Item";
import Text from "./Text";
import Div from "./Div";

function Footer({ children, className, bg, variant }) {
    
    let style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: variant,
        backgroundColor: bg
    }
    return (
        <footer style={style} className={className} >{children}</footer>
    );
};

Footer.defaultProps = {
    variant: 'row',
    bg: 'transparent',
};

Footer.propTypes = {
    // className: PropTypes.string,
    // bg: PropTypes.string
}

Footer.displayName = 'Footer';
export default Object.assign(Footer, {
    Brand: Brand,
    Divider: Divider,
    List: List,
    Item: Item,
    Text: Text,
    Div: Div
});


