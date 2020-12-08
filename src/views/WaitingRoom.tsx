import React, { useState } from 'react'
import axios from 'axios'

//children
import TermsSearchForm from '../components/terms/TermsSearchForm'
import TermsList from '../components/terms/TermsList'

// styles
import './WaitingRoom.scss'

//component
function WaitingRoom() {
    //state
    const [terms, setTerms] = useState([])

    //callback
    const handleSearch = (query: string) => {
        axios
            .get(
                `https://itunes.apple.com/search
                ?term=${encodeURI(query)}
                &entity=musicTrack
                &limit=5`
            )
            .then(response => {
                console.log(response)
            })
        //setTerms([])
    }

    //template
    return (
        <article className="terms">
            <h1>Čakáreň</h1>
            <p>Vyberte si termín prosím!</p>
            <TermsSearchForm onSearch={handleSearch} />
            <TermsList terms={terms} />
        </article>
    )
}

export default WaitingRoom