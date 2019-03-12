import React from 'react';
import PropTypes from 'prop-types';



const Card = (props) => {
    return (
        <div>
        <h3>{props.title}</h3>
        <h3>{props.content}</h3>
        <h3>{props.price}</h3>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    content: PropTypes.number
};


Card.defaultProps = {
    title: "имя отсутсвует",
    content: "контент отсутствует",
    price: '?',
};

export default Card;