import dotenv from 'dotenv';
dotenv.config();
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import pkg from 'contentful';
const { createClient } = pkg;

export const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.API_KEY
});

export const state = {};

export async function fetchPages() {
    state.pages = await client.getEntries({
      content_type: 'page',
    });
}

export function getPageBySlug(slug) {
  return state.pages?.items?.find(page => page.fields.slug === slug);
}

export function toPageResource(page) {
  return {
    title: page.fields.title,
    slug: page.fields.slug,
    html: documentToHtmlString(page.fields.text),
  }
}