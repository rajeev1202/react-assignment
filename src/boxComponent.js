import React from 'react';
import './boxComponent.css';

const BoxComponent = (props) => (
<div className="box"
style = {{
    backgroundColor : props.bgColor
}}
>
</div>
);
export default BoxComponent;