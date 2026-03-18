const baseUrl = "https://flaskpost-8eeb9-default-rtdb.europe-west1.firebasedatabase.app/users";

export async function getAllUsers() {
  const url = baseUrl + ".json";

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
    }

    const userObj = await res.json();
    return userObj;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
}

async function logUsers() {
  const data = await getAllUsers();
  console.log(data);
}

logUsers();