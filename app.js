const infoBanner = document.querySelector('.info');

const possibleBanners = [
  {
    name: "discord",
    title: "Schon auf unserem Discord Server?",
    subtitle: "Für weitere Infos, gib <u><b>!discord</b></u> in den Chat ein.",
    logoUrl : "./assets/discord.svg",
    color: "#000517",
  },
  {
    name: "github",
    title: "Alle Projekte findest du auf GitHub",
    subtitle: "Für weitere Infos, gib <u><b>!github</b></u> in den Chat ein.",
    logoUrl : "./assets/github.svg",
    color: "#000517",
  },
  {
    name: "follow",
    title: "Schon einen Follow da gelassen?",
    subtitle: "Ich freue mich um jeden neuen Follower!",
    logoUrl : "./assets/twitch.svg",
    color: "#000517",
  },
  {
    name: "chat-info",
    title: "Schon HTML im Chat benutzt?",
    subtitle: "Weitere Infos in der Stream Beschreibung",
    logoUrl : "./assets/info.svg",
    color: "#000517",
  },
  {
    name: "stream-idea",
    title: "Hast du eine Idee für den Stream?",
    subtitle: "Weitere Infos in der Stream Beschreibung",
    logoUrl : "./assets/info.svg",
    color: "#000517",
  },
  {
    name: "stream-verpasst",
    title: "Hast du einen Stream verpasst?",
    subtitle: "Die meisten Streams werden auf YouTube hochgeladen! <u><b>!youtube</b></u>",
    logoUrl : "./assets/youtube.svg",
    color: "#000517",
  },
];

const displayRandomBanner = () => {
  const randomBannerData = possibleBanners[Math.floor(Math.random() * possibleBanners.length)]

  document.querySelector('img').src = randomBannerData.logoUrl;
  document.querySelector('h1').textContent = randomBannerData.title;
  document.querySelector('p').innerHTML = randomBannerData.subtitle;

  infoBanner.style.backgroundColor = randomBannerData.color;
  infoBanner.style.marginTop = '0';

  setTimeout(() => {
    infoBanner.style.marginTop = '-110%';
  }, 15 * 1000);
}

setInterval(() => {
  displayRandomBanner();
}, 15 * 60 * 1000);

displayRandomBanner();