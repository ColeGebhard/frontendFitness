import React, { useEffect, useState } from "react";
import { getActivities } from "./api/requests.js";


  const Activities = () => {
    const [activities, setActivities] = useState([])
    
    useEffect(() => {
        getActivities()
        .then((activities) => {
            setActivities(activities);
        })
        .catch((e) => {
            console.error('Failed to get activites')
        });
    }, [ setActivities ]);

    console.log(activities)

return (
    
    <div className="activityCardContainer">

        <h1>Activities</h1>
        {
            activities.map((activity) => {
                return (
                    <div class="card-body" className="activityCard">
                    <h3 class="card-title" >Activity: { activity.name }</h3>
                    {/* <p>Name: { activity.name }</p> */}
                    <p>Description: { activity.description }</p>

                    </div>
                )
            })
        }
        
    </div>


)}

export default Activities;