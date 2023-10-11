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

import { PositiveLabel } from './positive-label';

/**
 * 
 * @export
 * @interface UpdateProjectRequest
 */
export interface UpdateProjectRequest {
    /**
     * The new unique project name. Caution, if you are using the project name as the unique identifier in your API calls, changing the name will break the calls.
     * @type {string}
     * @memberof UpdateProjectRequest
     */
    'name'?: string;
    /**
     * ID for an experiment to set as the project\'s active deployment. Starts with \'exp_\'. At most one of \'active_experiment_id\' and \'active_model_config_id\' can be set.
     * @type {string}
     * @memberof UpdateProjectRequest
     */
    'active_experiment_id'?: string;
    /**
     * ID for a config to set as the project\'s active deployment. Starts with \'config_\'. At most one of \'active_experiment_id\' and \'active_config_id\' can be set.
     * @type {string}
     * @memberof UpdateProjectRequest
     */
    'active_config_id'?: string;
    /**
     * The full list of labels to treat as positive user feedback.
     * @type {Array<PositiveLabel>}
     * @memberof UpdateProjectRequest
     */
    'positive_labels'?: Array<PositiveLabel>;
}

