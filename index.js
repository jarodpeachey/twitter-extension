// document.addEventListener("DOMContentLoaded", () => {
const getCookie = (cookieName) => {
  const name = `${cookieName}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
};

(function () {
  const backgroundColorInput = document.getElementById('backgroundColor');
  backgroundColorInput.addEventListener('change', updateBackground);
  chrome.cookies.get({url: 'https://twitter.com', name: 'backgroundcolor'}, function (cookie) {
    console.log(cookie);
    backgroundColorInput.value = cookie.value;
  });

  const hoverColorInput = document.getElementById('hoverColor');
  hoverColorInput.addEventListener('change', updateHover);
  chrome.cookies.get({url: 'https://twitter.com', name: 'hovercolor'}, function (cookie) {
    console.log(cookie);
    hoverColorInput.value = cookie.value;
  });

  const accentColorInput = document.getElementById('accentColor');
  accentColorInput.addEventListener('change', updateAccent);
  chrome.cookies.get({url: 'https://twitter.com', name: 'accentcolor'}, function (cookie) {
    console.log(cookie);
    accentColorInput.value = cookie.value;
  });

  const textColorInput = document.getElementById('textColor');
  textColorInput.addEventListener('change', updateText);
  chrome.cookies.get({url: 'https://twitter.com', name: 'textcolor'}, function (cookie) {
    console.log(cookie);
    textColorInput.value = cookie.value;
  });

  const cardBackgroundInput = document.getElementById('cardBackground');
  cardBackgroundInput.addEventListener('change', updateCardBackground);
  chrome.cookies.get({url: 'https://twitter.com', name: 'cardbackground'}, function (cookie) {
    console.log(cookie);
    cardBackgroundInput.value = cookie.value;
  });

  const cardRadiusInput = document.getElementById('cardRadius');
  cardRadiusInput.addEventListener('change', updateCardRadius);
  chrome.cookies.get({url: 'https://twitter.com', name: 'cardradius'}, function (cookie) {
    console.log(cookie);
    cardRadiusInput.value = cookie.value;
  });

  const cardShadowInput = document.getElementById('cardShadow');
  cardShadowInput.addEventListener('change', updateCardShadow);
  chrome.cookies.get({url: 'https://twitter.com', name: 'cardshadow'}, function (cookie) {
    console.log(cookie);
    cardShadowInput.value = cookie.value;
  });

  function updateBackground(e) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'backgroundcolor',
        value: e.target.value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }

  function updateHover(e) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'hovercolor',
        value: e.target.value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }

  function updateAccent(e) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'accentcolor',
        value: e.target.value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }

  function updateText(e) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'textcolor',
        value: e.target.value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }
  function updateCardBackground(e) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'cardbackground',
        value: e.target.value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }
  function updateCardRadius(e) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'cardradius',
        value: e.target.value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }
  function updateCardShadow(e) {
    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'cardshadow',
        value: e.target.value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function () {},
    );
  }

  const collapseElements = document.querySelectorAll('.collapse');
  console.log(collapseElements);

  collapseElements.forEach((collapse) => {
    console.log(collapse.id);
    // GET ELEMENTS
    const collapseTitle = collapse.children[0];
    const collapseContent = collapse.children[1];

    console.log(collapseTitle, collapseContent);

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
})();
// })
