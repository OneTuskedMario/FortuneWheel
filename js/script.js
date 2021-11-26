var content = document.getElementById("wheel");
var spin = document.getElementById("button");
//var delayInMilliseconds = 1000;


spin.onclick = function() {
  if (content.className == "") {
    content.className = "moved";
//    setTimeout(function() {
//    content.className = "";
//}, delayInMilliseconds);

} else {
  content.className = "";
}
};
