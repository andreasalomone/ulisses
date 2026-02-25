import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig & { turbopack?: { root: string } } = {
  turbopack: {
    root: "/Users/andreasalomone/devving/ulisses",
  },
  async redirects() {
    return [
      {
        source: '/it/nautica',
        destination: '/it/porti-turistici',
        permanent: true,
      },
      {
        source: '/en/nautical',
        destination: '/en/tourist-ports',
        permanent: true,
      },
      {
        source: '/nautica',
        destination: '/porti-turistici',
        permanent: true,
      },
      {
        source: '/it/knowledge-hub/nautica/ministero-turismo',
        destination: '/it/knowledge-hub/porti-turistici/ministero-turismo',
        permanent: true,
      },
      {
        source: '/en/knowledge-hub/nautical/ministry-tourism',
        destination: '/en/knowledge-hub/tourist-ports/ministry-tourism',
        permanent: true,
      }
    ];
  },
};

export default withNextIntl(nextConfig);
