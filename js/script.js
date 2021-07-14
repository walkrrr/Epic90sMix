const epicMix = [
  "Don't Walk Away",
  "Big Poppa",
  "Shoop",
  "This is How We Do It",
  "Say My Name",
  "Life's a Bitch",
  "Bonita Applebaum",
  "For the Cool in You",
  "Can We Talk",
  "I Wanna Be Down",
  "Here We Go Again",
  "Tell Me"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} great songs`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    const li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span>${song}`;
    mixList.append(li);
  });
};
