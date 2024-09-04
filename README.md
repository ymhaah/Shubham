# Sample One-Page "Free Service" Shubham Portfolio 
> Not finished | Start at: May 15, 2024

### Project Description

Single-page microsite designed to be a Portfolio for a fellow dev "Shubham" for me Free Service ( Sample One-Page Website ), the site showcases Shubham's project and skills while sharing his links and services in an appealing way full of animation, and also gives an easy way to contact with him, all of this in a highly interactive and clean code for him to build on it.  

### Screenshot

![hero](https://github.com/user-attachments/assets/ec2f0141-646b-4020-9471-a17f68323ed4)
![project](https://github.com/user-attachments/assets/767d6603-7bba-4b6e-8c8c-0712c8f523c1)
![about & content & service](https://github.com/user-attachments/assets/873d2ca6-663a-4635-a0cc-ab086096bf4a)
![footer](https://github.com/user-attachments/assets/af8b824e-5a64-47ed-8aa5-d3469368d8a7)


### Links

-   [live site link](https://main--bright-raindrop-8927a4.netlify.app/)
-   [korsa](https://www.korsa.io/) - Inspired by it.

### Built with

-   HTML
-   CSS
-   JS
-   [TypeScript](https://www.typescriptlang.org/) 
-   [Sass](https://sass-lang.com/) - CSS extension language.
-   [React](https://react.dev/) - JS library.
-   [Vite](https://vitejs.dev/) - JS bundling tool.
-   [Gsap](https://greensock.com/gsap/) - JS animation tool.

### What I learned

_the new smart last button margin class selector_

```css
:where(.button:not(:last-of-type)) {
    margin-right: var(--gap);
    margin-top: 0;
}
```

_disabled_

```css
:disabled,
.disabled {
    --focus-ring-clr: hsla(0, 0%, 50%, 0.5);
    filter: grayscale(80%);
    opacity: 0.8;
    cursor: not-allowed !important;
}
```

_the new polymorphic typed button component_

```tsx
type BasePropsT<E extends React.ElementType> = {
    children: React.ReactNode;
    isDisabled?: boolean;
    iconOnlyAlt?: string;
    handleClick?: (event: React.MouseEvent) => void;
    as?: E extends "button" | "a" ? E : never;
};

type ButtonPropsT<E extends React.ElementType> = BasePropsT<E> &
    Omit<React.ComponentProps<E>, keyof BasePropsT<E>>;

/**
 * Button component.
 * Renders a 'button' or 'a' (anchor) element.
 * @param {ButtonPropsT} props - Component props.
 *    - isDisabled: Indicates whether the button is disabled. Default is false.
 *    - iconOnlyAlt: Alternative text for the button icon, used for accessibility when only an icon is displayed.
 *    - as: The element type to render. Can be either 'button' or 'a' (anchor). Defaults to 'button'.
 * @returns {JSX.Element} - Rendered button component.
 */
function Button<E extends React.ElementType = "button">({
    children,
    isDisabled,
    iconOnlyAlt,
    handleClick,
    as,
    ...nativeAttributes
}: ButtonPropsT<E>): JSX.Element {
    const Component = as || "button";

    return (
        <Component
            type={
                Component === "button"
                    ? nativeAttributes.type || "button"
                    : undefined
            }
            aria-label={iconOnlyAlt}
            aria-disabled={isDisabled}
            disabled={Component === "button" ? isDisabled : undefined}
            onClick={handleClick}
            {...nativeAttributes}
            className={`button focus ${isDisabled && "disabled"} ${
                iconOnlyAlt && "icon-only"
            } ${nativeAttributes.className || ""}`}
        >
            {children}
        </Component>
    );
}

export default Button;
}
```

_useGsap to use gsap with the `gsap.context` in react_

```jsx
export default function useGsap(animation, father) {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            animation();
        }, father);
        return () => ctx.revert();
    }, []);
}
```

_Gsap new react hook useGsap()_

```tsx
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
```

### Continued development

-   more gsap & scrollTrigger

## Useful resources

Check out my latest previous articles:

-   [Top 5 websites to sharpen your front-end skills.](https://dev.to/ymhaah/top-5-websites-to-sharpen-your-front-end-skills-3ao0)
-   [How To Build An Advanced Light/Dark Theme Website!](https://dev.to/ymhaah/how-to-build-an-advanced-lightdark-theme-website-gke)
-   [30-Day React Learning Journey!](https://dev.to/ymhaah/series/20473)

## Author
-   professional links:
    - [Twitter / X](https://twitter.com/hafanwy)
    - [LinkedIn](https://www.linkedin.com/in/youssef-hafnawy/)
-   Hire me:
    -   [UpWork](https://www.upwork.com/freelancers/~01acd8e5370e5646aa)
-   Blog:
    -   [Medium](https://medium.com/@ymhaah250)
