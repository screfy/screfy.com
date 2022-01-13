import LRUCache from 'lru-cache';

// Cache items for 24 hours:
export const CACHE_MAX_AGE = 86400000;
export const cache = new LRUCache({ max: 1024 * 1024, maxAge: CACHE_MAX_AGE });
