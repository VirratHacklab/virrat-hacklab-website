(function (window, document) {

    let scrollTimer;
    let titleTextLeft = false;

    document.addEventListener('DOMContentLoaded', function(event) {
        init();
    });

    function init() {
        const titleText = document.getElementById('title-text');
        const hiddenLogo = document.getElementById('hidden-logo');
        document.addEventListener('scroll', function(event) {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(function() {
                if (!titleTextLeft && document.documentElement.scrollTop > 97) {
                    titleText.classList.add('move-left');
                    hiddenLogo.classList.add('move-left');
                    titleTextLeft = true;
                } else if(titleTextLeft && document.documentElement.scrollTop <= 97) {
                    titleText.classList.remove('move-left');
                    hiddenLogo.classList.remove('move-left');
                    titleTextLeft = false;
                }
            }, 50);
        });
    }
}(window, window.document));
