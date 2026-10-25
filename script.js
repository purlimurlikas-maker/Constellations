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
};


document.addEventListener("click", function(e) {
  
  if (!e.target.closest(".constellation")) {
    document.getElementById("info-box").classList.add("hidden");
  }
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

  let left = target.right + margin;
  if (left + boxRect.width > window.innerWidth - margin) {
    left = target.left - boxRect.width - margin;
  }

  const top = Math.max(
    margin,
    Math.min(
      target.top + (target.height - boxRect.height) / 2,
      window.innerHeight - boxRect.height - margin
    )
  );

  box.style.left = `${Math.max(margin, left)}px`;
  box.style.top = `${top}px`;
}