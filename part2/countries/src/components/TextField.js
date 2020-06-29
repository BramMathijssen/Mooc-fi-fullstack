import React from 'react';

const Textfield = ({ text, value, onChange }) => {


    return (
        <div>
            {text}<input value={value} onChange={onChange} />
        </div >
    )
}

export default Textfield