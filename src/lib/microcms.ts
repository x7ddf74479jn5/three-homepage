import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? '',
  apiKey: process.env.X_MICROCMS_API_KEY ?? '',
});

export const composeImageQueryString = (opts: { width: string; height: string }) => {
  return '?' + new URLSearchParams(opts).toString();
};
