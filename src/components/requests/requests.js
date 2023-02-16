export async function deleteActivities (token, postid) {
    try {
      const response = await fetch(`${BASE_URL}${cohortName}/posts/${postid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });