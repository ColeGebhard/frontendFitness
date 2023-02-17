import React, { useEffect, useState } from "react";
import { getRoutines } from "./api/requests";

const Routines = ({
    routines,
    setRoutines,
    token,
    currentUser
}) => {

    useEffect(() => {
        getRoutines()
        .then((routines) => {
            setRoutines(routines);
        })
        .catch((e) => {
            console.error('Failed to get routines')
        });
    }, [ setRoutines ])

    const routineActivites = async (routines) => {
        const activities = routines.activities;

        for (let i=0; i < activities.length; i++){
            const activity = activities[i]

            if (!activity) {
                return 'Routine had no activites'
            } else {
                return activity
            }
        }
    }

    console.log(routines)

    return (
        <div>
        {
            routines.map((routine) => {
                return (
                    <div >
                    <h3>Routines</h3>
                    <p>Name: { routine.name }</p>
                    <p>goal: { routine.goal }</p>
                    <p>User: { routine.creatorName }</p>
                    <ol> Activities
                        <li>{
                            routine.activities.map((activity) => {
                                return (
                                    <div>
                                        <h5>{activity.name}</h5>
                                        <p>Info: {activity.description}</p>
                                        <p>Count: {activity.count}</p>
                                    </div>
                                )
                            }
                            )
                            }</li>
                    </ol>
                    </div>
                )
            })
        }
        </div>
    )

}

export default Routines;