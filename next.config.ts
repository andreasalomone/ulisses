import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig & { turbopack?: { root: string } } = {
  turbopack: {
    root: "/Users/andreasalomone/devving/ulisses",
  },
};

export default withNextIntl(nextConfig);
