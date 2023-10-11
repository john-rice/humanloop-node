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

The version of the OpenAPI document: 4.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { FeedbackTypeProperty } from './feedback-type-property';
import { FeedbackValueProperty } from './feedback-value-property';

/**
 * 
 * @export
 * @interface FeedbackResponse
 */
export interface FeedbackResponse {
    /**
     * 
     * @type {FeedbackTypeProperty}
     * @memberof FeedbackResponse
     */
    'type': FeedbackTypeProperty;
    /**
     * 
     * @type {FeedbackValueProperty}
     * @memberof FeedbackResponse
     */
    'value': FeedbackValueProperty;
    /**
     * ID to associate the feedback to a previously logged datapoint.
     * @type {string}
     * @memberof FeedbackResponse
     */
    'data_id'?: string;
    /**
     * A unique identifier to who provided the feedback.
     * @type {string}
     * @memberof FeedbackResponse
     */
    'user'?: string;
    /**
     * User defined timestamp for when the feedback was created. 
     * @type {string}
     * @memberof FeedbackResponse
     */
    'created_at'?: string;
    /**
     * String ID of user feedback. Starts with `ann_`, short for annotation.
     * @type {string}
     * @memberof FeedbackResponse
     */
    'id': string;
}

