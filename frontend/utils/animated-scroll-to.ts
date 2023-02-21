export default function animatedScrollTo(scrollTo: number, callback: Function) {
  const scrollFrom = window.scrollY || window.pageYOffset || 0;
  const scrollDiff = scrollTo - scrollFrom;
  setTimeout(function () {
    window.scrollTo({
      top: scrollFrom + scrollDiff,
      behavior: "smooth",
    });
  }, 200);

  callback();
}
