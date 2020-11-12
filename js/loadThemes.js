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

      window.location.reload();
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

      window.location.reload();
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

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-clean' },
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
          name: 'theme-clean',
          value: JSON.stringify(cleanTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);
