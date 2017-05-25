// loading 
var loadingUp = document.getElementById('loading-up');
var loadingDown = document.getElementById('loading-down');
var loadingView = document.getElementById('loading');
var progressBar = document.getElementById('progress');
checkImageCache();

var progress = 0;
function addProgress() {
  progress += 2;
  progress = Math.min(98, progress);
  console.log(progress);
  // if (progress >= 100) {
  //   progressBar.innerText = "100%";
  //   loadingUp.classList.add('animated-up');
  //   loadingDown.classList.add('animated-down');
  //   clearInterval(progressInterval);
  // } else {
  progressBar.innerText = progress + '%';
  // }
}
var progressInterval = setInterval(addProgress, 100);
loadingUp.addEventListener('animationend', function () {
  loadingView.classList.add('hide');
})

function assetDownloadCompleted() {
  progressBar.innerText = "100%";
  clearInterval(progressInterval);
  setTimeout(function () {
    loadingUp.classList.add('animated-up');
    loadingDown.classList.add('animated-down');
  }, 2000);
}

function checkImageCache() {
  var imageUrl = './static_assets/vrimage.jpeg';
  var vrImage = new Image();
  vrImage.src = imageUrl;
  if (vrImage.complete) {
    console.log('vr image has cached');
    assetDownloadCompleted();
  } else {
    vrImage.onload = function () {
      console.log('vr image download completed');
      assetDownloadCompleted();
    }
  }
}