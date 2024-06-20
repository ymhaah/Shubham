import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "@/Button";

gsap.registerPlugin(useGSAP);

/**
 * Header component.
 * Renders the header with navigation and logo.
 * @returns {JSX.Element} - Rendered header component.
 */
function Header(): JSX.Element {
    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Service", href: "#service" },
    ];

    const header = useRef<HTMLDivElement>(null);
    const nav = useRef<HTMLDivElement>(null);

    const [navOpenState, setNavOpenState] = useState<
        "closed" | "opened" | "closing"
    >("closed");

    useGSAP(
        () => {
            let lastScrollY = window.scrollY;

            const handleScroll = () => {
                if (!header.current) return;
                const currentScrollY = window.scrollY;

                if (currentScrollY > lastScrollY) {
                    // ? Scrolling Down
                    gsap.to(header.current, {
                        y: -header.current.offsetHeight,
                        duration: 0.5,
                    });
                } else {
                    // ? Scrolling Up
                    gsap.to(header.current, { y: 0, duration: 0.5 });
                }

                lastScrollY = currentScrollY;
            };

            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        },
        { scope: header, dependencies: [] }
    );

    function toggleNav() {
        if (navOpenState === "closed") {
            setNavOpenState("opened");
        } else if (navOpenState === "opened") {
            setNavOpenState("closing");
            if (nav.current) {
                // ? Listen for animation end to change data state to closed
                nav.current.addEventListener(
                    "animationend",
                    () => {
                        setNavOpenState("closed");
                    },
                    {
                        once: true,
                    }
                );
            }
        }
    }

    useEffect(() => {
        // ? Closes the navigation menu when scroll away.
        function handleScroll() {
            if (navOpenState === "opened") {
                setNavOpenState("closing");
                if (nav.current) {
                    // ? Listen for animation end to change state to closed
                    nav.current.addEventListener(
                        "animationend",
                        () => {
                            setNavOpenState("closed");
                        },
                        { once: true }
                    );
                }
            }
        }

        window.addEventListener("scroll", handleScroll, { once: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navOpenState]);

    return (
        <header className="header" ref={header}>
            <div className="Container header__container">
                <div className="header__logo-wrapper">
                    <a href="/index.html" className="main-logo focus">
                        Shubham
                    </a>
                </div>
                <div className="header__nav-wrapper">
                    <Button
                        iconOnlyAlt="Menu Toggle"
                        type="button"
                        aria-controls="main-navigation-list"
                        aria-expanded={navOpenState === "opened"}
                        handleClick={toggleNav}
                        className="header__toggle-button"
                    >
                        {navOpenState === "opened" ? (
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                aria-labelledby="close-icon"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title id="close-icon">close icon</title>
                                <path
                                    d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                                    fill="black"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="18"
                                height="12"
                                viewBox="0 0 18 12"
                                fill="none"
                                aria-labelledby="menu-icon"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title id="menu-icon">menu icon</title>
                                <path
                                    d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                                    fill="black"
                                />
                            </svg>
                        )}
                    </Button>
                    <nav
                        className={`header__nav ${
                            navOpenState === "opened"
                                ? "header__nav--opened"
                                : navOpenState === "closing"
                                ? "header__nav--closing"
                                : "header__nav--closed"
                        }`}
                        ref={nav}
                        aria-label="Main Navigation"
                    >
                        <ul
                            id="main-navigation-list"
                            className="header__nav-list"
                        >
                            {navLinks.map((link, index) => (
                                <li key={index} className="header__nav-item">
                                    <a
                                        href={link.href}
                                        className="header__nav-link focus"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li className="header__nav-item header__nav-item--button">
                                <Button
                                    className="btn-primary"
                                    as="a"
                                    href="#input-name"
                                >
                                    Hire Me
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
