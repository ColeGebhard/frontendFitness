import React, { useEffect, useState } from "react";
import { getActivities } from "./api/requests.js";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities()
      .then((activities) => {
        setActivities(activities);
      })
      .catch((e) => {
        console.error("Failed to get activites");
      });
  }, [setActivities]);

  console.log(activities);

  return (
    <div className="activityCardContainer">
      <h1>Activities</h1>
      {activities.map((activity) => {
        return (
          <div class="card-body" className="activityCard">
            <h3 class="card-title">Activity: {activity.name}</h3>
            {/* <p>Name: { activity.name }</p> */}
            <p>Description: {activity.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;

// import React, { useEffect, useState } from "react";
// import { getActivities } from "./api/requests.js";

// const Activities = () => {
//   const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     getActivities()
//       .then((activities) => {
//         setActivities(activities);
//       })
//       .catch((e) => {
//         console.error("Failed to get activites");
//       });
//   }, [setActivities]);

//   console.log(activities);

//   return (
//     <div className="activityCardContainer">
//       <h1>Activities</h1>
//       {activities.map((activity) => {
//         return (
//           <div class="card-body" className="activityCard">
//             <h3 class="card-title">Activity: {activity.name}</h3>
//             {/* <p>Name: { activity.name }</p> */}
//             <p>Description: {activity.description}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const handleDeleteActivity = async (routineId) => {
//   try {
//     await {
//       url: `/routines/${routineId}`,
//       method: "DELETE",
//     };
//     await { url: "/routines", token };
//     fetchUserRoutines();
//     history.push("/user/routines");
//   } catch (error) {
//     console.error(error);
//   }
// };

// // const Activities = ({ activities }) => {
// //   return (
// //     <div>
// //       {activities.map((activity) => {
// //         const { description, count, duration } = activity;
// //         return (
// //           <div key={id}>
// //             <h3>{title}</h3>
// //             <p>Description: {description}</p>
// //             <p>Count: {count}</p>
// //             <p>Duration: {duration}</p>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // async function deleteActivities(activity_id) {
// //   const tokens = localStorage.getItem("token");

// //   const erase = await deleteActivity(tokens, activity_id);

// //   navigate("/Profile");

// //   return erase;
// // }

// export default Activities;
