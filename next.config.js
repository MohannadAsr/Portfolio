/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = {
  eslint: { ignoreDuringBuilds: true },
  // your other settings here ...
};
