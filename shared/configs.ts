const isWindowDefined = typeof window !== 'undefined';
const isProduction = process.env.NODE_ENV === 'production';

export const AUTH_COOKIENAME = '__loggedin__';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const DEVELOPMENT = !isProduction;
export const IS_BROWSER = isWindowDefined;
export const IS_SERVER = !isWindowDefined;
export const PRODUCTION = isProduction;