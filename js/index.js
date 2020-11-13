//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////     FUNCTION DECLARATIONS     /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
const changeTheme = (themeName) => {
  chrome.cookies.get(
    {
      url: 'https://twitter.com',
      name: themeName,
    },
    function (cookie) {
      const newTheme = JSON.parse(cookie.value);

      inputs.forEach((input) => {
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

      chrome.tabs.getSelected(null, function (tab) {
        var code = `
          document.documentElement.style.setProperty(
            '--primaryColor',
            '${newTheme.primarycolor}',
          );
          document.documentElement.style.setProperty(
            '--backgroundColor',
            '${newTheme.backgroundcolor}',
          );
          document.documentElement.style.setProperty(
            '--hoverColor',
            '${newTheme.hovercolor}',
          );
          document.documentElement.style.setProperty(
            '--accentColor',
            '${newTheme.accentcolor}',
          );
          document.documentElement.style.setProperty(
            '--textColor',
            '${newTheme.textcolor}',
          );
          document.documentElement.style.setProperty(
            '--cardBackground',
            '${newTheme.cardbackground}',
          );
          document.documentElement.style.setProperty(
            '--radius',
            '${newTheme.radius}',
          );
          document.documentElement.style.setProperty(
            '--cardShadow',
            '${newTheme.cardshadow}',
          );
          document.documentElement.style.setProperty(
            '--buttonBackground',
            '${newTheme.buttonbackground}',
          );
          document.documentElement.style.setProperty(
            '--buttonTextColor',
            '${newTheme.buttontextcolor}',
          );
          document.documentElement.style.setProperty(
            '--buttonRadius',
            '${newTheme.buttonradius}',
          );
          document.documentElement.style.setProperty(
            '--inputTextColor',
            '${newTheme.inputtextcolor}',
          );
          document.documentElement.style.setProperty(
            '--inputBackground',
            '${newTheme.inputbackground}',
          );
        `;
        chrome.tabs.executeScript(tab.id, { code: code });
      });
    },
  );
};

const setInputValue = (name, element) => {
  chrome.cookies.get({ url: 'https://twitter.com', name: name }, function (
    cookie,
  ) {
    if (cookie) {
      element.value = cookie.value || themes[0][name];
    } else {
      element.value = themes[0][name];
    }
  });
};

const updateInputValue = (input, value) => {
  input.value = value;
};

const updateCookie = (name, value) => {
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
    },
  );
});

refreshButton.addEventListener('click', (e) => {
  // changeTheme(selectedTheme);
  // chrome.cookies.get(
  //   {
  //     url: 'https://twitter.com',
  //     name: selectedTheme,
  //   },
  //   function (cookie) {
  //     const theme = JSON.parse(cookie.value);
  //     chrome.tabs.getSelected(null, function (tab) {
  //       var code = `
  //         document.documentElement.style.setProperty(
  //           '--primaryColor',
  //           '${theme.primarycolor}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--backgroundColor',
  //           '${theme.backgroundcolor}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--hoverColor',
  //           '${theme.hovercolor}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--accentColor',
  //           '${theme.accentcolor}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--textColor',
  //           '${theme.textcolor}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--cardBackground',
  //           '${theme.cardbackground}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--radius',
  //           '${theme.radius}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--cardShadow',
  //           '${theme.cardshadow}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--buttonBackground',
  //           '${theme.buttonbackground}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--buttonTextColor',
  //           '${theme.buttontextcolor}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--buttonRadius',
  //           '${theme.buttonradius}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--inputTextColor',
  //           '${theme.inputtextcolor}',
  //         );
  //         document.documentElement.style.setProperty(
  //           '--inputBackground',
  //           '${theme.inputbackground}',
  //         );
  //       `;
  //       chrome.tabs.executeScript(tab.id, { code: code });
  //     });
  //   },
  // );
  // setTimeout(() => {
  //   window.location.reload();
  // }, 200);
});

cancelButton.addEventListener('click', (e) => {
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
  title.disabled = true;

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

    changeTheme(selectedTheme);
  }, 400);
});

createButton.addEventListener('click', (e) => {
  const theme = {
    name: `theme-${title.value.toLowerCase().replace(/ /, '-')}`,
    title: title.value,
  };

  inputs.forEach((input) => {
    theme[input.name] = input.element.value;
    updateCookie(input.name, input.element.value);
  });

  chrome.cookies.set(
    {
      url: 'https://twitter.com',
      name: theme.name,
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
    const themesArray = array.filter((item) => item.name.includes('theme-'));

    categories.forEach((category) => {
      const collapse = document.createElement('div');
      const h3 = document.createElement('h3');
      const spanOne = document.createElement('span');
      const spanTwo = document.createElement('span');
      const content = document.createElement('div');
      const contentInner = document.createElement('div');
      const row = document.createElement('div');

      collapse.className = 'collapse';
      collapse.id = category.toLowerCase();
      spanOne.innerHTML = category;
      spanTwo.innerHTML = '+';
      h3.className = `collapse__title ${category.toLowerCase()}__title`;
      content.className = `collapse__content ${category.toLowerCase()}__content`;
      contentInner.id = `${category.toLowerCase()}__inner`;
      row.className = 'row padding';
      row.id = `${category.toLowerCase()}__row`;

      themesArray
        .filter((theme) => JSON.parse(theme.value).category)
        .filter(
          (theme) =>
            JSON.parse(theme.value).category.toLowerCase() ===
            category.toLowerCase(),
        )
        .forEach((item) => {
          item = JSON.parse(item.value);

          const themeItem = document.createElement('div');
          themeItem.className = 'theme__item';
          themeItem.id = item.name.toLowerCase();
          themeItem.innerHTML = item.title;

          const column = document.createElement('div');
          column.classList.add('col');
          column.appendChild(themeItem);

          row.appendChild(column);
        });

      h3.appendChild(spanOne);
      h3.appendChild(spanTwo);
      contentInner.appendChild(row);
      content.appendChild(contentInner);
      collapse.appendChild(h3);
      collapse.appendChild(content);

      presetsWrapper.appendChild(collapse);

      // GET ELEMENTS
      const collapseTitle = collapse.children[0];
      const collapseContent = collapse.children[1];

      // ADD EVENT LISTENER
      collapseTitle.addEventListener('click', toggleCollapse);

      // IMPORTANT VARIABLES
      let open = false;
      const childrenHeight = collapseContent.children[0].clientHeight + 16;

      function toggleCollapse() {
        if (open) {
          collapse.classList.remove('open');
          collapseContent.style.maxHeight = '0px';

          open = false;
        } else {
          collapse.classList.add('open');
          collapseContent.style.maxHeight = `${childrenHeight}px`;

          open = true;

          // collapseElements.forEach(newCollapse => {
          //   if (newCollapse.id !== collapse.id) {
          //     console.log('Closing');
          //     newCollapse.classList.remove('open');
          //     newCollapse.children[1].style.maxHeight = '0px';
          //   }
          // })
        }
      }
    });

    const collapse = document.createElement('div');
    const h3 = document.createElement('h3');
    const spanOne = document.createElement('span');
    const spanTwo = document.createElement('span');
    const content = document.createElement('div');
    const contentInner = document.createElement('div');
    const row = document.createElement('div');

    collapse.className = 'collapse';
    collapse.id = 'custom';
    spanOne.innerHTML = 'Custom';
    spanTwo.innerHTML = '+';
    h3.className = `collapse__title custom__title`;
    content.className = `collapse__content custom__content`;
    contentInner.id = `custom__inner`;
    row.className = 'row padding';
    row.id = `custom__row`;

    const filteredArray = themesArray.filter(
      (theme) =>
        !JSON.parse(theme.value).category && JSON.parse(theme.value).name,
    );

    console.log(filteredArray.length);

    if (filteredArray.length > 0) {
      filteredArray
        .sort(function (a, b) {
          var nameA = JSON.parse(a.value).title.toLowerCase(),
            nameB = JSON.parse(b.value).title.toLowerCase();

          if (nameA < nameB)
            //sort string ascending
            return -1;
          if (nameA > nameB) return 1;
          return 0; //default return value (no sorting)
        })
        .forEach((item) => {
          item = JSON.parse(item.value);

          const themeItem = document.createElement('div');
          themeItem.className = 'theme__item';
          themeItem.id = item.name.toLowerCase();
          themeItem.innerHTML = item.title;

          const column = document.createElement('div');
          column.classList.add('col');
          column.appendChild(themeItem);

          row.appendChild(column);
        });

      h3.appendChild(spanOne);
      h3.appendChild(spanTwo);
      contentInner.appendChild(row);
      content.appendChild(contentInner);
      collapse.appendChild(h3);
      collapse.appendChild(content);

      presetsWrapper.appendChild(collapse);

      // GET ELEMENTS
      const collapseTitle = collapse.children[0];
      const collapseContent = collapse.children[1];

      // ADD EVENT LISTENER
      collapseTitle.addEventListener('click', toggleCollapse);

      // IMPORTANT VARIABLES
      let open = false;
      const childrenHeight = collapseContent.children[0].clientHeight + 16;

      function toggleCollapse() {
        if (open) {
          collapse.classList.remove('open');
          collapseContent.style.maxHeight = '0px';

          open = false;
        } else {
          collapse.classList.add('open');
          collapseContent.style.maxHeight = `${childrenHeight}px`;

          open = true;
        }
      }
    }

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

              changeTheme(presetButton.id);
            });
          });
        } else {
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

              changeTheme(presetButton.id);
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
