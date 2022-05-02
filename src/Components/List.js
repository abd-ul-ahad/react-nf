import React from 'react';
import Item from "./Item";

export function List({children, className, bg, col, content }) {
    let style = {
        display: 'flex',
        justifyContent: content,
        alignItems: 'center',
        width: `${col}%`,
        backgroundColor: bg,
        listStyle: `none`
    }
    return <ul style={style} className={className}>{children}</ul>;
};

List.defaultProps = {
    justifyContent: "center",
    backgroundColor: "transparent"
};

List.displayName = 'List';
export default Object.assign(List, {
    Item: Item,
});
