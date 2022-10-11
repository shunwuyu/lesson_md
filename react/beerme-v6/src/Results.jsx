import React from 'react';
import Loader from './Loader';

const Results = ({beers, loading}) => {
    if (loading) return <Loader message="🍻 Beer run!" />;

    return (
        <div className="results">
            <div className="beers">
            {beers.map(details => <Beer details={details} key={details.id} />)}
            </div>
        </div>
    )
}

export default Results