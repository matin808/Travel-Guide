import React from 'react'
import Travel from "../images/travel.jpg"
import "../style/TravelReviews.css";
import {Link} from 'react-router-dom'
import travelMobile from "../images/travelmb.jpg"

function TravelReviews() {
    return (
        <div className = "travel-reviews">
            <img className = "travel-reviews-img" src = {Travel} alt = "Your Travel Guide" />
            <img className = "travel-reviews-img-mb" src = {travelMobile} alt = "Your Travel Guide" />
            <div className = "travel-reviews_main">
            <h1 className = "travel-reviews_heading">Travelling  leaves you speechless, then turns you into a storyteller.</h1>
            <Link to = "/travel-form">
            <button>Be A Story Teller</button>
            </Link>
            </div>
            

       </div>
    )
}

export default TravelReviews
