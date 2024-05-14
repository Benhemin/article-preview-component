const shareWidget = document.getElementById("share-widget");
const shareBtn = document.getElementById("share-btn");
const shareBtnMobile = document.getElementById("share-btn-mobile");
const author = document.getElementById("author");
const authorAndShare = document.getElementById("author-and-share");
const shareWidgetMobile = document.getElementById("share-widget-mobile");
const card = document.getElementById("card");
const cardContent = document.getElementById("card-content");

let flag = false;
shareBtn.addEventListener("click", (e) => {
  if (window.innerWidth > 905) {
    if (flag) {
      shareWidget.className = "share-widget";
    } else {
      shareWidget.className = "hide";
    }
    flag = !flag;
  } else {
    if (flag) {
      author.className = "author";
      shareWidgetMobile.className = "hide";
    } else {
      author.className = "hide";
      authorAndShare.className = "hide";
      shareWidgetMobile.className = "share-widget-mobile";
      shareWidgetMobile.style.width = card.style.width;
      shareBtn.className = "hide";
    }
    flag = !flag;
  }
});

shareBtnMobile.addEventListener("click", (e) => {
  if (flag) {
    author.className = "author";
    authorAndShare.className = "author-and-share";
    shareWidgetMobile.className = "hide";
    shareBtn.className = "icon icon-share";
  } else {
    shareWidgetMobile.className = "share-widget-mobile";
    shareWidgetMobile.style.width = card.style.width;

    cardContent.style.justifyContent = "center";
  }
  flag = !flag;
});
