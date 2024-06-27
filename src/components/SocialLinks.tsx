import facebook from "@icon/facebook.svg";
import linkedin from "@icon/linkedin.svg";
import twitter from "@icon/twitter.svg";

/**
 * SocialLinks component renders a list of social media links.
 * @returns {JSX.Element} Rendered social media links.
 */
function SocialLinks(): JSX.Element {
    const socialLinks = [
        {
            icon: facebook,
            href: "#",
            alt: "Facebook",
        },
        {
            icon: linkedin,
            href: "#",
            alt: "Linkedin",
        },
        {
            icon: twitter,
            href: "#",
            alt: "Twitter/X",
        },
    ];

    return (
        <ul className="social-links">
            {socialLinks.map((link, index) => (
                <li key={index}>
                    <a
                        href={link.href}
                        className="focus"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="visually-hidden">{link.alt}</span>
                        <img
                            src={link.icon}
                            alt={link.alt}
                            role="presentation"
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}
export default SocialLinks;
