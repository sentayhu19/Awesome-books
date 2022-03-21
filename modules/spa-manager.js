import selector from "./selectors.js";



selector.links.forEach((link) => {
  link.addEventListener('click', () => {
    if (link.classList.contains('active')) return;

    selector.links.forEach((a) => {
      a.classList.remove('active');
    });

    link.classList.add('active');

    document.querySelector('.flex').classList.remove('flex');

    document.querySelector(`.${link.id}`).classList.add('flex');
  });
});
export default selector.links;
