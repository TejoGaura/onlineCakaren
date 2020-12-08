import React, { useRef, ChangeEvent, FormEvent } from 'react'
import { debounce } from 'lodash-es'

//styles
import './TermsSearchForm.scss'

//props
interface Props {
    onSearch: (query: string) => void
}

//component
const TermsSearchForm = (props: Props) => {
    //ref
    const searchInput = useRef<HTMLInputElement>(null)

    //submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchForTerm()
    }

    //input element
    const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
        searchForTerm()
    }, 500)

    //search for term
    const searchForTerm = () => {
        let searchString = searchInput.current?.value
        if (searchString) props.onSearch(searchString)
    }

    //template
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    autoFocus
                    type="text" 
                    ref={searchInput}
                    onChange={handleInput} 
                    className="search"
                />
            </form>
        </div>
    )
}

export default TermsSearchForm
