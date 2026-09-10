/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    /* The hero and section images are SVG placeholders. Next's optimizer
       refuses SVG unless this is set, and the CSP below sandboxes them.
       Once real photographs replace /public/*.svg, delete this block. */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
