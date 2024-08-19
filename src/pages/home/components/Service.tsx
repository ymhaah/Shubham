import link from "@img/link.png";
import globe from "@img/table-globe.jpg";
import target from "@img/target.png";

/**
 * The Service component renders a section with all of the services we offer.
 * including a cards of each service.
 *
 * @returns {JSX.Element} Rendered Service section component.
 */
function Service(): JSX.Element {
    const services = [
        {
            icon: link,
            title: "Custom Websites",
            content: "Unique designs that reflect your brand",
        },
        {
            icon: globe,
            title: "Responsive Design",
            content: "Seamless experience across all devices.",
        },
        {
            icon: target,
            title: "Support & Maintenance",
            content: "Ongoing care to keep your site at its best.",
        },
        {
            icon: globe,
            title: "SEO Optimization",
            content: "Boost your online visibility and reach",
        },
    ];

    return (
        <section className="services" aria-labelledby="services">
            <div className="Container">
                <h2 id="services">Our Services</h2>
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>
                            <img
                                src={service.icon}
                                alt=""
                                role="presentation"
                            />
                            <h3>{service.title}</h3>
                            <p>{service.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Service;
