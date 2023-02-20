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
    
    const [currentPost] = routines.filter(routine => JSON.stringify(routine.id) === routineID);

    console.log(currentPost)

    const { name, goal, activities} = currentPost;


    return (currentPost ?
        <div id='cardcontainer'>
            <div id='userWelcome'>
                
                <h3>{name}</h3>
                <p>{goal}</p>
                </div>
                <ul > 
                        <li  className="routineActivityCards">{
                            activities.map((activity) => {

                                
                                return (
                                    <div className="routineActivityCard" >
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
            </div>:
            <div>
                Going back to routines...
                {window.location.replace('http://localhost:3000/#/')}
            </div>
    )
}

export default SingleRoutine;