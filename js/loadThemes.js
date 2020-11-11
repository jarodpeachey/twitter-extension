const lightTheme = {
  primaryColor: '#1DA1F2',
  backgroundColor: '#f1f1f1',
  hoverColor: '#f7f7f7',
  cardBackground: '#ffffff',
  accentColor: '#f1f1f1',
  textColor: '#222222',
  radius: '12px',
  cardShadow:
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  buttonBackground: '#1DA1F2',
  buttonRadius: '6px',
  buttonTextColor: '#ffffff',
  inputTextColor: '#111111',
  inputBackground: '#ffffff',
};

const solarizedTheme = {
  primaryColor: '#1DA1F2',
  backgroundColor: '#1a1e21',
  hoverColor: '#273036',
  cardBackground: '#2c363c',
  accentColor: '#565f65',
  textColor: '#fcfcfc',
  radius: '12px',
  cardShadow:
    '0px 2px 3px -1px rgba(0, 0, 0, 0.4), 0px 1px 4px 0px rgba(0, 0, 0, 0.2), 0px 1px 5px 0px rgba(0, 0, 0, 0.2)',
  buttonBackground: '#1DA1F2',
  buttonRadius: '6px',
  buttonTextColor: '#ffffff',
  inputTextColor: '#111111',
  inputBackground: '#ffffff',
};

const darkTheme = {
  primaryColor: '#1DA1F2',
  backgroundColor: '#000000',
  hoverColor: '#ffffff10',
  cardBackground: '#232323',
  accentColor: '#ffffff20',
  textColor: '#fbfbfb',
  radius: '6px',
  cardShadow:
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  buttonBackground: '#1DA1F2',
  buttonRadius: '6px',
  buttonTextColor: '#ffffff',
  inputTextColor: '#111111',
  inputBackground: '#ffffff',
};

const invertedTheme = {
  primaryColor: '#1DA1F2',
  backgroundColor: primaryColor,
  hoverColor: '#e8f1f7',
  cardBackground: '#ffffff',
  accentColor: '#cdddee',
  textColor: '#303030',
  radius: '6px',
  cardShadow: '0px 0px 30px 0px #44444420',
  buttonBackground: '#1DA1F2',
  buttonRadius: '6px',
  buttonTextColor: '#ffffff',
  inputTextColor: '#111111',
  inputBackground: '#ffffff',
};

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-light' },
  function (cookie) {
    if (
      cookie &&
      cookie.value &&
      cookie.value !== '{}' &&
      cookie.value !== '' &&
      JSON.parse(cookie.value) !== {}
    ) {
      console.log('Setting from cookies');
    } else {
      chrome.cookies.set(
        {
          url: 'https://twitter.com',
          name: 'theme-light',
          value: JSON.stringify(lightTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-dark' },
  function (cookie) {
    if (
      cookie &&
      cookie.value &&
      cookie.value !== '{}' &&
      cookie.value !== '' &&
      JSON.parse(cookie.value) !== {}
    ) {
      console.log('Setting from cookies');
    } else {
      chrome.cookies.set(
        {
          url: 'https://twitter.com',
          name: 'theme-dark',
          value: JSON.stringify(darkTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-solarized' },
  function (cookie) {
    if (
      cookie &&
      cookie.value &&
      cookie.value !== '{}' &&
      cookie.value !== '' &&
      JSON.parse(cookie.value) !== {}
    ) {
      console.log('Setting from cookies');
    } else {
      chrome.cookies.set(
        {
          url: 'https://twitter.com',
          name: 'theme-solarized',
          value: JSON.stringify(solarizedTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-inverted' },
  function (cookie) {
    if (
      cookie &&
      cookie.value &&
      cookie.value !== '{}' &&
      cookie.value !== '' &&
      JSON.parse(cookie.value) !== {}
    ) {
      console.log('Setting from cookies');
    } else {
      chrome.cookies.set(
        {
          url: 'https://twitter.com',
          name: 'theme-inverted',
          value: JSON.stringify(invertedTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );
    }
  },
);
