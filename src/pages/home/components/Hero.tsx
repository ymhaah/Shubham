import { useRef } from "react";

import Button from "@/Button";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import figma from "@icon/figma.svg";
import github from "@icon/github.svg";
import vsCode from "@icon/vsCode.svg";
import heroImage from "@img/hero-highlight.png";

import heroProject1 from "@img/hero-project-1.png";
import AvatarGroup from "@/AvatarGroup";

import heroProject2 from "@img/hero-project-2.png";
import heroProject3 from "@img/hero-project-3.png";
import heroProject4 from "@img/hero-project-4.png";

import eye from "@icon/eye.svg";
import code from "@icon/code.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable, ScrollToPlugin);

/**
 * Hero component.
 * Renders the hero section with a scrolling or draggable project slider based on screen size.
 * @returns {JSX.Element} Rendered hero component.
 */
function Hero(): JSX.Element {
    const highlights = [
        {
            img: figma,
            alt: "figma",
        },
        {
            img: github,
            alt: "github",
        },
        {
            img: vsCode,
            alt: "vsCode",
        },
    ];

    // ? don't path github link if you doesn't want to share it
    const projectsInfo = [
        {
            img: heroProject1,
            title: "antigranular",
            description: "Lorem ipsum dolor sit amet...",
            siteLink: "https://www.antigranular.com/",
            githubLink: "#",
        },
        {
            img: heroProject2,
            title: "oblivious",
            description: "Lorem ipsum dolor sit amet...",
            siteLink: "https://www.oblivious.com/",
            githubLink: "#",
        },
        {
            img: heroProject3,
            title: "lilman",
            description: "Lorem ipsum dolor sit amet...",
            siteLink: "https://lilman.netlify.app/",
        },
        {
            img: heroProject4,
            title: "Club Mobay",
            description: "Lorem ipsum dolor sit amet...",
            siteLink: "https://obi.reliablesoftjm.com/",
        },
    ];

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
                    gsap.set(window, {
                        scrollTo: { y: 0, autoKill: true },
                    });
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
                    Crafting Websites
                    <AvatarGroup avatars={highlights} />
                    That Make Your Vision <br />
                    <span className="hero__highlight">
                        <img src={heroImage} alt="" role="presentation" />
                    </span>
                    Shine <br />
                </h1>
                <p className="hero__subtitle">
                    I create custom websites tailored to showcase your brand{" "}
                    <br /> and connect you with your audience.
                </p>
                <Button
                    as="a"
                    href="https://drive.google.com/file/d/1rsGPL75yhGMyKY-z3UtLV-wSw5dRMM__/view"
                    className="btn-mono"
                    target="_blank"
                >
                    Resume/CV
                </Button>
                <div className="hero__scroll-wrapper">
                    {projectsInfo.map((project, index) => {
                        return (
                            <div className="hero__project" key={index}>
                                <img
                                    src={project.img}
                                    alt=""
                                    className="project__image"
                                />
                                <div className="overlay">
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <div className="overlay__links">
                                        <a
                                            href={project.siteLink}
                                            className="focus"
                                            target="_blank"
                                            title="site link"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={eye}
                                                alt=""
                                                role="presentation"
                                            />
                                            <span className="visually-hidden">
                                                site link
                                            </span>
                                        </a>
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                className="focus"
                                                target="_blank"
                                                title="github link"
                                                rel="noopener noreferrer"
                                            >
                                                <img src={code} alt="github" />
                                                <span className="visually-hidden">
                                                    github link
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

export default Hero;

// TODO: fix the scroll when resizing the window
