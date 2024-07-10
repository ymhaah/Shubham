type avatarsT = {
    img: string;
    alt: string;
}[];

/**
 * AvatarGroup component.
 * Renders a group of avatar images.
 * @param {AvatarsT} props.avatars - An array of avatar objects containing img and alt properties.
 * @returns {JSX.Element} - Rendered AvatarGroup component.
 *
 * @example
 * const avatars = [
 *   { img: 'https://example.com/avatar1.png', alt: 'Avatar 1' },
 *   { img: 'https://example.com/avatar2.png', alt: 'Avatar 2' }
 * ];
 * return <AvatarGroup avatars={avatars} />;
 */
function AvatarGroup({ avatars }: { avatars: avatarsT }): JSX.Element {
    return (
        <span className="avatar-group">
            <ul>
                {avatars.map((highlight, index) => {
                    return (
                        <li key={index}>
                            <img src={highlight.img} alt={highlight.alt} />
                        </li>
                    );
                })}
            </ul>
        </span>
    );
}

export default AvatarGroup;
