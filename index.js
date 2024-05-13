const shareWidget = document.getElementById("share-widget");
const shareBtn = document.getElementById("share-btn");

let flag = false;
shareBtn.addEventListener("click", (e) => {
  if (flag) {
    shareWidget.className = "share-widget";
  } else {
    shareWidget.className = "hide";
  }
  flag = !flag;
});
