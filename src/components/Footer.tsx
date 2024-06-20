import north_east from "@icon/north_east.svg";

/**
 * The Footer component renders the footer with various link sections.
 * @returns {JSX.Element} The rendered footer component.
 */
function Footer(): JSX.Element {
    // ? each object in footerLinks array is a column the footer that contains a title and links
    const footerLinks = [
        {
            title: "Navigation",
            links: [
                { text: "Home", href: "#hero", outside: false },
                { text: "About", href: "#about", outside: false },
                { text: "Service", href: "#service", outside: false },
            ],
        },
        {
            title: "More Service",
            links: [
                { href: "#", text: "UpWork", outside: true },
                { href: "#", text: "Access Management", outside: false },
                { href: "#", text: "communication", outside: true },
                { href: "#", text: "learn more", outside: false },
            ],
        },
    ];

    return (
        <footer>
            <div className="Container">
                <div className="footer__main">
                    <h2 className="footer__title">
                        <a href="/index.html" className="main-logo focus">
                            Shubham
                        </a>
                    </h2>
                    <p className="small">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, provident officiis deleniti impedit debitis
                        voluptatibus?
                    </p>
                </div>
                {footerLinks.map((item, index) => (
                    <nav key={index} aria-label="secondary Navigation">
                        <h2 className="footer__title">{item.title}</h2>
                        <ul>
                            {item.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="small focus">
                                        {link.text}
                                        {link.outside && (
                                            <img
                                                src={north_east}
                                                alt=""
                                                role="presentation"
                                            />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}
                <nav aria-label="social media links">
                    <h2 className="footer__title">Follow My On</h2>
                    <ul>
                        <li>
                            <a className="focus" href="#" target="_blank">
                                <span className="visually-hidden">
                                    Facebook
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <title>Facebook</title>
                                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className="focus" href="#" target="_blank">
                                <span className="visually-hidden">
                                    Linkedin
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <title>Linkedin</title>
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className="focus" href="#" target="_blank">
                                <span className="visually-hidden">
                                    Twitter/X
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <title>Twitter/X</title>
                                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
export default Footer;
