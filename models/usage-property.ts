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

import { Usage } from './usage';

/**
 * Counts of the number of tokens used and related stats.
 * @export
 * @interface UsageProperty
 */
export interface UsageProperty {
    /**
     * Number of tokens used in the prompt.
     * @type {number}
     * @memberof UsageProperty
     */
    'prompt_tokens': number;
    /**
     * Number of tokens produced by the generation.
     * @type {number}
     * @memberof UsageProperty
     */
    'generation_tokens': number;
    /**
     * Total number of tokens used by the prompt and generation combined.
     * @type {number}
     * @memberof UsageProperty
     */
    'total_tokens': number;
}

