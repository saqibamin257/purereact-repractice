import React from 'react';
import PropTypes from 'prop-types';

const Message = ({text})=> {
    return(
        <span>{text}</span>
    );
}

Message.propTypes={
    text:PropTypes.string.isRequired
}

export default Message;