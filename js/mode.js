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

const createButton = document.getElementById('create');
const cancelButton = document.getElementById('cancel');
const newThemeButton = document.getElementById('new');

const mainContent = document.getElementById('main-content');
const title = document.getElementById('title');

newThemeButton.addEventListener('click', (e) => {
  document.body.classList.add('new');
  title.value = 'New Theme';
  title.classList.add('active');
  newThemeButton.style.display = 'none';
  title.disabled = false;

  console.log(cancelButton);
});

cancelButton.addEventListener('click', (e) => {
  console.log('CANCELLING');
  document.body.classList.remove('new');
  title.value = 'Themes';
  title.classList.remove('active');
  title.disabled = true;
  newThemeButton.style.display = 'block';
});

createButton.addEventListener('click', (e) => {
  const theme = {
    primaryColor: primaryColorInput.value,
    backgroundColor: backgroundColorInput.value,
    hoverColor: hoverColorInput.value,
    cardBackground: cardBackgroundInput.value,
    accentColor: accentColorInput.value,
    textColor: textColorInput.value,
    radius: radiusInput.value,
    cardShadow: cardShadowInput.value,
    buttonBackground: buttonBackgroundInput.value,
    buttonRadius: buttonRadiusInput.value,
    buttonTextColor: buttonTextColorInput.value,
    inputTextColor: inputTextColorInput.value,
    inputBackground: inputBackgroundInput.value,
  };

  chrome.cookies.set(
    {
      url: 'https://twitter.com',
      name: `theme-${title.value.toLowerCase().replace(/ /, '')}`,
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

  setTimeout(() => {
    document.body.classList.remove('new');
    title.value = 'Themes';
    title.classList.remove('active');
    title.disabled = true;
    newThemeButton.style.display = 'block';

    chrome.tabs.getSelected(null, function (tab) {
      var code = 'window.location.reload();';
      chrome.tabs.executeScript(tab.id, { code: code });
    });

    window.location.reload();
  }, 400);
});
