const url ='http://localhost:3000/api/v1';

async function getUserById(id){
    try {
        const response = await fetch(`${url}/users/${id}`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const result = await response.json();
        console.log(result)
        return result;
    } catch (error) {
        console.log(error)
    }
}