import SocialLinks from "./SocialLinks";

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
                                    <a
                                        href={link.href}
                                        className="small focus"
                                        rel={
                                            link.outside
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        target={
                                            link.outside ? "_blank" : undefined
                                        }
                                    >
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
                    <SocialLinks />
                </nav>
            </div>
        </footer>
    );
}
export default Footer;
