import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './index.css';


const Tweet = ({tweet}) => {
    return(
        <div className="tweet">        
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <Author author={tweet.author}/>
                <Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton count={tweet.retweet}/>
                <LikeButton count={tweet.likes}/>
                <MoreOptionsButton/>
            </div>
            </div>
        </div>     
    );    
}

Tweet.propTypes={
 tweet:PropTypes.object.isRequired
}

const Avatar=({hash})=>{
    const url=`https://www.gravatar.com/avatar/${hash}`;
    return(
        <img
        src={url}
        alt="avatar"
        className="avatar"
        />
    );
}
Avatar.propTypes={
    hash:PropTypes.string.isRequired
}

const Author = ({author}) => {
    return(
        <span className="author">
         <span className="name">{author.name}</span>
         <span className="handle">@{author.handle}</span>              
        </span>
    );
}

Author.propTypes={
    author:PropTypes.shape({
        name:PropTypes.string.isRequired,
        handle:PropTypes.string.isRequired
    }).isRequired
}


const Message = ({text}) => {
    return(
        <div className="message">{text}</div>
    );
}

Message.propTypes={
    text:PropTypes.string.isRequired
}

const Time=({time})=>{
    const timeString = moment(time).fromNow();
    return(
        <div className="time">{timeString}</div>
    );
}

Time.propTypes={
    time:PropTypes.string.isRequired
}
const ReplyButton = () => {
    return(<i className="fa fa-reply reply-button"/>);
}
//Add logic show only if count greater than zero

const RetweetButton = ({count}) => {
    return(
    <i className="fa fa-retweet retweet-button">
        { count > 0 &&
            <span>
            {count}    
            </span>
        }       
        
    </i>    
    );
}

RetweetButton.propTypes={
    count:PropTypes.number.isRequired
}

const LikeButton = ({count}) => {
    return(
    <i className="fa fa-heart like-button">
        { count > 0 &&
            <span>
            {count}    
            </span>
        }
        </i>
    );
}

LikeButton.propTypes={
    count:PropTypes.number.isRequired
}

const MoreOptionsButton = () => {
    return(<i className="fa fa-ellipsis-h more-options-button"/>);
}


const testTweet={
    message:"Something about cats",
    gravatar:"abc",
    author:{
        name:"Saqib Amin",
        handle:"handle"
    },
    likes:2,
    retweet:5,
    timestamp:"2020-08-10 21:24:37"
}



ReactDOM.render(
    <Tweet tweet={testTweet} />,
    document.getElementById("root")
);
