import React, { Component } from 'react';


const EmojiPicker = () => {
    return (
        <button className="emoji-picker">
            <div className="emoji-icon"></div>
        </button>
    );
}

const SendMessageButton = () => {
    return (
        <div className="btn__send-wrapper">
            <div className="btn__send">
                <div className="send__inner"></div>
            </div>
        </div>
    );
}

const MessageInput = () => <input id="message-input" type="text" placeholder="TYP." spellCheck="false" />;

export default class MessageInputBar extends Component {
    render() {
        return (
            <div className="app__message-input">
                <MessageInput />
                <EmojiPicker />
                <SendMessageButton />
            </div>
        );
    }
}
