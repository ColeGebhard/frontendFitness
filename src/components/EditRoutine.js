import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import { editRoutine, getRoutines } from "./api/requests";
const EditRoutine = ({
    token,
    routines,
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

    console.log(token)
    console.log(routines)

    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(null);

    const handleChange = () => {
        setIsPublic(!isPublic);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const routine = await editRoutine({name, goal, isPublic}, token, routineID)
            
            console.log(routine)

            if (routine) {
                const newPosts = routines.map(routine => {
                    if (routine.creatorId === routineID) {
                        return routine;
                    }
                    else {
                        return routines;
                    }
                });
                setRoutines(newPosts);
  
                window.location.replace('http://localhost:3000/#/');
                window.location.reload();
            } else {
                console.log('Failed to edit routine')
                window.alert('Must change required fields to edit')
            }

        }
        catch (error) {
            window.alert('Missing required fields')
            console.error('Failed to make post', error)
            window.alert('Missing required fields')
        } finally {
            setName('');
            setGoal('');
            window.history.back();
        }

    }

    const { routineID } = useParams();

    const [currentPost] = routines.filter(routine => JSON.stringify(routine.id) === routineID);



    return (<div id='listing'>
        <h2>
            Edit A Routine
        </h2>
        <h5>
            *Please empty field to see past
        </h5>
        <form id='listingForm'
            onSubmit={
                handleSubmit
            }
        ><div id='routineText'>
            <label>
                Name:
                <input id='postInput'
                    placeholder={currentPost.name}
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
            </label>
            <label>
                Goal:
                <textarea id='postTextarea'
                    placeholder={currentPost.goal}
                    value={goal}
                    onChange={(event) => {
                        setGoal(event.target.value)
                    }}
                />
            </label>
            </div>

            <label>
                Public?
                <input type="checkbox"
                    checked={isPublic}
                    onChange={handleChange} />
            </label>

            <button id='button' type="submit">Edit Routine</button>
        </form>
    </div>)
}

export default EditRoutine;