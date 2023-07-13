const requestbtn = document.querySelector("#btn");
const jokeText = document.querySelector(".adviceText");

const sendRequest = async () => {
  try {
    const configuration = {
      headers:
      {
        Accept:"application/json"
      }
    }
    const response = await axios.get("https://icanhazdadjoke.com/" , configuration);
    const requestId = response.data.length;
    console.log(response)
    const requestText = response.data.joke;
    jokeText.innerText = `"${requestText}"`;
  } catch (e) {
    jokeText.innerText = `"${e}"`;
  }
};

requestbtn.addEventListener("click", () => {
  sendRequest();
});
