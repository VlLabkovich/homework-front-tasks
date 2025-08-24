import React from 'react'
import up from '../images/up.svg'
import down from '../images/down.svg'
import up_down from '../images/up-down.svg'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = up_down

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент,
    // sort: (click) => down
    // (click) => up
    // (click) => ''
    // (click) => down ...

    switch (sort) {
        case up:
            return ""
        case down:
            return up
        case "":
            return down
        default:
            return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value
// debugger
    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    // debugger
    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                width={18}
                height={18}
                alt={'icon'}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
