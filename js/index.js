const lightTheme = {
  primaryColor: '#1DA1F2',
  backgroundColor: '#f1f1f1',
  hoverColor: '#f7f7f7',
  cardBackground: '#ffffff',
  accentColor: '#f1f1f1',
  textColor: '#222222',
  radius: '12px',
  inputBorderColor: '#d8d8d8',
  inputBackground: '#ffffff',
  cardShadow:
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  scrollbarBackground: '#565f65',
  scrollbarColor: '#aaaaaa',
};

const solarizedTheme = {
  primaryColor: '#1DA1F2',
  backgroundColor: '#1a1e21',
  hoverColor: '#273036',
  cardBackground: '#2c363c',
  accentColor: '#565f65',
  textColor: '#fcfcfc',
  radius: '12px',
  inputBorderColor: '#d8d8d8',
  inputBackground: '#ffffff',
  inputColor: '#444444',
  cardShadow:
    '0px 2px 3px -1px rgba(0, 0, 0, 0.4), 0px 1px 4px 0px rgba(0, 0, 0, 0.2), 0px 1px 5px 0px rgba(0, 0, 0, 0.2)',
  scrollbarBackground: '#565f65',
  scrollbarColor: '#aaaaaa',
};

const darkTheme = {
  primaryColor: '#1DA1F2',
  backgroundColor: '#000000',
  hoverColor: '#ffffff10',
  cardBackground: '#232323',
  accentColor: '#ffffff20',
  textColor: '#fbfbfb',
  radius: '6px',
  inputBorderColor: '#d8d8d8',
  inputBackground: '#ffffff',
  cardShadow:
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  scrollbarBackground: '#565f65',
  scrollbarColor: '#aaaaaa',
};

const invertedTheme = {
  primaryColor: '#1DA1F2',
  backgroundColor: primaryColor,
  hoverColor: '#e8f1f7',
  cardBackground: '#ffffff',
  accentColor: '#cdddee',
  textColor: '#303030',
  radius: '6px',
  inputBorderColor: '#1da1f2',
  inputBackground: '#ffffff',
  cardShadow: '0px 0px 30px 0px #44444420',
  scrollbarBackground: '#565f65',
  scrollbarColor: '#aaaaaa',
};

(function () {
  const primaryColorInput = document.getElementById('primaryColor');
  const backgroundColorInput = document.getElementById('backgroundColor');
  const hoverColorInput = document.getElementById('hoverColor');
  const accentColorInput = document.getElementById('accentColor');
  const textColorInput = document.getElementById('textColor');
  const cardBackgroundInput = document.getElementById('cardBackground');
  const radiusInput = document.getElementById('radius');
  const cardShadowInput = document.getElementById('cardShadow');
  const inputBorderColorInput = document.getElementById('inputBorderColor');
  const inputBackgroundInput = document.getElementById('inputBackground');

  primaryColorInput.addEventListener('change', (e) =>
    updatePrimaryColor(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'primarycolor' },
    function (cookie) {
      if (cookie && cookie.value) {
        primaryColorInput.value = cookie.value;
      }
    },
  );

  backgroundColorInput.addEventListener('change', (e) =>
    updateBackgroundColor(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'backgroundcolor' },
    function (cookie) {
      if (cookie && cookie.value) {
        backgroundColorInput.value = cookie.value;
      }
    },
  );

  hoverColorInput.addEventListener('change', (e) =>
    updateHoverColor(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'hovercolor' },
    function (cookie) {
      if (cookie && cookie.value) {
        hoverColorInput.value = cookie.value;
      }
    },
  );

  accentColorInput.addEventListener('change', (e) =>
    updateAccentColor(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'accentcolor' },
    function (cookie) {
      if (cookie && cookie.value) {
        accentColorInput.value = cookie.value;
      }
    },
  );

  textColorInput.addEventListener('change', (e) =>
    updateTextColor(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'textcolor' },
    function (cookie) {
      if (cookie && cookie.value) {
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
      if (cookie && cookie.value) {
        cardBackgroundInput.value = cookie.value;
      }
    },
  );

  radiusInput.addEventListener('change', (e) => updateRadius(e.target.value));
  chrome.cookies.get({ url: 'https://twitter.com', name: 'radius' }, function (
    cookie,
  ) {
    if (cookie && cookie.value) {
      radiusInput.value = cookie.value;
    }
  });

  cardShadowInput.addEventListener('change', (e) =>
    updateCardShadow(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'cardshadow' },
    function (cookie) {
      if (cookie && cookie.value) {
        cardShadowInput.value = cookie.value;
      }
    },
  );

  inputBorderColorInput.addEventListener('change', (e) =>
    updateInputBorderColor(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'inputbordercolor' },
    function (cookie) {
      if (cookie && cookie.value) {
        inputBorderColorInput.value = cookie.value;
      }
    },
  );
  inputBackgroundInput.addEventListener('change', (e) =>
    updateInputBackground(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'inputbackground' },
    function (cookie) {
      if (cookie && cookie.value) {
        inputBackgroundInput.value = cookie.value;
      }
    },
  );

  function updatePrimaryColor(value) {
    console.log(value);

    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'primarycolor',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }

  function updateBackgroundColor(value) {
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

  function updateHoverColor(value) {
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

  function updateAccentColor(value) {
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

  function updateTextColor(value) {
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
  function updateInputBorderColor(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'inputbordercolor',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }
  function updateInputBackground(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'inputbackground',
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
    updatePrimaryColor(lightTheme.primaryColor);
    updateBackgroundColor(lightTheme.backgroundColor);
    updateHoverColor(lightTheme.hoverColor);
    updateAccentColor(lightTheme.accentColor);
    updateTextColor(lightTheme.textColor);
    updateCardBackground(lightTheme.cardBackground);
    updateRadius(lightTheme.radius);
    updateCardShadow(lightTheme.cardShadow);
    updateInputBorderColor(lightTheme.inputBorderColor);
    updateInputBackground(lightTheme.inputBackground);

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
    updatePrimaryColor(solarizedTheme.primaryColor);
    updateBackgroundColor(solarizedTheme.backgroundColor);
    updateHoverColor(solarizedTheme.hoverColor);
    updateAccentColor(solarizedTheme.accentColor);
    updateTextColor(solarizedTheme.textColor);
    updateCardBackground(solarizedTheme.cardBackground);
    updateRadius(solarizedTheme.radius);
    updateCardShadow(solarizedTheme.cardShadow);
    updateInputBorderColor(solarizedTheme.inputBorderColor);
    updateInputBackground(solarizedTheme.inputBackground);

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
    updatePrimaryColor(darkTheme.primaryColor);
    updateBackgroundColor(darkTheme.backgroundColor);
    updateHoverColor(darkTheme.hoverColor);
    updateAccentColor(darkTheme.accentColor);
    updateTextColor(darkTheme.textColor);
    updateCardBackground(darkTheme.cardBackground);
    updateRadius(darkTheme.radius);
    updateCardShadow(darkTheme.cardShadow);
    updateInputBorderColor(darkTheme.inputBorderColor);
    updateInputBackground(darkTheme.inputBackground);

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
    updatePrimaryColor(invertedTheme.primaryColor);
    updateBackgroundColor(invertedTheme.backgroundColor);
    updateHoverColor(invertedTheme.hoverColor);
    updateAccentColor(invertedTheme.accentColor);
    updateTextColor(invertedTheme.textColor);
    updateCardBackground(invertedTheme.cardBackground);
    updateRadius(invertedTheme.radius);
    updateCardShadow(invertedTheme.cardShadow);
    updateInputBorderColor(invertedTheme.inputBorderColor);
    updateInputBackground(invertedTheme.inputBackground);

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
