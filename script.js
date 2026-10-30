const facts = {
  orion: {
    name: "Orion",
    text: "The Hunter. Look for the three belt stars in winter skies. Its brightest star is Betelgeuse, a red supergiant."
  },
  
  cassiopeia: {
    name: "Cassiopeia",
    text: "Cassiopeia is a constellation in the northern sky and is circumpolar from mid-northern latitudes. Cassiopeia is visible lower in the sky for part of the year. As you travel south, it will become invisible at all if you are below latitude 25 degrees south. Cassiopeia is easy to find as it is composed of relatively bright stars that form a distinctive W or M shape. In Greek mythology, Cassiopeia is the mother of Andromeda."
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

  camelopardalis: {
    name: "Camelopardalis",
    text: "Camelopardalis was invented in 1612 by Petrus Plancius, it represents a giraffe. The constellation name is a Greek loanword in Latin. The term comes from the words for camel and leopard, because it was an animal for hot climate (like camels) with a fur pattern like a leopard."
  },

  cancer: {
    name: "Cancer",
    text: "Cancer represents a crab that was crushed by Heracles while he was fighting the Dragon (Draco), after which the goddess Hera placed the crab among the stars. Some early modern drawings also represent these stars with the image of a lobster, but the original Babylonian image was the Seat of the God of Heaven, represented by the quadrilateral of stars boxing the open star cluster M44."
  },

  canesvenatici: {
    name: "Canes Venatici",
    text: "A newer constellation invented in 1687 by Johannes Hevelius, Canes Venatici represents two dogs held on a leash by the figure represented in the nearby constellation Boötes. The brightest star is called “Cor Caroli”, Heart of Charles, in honor to British monarchy. It was named in the 1660s after a period of 11 years when Britain had no king."
  },

  canismajor: {
    name: "Canis Major",
    text: "Canis Major is a constellation in the southern celestial hemisphere. In the second century, it was included in Ptolemy's 48 constellations, and is counted among the 88 modern constellations. Its name is Latin for 'greater dog' in contrast to Canis Minor, the 'lesser dog'; both figures are commonly represented as following the constellation of Orion the hunter through the sky."
  },

  canisminor: {
    name: "Canis Minor",
    text: "The modern name is Latin “The Lesser Dog” in contrast to Canis Major, the Greater Dog. However, in antiquity, this constellation was named “The one [asterism] before the Dog” because it rises a bit earlier in the northern hemisphere. The Greek term for “the one before the dog”, “pro kýon”, nowadays is used as a name for the brightest star of the constellation."
  },

  capricornus: {
    name: "Capricornus",
    text: "Capricornus is one of the constellations of the zodiac, which traces the apparent path of the Sun across the sky and is visible from much of the northern and southern hemispheres. It is one of the 48 constellations cataloged by the second-century astronomer Ptolemy. Capricornus is located in a portion of the sky sometimes called ‘The Sea’ because there is a concentration of constellations with water themes. Capricornus is Latin for ‘horned goat’ or 'goat horn' although it is commonly referred to as a ‘sea goat’, a mythical half-fish, half-goat creature. Capriconus is also sometimes identified as Pan, a god with goats horns and legs."
  },

  carina: {
    name: "Carina",
    text: "Carina is a constellation in the southern sky, visible from lower northern latitudes and the southern hemisphere. Carina is Latin for the keel of a ship. Carina was originally part of a larger constellation (Argo Navis) until that was divided into three constellations. The others are Puppis (The Poop Deck) and Vela (The Sails)."
  },

  centaurus: {
    name: "Centaurus",
    text: "Centaurus is a large constellation in the southern sky that was cataloged by the second-century astronomer Ptolemy. Centaurus represents a mythical creature that is half human and half horse — The Centaur. The northern part of Centaurus can be seen low in the south from mid-northern latitudes but is better seen from the southern hemisphere."
  },

  cetus: {
    name: "Cetus",
    text: "Cetus is Latinized for Greek “Ketos”, the name of a sea monster. In Greek mythology Cetus was sent by Poseidon to terrorize the coasts of Ethiopia after feeling insulted by the queen Cassiopeia who declared that she was more beautiful than his water nymphs. The king, on the instruction of an oracle, intended to sacrifice the princess Andromeda in order to stop the beast, but the hero Perseus slew it before it could get to her."
  },

  chamaeleon: {
    name: "Chamaeleon",
    text: "This constellation was named by Dutch navigators who were charting the southern sky and who named the new constellations they described after animals they saw in various lands of the southern hemisphere."
  },

  circinus: {
    name: "Circinus",
    text: "Circinus represents a drafting compass and was invented in the 1750s by Nicolas Louis de Lacaille. It is very small and has few notable objects."
  },

  columba: {
    name: "Columba",
    text: "Columba is a faint constellation located just south of Canis Major. It is low in the sky for mid-northern latitudes and is considered a southern constellation. Columba was designated in the 16th century and its name is Latin for dove."
  },

  comaberenices: {
    name: "Coma Berenices",
    text: "Coma Berenices is an ancient asterism that is one of the 88 IAU constellations. Its name means ‘Berenices hair’ in Latin and refers to Queen Berenices II of Egypt who sacrificed her hair as a votive offering in the name of love. Coma Berenices is the only constellation named after a historic figure. Coma Berenices is located in the northern sky and is considered a spring/summer constellation for northern hemisphere observers."
  },

  coronaaustralis: {
    name: "Corona Australis",
    text: "As its name implies, Corona Australis is a southern constellation that skirts the southern horizon in summer months for observers at mid-northern latitudes and is better viewed from farther south. Its name in Latin means ‘southern crown’ (a counterpart to the northern crown, Corona Borealis). Corona Australis is one of the constellations listed by the second-century astronomer Ptolemy and it had been invented only a few decades earlier in first century Rome."
  },

  coronaborealis: {
    name: "Corona Borealis",
    text: "Corona Borealis is a small constellation that was used by all ancient Greek astronomers as a wreath crowning a princess or bride. It goes back to the Babylonian “Constellation of Dignity”, an insignum of the god of agriculture.” Corona Borealis is the Northern Crown and its brightest stars form a semicircle, similar to those of Corona Australis, the Southern Crown. Corona Borealis is a northern hemisphere constellation and is visible to anyone north of latitude 50 degrees south."
  },

   corvus: {
    name: "Corvus",
    text: "Corvus is a small constellation located about 20 degrees south of the celestial equator so it is visible from much of the northern hemisphere and all of the southern hemisphere. Corvus is one of the 48 constellations catalogued by Ptolemy of Alexandria in the second century which is a direct takeover from the Babylonian uranography. Even there, it formed a super-constellation with Hydra sitting on the tip of the tail of the huge dragon-like creature that became the Greek watersnake. Corvus is visible in the northern hemisphere in spring and summer (in the southern hemisphere in fall and winter)."
  },

  crater: {
    name: "Crater",
    text: "Crater is a small constellation located just south of the celestial equator. Crater is one of the 48 constellations cataloged by the second-century astronomer Ptolemy and represents a cup used by Apollo."
  },

  crux: {
    name: "Crux",
    text: "The Crux constellation, also known as the Southern Cross, is a small but prominent constellation in the southern hemisphere's night sky. It is one of the most famous and easily recognizable constellations in the southern celestial hemisphere. The name Crux itself is derived from the Latin word for a cross, and it reflects the constellation's distinctive shape. Over time, Crux became an important navigational tool for sailors in the southern hemisphere because its position in the night sky helped them determine their latitude."
  },

  cygnus: {
    name: "Cygnus",
    text: "Cygnus is a northern constellation in the plane of the Milky Way. The original Greek constellation was named “Ornithos, The Bird” and it was coined “Cygnus, The Swan” in Latin by interpreting a specific mythological bird, a transformed god. Cygnus is also known as the Northern Cross."
  },

  delphinus: {
    name: "Delphinus",
    text: "Delphinus, the Dolphin, is one of the 48 constellations described by Ptolemy. The dolphin was considered to be a messenger of the god Poseidon, and there is a story of a pod of dolphins rescuing a famous Greek poet when he was about to be killed at sea."
  },
  
  dorado: {
    name: "Dorado",
    text: "Dorado is a constellation in the far southern sky and can only be seen from near the equator and the southern hemisphere. It contains most of the Large Magellanic Cloud, a nearby satellite galaxy of the Milky Way. Dorado was named in the sixteenth century and refers to mahi-mahi, the common dolphin fish. Some old star charts refer to Dorado as Xiphias, a swordfish."
  },

  draco: {
    name: "Draco",
    text: "Draco is a constellation in the far northern sky and is circumpolar for observers at mid-northern latitudes and places farther north. Draco was cataloged by the second-century astronomer Ptolemy. Draco is seen as a dragon in Greek mythology."
  },

  equuleus: {
    name: "Equuleus",
    text: "Equuleus is the second-smallest constellation in the night sky and lies just north of the celestial equator. Equuleus is faint with no stars brighter than 4th magnitude. Equuleus was cataloged by the second-century astronomer Ptolemy and means little horse in Latin."
  },

  eridanus: {
    name: "Eridanus",
    text: "Eridanus is the sixth-largest constellation in the sky and is located south of the celestial equator. Eridanus has the greatest extent from north to south of any constellation in the sky! "
  },

  fornax: {
    name: "Fornax",
    text: "Fornax is a southern hemisphere constellation that represents a furnace. Fornax is partly circled by Eridanus. Fornax was named in 1756 by French astronomer Nicolas Louis de Lacaille making it a modern constellation."
  },

  gemini: {
    name: "Gemini",
    text: "Gemini is a northern hemisphere constellation cataloged by the second-century astronomer Ptolemy. Gemini is one of the constellations of the zodiac, since it lies on the apparent path the Sun takes across the sky. Gemini represents the twins Castor and Pollux in Greek mythology who have their models in the Babylonian uranology as the warriors Lugalirra and Meslamta’ea. Gemini is primarily a winter/spring constellation."
  },

  grus: {
    name: "Grus",
    text: "Grus is a constellation in the southern sky that can be seen low in the south from mid-northern latitudes. Grus is Latin for crane. Grus was created by Dutch-Flemish astronomer Petrus Plancius and first appeared on a celestial globe in 1598. The stars that form Grus were previously part of Piscis Austrinus."
  },

  hercules: {
    name: "Hercules",
    text: "Hercules is a northern hemisphere constellation but it is visible to many observers south of the equator as well. Hercules is named after the hero of Roman mythology (the Greek version is Heracles). Hercules is one of the 48 constellations cataloged by the second-century astronomer Ptolemy, but as a nameless Kneeler which had been his name for ancient Greek astronomers since Aratus in the 4th century BCE. Hercules is the fifth-largest constellation by size. Hercules is best observed in the northern hemisphere from late spring until early fall."
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

function showInfo(id) {
  const info = facts[id];
  const box = document.getElementById("info-box");

  document.getElementById("info-name").textContent = info.name;
  document.getElementById("info-facts").textContent = info.text;
  box.classList.remove("hidden");

}