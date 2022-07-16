let resolution = document.getElementById('resolution');
window.onload = function () {
  resolution.innerHTML = "현재 가로 길이: " + innerWidth + " 세로 길이: " + innerHeight;
};
document.onresize = function () {
  resolution.innerHTML = "현재 가로 길이: " + innerWidth + " 세로 길이: " + innerHeight;
};