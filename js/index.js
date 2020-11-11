(function () {
  const primaryColorInput = document.getElementById('primaryColor');
  const backgroundColorInput = document.getElementById('backgroundColor');
  const hoverColorInput = document.getElementById('hoverColor');
  const accentColorInput = document.getElementById('accentColor');
  const textColorInput = document.getElementById('textColor');
  const cardBackgroundInput = document.getElementById('cardBackground');
  const radiusInput = document.getElementById('radius');
  const cardShadowInput = document.getElementById('cardShadow');
  const buttonBackgroundInput = document.getElementById('buttonBackground');
  const buttonTextColorInput = document.getElementById('buttonTextColor');
  const buttonRadiusInput = document.getElementById('buttonRadius');
  const inputTextColorInput = document.getElementById('inputTextColor');
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

  buttonBackgroundInput.addEventListener('change', (e) =>
    updateButtonBackground(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'buttonbackground' },
    function (cookie) {
      if (cookie && cookie.value) {
        buttonBackgroundInput.value = cookie.value;
      }
    },
  );

  buttonTextColorInput.addEventListener('change', (e) =>
    updateButtonTextColor(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'buttontextcolor' },
    function (cookie) {
      if (cookie && cookie.value) {
        buttonTextColorInput.value = cookie.value;
      }
    },
  );

  buttonRadiusInput.addEventListener('change', (e) =>
    updateButtonRadius(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'buttonradius' },
    function (cookie) {
      if (cookie && cookie.value) {
        buttonRadiusInput.value = cookie.value;
      }
    },
  );

  inputTextColorInput.addEventListener('change', (e) =>
    updateInputTextColor(e.target.value),
  );
  chrome.cookies.get(
    { url: 'https://twitter.com', name: 'inputtextcolor' },
    function (cookie) {
      if (cookie && cookie.value) {
        inputTextColorInput.value = cookie.value;
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
  function updateButtonBackground(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'buttonbackground',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }
  function updateButtonTextColor(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'buttontextcolor',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }
  function updateButtonRadius(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'buttonradius',
        value: value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }
  function updateInputTextColor(value) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'inputtextcolor',
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

  // const saveButton = document.getElementById('save');
  // saveButton.addEventListener('click', (e) => {
  //   document.getElementById('themeName').classList.add('open');
  // });

  // const submitButton = document.getElementById('submit');
  // submitButton.addEventListener('click', (e) => {
    // chrome.tabs.getSelected(null, function (tab) {
    //   var code = 'window.location.reload();';
    //   chrome.tabs.executeScript(tab.id, { code: code });
    // });
  // });

  // const exportButton = document.getElementById('export');
  // exportButton.addEventListener('click', (e) => {
  //   chrome.cookies.getAll(
  //     {
  //       url: 'https://twitter.com',
  //     },
  //     function (array) {
  //       const cookies = {};
  //       array.forEach((item) => {
  //         cookies[item.name] = item.value;
  //       });

  //       const theme = {
  //         primaryColor: cookies.primarycolor,
  //         backgroundColor: cookies.backgroundcolor,
  //         hoverColor: cookies.hovercolor,
  //         accentColor: cookies.accentcolor,
  //         textColor: cookies.textcolor,
  //         cardBackground: cookies.cardbackground,
  //         radius: cookies.radius,
  //         cardShadow: cookies.cardshadow,
  //         buttonBackground: cookies.buttonbackground,
  //         buttonRadius: cookies.buttonradius,
  //         buttonTextColor: cookies.buttontextcolor,
  //         inputTextColor: cookies.inputtextcolor,
  //         inputBackground: cookies.inputbackground,
  //       };

  //       console.log(JSON.stringify(theme));
  //     },
  //   );
  // });

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.sendMessage(tabId, {
      message: 'hello!',
      url: tab.url,
    });
  });
})();
