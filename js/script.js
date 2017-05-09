function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.getElementById("header");
        if (distanceY > shrinkOn) {
            header.classList.add("block-product--small");
        } else {
            if (header.classList.contains("block-product--small")) {
                header.classList.remove("block-product--small");
            }
        }
    });
}
window.onload = init();