const lightTheme = {
  background: '#f1f1f1',
  hover: '#f7f7f7',
  cardBackground: '#ffffff',
  accent: '#f1f1f1',
  text: '#222222',
  radius: '12px',
  inputRadius: '4px',
  inputBorder: '#d8d8d8',
  inputBorderHover: '#c8c8c8',
  inputBackground: '#ffffff',
  cardShadow:
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  scrollbarBackground: '#565f65',
  scrollbarColor: '#aaaaaa',
};

const solarizedTheme = {
  background: '#1a1e21',
  hover: '#273036',
  cardBackground: '#2c363c',
  accent: '#565f65',
  text: '#fcfcfc',
  radius: '12px',
  inputRadius: '4px',
  inputBorder: '#d8d8d8',
  inputBorderHover: '#c8c8c8',
  inputBackground: '#ffffff',
  inputColor: '#444444',
  cardShadow:
    '0px 2px 3px -1px rgba(0, 0, 0, 0.4), 0px 1px 4px 0px rgba(0, 0, 0, 0.2), 0px 1px 5px 0px rgba(0, 0, 0, 0.2)',
  scrollbarBackground: '#565f65',
  scrollbarColor: '#aaaaaa',
};

const darkTheme = {
  background: '#000000',
  hover: '#ffffff10',
  cardBackground: '#232323',
  accent: '#ffffff20',
  text: '#fbfbfb',
  radius: '6px',
  inputRadius: '4px',
  inputBorder: '#d8d8d8',
  inputBorderHover: '#c8c8c8',
  inputBackground: '#ffffff',
  cardShadow:
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  scrollbarBackground: '#565f65',
  scrollbarColor: '#aaaaaa',
};

const invertedTheme = {
  background: '#1da1f2',
  hover: '#e8f1f7',
  cardBackground: '#ffffff',
  accent: '#cdddee',
  text: '#303030',
  radius: '6px',
  inputRadius: '4px',
  inputBorder: '#1da1f2',
  inputBorderHover: '#1da1f2',
  inputBackground: '#ffffff',
  cardShadow:
    '0px 0px 30px 0px #44444420',
  scrollbarBackground: '#565f65',
  scrollbarColor: '#aaaaaa',
};

(function () {
  const backgroundColorInput = document.getElementById('backgroundColor');
  const hoverColorInput = document.getElementById('hoverColor');
  const accentColorInput = document.getElementById('accentColor');
  const textColorInput = document.getElementById('textColor');
  const cardBackgroundInput = document.getElementById('cardBackground');
  const radiusInput = document.getElementById('radius');
  const cardShadowInput = document.getElementById('cardShadow');

  backgroundColorInput.addEventListener('change', (e) =>
    updateBackground(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'backgroundcolor' },
    function (cookie) {
      if (cookie.value) {
        backgroundColorInput.value = cookie.value;
      }
    },
  );

  hoverColorInput.addEventListener('change', (e) =>
    updateHover(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'hovercolor' },
    function (cookie) {
      if (cookie.value) {
        hoverColorInput.value = cookie.value;
      }
    },
  );

  accentColorInput.addEventListener('change', (e) =>
    updateAccent(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'accentcolor' },
    function (cookie) {
      if (cookie.value) {
        accentColorInput.value = cookie.value;
      }
    },
  );

  textColorInput.addEventListener('change', (e) => updateText(e.target.value));
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'textcolor' },
    function (cookie) {
      if (cookie.value) {
        textColorInput.value = cookie.value;
      }
    },
  );

  cardBackgroundInput.addEventListener('change', (e) =>
    updateCardBackground(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'cardbackground' },
    function (cookie) {
      if (cookie.value) {
        cardBackgroundInput.value = cookie.value;
      }
    },
  );

  radiusInput.addEventListener('change', (e) =>
    updateRadius(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'radius' },
    function (cookie) {
      if (cookie.value) {
        radiusInput.value = cookie.value;
      }
    },
  );

  cardShadowInput.addEventListener('change', (e) =>
    updateCardShadow(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'cardshadow' },
    function (cookie) {
      if (cookie.value) {
        cardShadowInput.value = cookie.value;
      }
    },
  );

  function updateBackground(value) {
    console.log(value);

    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'backgroundcolor',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }

  function updateHover(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'hovercolor',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }

  function updateAccent(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'accentcolor',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }

  function updateText(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'textcolor',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }
  function updateCardBackground(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'cardbackground',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }
  function updateRadius(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'radius',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }
  function updateCardShadow(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'cardshadow',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }

  const buttons = document.getElementById('toggle-items');
  const presetButton = document.getElementById('toggle__preset');
  const customButton = document.getElementById('toggle__custom');
  const indicator = document.getElementById('toggle__indicator');
  const mainContent = document.getElementById('main-content');

  presetButton.addEventListener('click', (e) => {
    presetButton.classList.add('active');
    customButton.classList.remove('active');
    indicator.style.left = '5px';
    mainContent.classList.remove('custom');
  });
  customButton.addEventListener('click', (e) => {
    customButton.classList.add('active');
    presetButton.classList.remove('active');
    indicator.style.left = `${
      customButton.getBoundingClientRect().x - buttons.getBoundingClientRect().x
    }px`;
    mainContent.classList.add('custom');
  });

  const presetLight = document.getElementById('preset-light');
  const presetDark = document.getElementById('preset-dark');
  const presetSolarized = document.getElementById('preset-solarized');
  const presetInverted = document.getElementById('preset-inverted');

  chrome.cookies.get({ url: 'https://twitter.com', name: 'theme' }, function (
    cookie,
  ) {
    if (cookie.value === 'light') {
      presetLight.classList.add('active');
      presetDark.classList.remove('active');
      presetSolarized.classList.remove('active');
      presetInverted.classList.remove('active');
    } else if (cookie.value === 'dark') {
      presetDark.classList.add('active');
      presetLight.classList.remove('active');
      presetSolarized.classList.remove('active');
      presetInverted.classList.remove('active');
    } else if (cookie.value === 'solarized') {
      presetSolarized.classList.add('active');
      presetLight.classList.remove('active');
      presetDark.classList.remove('active');
      presetInverted.classList.remove('active');
    } else if (cookie.value === 'inverted') {
      presetInverted.classList.add('active');
      presetLight.classList.remove('active');
      presetDark.classList.remove('active');
      presetSolarized.classList.remove('active');
    }
  });

  presetLight.addEventListener('click', (e) => {
    updateBackground(lightTheme.background);
    updateHover(lightTheme.hover);
    updateAccent(lightTheme.accent);
    updateText(lightTheme.text);
    updateCardBackground(lightTheme.cardBackground);
    updateRadius(lightTheme.radius);
    updateCardShadow(lightTheme.cardShadow);

    presetLight.classList.add('active');
    presetDark.classList.remove('active');
    presetSolarized.classList.remove('active');
    presetInverted.classList.remove('active');

    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'theme',
        value: 'light',
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  });

  presetSolarized.addEventListener('click', (e) => {
    updateBackground(solarizedTheme.background);
    updateHover(solarizedTheme.hover);
    updateAccent(solarizedTheme.accent);
    updateText(solarizedTheme.text);
    updateCardBackground(solarizedTheme.cardBackground);
    updateRadius(solarizedTheme.radius);
    updateCardShadow(solarizedTheme.cardShadow);

    presetLight.classList.remove('active');
    presetDark.classList.remove('active');
    presetSolarized.classList.add('active');
    presetInverted.classList.remove('active');

    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'theme',
        value: 'solarized',
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  });

  presetDark.addEventListener('click', (e) => {
    updateBackground(darkTheme.background);
    updateHover(darkTheme.hover);
    updateAccent(darkTheme.accent);
    updateText(darkTheme.text);
    updateCardBackground(darkTheme.cardBackground);
    updateRadius(darkTheme.radius);
    updateCardShadow(darkTheme.cardShadow);

    presetLight.classList.remove('active');
    presetDark.classList.add('active');
    presetSolarized.classList.remove('active');
    presetInverted.classList.remove('active');

    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'theme',
        value: 'dark',
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  });

  presetInverted.addEventListener('click', (e) => {
    updateBackground(invertedTheme.background);
    updateHover(invertedTheme.hover);
    updateAccent(invertedTheme.accent);
    updateText(invertedTheme.text);
    updateCardBackground(invertedTheme.cardBackground);
    updateRadius(invertedTheme.radius);
    updateCardShadow(invertedTheme.cardShadow);

    presetLight.classList.remove('active');
    presetDark.classList.remove('active');
    presetSolarized.classList.remove('active');
    presetInverted.classList.add('active');

    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'theme',
        value: 'inverted',
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  });

  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', (e) => {
    chrome.tabs.getSelected(null, function (tab) {
      var code = 'window.location.reload();';
      chrome.tabs.executeScript(tab.id, { code: code });
    });

    if (customButton.classList.includes('active')) {
      chrome.cookies.set(
        {
          url: 'https://twitter.com',
          name: 'theme',
          value: 'custom',
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );
    }
  });

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.sendMessage(tabId, {
      message: 'hello!',
      url: tab.url,
    });
  });
})();
