// The only script on the site. In the hero, a mark on the photo and its line
// in the list light up together when the pointer is on either. The page
// works the same without it.
(function () {
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
