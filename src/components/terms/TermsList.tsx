import React from 'react'
import { Term } from '../../types'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

//style
import './TermsList.scss'

//props
interface Props {
    terms: Term[]
}

//component
const TermsList = (props: Props) => {
    const {terms} = props

    //template
    return (
        <div>
            <ul className="terms-list">
                {terms.map(term => (
                <li key={term.id}>{JSON.stringify(term)}</li>
                ))}
            </ul>

            <Calendar />
        </div>
    )
}

export default TermsList
