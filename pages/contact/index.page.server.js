import { RenderErrorPage } from "vite-plugin-ssr";
import { fetchPages, getPageBySlug, state, toPageResource } from "../../server/contentful";

const pageSlug = 'contact'

// dev
export async function onBeforeRender(pageContext) {
    if (!state.pages) {
        await fetchPages();
    }

    const page = getPageBySlug(pageSlug);

    if (!page) {
        console.log('should render 404 for', pageSlug);
        
        throw RenderErrorPage({pageContext: {}});
    }

    return {
        pageContext: {
            pageProps: {
                page: toPageResource(page),
            }
        }
    };
}

export const passToClient = ['pageProps'];
