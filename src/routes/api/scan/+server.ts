// src/routes/api/scan/+server.ts
import { SCAN_OCR_BASE } from '$env/static/private';
import type { RequestHandler } from './$types';

const UPSTREAM_BASE = SCAN_OCR_BASE;

export const POST: RequestHandler = async (event) => {
    const { locals, fetch, request } = event;
    const { userId, getToken } = locals.auth();

    if (!userId) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const token = await getToken();

    // Forward to the upload endpoint
    const upstreamUrl = new URL(UPSTREAM_BASE + '/api/v1/upload');

    // Clone the request body (formdata)
    const formData = await request.formData();

    // Prepare headers - don't copy content-type as fetch will set it for formdata
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${token}`);

    const upstreamRes = await fetch(upstreamUrl, {
        method: 'POST',
        headers,
        body: formData
    });

    const responseData = await upstreamRes.text();

    return new Response(responseData, {
        status: upstreamRes.status,
        headers: { 'Content-Type': upstreamRes.headers.get('Content-Type') || 'application/json' }
    });
};