import React,{useState} from 'react';

const Search = ({ search })=>{
    const [searchValue,setSearchValue] = useState("");

    const handleSearchInputChanges=e=>{
        setSearchValue(e.target.value);
    }

    const callSearchFunc=e=>{
        e.preventDefault();
        search(searchValue);
        resetInputField();
    }

    const resetInputField =()=>{
        setSearchValue("");
    }
    return(
        <form className="search">
            <input
                type="text"
                value={searchValue}
                onChange={handleSearchInputChanges}
            />
            <input onClick={callSearchFunc} type="submit" value="SEARCH"/>
        </form>
    )
}

export default Search;