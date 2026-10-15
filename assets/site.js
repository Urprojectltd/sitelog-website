// The only script on the site. Two small jobs; every page works the same
// without it.
(function () {
  // The language switcher in the menu bar closes when you click elsewhere
  // or press Escape.
  var menu = document.querySelector(".lang-menu");
  if (menu) {
    document.addEventListener("click", function (e) {
      if (menu.open && !menu.contains(e.target)) menu.open = false;
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.open) menu.open = false;
    });
  }

  // In the hero, a mark on the photo and its line in the list light up
  // together when the pointer is on either.
  var sheet = document.querySelector("[data-sheet]");
  if (!sheet) return;
  var parts = sheet.querySelectorAll("[data-no]");
  function on(no) {
    if (no) sheet.setAttribute("data-on", no);
    else sheet.removeAttribute("data-on");
  }
  parts.forEach(function (el) {
    var no = el.getAttribute("data-no");
    el.addEventListener("mouseenter", function () { on(no); });
    el.addEventListener("mouseleave", function () { on(null); });
  });
})();
