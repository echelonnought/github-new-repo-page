const input = document.getElementById("github-input");

input.onfocus = function () {
  // browsers.style.display = 'block';
  input.style.transition = ".2s ease-in-out";
  input.style.width = "500px";
};

input.onblur = function () {
  input.style.width = "245px";
  input.style.transition = ".2s ease-in-out";
};
