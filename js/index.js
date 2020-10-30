const lightTheme = {
  background: '#f7f7f7',
  hover: '#fafafa',
  cardBackground: '#ffffff',
  accent: '#e8e8e8',
  text: '#444444',
  buttonRadius: '12px',
  profileRadius: '24px',
  cardRadius: '12px',
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
  buttonRadius: '12px',
  profileRadius: '24px',
  cardRadius: '12px',
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
  buttonRadius: '999px',
  profileRadius: '24px',
  cardRadius: '6px',
  inputRadius: '4px',
  inputBorder: '#d8d8d8',
  inputBorderHover: '#c8c8c8',
  inputBackground: '#ffffff',
  cardShadow:
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  scrollbarBackground: '#565f65',
  scrollbarColor: '#aaaaaa',
};

(function () {
  const backgroundColorInput = document.getElementById('backgroundColor');
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

  const hoverColorInput = document.getElementById('hoverColor');
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

  const accentColorInput = document.getElementById('accentColor');
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

  const textColorInput = document.getElementById('textColor');
  textColorInput.addEventListener('change', (e) => updateText(e.target.value));
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'textcolor' },
    function (cookie) {
      if (cookie.value) {
        textColorInput.value = cookie.value;
      }
    },
  );

  const cardBackgroundInput = document.getElementById('cardBackground');
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

  const cardRadiusInput = document.getElementById('cardRadius');
  cardRadiusInput.addEventListener('change', (e) =>
    updateCardRadius(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'cardradius' },
    function (cookie) {
      if (cookie.value) {
        cardRadiusInput.value = cookie.value;
      }
    },
  );

  const cardShadowInput = document.getElementById('cardShadow');
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
  function updateCardRadius(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'cardradius',
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
  const presetSepia = document.getElementById('preset-sepia');

  presetLight.addEventListener('click', (e) => {
    updateBackground(lightTheme.background);
    updateHover(lightTheme.hover);
    updateAccent(lightTheme.accent);
    updateText(lightTheme.text);
    updateCardBackground(lightTheme.cardBackground);
    updateCardRadius(lightTheme.cardRadius);
    updateCardShadow(lightTheme.cardShadow);

    presetLight.classList.add('active');
    presetDark.classList.remove('active');
    presetSolarized.classList.remove('active');
    presetSepia.classList.remove('active');
  });

  presetSolarized.addEventListener('click', (e) => {
    updateBackground(solarizedTheme.background);
    updateHover(solarizedTheme.hover);
    updateAccent(solarizedTheme.accent);
    updateText(solarizedTheme.text);
    updateCardBackground(solarizedTheme.cardBackground);
    updateCardRadius(solarizedTheme.cardRadius);
    updateCardShadow(solarizedTheme.cardShadow);

    presetLight.classList.remove('active');
    presetDark.classList.remove('active');
    presetSolarized.classList.add('active');
    presetSepia.classList.remove('active');
  });

  presetDark.addEventListener('click', (e) => {
    updateBackground(darkTheme.background);
    updateHover(darkTheme.hover);
    updateAccent(darkTheme.accent);
    updateText(darkTheme.text);
    updateCardBackground(darkTheme.cardBackground);
    updateCardRadius(darkTheme.cardRadius);
    updateCardShadow(darkTheme.cardShadow);

    presetLight.classList.remove('active');
    presetDark.classList.add('active');
    presetSolarized.classList.remove('active');
    presetSepia.classList.remove('active');
  });

  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', (e) => {
    chrome.tabs.getSelected(null, function (tab) {
      var code = 'window.location.reload();';
      chrome.tabs.executeScript(tab.id, { code: code });
    });
  });

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.sendMessage(tabId, {
      message: 'hello!',
      url: tab.url,
    });
  });
})();
