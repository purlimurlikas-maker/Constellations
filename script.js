function showInfo(id, event) {
  event.stopPropagation();  // stops the click from reaching the SVG
  // ...rest of your code...
}


const facts = {
  orion: {
    name: "Orion",
    text: "The Hunter. Look for the three belt stars in winter skies. Its brightest star is Betelgeuse, a red supergiant."
  },
  
  cassipoeia: {
    name: "Cassipoeia",
    text: ""
  },
};


document.addEventListener("click", function(e) {
  
  if (!e.target.closest(".constellation")) {
    document.getElementById("info-box").classList.add("hidden");
  }
});

function showInfo(id) {
  const info = facts[id];
  document.getElementById("info-name").textContent = info.name;
  document.getElementById("info-facts").textContent = info.text;
  document.getElementById("info-box").classList.remove("hidden");
}