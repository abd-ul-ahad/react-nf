import React from 'react';

export default function Divider({ className, color, thickness, lineStyle}) {
    let style = {
        borderTop: `${thickness} ${lineStyle} ${color}`
    }
    return <hr style={style} className={className} />;
};

Divider.defaultProps = {
    thickness: "1px",
    lineStyle: 'solid',
    color: "black"
}
