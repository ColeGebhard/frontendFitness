import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { getRoutines } from "./api/requests";

const Routines = ({
    routines,
    setRoutines,
    token,
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
                    <div className="routineCard">
                    <h3>Routines</h3>
                    <p>Name: { routine.name }</p>
                    <p>goal: { routine.goal }</p>
                    <p>User: { routine.creatorName }</p>
                    <ul > Activities
                        <li  className="routineActivityCards">{
                            routine.activities.map((activity) => {
                                return (
                                    <div className="routineActivityCard">
                                        <ul>
                                        <h5>{activity.name}</h5>
                                        <p>Info: {activity.description}</p>
                                        <p>Count: {activity.count}</p>
                                        <p>Duration: {activity.duration}</p>
                                        </ul>
                                    </div>
                                )
                            }
                            )
                            }</li>
                    </ul>
                    <Link id='startRoutine' to={`/routines/${routine.id}`}>Start Routine</Link>
                    </div>
                )
            })
        }
        </div>
    )

}

export default Routines;