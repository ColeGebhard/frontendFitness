const URL = "https://fitnesstrac-kr.herokuapp.com/api/";
export let token = localStorage.getItem('token')

console.log(token)


export const register = async (username, password) => {
    try {
        const resp = await fetch(`${URL}users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        console.log(resp)

        const data =  resp.json()
        console.log(data)
        return data;

    } catch (error) {
        console.error(error)
    }

}

export const login = async (username, password) => {

    try {
        const resp = await fetch(`${URL}users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        const data = await resp.json()
        
        return data
    } catch (error) {
        console.error(error)
    }
}

export const isUser = async (token) => {

    try {

        const resp = await fetch(`${URL}users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        const data = await resp.json();
        if(data.username){
        return data
        }
        return false
    } catch (error) {
        console.error(error)
    }
}

export const getRoutines = async () => {
    try {
        const resp = await fetch(`${URL}routines`, {
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data =  resp.json();
        
        return data;
    } catch (error) {
        console.erro()
    }
} 

export const getActivities = async () => {
    try {
      const resp = await fetch(`${URL}activities`, {
        headers: {
          "Content-type": "application/json",
        },
      });
  
      const data = await resp.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

export const makeRoutine = async (name, goal, token) => {
    try {
        const resp = await fetch(`${URL}routines`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                goal
                
            })
        });

        const data = await resp.json();

        console.log(data)
        return data;
    } catch (e) {
        console.error(e)
    }
}