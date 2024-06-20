import React from "react";

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
