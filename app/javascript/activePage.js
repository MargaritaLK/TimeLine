const activePage = () => {
  const path = document.location.pathname
  const linksPath = document.querySelectorAll('.link-page')
  const activeNavButtons = document.querySelectorAll('.nav-buttons.nav-active')

  // console.log(path)
  // console.log(linksPath)
  // console.log(activeNavButtons)

  activeNavButtons.forEach(item => item.classList.remove('nav-active'))

  linksPath.forEach((link) => {
    if (path === link.pathname) {
      link.classList.add('nav-active');
    }
  });
}

export { activePage };
