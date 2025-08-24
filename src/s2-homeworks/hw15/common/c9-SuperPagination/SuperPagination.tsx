import {blue} from "@mui/material/colors";
import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: React.ChangeEvent<unknown>, page: number) => {
        // пишет студент
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: any) => {
        // пишет студент
        onChange(page, event)
        // debugger
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                color="primary"
                sx={{
                    '& .MuiPaginationItem-root': {
                        borderRadius: 1,
                        mx: 0.5,
                        '&:hover': {
                            bgcolor: 'action.hover',
                        },
                    },
                    '& .MuiPaginationItem-page.Mui-selected': {
                        bgcolor: 'primary.main',
                        // color: 'primary.contrastText',
                        borderColor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    },
                    '& .MuiPaginationItem-ellipsis': {
                        border: 'none',
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChangeOption={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
