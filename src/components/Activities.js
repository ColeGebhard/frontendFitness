import React from "react";

const Activities = ({ activities }) => {
  return (
    <div>
      {activities.map((activity) => {
        const { description, count, duration } = activity;
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

async function deleteActivities(activity_id) {
  const tokens = localStorage.getItem("token");

  const erase = await deleteActivity(tokens, activity_id);

  navigate("/Profile");

  return erase;
}

export default Activities;
