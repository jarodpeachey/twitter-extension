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

  document.documentElement.style.setProperty(
    '--background',
    backgroundColor,
  );
})();
// })
