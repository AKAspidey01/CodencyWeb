
const storedToken = localStorage.getItem('token');
const tokenObject = storedToken ? JSON.parse(storedToken) : null;
const token = tokenObject ? tokenObject.token : null;



const config = {
    api: "https://code-sgbackend.vercel.app/api/v1/",
    // api: "http://localhost:8142/api/v1/",
    options: {
      headers: {
        // 'Authorization': "Bearer " + token,
        "content-type": "application/json"
      },
    },
  };

  
  const hostUrl = "https://code-sgbackend.vercel.app";


  const handleResponse = (response) => {
    if (response.status == 200 || response.status == 201) {
      return response.json();
    } else {
      throw Error(response.json() | "error");
    }
  };


  export { config, hostUrl, handleResponse };
  