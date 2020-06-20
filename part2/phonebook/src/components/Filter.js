import React from 'react';

const Filter = ({filterInput, handleFilterChange}) => {
    return (<div>
        Filter shown with: <input value={filterInput} onChange={handleFilterChange} />
    </div>
    )
}

export default Filter