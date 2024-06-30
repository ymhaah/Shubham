import link from "@img/link.png";
import globe from "@img/table-globe.jpg";
import target from "@img/target.png";

function Service() {
    const services = [
        {
            icon: link,
            title: "lorem ipsum",
            content:
                "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            icon: globe,
            title: "lorem ipsum",
            content:
                "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            icon: target,
            title: "lorem ipsum",
            content:
                "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            icon: globe,
            title: "lorem ipsum",
            content:
                "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            icon: link,
            title: "lorem ipsum",
            content:
                "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            icon: target,
            title: "lorem ipsum",
            content:
                "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
