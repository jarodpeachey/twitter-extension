(function () {
  if (window.location.pathname.includes('messages')) {
    console.log('Updating to messages');
    document.body.classList.add('messages');
    document.body.classList.remove('home');
    document.body.classList.remove('status');
    document.body.classList.remove('settings');
  } else if (window.location.pathname.includes('status')) {
    document.body.classList.add('home');
    document.body.classList.add('status');
    document.body.classList.remove('messages');
    document.body.classList.remove('settings');
  } else if (window.location.pathname.includes('settings')) {
    document.body.classList.add('settings');
    document.body.classList.remove('messages');
    document.body.classList.remove('status');
    document.body.classList.remove('home');
  } else {
    console.log('Updating to home/notifications');
    document.body.classList.add('home');
    document.body.classList.remove('messages');
    document.body.classList.remove('status');
    document.body.classList.remove('settings');
  }

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse,
  ) {
    console.log(getCookie('previousurl'));
    console.log(request.url);

    if (
      request.url.includes('messages') &&
      !request.url.includes('requests') &&
      !getCookie('previousurl').includes('messages')
    ) {
      console.log('Updating to messages');
      document.body.classList.add('messages');
      document.body.classList.remove('home');
      document.body.classList.remove('status');
      document.body.classList.remove('settings');
    } else if (request.url.includes('status')) {
      document.body.classList.add('status');
      document.body.classList.add('home');
      document.body.classList.remove('messages');
    } else if (
      request.url.includes('settings') &&
      !getCookie('previousurl').includes('settings')
    ) {
      document.body.classList.add('settings');
      document.body.classList.remove('messages');
      document.body.classList.remove('home');
      document.body.classList.remove('status');
    } else if (
      !(request.url.includes('messages') && request.url.includes('settings')) ||
      !(
        getCookie('previousurl').includes('notifications') &&
        request.url.includes('notifications')
      )
    ) {
      console.log('Updating to home/notifications');
      document.body.classList.add('loading');
      setTimeout(() => {
        document.body.classList.remove('loading');
      }, 0);
      document.body.classList.add('home');
      document.body.classList.remove('messages');
      document.body.classList.remove('status');
      document.body.classList.remove('settings');
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
  const primaryColor = getCookie('primarycolor');
  const backgroundColor = getCookie('backgroundcolor');
  const hoverColor = getCookie('hovercolor');
  const accentColor = getCookie('accentcolor');
  const textColor = getCookie('textcolor');

  const cardBackground = getCookie('cardbackground');
  const radius = getCookie('radius');
  const cardShadow = getCookie('cardshadow');

  document.documentElement.style.setProperty('--primaryColor', primaryColor);
  document.documentElement.style.setProperty(
    '--backgroundColor',
    backgroundColor,
  );
  document.documentElement.style.setProperty('--hoverColor', hoverColor);
  document.documentElement.style.setProperty('--accentColor', accentColor);
  document.documentElement.style.setProperty('--textColor', textColor);
  document.documentElement.style.setProperty(
    '--cardBackground',
    cardBackground,
  );
  document.documentElement.style.setProperty('--radius', radius);
  document.documentElement.style.setProperty('--cardShadow', cardShadow);
})();
