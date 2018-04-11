(function () {
    "use strict";

    var mainList = document.querySelector('.main-list');
    var submenu = document.querySelector('#submenu');
    var submenus = document.querySelectorAll('#submenu');
    var targetElemForSubmenu = document.querySelector('#target-elem-for-submenu');

    mainList.onmouseover = function (e) {
        var target = e.target;
        while (target.className != mainList.className) {
            if (target.id == targetElemForSubmenu.id) {
                target.children[1].style.display = 'inline';
                // target.children[1].style.opacity = 1;
                // console.dir(target.children[1].style);
                target.children[1].style.animation = 'fadeIn linear 1 150ms running';
                setTimeout(function () {
                    target.children[1].style.opacity = 1;
                }, 150 * 0.99); // %
                break;
            }
            target = target.parentNode;
        }
    };

    mainList.onmouseout = function (e) {
        var target = e.target;
        while (target.className != mainList.className) {
            if (target.id != 'target-elem-for-submenu' && target.id != 'submenu' || target.tagName != 'UL') {
                for (var i = 0; i < submenus.length; i++) {
                    // submenus[i].style.animation = 'fadeOut linear 1 150ms running';
                    submenus[i].style.display = 'none';
                }
                break;
            }
            target = target.parentNode;
        }
    };

})();