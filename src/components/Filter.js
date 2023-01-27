import { useRef } from 'react';

const Filter = (props) => {

    // check user input and update filter state to searched term
    const checkInput = (e) => {
        console.log(e.target.value);
        props.filterState(e.target.value);
    }

    const searchRef = useRef(null);
    
    // clear button
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        props.filterState('');
    }

    return (
        <form className="clearForm" onSubmit={handleSubmit} action="#" method="#">
            <label htmlFor="searchInput" className="srOnly">Search:</label>
            <input ref={searchRef} onChange={checkInput} type="text" id="searchInput" name="search" placeholder="search" />

            <button>Clear</button>
        </form>
    )
}

export default Filter;