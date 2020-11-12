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

// DEFAULT THEME IF FIRST LOAD
const lightTheme = {
  primarycolor: '#1DA1F2',
  backgroundcolor: '#f1f1f1',
  hovercolor: '#f7f7f7',
  cardbackground: '#ffffff',
  accentcolor: '#f1f1f1',
  textcolor: '#222222',
  radius: '12px',
  cardshadow:
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  buttonbackground: '#1DA1F2',
  buttonradius: '6px',
  buttonTextcolor: '#ffffff',
  inputTextcolor: '#111111',
  inputBackground: '#ffffff',
};

// LOAD CURRENT THEME
const primaryColor = getCookie('primarycolor');
const backgroundColor = getCookie('backgroundcolor');
const hoverColor = getCookie('hovercolor');
const accentColor = getCookie('accentcolor');
const textColor = getCookie('textcolor');

const cardBackground = getCookie('cardbackground');
const radius = getCookie('radius');
const cardShadow = getCookie('cardshadow');

const buttonBackground = getCookie('buttonbackground');
const buttonTextColor = getCookie('buttontextcolor');
const buttonRadius = getCookie('buttonradius');

const inputBackground = getCookie('inputbackground');
const inputTextColor = getCookie('inputtextcolor');

document.documentElement.style.setProperty(
  '--primaryColor',
  primaryColor || lightTheme.primarycolor,
);
document.documentElement.style.setProperty(
  '--backgroundColor',
  backgroundColor || lightTheme.backgroundcolor,
);
document.documentElement.style.setProperty(
  '--hoverColor',
  hoverColor || lightTheme.hovercolor,
);
document.documentElement.style.setProperty(
  '--accentColor',
  accentColor || lightTheme.accentcolor,
);
document.documentElement.style.setProperty(
  '--textColor',
  textColor || lightTheme.textcolor,
);
document.documentElement.style.setProperty(
  '--cardBackground',
  cardBackground || lightTheme.cardbackground,
);
document.documentElement.style.setProperty(
  '--radius',
  radius || lightTheme.radius,
);
document.documentElement.style.setProperty(
  '--cardShadow',
  cardShadow || lightTheme.cardshadow,
);
document.documentElement.style.setProperty(
  '--buttonBackground',
  buttonBackground === ''
    ? primaryColor || lightTheme.primarycolor
    : buttonBackground || lightTheme.buttonbackground,
);
document.documentElement.style.setProperty(
  '--buttonTextColor',
  buttonTextColor === ''
    ? 'white'
    : buttonTextColor || lightTheme.buttontextcolor,
);
document.documentElement.style.setProperty(
  '--buttonRadius',
  buttonRadius === ''
    ? radius || lightTheme.radius
    : buttonRadius || lightTheme.buttonradius,
);
document.documentElement.style.setProperty(
  '--inputTextColor',
  inputTextColor || lightTheme.inputtextcolor,
);
document.documentElement.style.setProperty(
  '--inputBackground',
  inputBackground || lightTheme.inputbackground,
);

console.log('RUNNING TWITTER.JS');

// LOAD CURRENT PAGE STYLESHEETS
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

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(getCookie('previousurl'));
  console.log(request.url);

  if (
    request.url.includes('messages') &&
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
    !request.url.includes('messages') &&
    !request.url.includes('settings') &&
    !(
      getCookie('previousurl') === '/notifications' &&
      request.url === '/notifications/mentions'
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
