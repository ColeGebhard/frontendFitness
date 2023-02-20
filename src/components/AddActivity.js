import React, { useState, useEffect } from "react";
import { act } from "react-dom/test-utils";
import { getActivities } from "./api/requests";

const AddActivity = ({
    routines,
    token
}) => {
    const [count,setCount] = useState(0);
    const [duration, setDuration] = useState(0);
    const [activities, setActivities] = useState([]);


    console.log(count, duration)

    useEffect(() => {
        getActivities()
        .then((activites) => {
            setActivities(activites);
        })
        .catch((e) => {
            console.error('Failed to get routines')
        });
    }, [ setActivities ])

    
}

export default AddActivity;