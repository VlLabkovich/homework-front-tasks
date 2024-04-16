import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";
import s2 from './../StylesHW1.module.css'

type MessagePropsType = {
    message: MessageType
}

const FriendMessage = (props: MessagePropsType) => {
    return (

        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s2.container}>
                <div className={s.friendImageAndText}>
                    <div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>
                        <img id={'hw1-friend-avatar-' + props.message.id}
                             src={props.message.user.avatar}
                        />
                        {props.message.message.time}
                    </div>

                        <div className={s.nameAndContent}>
                            <div className={s.friendText}>
                                <div
                                    id={'hw1-friend-name-' + props.message.id}
                                    className={s.friendName}
                                >
                                    {props.message.user.name}

                                </div>
                                <pre
                                    id={'hw1-friend-text-' + props.message.id}
                                    className={s.friendMessageText}
                                >
                        {props.message.message.text}

                    </pre>
                            </div>
                            <div className={s.angleMessageFriend}/>
                        </div>
                </div>

            </div>
        </div>

)
}

export default FriendMessage
