export const createUser = async (username, password) => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

export const loginUser = async (username, password) => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

export const getUser = async (token) => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}


export const getRoutinesByUser = () => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/:username/routines', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

export const getUserRoutines = async (token) => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/:username/routines', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

export const getActivites = () => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

export const createActivities = async (name, description, token) => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name,
            description
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

export const updateActivities = async (name, description, token) => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities/:activityId', {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name,
            description
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

export const getRoutinesByActivity = () => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities/:activityId/routines', {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

export const getRoutines = () => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
  headers: {
    'Content-Type': 'application/json',
  },
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

