//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////     DEFAULT THEMES     ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
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
  buttontextcolor: '#ffffff',
  inputtextcolor: '#111111',
  inputbackground: '#ffffff',
};

const solarizedTheme = {
  primarycolor: '#1DA1F2',
  backgroundcolor: '#1a1e21',
  hovercolor: '#273036',
  cardbackground: '#2c363c',
  accentcolor: '#565f65',
  textcolor: '#fcfcfc',
  radius: '12px',
  cardshadow:
    '0px 2px 3px -1px rgba(0, 0, 0, 0.4), 0px 1px 4px 0px rgba(0, 0, 0, 0.2), 0px 1px 5px 0px rgba(0, 0, 0, 0.2)',
  buttonbackground: '#1DA1F2',
  buttonradius: '6px',
  buttontextcolor: '#ffffff',
  inputtextcolor: '#111111',
  inputbackground: '#ffffff',
};

const darkTheme = {
  primarycolor: '#1DA1F2',
  backgroundcolor: '#000000',
  hovercolor: '#ffffff10',
  cardbackground: '#232323',
  accentcolor: '#ffffff20',
  textcolor: '#fbfbfb',
  radius: '6px',
  cardshadow:
    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  buttonbackground: '#1DA1F2',
  buttonradius: '6px',
  buttontextcolor: '#ffffff',
  inputtextcolor: '#111111',
  inputbackground: '#ffffff',
};

const cleanTheme = {
  primarycolor: '#000000',
  backgroundcolor: '#e8e8e8',
  hovercolor: '#f7f7f7',
  cardbackground: '#ffffff',
  accentcolor: '#e8e8e8',
  textcolor: '#111111',
  radius: '3px',
  cardshadow: 'none',
  buttonbackground: '#000000',
  buttonradius: '2px',
  buttontextcolor: '#ffffff',
  inputtextcolor: '#111111',
  inputbackground: '#ffffff',
};

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////     FUNCTION DECLARATIONS     /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
const changeTheme = (themeName) => {
  console.log(themeName);
  chrome.cookies.get(
    {
      url: 'https://twitter.com',
      name: themeName,
    },
    function (cookie) {
      const newTheme = JSON.parse(cookie.value);

      inputs.forEach((input) => {
        console.log(input.name, newTheme[input.name]);
        updateCookie(input.name, newTheme[input.name]);
      });

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

const setInputValue = (name, element) => {
  chrome.cookies.get({ url: 'https://twitter.com', name: name }, function (
    cookie,
  ) {
    if (cookie) {
      element.value = cookie.value || lightTheme[name];
    } else {
      element.value = lightTheme[name];
    }
  });
};

const updateInputValue = (input, value) => {
  input.value = value;
};

const updateCookie = (name, value) => {
  console.log(value);

  chrome.cookies.set(
    {
      url: 'https://twitter.com',
      name: name,
      value: value,
      expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
    },
    function () {},
  );
};

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////     INPUT VARIABLES     ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
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

const inputs = [
  {
    name: 'primarycolor',
    element: primaryColorInput,
  },
  {
    name: 'backgroundcolor',
    element: backgroundColorInput,
  },
  {
    name: 'hovercolor',
    element: hoverColorInput,
  },
  {
    name: 'accentcolor',
    element: accentColorInput,
  },
  {
    name: 'textcolor',
    element: textColorInput,
  },
  {
    name: 'cardbackground',
    element: cardBackgroundInput,
  },
  {
    name: 'radius',
    element: radiusInput,
  },
  {
    name: 'cardshadow',
    element: cardShadowInput,
  },
  {
    name: 'buttonbackground',
    element: buttonBackgroundInput,
  },
  {
    name: 'buttontextcolor',
    element: buttonTextColorInput,
  },
  {
    name: 'buttonradius',
    element: buttonRadiusInput,
  },
  {
    name: 'inputtextcolor',
    element: inputTextColorInput,
  },
  {
    name: 'inputbackground',
    element: inputBackgroundInput,
  },
];

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////     BUTTON/ACTION VARIABLES     ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
const refreshButton = document.getElementById('refresh');
const editButton = document.getElementById('edit');
const createButton = document.getElementById('create');
const cancelButton = document.getElementById('cancel');
const saveButton = document.getElementById('save');
const newThemeButton = document.getElementById('new');

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////     MISCELLANEOUS VARIABLES     ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
const presetsWrapper = document.getElementById('presets-wrapper');
let selectedTheme = '';
const mainContent = document.getElementById('main-content');
const title = document.getElementById('title');

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////     BUTTON EVENTS LISTENERS     ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
newThemeButton.addEventListener('click', (e) => {
  document.body.classList.add('new');
  title.value = 'New Theme';
  title.classList.add('active');
  newThemeButton.style.display = 'none';
  title.disabled = false;

  console.log(cancelButton);
});

refreshButton.addEventListener('click', (e) => {
  changeTheme(selectedTheme);

  chrome.tabs.getSelected(null, function (tab) {
    var code = 'window.location.reload();';
    chrome.tabs.executeScript(tab.id, { code: code });
  });

  setTimeout(() => {
    window.location.reload();
  }, 200);
});

cancelButton.addEventListener('click', (e) => {
  console.log('CANCELLING');
  document.body.classList.remove('new');
  document.body.classList.remove('edit');
  title.value = 'Themes';
  title.classList.remove('active');
  title.classList.remove('width');
  title.disabled = true;
  newThemeButton.style.display = 'block';
});

editButton.addEventListener('click', (e) => {
  let themeTitle = selectedTheme.substring(6, selectedTheme.length);
  themeTitle = themeTitle
    .replace('-', ' ')
    .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

  document.body.classList.add('edit');
  title.value = themeTitle;
  title.classList.add('width');
  // title.style.width = '400px';
  newThemeButton.style.display = 'none';
  title.disabled = false;

  chrome.cookies.get(
    {
      url: 'https://twitter.com',
      name: selectedTheme,
    },
    function (cookie) {
      const theme = JSON.parse(cookie.value);

      inputs.forEach((input) => {
        updateInputValue(input.element, theme[input.name]);
      });

      console.log('EDITING THEME: ', JSON.parse(cookie.value));
    },
  );
});

saveButton.addEventListener('click', (e) => {
  chrome.cookies.get(
    {
      url: 'https://twitter.com',
      name: selectedTheme,
    },
    function (cookie) {
      const theme = JSON.parse(cookie.value);

      inputs.forEach((input) => {
        theme[input.name] = input.element.value;
      });

      chrome.cookies.set(
        {
          url: 'https://twitter.com',
          name: selectedTheme,
          value: JSON.stringify(theme),
          expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
        },
        function () {},
      );
    },
  );

  setTimeout(() => {
    document.body.classList.remove('new');
    document.body.classList.remove('edit');
    title.value = 'Themes';
    title.classList.remove('active');
    title.disabled = true;
    newThemeButton.style.display = 'block';
  }, 400);
});

createButton.addEventListener('click', (e) => {
  const theme = {};

  inputs.forEach((input) => {
    theme[input.name] = input.element.value;
    updateCookie(input.name, input.element.value);
  });

  chrome.cookies.set(
    {
      url: 'https://twitter.com',
      name: `theme-${title.value.toLowerCase().replace(/ /, '-')}`,
      value: JSON.stringify(theme),
      expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
    },
    function () {},
  );

  chrome.cookies.set(
    {
      url: 'https://twitter.com',
      name: 'theme',
      value: `theme-${title.value.toLowerCase().replace(/ /, '')}`,
      expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
    },
    function () {},
  );

  chrome.tabs.getSelected(null, function (tab) {
    var code = 'window.location.reload();';
    chrome.tabs.executeScript(tab.id, { code: code });
  });

  setTimeout(() => {
    document.body.classList.remove('new');
    document.body.classList.remove('edit');
    title.value = 'Themes';
    title.classList.remove('active');
    title.disabled = true;
    newThemeButton.style.display = 'block';

    setTimeout(() => {
      window.location.reload();
    }, 200);
  }, 400);
});

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////     LOAD PRESET THEMES INFO     ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
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
        themeItem.innerHTML = title
          .replace('-', ' ')
          .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

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

        if (cookie) {
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
        } else {
          console.log('Cookie not found');
          document.getElementById('theme-light').classList.add('active');
          selectedTheme = 'theme-light';

          presetButtons.forEach((presetButton) => {
            presetButton.addEventListener('click', (e) => {
              selectedTheme = presetButton.id;

              const presetButtons = document.querySelectorAll('.theme__item');

              presetButtons.forEach((presetButton) => {
                presetButton.classList.remove('active');
              });

              document.getElementById(selectedTheme).classList.add('active');
            });
          });
        }
      },
    );
  },
);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////     UPDATE VALUES OF INPUTS     ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
inputs.forEach((input) => {
  setInputValue(input.name, input.element);

  // input.element.addEventListener('change', (e) => {
  //   updateCookie(input.name, e.target.value);
  // });
});

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////     SEND UPDATED TAB INFO     ////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.tabs.sendMessage(tabId, {
    message: 'hello!',
    url: tab.url,
  });
});
