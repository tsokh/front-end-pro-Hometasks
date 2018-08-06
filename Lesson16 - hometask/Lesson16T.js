window.onload = function(){
    let params = {
        h: 100,
        step: 5,
        crtlWidth: 115,
        crtlHeight: 60
    }

    list = [
        {
            title: 'Jump',
            action: 'jump'
        },
        {
            title: 'Remove',
            action: 'remove'
        },
        {
            title: 'ChangeColor',
            action: 'changeColor'
        }
    ];

    list.actions = {
        jump: jumpAction,
        remove: removeAction,
        changeColor: changeColorAction
    }


    let menuFirst = createMenu(document.body, list);
    let div = document.createElement('DIV');
    div.classList.add('block');
    document.body.appendChild(div);

    let divStyle = getComputedStyle(div);
    params.left = parseInt(divStyle.left, 10);
    params.top = parseInt(divStyle.top, 10);
    params.divHeight = parseInt(divStyle.height, 10);
    params.divWidth = parseInt(divStyle.width, 10);

    let crowl = false;
    function press(event) {
        hideMenu(menuFirst);
        //ctrl
        if (!crowl && event.ctrlKey) {
            crowl = true;
            div.classList.toggle('crowl', true);
        }

        switch (event.keyCode) {
            //space
            case 32:
            // jump
                jump(div);
                break;
            //right
            case 39:
            // move right
                moveRight(div);
                break;
            //left
            case 37:
            // move left
                moveLeft(div);
                break;
            //up
            case 38:
            // move up
                moveUp(div);
                break;
            //down
            case 40:
            // move down
                moveDown(div);
                break;
        }
    }

    function jump(target) {
        if (params.top - params.h >= 0 && !crowl) {
                    target.style.top = params.top - params.h + 'px';
                    params.top -= params.h;
                    setTimeout(function () {
                        target.style.top = params.top + params.h + 'px';
                        params.top += params.h;
                    }, 300);
                }
    }

    function moveRight(target) {
        if (params.left + params.step + params.divWidth <= window.innerWidth) {
            target.style.left = params.left + params.step + 'px';
            params.left += params.step;
        }
    }

    function moveLeft(target) {
        if (params.left - params.step >= 0) {       
            target.style.left = params.left - params.step + 'px';
            params.left -= params.step; 
        }
    }

    function moveUp(target) {
        if (params.top - params.step >= 0 && !crowl) {
            target.style.top = params.top - params.step + 'px';
            params.top -= params.step;
        }
    }

    function moveDown(target) {
        if (params.top + params.step + params.divHeight <= window.innerHeight && !crowl) {
            target.style.top = params.top + params.step + 'px';
            params.top += params.step;
        }
    }

    function unpressed(event) {
        switch (event.keyCode) {
            case 17:
                if (crowl) {
                    crowl = false;
                    div.classList.toggle('crowl', false);
                }
        }
    }


    document.addEventListener('keydown', press);
    document.addEventListener('keyup', unpressed);
    
    // context Menu generation
    document
        .addEventListener('contextmenu', function(e){
            e.preventDefault();
            showMenu(menuFirst, e.clientX, e.clientY);
        })

    document
        .addEventListener('click', function(e){
            hideMenu(menuFirst);
        })

    function createMenu(target, list){
        if (!target || !list) {
            return;
        }

        menu = document.querySelector('.menu.pattern').cloneNode();
        menu.classList.remove('pattern');

        for(var i = 0; i < list.length; i++){
            item = document
                .querySelector('.menu__item.pattern')
                .cloneNode(true);
            item.classList.remove('pattern');

            item
                .querySelector('.menu__title')
                .innerHTML = list[i].title;

            item.addEventListener('click', list.actions[list[i].action]);

            menu.appendChild(item);
        }


        target.appendChild(menu);
        return menu;
    }

    function showMenu(target, clientX, clientY) {
        
        target.classList.add('show');
        // task 4
        if (clientX + target.offsetWidth > window.innerWidth) {
            target.style.left = clientX - target.offsetWidth + 'px';
        } else target.style.left = clientX + 'px';
        if (clientY + target.offsetHeight > window.innerHeight) {
            target.style.top = clientY - target.offsetHeight + 'px';
        } else target.style.top = clientY + 'px';
    }

    function hideMenu(target) {
        target.classList.remove('show');
    }

    function jumpAction(){
        jump(div);
    }

    function removeAction(){
        div.classList.toggle('remove');
    }

    function changeColorAction(){
        div.style.backgroundColor = 'RGB(' + randomColor() + ',' + randomColor() + ',' + randomColor() +')';
    }

    function randomColor() {
        return Math.floor(Math.random() * 255) + 1; 
    }
}