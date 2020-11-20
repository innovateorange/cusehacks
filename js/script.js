document.getElementsByTagName('video')[0].onended = function () {
    this.play();
};