// document.addEventListener("DOMContentLoaded", () => {
(function () {
  const getCookie = (cookieName) => {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }

    return '';
  };
  const backgroundColor = getCookie('backgroundcolor');
  const hoverColor = getCookie('hovercolor');
  const accentColor = getCookie('accentcolor');
  const textColor = getCookie('textcolor');

  const cardBackground = getCookie('cardbackground');
  const cardRadius = getCookie('cardradius');
  const cardShadow = getCookie('cardshadow');

  document.documentElement.style.setProperty('--background', backgroundColor);
  document.documentElement.style.setProperty('--hover', hoverColor);
  document.documentElement.style.setProperty('--accent', accentColor);
  document.documentElement.style.setProperty('--text', textColor);
  document.documentElement.style.setProperty(
    '--cardBackground',
    cardBackground,
  );
  document.documentElement.style.setProperty('--cardRadius', cardRadius);
  document.documentElement.style.setProperty('--cardShadow', cardShadow);
})();
