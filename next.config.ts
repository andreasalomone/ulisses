import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const withNextIntl = createNextIntlPlugin();

// Resolve the Turbopack root to this config's directory so builds work on any
// machine/checkout, instead of a hardcoded local path.
const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig & { turbopack?: { root: string } } = {
  turbopack: {
    root: projectRoot,
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
