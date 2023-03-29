const SITE_NAME = "Evan Thompson's Portfolio";
const DESCRIPTION =
    "A miscellaneous computer science portfolio full of cool things that I've accomplished over the years";
//const BASE_URL = "https://example.com";

// https://github.com/garmeeh/next-seo#setup
const config = {
    title: SITE_NAME,
    description: DESCRIPTION,
    //canonical: BASE_URL,
    openGraph: {
        //url: "https://www.url.ie/a",
        title: SITE_NAME,
        description: DESCRIPTION,
        images: [
            {
                url: "https://evanthompson.site/site-preview.png",
                width: 1200,
                height: 600,
                alt: "Portfolio background image",
                type: "image/png"
            }
        ],
        site_name: SITE_NAME
    },
    twitter: {
        cardType: "summary_large_image"
    }
};

export default config;
