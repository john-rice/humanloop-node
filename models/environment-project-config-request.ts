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

import { EnvironmentRequest } from './environment-request';

/**
 * 
 * @export
 * @interface EnvironmentProjectConfigRequest
 */
export interface EnvironmentProjectConfigRequest {
    /**
     * Model config unique identifier generated by Humanloop.
     * @type {string}
     * @memberof EnvironmentProjectConfigRequest
     */
    'config_id'?: string;
    /**
     * String ID of experiment. Starts with `exp_`.
     * @type {string}
     * @memberof EnvironmentProjectConfigRequest
     */
    'experiment_id'?: string;
    /**
     * List of environments to associate with the model config.
     * @type {Array<EnvironmentRequest>}
     * @memberof EnvironmentProjectConfigRequest
     */
    'environments'?: Array<EnvironmentRequest>;
}

