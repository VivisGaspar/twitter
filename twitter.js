let twitter = {};

twitter.counter = () => {
  const btnTweet = document.getElementById("btn-tweet");
  const valCount = document.getElementById("count");

  let atual = document.getElementById("msg").value.length;

  const max = 140;

  let valor = max - atual;

  if (valor >= 0) {
    btnTweet.disabled = "";
  } else {
    btnTweet.disabled = "disabled";
    valCount.className = "count-second";
  }

  valCount.innerHTML = valor;
};

twitter.load = () => {
  const btnTweet = document.getElementById("btn-tweet");
  const twittar = document.getElementById("msg");
  const result = document.getElementById("result");

  twitter.counter();

  btnTweet.addEventListener("click", event => {
    if (twittar.value.length > 0) {
      result.innerHTML += msg.value + "<br><br>";
    }

    event.preventDefault();
  });
};
