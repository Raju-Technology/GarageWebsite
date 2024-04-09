export const SetHeaderMenuPos = () => {
    
    function setMegaMenuPos() {
        let menu = document.querySelectorAll(".megamenu");
        if (menu.length > 0) {
            
            menu.forEach(item => {
                let menuWidth = item.clientWidth,
                    menuLeftPos = item.getBoundingClientRect().left;

                if (menuLeftPos + menuWidth >= window.screen.width) {
                    item.style.left = `-${(menuLeftPos + menuWidth) - window.innerWidth + 25}px`;
                }
            })
        }
    }

    function setSimpleMenuPos() {
        let menu = document.querySelectorAll(".simple-dropdown-menu");
        
        if (typeof (menu) != 'undefined' && menu != null) {
            menu.forEach(item => {
                let pos = item.getBoundingClientRect().left,
                    posTop = item.getBoundingClientRect().top,
                    width = item.clientWidth,
                    height = item.clientHeight;

                if (pos + width + 10 > window.innerWidth) {
                    item.style.left = `${window.innerWidth - (pos + width + 10)}px`;
                    item.classList.add("menu-left");
                }

                if ((posTop + height) > window.innerHeight) {
                    item.style.transform = `translateY(${-(posTop + height - window.innerHeight)}px)`;
                }
            })
        }
    }

    setMegaMenuPos();
    setSimpleMenuPos();

    window.addEventListener('resize', (event) => {
        setTimeout(() => {
            setMegaMenuPos();
            setSimpleMenuPos();
        }, 500);
    });
}

export const setDocumentFullHeight = () => {
    const documentHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--viewport-height', `${window.innerHeight}px`)
    }

    window.addEventListener("resize", documentHeight)
    documentHeight()
}