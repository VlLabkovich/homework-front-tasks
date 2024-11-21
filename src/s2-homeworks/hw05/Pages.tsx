import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    ERROR_404: '/error404'
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*/!*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*!/++*/}
                <Route path="/" element={<Navigate to={PATH.PRE_JUNIOR}/>} />

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={PATH.ERROR_404} element={<Error404/>}/>

                <Route path={"/*"} element={<Navigate to={PATH.ERROR_404}/>}/>
            </Routes>
        </div>
    )
}

export default Pages
