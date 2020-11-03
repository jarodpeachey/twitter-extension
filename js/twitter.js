(function () {
  if (window.location.pathname.includes('messages')) {
    console.log('Updating to messages');
    document.body.classList.add('messages');
    document.body.classList.remove('home');
    document.body.classList.remove('status');
  } else if (window.location.pathname.includes('status')) {
    document.body.classList.add('home');
    document.body.classList.add('status');
    document.body.classList.remove('message');
  } else {
    console.log('Updating to home/notifications');
    document.body.classList.add('home');
    document.body.classList.remove('messages');
    document.body.classList.remove('status');
  }

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse,
  ) {
    console.log(getCookie('previousurl'));
    console.log(request.url);
    console.log(getCookie('previousurl'));

    if (
      request.url.includes('messages') &&
      !request.url.includes('requests') &&
      !getCookie('previousurl').includes('requests')
    ) {
      console.log('Updating to messages');
      document.body.classList.add('loading');
      setTimeout(() => {
        document.body.classList.remove('loading');
      }, 0);
      document.body.classList.add('messages');
      document.body.classList.remove('home');
      document.body.classList.remove('status');
    } else if (request.url.includes('status')) {
      document.body.classList.add('status');
      document.body.classList.add('home');
      document.body.classList.remove('messages');
    } else if (!request.url.includes('requests') &&
      !getCookie('previousurl').includes('requests')) {
      console.log('Updating to home/notifications');
      document.body.classList.add('loading');
      setTimeout(() => {
        document.body.classList.remove('loading');
      }, 0);
      document.body.classList.add('home');
      document.body.classList.remove('messages');
      document.body.classList.remove('status');
    }
  });

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
