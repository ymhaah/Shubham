import { ImgHTMLAttributes } from "react";

type BasePropsT = {
    src: string;
    webpSrc?: string;
};

type ImagePropsT = BasePropsT &
    Omit<ImgHTMLAttributes<HTMLImageElement>, keyof BasePropsT>;

/**
 * Image component that supports both PNG and optional WebP formats.
 * It accepts native HTML image attributes alongside custom properties.
 * @param {ImagePropsT} props - Image props.
 * - src: Source URL for the image.
 * - webpSrc: Optional source URL for the WebP image.
 * @returns {JSX.Element} The picture element containing the image sources.
 */
function Image({
    src,
    webpSrc,
    ...nativeAttributes
}: ImagePropsT): JSX.Element {
    return (
        <picture>
            {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
            <img src={src} loading="lazy" {...nativeAttributes} />
        </picture>
    );
}

export default Image;
