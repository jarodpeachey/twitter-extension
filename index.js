// document.addEventListener("DOMContentLoaded", () => {
(function () {
  document
    .getElementById('backgroundColor')
    .addEventListener('change', updateBackground);

  function updateBackground(e) {
    console.log(e.target.value);

    console.log(chrome);

    chrome.cookies.set(
      {
        url: 'https://twitter.com',
        name: 'backgroundcolor',
        value: e.target.value,
        expirationDate: new Date().getTime() + 10 * 365 * 24 * 60 * 60,
      },
      function (cookie) {
        console.log(cookie);
      },
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