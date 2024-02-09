import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dvi5qujxs/image/upload/**",
        port: "",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
