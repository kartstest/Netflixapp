window.onload = function() {
  BrowsePage();


function BrowsePage() {
  console.log("BrowsePage function executed!");
function BrowsePage() {
  let { series } = useContent("series");
  series = [
    {
      title: "Documentaries",
      data: series.filter((item) => item.genre === "documentaries"),
    },
    {
      title: "Comedies",
      data: series.filter((item) => item.genre === "comedies"),
    },
    {
      title: "Children",
      data: series.filter((item) => item.genre === "children"),
    },
    { title: "Crime", data: series.filter((item) => item.genre === "crime") },
    {
      title: "Feel-Good",
      data: series.filter((item) => item.genre === "feel-good"),
    },
  ];

  let { films } = useContent("films");
  films = [
    { title: "Drama", data: films.filter((item) => item.genre === "drama") },
    {
      title: "Thriller",
      data: films.filter((item) => item.genre === "thriller"),
    },
    {
      title: "Children",
      data: films.filter((item) => item.genre === "children"),
    },
    {
      title: "Suspense",
      data: films.filter((item) => item.genre === "suspense"),
    },
    {
      title: "Romance",
      data: films.filter((item) => item.genre === "romance"),
    },
  ];

  // Get all elements with the class "card-img"
  var cardImages = document.querySelectorAll(".card-img");

  // Iterate through each card image and attach a click event listener
  cardImages.forEach(function (image) {
    image.addEventListener("click", function () {
      console.log("Image clicked!");
      // Redirect to videoplayer.html when an image is clicked
      document.location.href = "movie.html";
    });
  });

  var playbtn = document.getElementsByClassName("play-button");
  var featureCard = document.getElementsByClassName("feature-movie");

  playbtn[i].addEventListener('click', function(){
    var videoOverlay = document.createElement('div');

    videoOverlay.className = "player-overlay";
    featureCard.appendChild(videoOverlay);
  });
}
}
};