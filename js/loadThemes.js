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
  { url: 'https://twitter.com', name: 'theme-minimal' },
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
          name: 'theme-minimal',
          value: JSON.stringify(minimalTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-minimal-black' },
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
          name: 'theme-minimal-black',
          value: JSON.stringify(minimalBlackTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-minimal-red' },
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
          name: 'theme-minimal-red',
          value: JSON.stringify(minimalRedTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-minimal-green' },
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
          name: 'theme-minimal-green',
          value: JSON.stringify(minimalGreenTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-minimal-pink' },
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
          name: 'theme-minimal-pink',
          value: JSON.stringify(minimalPinkTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-neon' },
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
          name: 'theme-neon',
          value: JSON.stringify(neonTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-neon-red' },
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
          name: 'theme-neon-red',
          value: JSON.stringify(neonRedTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-neon-green' },
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
          name: 'theme-neon-green',
          value: JSON.stringify(neonGreenTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-neon-pink' },
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
          name: 'theme-neon-pink',
          value: JSON.stringify(neonPinkTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-flat' },
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
          name: 'theme-flat',
          value: JSON.stringify(flatTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-flat-green' },
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
          name: 'theme-flat-green',
          value: JSON.stringify(flatGreenTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-flat-red' },
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
          name: 'theme-flat-red',
          value: JSON.stringify(flatRedTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);

chrome.cookies.get(
  { url: 'https://twitter.com', name: 'theme-flat-pink' },
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
          name: 'theme-flat-pink',
          value: JSON.stringify(flatPinkTheme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );

      window.location.reload();
    }
  },
);
