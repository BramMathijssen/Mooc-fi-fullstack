import React from 'react';

const Persons = ({persons, filterInput} ) => {
    return (
        <div>
            {persons.filter(person =>
                person.name.toLowerCase().includes(filterInput.toLowerCase()))
                .map(person =>
                    <p key={person.name}>{person.name} {person.number}</p>)
            }
        </div>
    )
}

export default Persons