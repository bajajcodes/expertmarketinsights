import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: `/${process.env.PREV_CLOUDINARY_NAME}/image/upload/**`,
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: `/${process.env.CLOUDINARY_NAME}/image/upload/**`,
        port: "",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
