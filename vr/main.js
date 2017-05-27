// loading 
var loadingUp = document.getElementById('loading-up');
var loadingDown = document.getElementById('loading-down');
var loadingView = document.getElementById('loading');
var progressBar = document.getElementById('progress');
checkImageCache(); 
checkLoadingImageDownloaded();
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
loadingView.addEventListener('animationend', function (e) {
  if (e.animationName == "loading-dismiss") {
    loadingView.classList.add('hide');
  }
  if (e.animationName == "showLoading") {
    return;
  }
})

function assetDownloadCompleted() {
  progressBar.innerText = "100%";
  clearInterval(progressInterval);
  setTimeout(function () {
    // loadingUp.classList.add('animated-up');
    // loadingDown.classList.add('animated-down');
    loadingView.classList.add('dismiss');
  }, 2000);
}

function checkImageCache() {
  var imageUrl = '../static_assets/vrimage.jpeg';
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

var loadingBg = document.getElementById('loading-bg');
function checkLoadingImageDownloaded() {
  var imageUrl = '../static_assets/loading.jpeg';
  var image = new Image();
  image.src = imageUrl;
  image.onload = function() {
    loadingBg.classList.add('show');
  }
}