import {request} from '@playwright/test';

class BaseApi {
    // Create a context that will issue http requests.
    constructor() {
    }

    /**
     * Execute POST request
     *
     * @param url
     * @param body
     * @returns {Promise<*>}
     */
    async post(url, body) {
        this.request = await request.newContext({
            extraHTTPHeaders: {
                Authorization: process.env.COOKIE
            }
        })
        return await this.request.post(url, {
            data: body
        });
    }

    /**
     * Execute GET request
     *
     * @param url
     * @param options
     * @returns {Promise<*>}
     */
    async get(url, options) {
        this.request = await request.newContext({
            extraHTTPHeaders: {
                Authorization: process.env.COOKIE
            }
        })
        return await this.request.get(url, options)
    }

    /**
     * Execute PUT request
     *
     * @param url
     * @param body
     * @returns {Promise<*>}
     */
    async put(url, body) {
        this.request = await request.newContext({
            extraHTTPHeaders: {
                Authorization: process.env.COOKIE
            }
        })
        return await this.request.put(url, {
            data: body
        });
    }

    /**
     * Execute DELETE request
     *
     * @param url
     * @param options
     * @returns {Promise<*>}
     */
    async delete(url, options) {
        this.request = await request.newContext({
            extraHTTPHeaders: {
                Authorization: process.env.COOKIE
            }
        })
        return await this.request.delete(url, options)
    }
}

module.exports = BaseApi;