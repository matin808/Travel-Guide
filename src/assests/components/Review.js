import React from 'react';
import "../style/Review.css"

function Review() {
    return (
        <div className = "review">

        <div className = "review_header">
            <h1>Search Review By Location</h1>
            <input className = "review_header-search" type = "text" />
        </div>

             <div className = "card">
                <h1> Your Review</h1>
            </div> 

        </div>
    )
}

export default Review
