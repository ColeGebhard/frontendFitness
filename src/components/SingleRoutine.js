import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRoutines } from './api/requests';

const SingleRoutine = ({
    routines,
    token,
    setRoutines
}) => {


    useEffect(() => {
        getRoutines()
            .then((routines) => {
                setRoutines(routines);
            })
            .catch((e) => {
                console.error('Failed to get routines')
            });
    }, [setRoutines])

    console.log(routines)


    const { routineID } = useParams();

    // return (
    //     <div>{
    //         routines.map((routine) => {


    //             if (routineID === JSON.stringify(routine.id)) {
    //                 console.log(routine.id)
    //                 console.log(routineID)
    //                 return (
    //                     <h1>It works</h1>
    //                 )
    //             }
    //         })}
    //     </div>
    // )

    const [currentPost] = routines.filter(routine => JSON.stringify(routine.id) === routineID);

        console.log(currentPost)

    const { name, goal, activities} = currentPost;


    return (
        <div id='cardcontainer'>
            <div id='displaycard'>
                <h3>{name}</h3>
                <p>{goal}</p>
                <ul > Activities
                        <li  className="routineActivityCards">{
                            activities.map((activity) => {
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
            </div>
        </div>
    )
}

export default SingleRoutine;