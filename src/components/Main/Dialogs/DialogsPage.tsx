import React, {useEffect, useState} from 'react';
import style from './dialogs.module.scss'
import InputMessage from "./InputMessage/InputMessage";
import Message from "./Message/Message";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

interface IMessage {
    message: string
    photo: string
    userId: number
    userName: string
}

function DialogsPage() {
    const [messages, setMessages] = useState<IMessage[]>([])
    const [newMessage, setNewMessage] = useState('')

    const handleMessageChange = (text: string) => {
        setNewMessage(text)
    }

    const sendMessage = () => {
        ws.send(newMessage)
        setNewMessage('')
    }

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            const newMessages = JSON.parse(e.data);
            setMessages(prevState => [...prevState, ...newMessages])
            console.log(newMessages)
        })
    }, [])
    return (
        <div className='content'>
            <div className={`${style.dialogs} profile_block`}>
                <div className={`${style.caption} caption`}>
                    <h3 className="title">All Messages</h3>
                </div>
                <div className={style.messages}>
                    {messages.map((m, i) =>
                        <Message
                            userName={m.userName}
                            message={m.message}
                            photo={m.photo}
                            userId={m.userId}
                            key={i}/>)}
                </div>
                <InputMessage
                    onMessageChange={handleMessageChange}
                    newMessage={newMessage}
                    sendMessage={sendMessage}/>
            </div>
        </div>
    );
}

export default DialogsPage;