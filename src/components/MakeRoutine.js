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
            const routine = await makeRoutine({name, goal, isPublic}, token)

            if (!name || !goal){
                window.alert('Missing required field');
            }
            else if (routine){
                window.alert(`Routine with name: ${name} made succesfully`);
            }
            else {
                window.alert(`Routine with name: ${name} already exists`);
            }



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
                Name*
                <textarea id='postInput'
                    placeholder="Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
            </label>
            <label>
                Goal*
                <textarea id='postTextarea'
                    placeholder="Goal"
                    value={goal}
                    onChange={(event) => {
                        setGoal(event.target.value)
                    }}
                />
            </label>

            <label>
                Public?
                <input type="checkbox"
                    checked={isPublic}
                    onChange={handleChange} />
            </label>

            <button id='button' type="submit">Make Routine</button>
        </form>
    </div>)
}

export default MakeRoutine;