import React from "react";

const Activities = ({ activities }) => {
   
    return (
        <div>
        {
            activities.map((activity) => {
                const { description, count, duration } = activity;
                return (
                    <div>
                    <h3></h3>
                    <p>Description: { description }</p>
                    <p>Count: { count }</p>
                    <p>Duration: { duration }</p>
                    </div>
                )
            })
        }
        </div>
    )

    
}



export default Activities;