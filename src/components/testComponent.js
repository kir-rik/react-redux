import React from 'react';

export default (props) => {
    let param = props.match.params.param;
    if (param.toLowerCase().includes('billy')) {
        param = "Where's the money, Billy?";
    }

    return <h1>{param}</h1>;
};
