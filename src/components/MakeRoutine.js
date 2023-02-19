import React, { useState, useEffect } from "react";
import { makeRoutine, getRoutines } from "./api/requests";
const MakeRoutine = ({
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
            await makeRoutine({name, goal, isPublic}, token)

            // window.alert(`Succesfuly made routine about ${name}`)

        }
        catch (error) {
            window.alert('Missing required fields')
            console.error('Failed to make post', error)
            window.alert('Missing required fields')
        } finally {
            setName('');
            setGoal('');
            // window.location.reload();
        }

    }


    return (<div id='listing'>
        <h2>
            Make A Routine
        </h2>
        <form id='listingForm'
            onSubmit={
                handleSubmit
            }
        >
            <label>
                Title*
                <textarea id='postInput'
                    placeholder="Title"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
            </label>
            <label>
                Description*
                <textarea id='postTextarea'
                    placeholder="Description"
                    value={goal}
                    onChange={(event) => {
                        setGoal(event.target.value)
                    }}
                />
            </label>

            <label>
                public
                <input type="checkbox"
                    checked={isPublic}
                    onChange={handleChange} />
            </label>

            <button id='button' type="submit">Make Routine</button>
        </form>
    </div>)
}

export default MakeRoutine;