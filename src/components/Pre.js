import React from 'react';

const Pre = props => (<pre>{JSON.stringify(props, undefined, 2)}</pre>);

export default Pre;
