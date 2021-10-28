import React, {useEffect, useState} from 'react';
import "../style/Review.css";
import firebase from "../../util/firebase";


function Review() {

    const [reviewList, setreviewList] = useState();
    const [searchTerm, setsearchTerm] = useState("");


    useEffect(() => {
        const reviewRef = firebase.database().ref("Review");
        reviewRef.on('value', (snapshot) => {
            const reviews = snapshot.val();
            const reviewList = [];
            for(let id in reviews){
                reviewList.push(reviews[id]);
            }
            console.log(reviewList);
            setreviewList(reviewList);
        })
    },[])

    const handleSearch = (e) => {
        setsearchTerm(e.target.value);
    }   

    return (
        <div className = "review">

        <div className = "review_header">
            <h1 className = "review_header-main">Search Review By City :</h1>
            <input className = "review_header-search" onChange = {handleSearch} type = "text" />
        </div>


                <h1> Your Review</h1>
               
               {reviewList ? reviewList.filter((val) => {
                   if(searchTerm === ""){
                       return val;
                   } else if (
                       val.city.toLowerCase().includes(searchTerm.toLowerCase())
                   ) {
                       return val;  
                   }
               }).map((rd) => (
                <div className="reviews_maindata">
                           <h3 className = ""><label className = "need_label" >Name : </label> {rd.name}</h3>
                         <span>Location Link : </span>  <a target = "_blank" rel="noreferrer" href = {rd.location} className = "needBlood__heading">Location Link</a>
                          <h3 className = "needBlood__heading"><label className = "need_label" >State : </label> {rd.state}</h3>
                          <h3 className = "needBlood__heading"><label className = "need_label" >City : </label> {rd.city}</h3>
                          <h3 className = "needBlood__heading"><label className = "need_label" >Review : </label> {rd.disc}</h3>              
                       </div>   
               )) : "" }
            </div> 
    )
}

export default Review

