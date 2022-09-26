import React from 'react';
import style from './inputMessage.module.scss'

interface Props {
    onMessageChange: (text: string) => void
    sendMessage: () => void
    newMessage: string
}


function InputMessage({onMessageChange,newMessage, sendMessage}: Props) {

    const handleMessageSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        sendMessage()
        e.preventDefault()
    }

    return (
        <div className={style.inputMessage}>
            <form >
                <div className={style.input_text}>
                    <textarea
                        value={newMessage}
                        onChange={(e) => onMessageChange(e.target.value)}
                        placeholder="write message"
                    />
                    <button onClick={e => handleMessageSubmit(e)} type="submit" className={`button ${style.submitButton}`}>Send</button>
                </div>

            </form>
        </div>
    );
}

export default InputMessage;