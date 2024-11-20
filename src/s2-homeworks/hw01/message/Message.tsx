import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";
import s2 from './../StylesHW1.module.css';

type MessagePropsType = {
    message: MessageType
}

const Message = (props: MessagePropsType) => {
    return (

        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s2.hw1}>
                <div className={s.imageAndText}>

                    <div id={'hw1-time-' + props.message.id} className={s.time}>
                        <img
                            id={'hw1-avatar-' + props.message.id}
                            src={props.message.user.avatar}
                        />
                        {props.message.message.time}
                    </div>

                    <div className={s.nameAndContent}>
                        <div className={s.text}>
                            <div id={'hw1-name-' + props.message.id} className={s.name}>
                                {props.message.user.name}
                            </div>
                            <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                            {props.message.message.text}
                        </pre>
                        </div>
                        <div className={s.angleMessage}/>
                    </div>
                </div>
                {/*<div className={s.timeContent}>*/}
                {/*    {props.message.message.time}*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Message
