import Isotope from "isotope-layout";

export const initializeIsotop = (item) => {
    let filter_menu = item.closest(".grid-wrapper").querySelector(".filter-menu");

    const grid = new Isotope(item, {
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        percentPosition: true,
        stagger: 0,
        masonry: {
            columnWidth: '.grid-sizer',
        }
    })

    setTimeout(() => {
        grid.arrange({ filter: `*` })
    }, 1000);

    filter_menu && filter_menu.querySelectorAll("li").forEach((el) => {
        el.querySelector("span").addEventListener("click", function (e) {
            let element = e.target,
                filtered_text = element.getAttribute("data-filter");

            filter_menu.querySelectorAll("li").forEach((elm) => elm.classList.remove("active"))
            element.closest("li").classList.add("active");
            grid.arrange({ filter: filtered_text === "*" ? "*" : `.${filtered_text}` })
        })
    })

    return grid
}

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