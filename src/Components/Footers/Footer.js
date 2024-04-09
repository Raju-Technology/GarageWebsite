import React, { memo, useContext, useEffect } from "react"

//Libraries
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"

//Data
import GlobalContext from "../../Context/Context"

// css
import "../../Assets/scss/layouts/_footer.scss"

export const Footer = (props) => {
    // Add Global Data
    const { setFooterHeight } = useContext(GlobalContext);

    useEffect(() => {
        // Calculate Footer Height
        let footerEl = document.querySelector("footer");

        function setTopSpace() {
            let windowWidth = window.innerWidth;
            let footerHeight = 0;

            if (props.parallax) {
                if (props.parallax.desktop === true) {
                    footerHeight = footerEl.offsetHeight;
                    footerEl.classList.add("pos-fixed")
                }

                if (windowWidth <= 1199) {
                    if (props.parallax.lg === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed")
                    }

                    if (props.parallax.lg === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }

                if (windowWidth <= 991) {
                    if (props.parallax.md === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed")
                    }

                    if (props.parallax.md === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }

                if (windowWidth <= 767) {
                    if (props.parallax.sm === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed")
                    }

                    if (props.parallax.sm === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }

                if (windowWidth <= 575) {
                    if (props.parallax.xs === false) {
                        footerHeight = 0;
                        footerEl.classList.remove("pos-fixed");
                    }

                    if (props.parallax.xs === true) {
                        footerHeight = footerEl.offsetHeight;
                        footerEl.classList.add("pos-fixed")
                    }
                }
            }

            setFooterHeight(footerHeight - 1)
        }

        setTimeout(setTopSpace, 1000);
        window.addEventListener("resize", function () {
            setTimeout(setTopSpace, 1000);
        });
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <footer className={`${props.theme}${props.className ? ` ${props.className}` : ""}`} style={props.style}>
            {props.children}
        </footer>
    )
}

Footer.defaultProps = {
    theme: "dark"
}

// export default memo(FooterMenu)
