const isProduction = process.env.NODE_ENV === "production";

const CDN_URL =
    "https://cdn.jsdelivr.net/gh/akilama471/akilama471.github.io@main";


export function imageUrl(image: any) {

    // Development
    if (!isProduction) {
        return image.src;
    }

    // Production CDN
    if (typeof image === "object" && image.src) {
        return {
            ...image,
            src: `${CDN_URL}${image.src}`,
        };
    }

    return `${CDN_URL}/${image}`;
}