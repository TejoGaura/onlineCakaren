import React, { useState } from 'react'
import { Term } from '../../types'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

//style
import './TermsList.scss'

//props
interface Props {
    terms: Term[]
}

//component
const TermsList = (props: Props) => {
    const {terms} = props

    const [dateState, setDateState] = useState(new Date())

    //Change Date Method 
    const changeDate = (e: any) => {
    setDateState(e)
    }

    //template
    return (
        <div>
            <ul className="terms-list">
                {terms.map(term => (
                <li key={term.id}>{JSON.stringify(term)}</li>
                ))}
            </ul>

            <Calendar 
                className="calendar"
                value={dateState}
                onChange={changeDate}
            />

            <p>Označený termín je <b>{moment(dateState).format('DD. MM. YYYY.')}</b></p>
        </div>
    )
}

export default TermsList
