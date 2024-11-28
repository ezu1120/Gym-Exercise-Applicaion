export const fetchData = async (urL,options) => {
    const response = await fetch(urL, options);
    const data = response.json();
    return data;
}
export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY, // Access the API key from the .env file
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

// console.log(import.meta.env.VITE_API_KEY); // Ensure the API key is loaded
