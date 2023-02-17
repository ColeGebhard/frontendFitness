import React from "react";

const Routines = ({ routines }) => {
  return (
    <div>
      {routines.map((routine) => {
        const { description, count, duration } = routine;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Count: {count}</p>
            <p>Duration: {duration}</p>
          </div>
        );
      })}
    </div>
  );
};

async function deleteActivity(activity_id) {
  const tokens = localStorage.getItem("token");

  const erase = await deleteActivity(tokens, activity_id);

  navigate("/Profile");

  return erase;
}

export default Routines;
