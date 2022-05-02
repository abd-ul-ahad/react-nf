import React from 'react';

export default function Divider({ className, color }) {
    let style = {
        borderTop: `1px solid ${color}`
    }
    return <hr style={style} className={className} />;
};