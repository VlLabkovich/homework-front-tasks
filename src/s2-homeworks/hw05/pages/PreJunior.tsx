import React from 'react'
import HW1 from '../../hw01/HW1'
import HW2 from '../../hw02/HW2'
import HW3 from '../../hw03/HW3'
import HW4 from '../../hw04/HW4'
import s3 from '../Container.module.css'

function PreJunior() {
    return (
        // <div id={'hw5-page-pre-junior'} className={s3.container}>
        <div id={'hw5-page-pre-junior'}>
            {/*pre junior page*/}
            <HW1 />
            <HW2 />
            <HW3 />
            <HW4 />
        </div>
    )
}

export default PreJunior
