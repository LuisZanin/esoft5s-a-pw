import React from 'react';

const CardSection = ({ titulo, children }) => {
    return (
        <section>
            <h2>{titulo}</h2>
            {children}
        </section>
    );
};

export default CardSection;