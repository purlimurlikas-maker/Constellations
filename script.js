const facts = {
  orion: {
    name: "Orion",
    text: "The Hunter. Look for the three belt stars in winter skies. Its brightest star is Betelgeuse, a red supergiant."
  },
  
  cassiopeia: {
    name: "Cassiopeia",
    text: "Cassiopeia is a constellation in the northern sky and is circumpolar from mid-northern latitudes. Cassiopeia is visible lower in the sky for part of the year.  In Greek mythology, Cassiopeia is the mother of Andromeda."
  },

  andromeda: {
    name: "Andromeda",
    text: "Andromeda represents the daughter of Cepheus and Cassiopeia, also nearby constellations in the northern sky. Andromeda is next to Pegasus. From the northern hemisphere, it is best viewed in the evening skies in the fall."
  },

  antlia: {
    name: "Antlia",
    text: "Antlia is a faint constellation in the southern hemisphere that represents an an early modern vacuum machine. The constellation was created by French astronomer Nicolas-Louis de Lacaille to represent experimental physics."
  },

  apus: {
    name: "Apus",
    text: "Apus is a small, relatively faint constellation in the far southern sky, within 7 degrees of the south celestial pole. Apus represents the bird of paradise and means “without feet”. Apus first appeared on a celestial globe created by Petrus Plancius in 1598."
  },

  pegasus: {
    name: "Pegasus",
    text: "Pegasus is known for its distinctive square-shaped asterism, which marks its body, and it remains a prominent and easily recognizable feature of the celestial tapestry.It's a collection of stars in the northern hemisphere, typically associated with the autumn night sky. "
  },
};


document.addEventListener("click", function(e) {
  
  if (!e.target.closest(".constellation")) {
    document.getElementById("info-box").classList.add("hidden");
  }

  const gallery = document.querySelector(".constellations");
const infoBox = document.getElementById("info-box");

gallery.addEventListener("scroll", () => {
  infoBox.classList.add("hidden");
}, { passive: true });
});

function showInfo(id, event) {
  const info = facts[id];
  const box = document.getElementById("info-box");

  document.getElementById("info-name").textContent = info.name;
  document.getElementById("info-facts").textContent = info.text;
  box.classList.remove("hidden");

  const target = event.currentTarget.getBoundingClientRect();
  const margin = 12;
  const boxRect = box.getBoundingClientRect();

}