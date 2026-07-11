import type { Page } from './types';

const STORAGE_KEY = 'terminal_blog_pages_v1';

function loadPages(): Page[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Page[];
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // fall through
  }
  return [];
}

function savePages(pages: Page[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pages));
  } catch {
    // storage full; non-fatal
  }
}

let _pages: Page[] | null = null;

export function getAllPages(): Page[] {
  if (!_pages) _pages = loadPages();
  return [..._pages].sort((a, b) => a.title.localeCompare(b.title));
}

export function getPage(slug: string): Page | undefined {
  return getAllPages().find((p) => p.slug === slug);
}

export function createPage(page: Page): boolean {
  const pages = getAllPages();
  if (pages.some((p) => p.slug === page.slug)) return false;
  pages.push(page);
  _pages = pages;
  savePages(pages);
  return true;
}

export function updatePage(slug: string, updates: Partial<Page>): boolean {
  if (!_pages) _pages = loadPages();
  const idx = _pages.findIndex((p) => p.slug === slug);
  if (idx === -1) return false;
  _pages[idx] = { ..._pages[idx], ...updates };
  savePages(_pages);
  return true;
}

export function deletePage(slug: string): boolean {
  const pages = getAllPages().filter((p) => p.slug !== slug);
  _pages = pages;
  savePages(pages);
  return true;
}
