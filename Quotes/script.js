fetch("https://api.quotable.io/random")
  .then((data) => data.json())
  .then((quoteData) => {
    console.log(quoteData);
    const qouteText = quoteData.content;
    const quoteElement = document.getElementById("quoteElement");

    quoteElement.innerHTML = qouteText;
  });
