import {Pathnames, LocalePrefix} from 'next-intl/routing';

export const defaultLocale = 'es' as const;
export const locales = ['es', 'ro'] as const;

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    es: '/rutas',
    ro: '/cărți'
  }
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;