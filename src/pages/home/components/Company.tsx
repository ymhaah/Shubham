import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(useGSAP, Draggable);

function Company() {
    const team = [
        {
            name: "John Doe",
            title: "CEO",
            image: "https://picsum.photos/700?random=1",
        },
        {
            name: "Jane Smith",
            title: "CTO",
            image: "https://picsum.photos/700?random=2",
        },
        {
            name: "Emily Johnson",
            title: "COO",
            image: "https://picsum.photos/700?random=3",
        },
        {
            name: "Michael Brown",
            title: "CFO",
            image: "https://picsum.photos/700?random=4",
        },
        {
            name: "Sarah Davis",
            title: "CMO",
            image: "https://picsum.photos/700?random=5",
        },
        {
            name: "David Wilson",
            title: "Lead Developer",
            image: "https://picsum.photos/700?random=6",
        },
    ];

    const company = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const member = gsap.utils.toArray(".team-member");
            const wrapper = document.querySelector(".drag-wrapper");

            const wrapperWidth = wrapper
                ? wrapper.scrollWidth + 16 * member.length
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
        },
        { scope: company, dependencies: [] }
    );

    return (
        <section className="company" aria-labelledby="company" ref={company}>
            <div className="Container">
                <h2 id="company">Our team</h2>
            </div>
            <div className="drag-wrapper">
                {team.map((item, index) => (
                    <div className="team-member" key={index}>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Company;
