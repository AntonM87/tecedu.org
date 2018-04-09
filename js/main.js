(function () {
    "use strict";

    var mainList = document.querySelector('.main-list');
    var submenu = document.querySelector('#submenu');
    var targetElemForSubmenu = document.querySelector('#target-elem-for-submenu');

    document.onmouseover = function (e) {
        var target = e.target;
        while (target.className != mainList.className) {
            if(target.id == targetElemForSubmenu.id) {
                target.children[1].style.display = 'inline';
                // target.children[1].style.opacity = 1;
                // console.dir(target.children[1].style);
                target.children[1].style.animation = 'fadeIn linear 1 150ms running';
                setTimeout(function () {
                    target.children[1].style.opacity = 1;
                },150 * 0.99); // %
                break;
            }
            target = target.parentNode;
        }
    };

    // document.onmouseout = function (e) {
    //     var target = e.target;
    //     while (target.id != targetElemForSubmenu.id || target.id != submenu.id) {
    //         if()

    //         break;
    //     }
    //     target = target.parentNode;
    // };

})();