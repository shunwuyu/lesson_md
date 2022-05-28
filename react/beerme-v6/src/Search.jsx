import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
const Search = (props) => {
    console.log(props.history)
    const ref = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchTerm = ref.current.value;
        // const navigate = useNavigate();
        // navigate('/foo')
    }
    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input type="text" ref={ref} placeholder="Hoppy, Malt, Angry, New..." />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Search