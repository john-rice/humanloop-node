/*
Humanloop API

The Humanloop API allows you to interact with Humanloop from your product or service.

You can do this through HTTP requests from any language or via our official Python or TypeScript SDK.

To install the official [Python SDK](https://pypi.org/project/humanloop/), run the following command:

```bash
pip install humanloop
```

To install the official [TypeScript SDK](https://www.npmjs.com/package/humanloop), run the following command:

```bash
npm i humanloop
```

---

Guides and further details about key concepts can be found in [our docs](https://docs.humanloop.com/).

The version of the OpenAPI document: 4.0.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ProviderApiKeys
 */
export interface ProviderApiKeys {
    /**
     * 
     * @type {string}
     * @memberof ProviderApiKeys
     */
    'openai'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProviderApiKeys
     */
    'ai21'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProviderApiKeys
     */
    'mock'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProviderApiKeys
     */
    'anthropic'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProviderApiKeys
     */
    'cohere'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProviderApiKeys
     */
    'openai_azure'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProviderApiKeys
     */
    'openai_azure_endpoint'?: string;
}

