import React, { useState } from "react";
import { makeRoutine } from "./api/requests";
const MakeRoutine = ({
    token,
    routines
}) => {

    console.log(token)

    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await makeRoutine(name, goal, token)

            console.log(response)
            
            window.alert('Made Routines')

            return response
        }
        catch (e) {
            console.error('Failed to make post', e)
            window.alert('Missing required fields')
        }

    }


    return (<div id='listing'>
        <h2>
            Make A Post
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

            <button id='button' type="submit">Make Routine</button>
        </form>
    </div>)
}

export default MakeRoutine;