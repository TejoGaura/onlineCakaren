import React from 'react'
import { Term } from '../../types'

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
        <ul className="terms-list">
            {terms.map(term => (
            <li key={term.id}>{JSON.stringify(term)}</li>
            ))}
        </ul>
    )
}

export default TermsList
