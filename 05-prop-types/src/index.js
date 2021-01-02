import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const Evelop = ({mail}) => {
    return(
        <div>
        <To person={mail.toPerson}/>
        <From person={mail.fromPerson}/>
        </div>
    );
}

Evelop.propTypes={
    mail:PropTypes.object.isRequired
}

const To = ({person}) => {
    return(
        <div>
        <h3>To: {person.name}</h3>
        <h3>Address: {person.address}</h3>
        </div>
    );
}

To.propTypes={
    person:PropTypes.object.isRequired
}
const From = ({person}) => {
    return(
        <div>
        <h3>From: {person.name}</h3>
        <h3>Address: {person.address}</h3>
        </div>
    );
}

From.propTypes={
    person:PropTypes.shape({
        name:PropTypes.string.isRequired,
        address:PropTypes.string.isRequired
    }).isRequired
}

const mailInfo={
    toPerson:{
        name:"Waqar Amin",
        address:"Manchester"
    },
    fromPerson:{
        name:"Saqib Amin",
        //address:10          // uncomment to check the prop type error in console
        address:"Attock"
    }
}

ReactDOM.render(
    <Evelop mail={mailInfo}/>,
    document.getElementById("root")
);