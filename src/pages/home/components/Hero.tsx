import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable, ScrollToPlugin);

import { useRef } from "react";

import figma from "@icon/figma.svg";
import github from "@icon/github.svg";
import vsCode from "@icon/vsCode.svg";
import heroImage from "@img/hero-highlight.png";

import heroProject1 from "@img/hero-project-1.png";
import heroProject2 from "@img/hero-project-2.png";
import heroProject3 from "@img/hero-project-3.png";
import heroProject4 from "@img/hero-project-4.png";

/**
 * Hero component.
 * Renders the hero section with a scrolling or draggable project slider based on screen size.
 * @returns {JSX.Element} Rendered hero component.
 */
function Hero(): JSX.Element {
    const hero = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const projects = gsap.utils.toArray(".hero__project");
            const wrapper = document.querySelector(".hero__scroll-wrapper");

            function scrollSlider() {
                gsap.to(".hero__project", {
                    xPercent: -100 * (projects.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".hero__scroll-wrapper",
                        pin: true,
                        scrub: 1,
                        start: "top 25%",
                        end: `+=${projects.length * 1000}`,
                    },
                });
            }

            function touchSlider() {
                const wrapperWidth = wrapper
                    ? wrapper.scrollWidth + 16 * projects.length
                    : 0;
                const viewportWidth = window.innerWidth;
                Draggable.create(wrapper, {
                    type: "x",
                    bounds: {
                        minX: -(wrapperWidth - viewportWidth),
                        maxX: 0,
                    },
                    inertia: true,
                });
            }

            function handleResize() {
                Draggable.get(".hero__scroll-wrapper")?.kill();
                ScrollTrigger.getAll()?.forEach((trigger) => trigger.kill());
                if (window.innerWidth >= 768) {
                    gsap.set(".hero__scroll-wrapper", { x: "20%" });
                    scrollSlider();
                } else {
                    gsap.set(".hero__scroll-wrapper", { x: "5%" });
                    // gsap.set(window, {
                    //     scrollTo: { y: 0, autoKill: true },
                    // });
                    touchSlider();
                }
            }

            window.addEventListener("resize", handleResize);

            // Initial load
            handleResize();

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        },
        { scope: hero, dependencies: [] }
    );

    return (
        <main className="hero" ref={hero} id="hero">
            <div className="Container hero__container">
                <h1 className="hero__title">
                    Lorem
                    <span className="avatar-group">
                        <ul>
                            <li>
                                <img src={figma} alt="figma" />
                            </li>
                            <li>
                                <img src={github} alt="github" />
                            </li>
                            <li>
                                <img src={vsCode} alt="vsCode" />
                            </li>
                        </ul>
                    </span>
                    ipsum dolor <br />
                    sorem, ipsum
                    <span className="hero__highlight">
                        <img src={heroImage} alt="" role="presentation" />
                    </span>
                    dolor <br />
                </h1>
                <p className="hero__subtitle">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor <br /> sit amet
                    dolor ipsum
                </p>
                <div className="hero__scroll-wrapper">
                    <div className="hero__project">
                        <img src={heroProject1} alt="" />
                    </div>
                    <div className="hero__project">
                        <img src={heroProject2} alt="" />
                    </div>
                    <div className="hero__project">
                        <img src={heroProject3} alt="" />
                    </div>
                    <div className="hero__project">
                        <img src={heroProject4} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;

// TODO: fix the scroll when resizing the window
