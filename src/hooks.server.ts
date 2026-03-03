import { withClerkHandler } from 'svelte-clerk/server';
import { sequence } from '@sveltejs/kit/hooks';
import { PUBLIC_IS_DEVELOPMENT } from '$env/static/public';

export const handle = sequence(
    withClerkHandler(),
    async ({ event, resolve }) => {
        return resolve(event, {
            transformPageChunk: ({ html }) => {
                if (PUBLIC_IS_DEVELOPMENT === 'true') {
                    return html.replace(/<!--\s*REMOVE_IN_DEV_START\s*-->[\s\S]*?<!--\s*REMOVE_IN_DEV_END\s*-->/g, '');
                }
                return html;
            }
        });
    }
);
