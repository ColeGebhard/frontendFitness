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
                        <li>{routine.activities.name}</li>
                    </ol>
                    </div>
                )
            })
        }
        </div>
    )

}

export default Routines;