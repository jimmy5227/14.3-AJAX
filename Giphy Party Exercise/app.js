const search = document.querySelector("#search");
search.addEventListener("click", async function (event) {
  event.preventDefault();

  const gif = await getGif(document.querySelector("#search-term").value);

  const img = document.createElement("img");
  img.src = gif;
  const gifspace = document.querySelector("#gifspace");
  gifspace.append(img);
});

const remove = document.querySelector("#Remove");
remove.addEventListener("click", function () {
  const gifs = document.querySelectorAll("img");
  gifs.forEach((e) => e.parentNode.removeChild(e));
});

async function getGif(query) {
  const response = await axios.get(
    "http://api.giphy.com/v1/gifs/search?q=" +
      query +
      "&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  );

  const randomIndex = Math.floor(Math.random() * response.data.data.length + 1);
  console.log(response.data.data[randomIndex].images.downsized.url);

  return response.data.data[randomIndex].images.downsized.url;
}
