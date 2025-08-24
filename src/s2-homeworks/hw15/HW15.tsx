import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import s2 from '../../s1-main/App.module.css'
import SuperSort from './common/c10-SuperSort/SuperSort'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import s from './HW15.module.css'

/*
* 1 - дописать SuperPagination(+)
* 2 - дописать SuperSort
* 3 - проверить pureChange тестами
* 3 - дописать sendQuery(+), onChangePagination(+), onChangeSort в HW15
* 4 - сделать стили в соответствии с дизайном(+)
* 5 - добавить HW15 в HW5/pages/JuniorPlus (+)
* */

type TechType = {
    id: number
    tech: string
    developer: string
}

type ParamsType = {
    sort?: string
    page: number
    count: number
}

const getTechs = (params: ParamsType) => {
    return axios
        .get<{ techs: TechType[], totalCount: number }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test3',
            {params}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW15 = () => {
    const [sort, setSort] = useState('')

    const [page, setPage] = useState(1) // стартовая страница
    const [count, setCount] = useState(1) // стартовый селект

    const [idLoading, setLoading] = useState(false)

    const [totalCount, setTotalCount] = useState(100) // количество элементов

    const [searchParams, setSearchParams] = useSearchParams()

    const [techs, setTechs] = useState<TechType[]>([])

    const sendQuery = (params: any) => {
        setLoading(true)
        // debugger
        getTechs(params)

            .then((res) => {
                if (res) {
                    const data: TechType[] = res.data.techs
                    setTechs(data)
                    setTotalCount(res.data.totalCount)
                }
                // делает студент
                // сохранить пришедшие данные
            }).finally(() => {
            setLoading(false)
        })
    }

    // const sortedByNameDesc = data.sort((a, b) => b.name.localeCompare(a.name));

    const onChangePagination = (newPage: number, newCount: number) => {
        // делает студент
        setPage(newPage)
        setCount(newCount)
        sendQuery({page: newPage, count: newCount})
        setSearchParams({page: newPage.toString(), count: newCount.toString()})
    }
    // debugger
    const onChangeSort = (newSort: string) => {
        // делает студент
        console.log(newSort)
        setSort(newSort)
        setPage(1) // при сортировке сбрасывать на 1 страницу

        sendQuery({page: page, count: count, sort: newSort})
        // debugger

        setSearchParams({page: page.toString(), count: count.toString(), sort: newSort})
        // debugger
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery({page: params.page, count: params.count})
        setPage(+params.page || 1)
        setCount(+params.count || 4)
    }, [])

    // debugger

    const mappedTechs = techs.map(t => (
        <div key={t.id} className={s.row}>
            <div id={'hw15-tech-' + t.id} className={s.tech}>
                {t.tech}
            </div>

            <div id={'hw15-developer-' + t.id} className={s.developer}>
                {t.developer}
            </div>
        </div>
    ))

    return (
        <div id={'hw15'}>
            <div className={s2.hwTitle}>Homework #15</div>
            <div className={s2.hw}>
                {/* Добавляем класс loading при загрузке */}
                <div className={`${s.tableContainer} ${idLoading ? s.loading : ''}`}>
                    <div className={s.dataTableBlur}>
                        <SuperPagination
                            page={page}
                            itemsCountForPage={count}
                            totalCount={totalCount}
                            onChange={onChangePagination}
                        />
                        <div className={s.tableRows}>
                            <div className={s.rowHeader}>
                                <div className={s.techHeader}>
                                    Tech
                                    <SuperSort sort={sort} value={'tech'} onChange={onChangeSort}/>
                                </div>
                                <div className={s.developerHeader}>
                                    Developer
                                    <SuperSort sort={sort} value={'developer'} onChange={onChangeSort}/>
                                </div>
                            </div>
                            {mappedTechs}
                        </div>
                    </div>
                    {idLoading && (
                        <div className={s.loadingOverlay}>
                            <div className={s.spinner}></div>
                            <p>...loading</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default HW15