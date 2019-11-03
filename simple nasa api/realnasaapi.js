// Enable your user to enter a date and return the picture/video of the day from NASA's API
const apiKey = "gKwmurUYGxFDc9n7Gp9iaoc10HpiNCmydldpZIGU"

const btn = document.querySelector("button")

btn.addEventListener('click', ()=> {
   
const input = document.querySelector("input").value


fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${input}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.querySelector('img').src = response.hdurl
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
  });

