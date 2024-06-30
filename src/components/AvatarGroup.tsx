type avatarsT = {
    img: string;
    alt: string;
}[];

function AvatarGroup({ avatars }: { avatars: avatarsT }) {
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
