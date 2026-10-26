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

  aquarius: {
    name: "Aquarius",
    text: "Aquarius is one of the constellations of the zodiac, lying on the Sun’s apparent path across the sky. Aquarius is the ‘water carrier’ and is located in a part of the sky sometimes called the Sea because there are other water-based constellations nearby. Aquarius is a very old constellation first appearing in Babylonian star catalogues and later listed by Ptolemy in the second century."
  },

  aquila: {
    name: "Aquila",
    text: "Aquila has a long history and was a Babylonian constellation, connected to an old Babylonian myth of a king who watches the world from above riding an eagle. Aquila is considered a summer constellation in the northern hemisphere and a winter constellation in the southern hemisphere."
  },

  ara: {
    name: "Ara",
    text: "Ara is one of the 48 constellations described by Ptolemy. It represents the altar on which the Greek Gods forged an alliance against the Titans. Some cultures see Ara, Lupus and Centaurus as a super constellation. The Centaur is seen as carrying a dead animal to the altar. The bright stars in Ara are also included in other constellations from Chinese and Wardaman cultures."
  },

  aires: {
    name: "Aires",
    text: "Aries is one of the 12 constellations of the zodiac, located on the path the Sun appears to follow across the sky. Aries is north of the celestial equator between Pisces and Taurus. Aries is one of the 48 constellations described by Ptolemy in the second century and has been depicted as a Hired Man in Babylonian times. The original constellation of the shepherd (god) who was hired in spring was changed into the animal that he guarded."
  },
  
  auriga: {
    name: "Auriga",
    text: "Auriga is constellation in the northern celestial hemisphere with best visibility in the winter months. Auriga is one of the constellations that even Hellenistic Greek authors like Eratosthenes (3rd. Century BCE) found confusing: the charioteer was considered to drive a fast chariot while simultaneously carrying a goat and her offspring on his shoulder. The image is likely a multicultural merger. Auriga is Latin for charioteer. Auriga’s position near the winter Milky Way makes it home to a variety of star clusters and interesting objects."
  },

  boötes: {
    name: "Boötes",
    text: "Boötes is one of the 48 constellations cataloged by the second-century astronomer Ptolemy based on earlier Greek and likely also a Babylonian predecessor. “Bootes” is a Greek loanword in Latin. The original Greek term translates “Ploughman”, in Latin it was used for “herdsman” and due to folk etymology also for ‘ox driver’. Boötes is a spring and summer constellation in the northern hemisphere. The farther south you are located, the less time in the year you will see Boötes."
  },

  caelum: {
    name: "Caelum",
    text: "This constellation was invented in the 1750s by the astronomer Nicholas Louis de Lacaille. The common translation of Caelum from Latin to English is ‘heaven’ but in this instance it means ‘The Chisel’, a tool that is used to carve stone. There is no mythological story relating to The Chisel."
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