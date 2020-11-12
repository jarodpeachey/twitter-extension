const presetsWrapper = document.getElementById('presets-wrapper');
let selectedTheme = '';
const refreshButton = document.getElementById('refresh');
const editButton = document.getElementById('edit');

// DISPLAY ALL THEMES AND GET SELECTED THEME
chrome.cookies.getAll(
  {
    url: 'https://twitter.com',
  },
  function (array) {
    const themes = {};
    array.forEach((item) => {
      if (item.name.includes('theme-')) {
        const theme = JSON.parse(item.value);

        const title = item.name.substring(6, item.name.length);

        const themeItem = document.createElement('div');
        themeItem.className = 'theme__item';
        themeItem.id = item.name;
        themeItem.innerHTML = title.charAt(0).toUpperCase() + title.slice(1);

        const column = document.createElement('div');
        column.classList.add('col');
        column.appendChild(themeItem);

        presetsWrapper.appendChild(column);

        console.log(themeItem);
      }
    });

    chrome.cookies.get(
      {
        url: 'https://twitter.com',
        name: 'theme',
      },
      function (cookie) {
        const presetButtons = document.querySelectorAll('.theme__item');
        console.log(presetButtons);

        presetButtons.forEach((presetButton) => {
          if (cookie && presetButton.id === cookie.value) {
            presetButton.classList.add('active');
            selectedTheme = presetButton.id;
          }

          presetButton.addEventListener('click', (e) => {
            selectedTheme = presetButton.id;

            const presetButtons = document.querySelectorAll('.theme__item');

            presetButtons.forEach((presetButton) => {
              presetButton.classList.remove('active');
            });

            document.getElementById(selectedTheme).classList.add('active');
          });
        });
      },
    );
  },
);

refreshButton.addEventListener('click', (e) => {
  changeTheme(selectedTheme);

  chrome.tabs.getSelected(null, function (tab) {
    var code = 'window.location.reload();';
    chrome.tabs.executeScript(tab.id, { code: code });
  });

  window.location.reload();
});

const changeTheme = (themeName) => {
  chrome.cookies.get(
    {
      url: 'https://twitter.com',
      name: themeName,
    },
    function (cookie) {
      const newTheme = JSON.parse(cookie.value);

      updatePrimaryColor(newTheme.primaryColor);
      updateBackgroundColor(newTheme.backgroundColor);
      updateHoverColor(newTheme.hoverColor);
      updateAccentColor(newTheme.accentColor);
      updateTextColor(newTheme.textColor);
      updateCardBackground(newTheme.cardBackground);
      updateRadius(newTheme.radius);
      updateCardShadow(newTheme.cardShadow);
      updateButtonBackground(newTheme.buttonBackground);
      updateButtonTextColor(newTheme.buttonTextColor);
      updateButtonRadius(newTheme.buttonRadius);
      updateInputTextColor(newTheme.inputTextColor);
      updateInputBackground(newTheme.inputBackground);

      chrome.cookies.set(
        {
          url: 'https://twitter.com',
          name: 'theme',
          value: themeName,
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );
    },
  );
};

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
