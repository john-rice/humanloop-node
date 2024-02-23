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

import { BaseMetricResponse } from './base-metric-response';
import { ExperimentConfigResponse } from './experiment-config-response';
import { ExperimentStatus } from './experiment-status';
import { PositiveLabel } from './positive-label';

/**
 * 
 * @export
 * @interface ExperimentResponse
 */
export interface ExperimentResponse {
    /**
     * String ID of experiment. Starts with `exp_`.
     * @type {string}
     * @memberof ExperimentResponse
     */
    'id': string;
    /**
     * String ID of project the experiment belongs to. Starts with `pr_`.
     * @type {string}
     * @memberof ExperimentResponse
     */
    'project_id': string;
    /**
     * Name of experiment.
     * @type {string}
     * @memberof ExperimentResponse
     */
    'name': string;
    /**
     * Status of experiment.
     * @type {ExperimentStatus}
     * @memberof ExperimentResponse
     */
    'status': ExperimentStatus;
    /**
     * List of configs associated to the experiment.
     * @type {Array<ExperimentConfigResponse>}
     * @memberof ExperimentResponse
     */
    'configs'?: Array<ExperimentConfigResponse>;
    /**
     * Metric used as the experiment\'s objective.
     * @type {BaseMetricResponse}
     * @memberof ExperimentResponse
     */
    'metric': BaseMetricResponse;
    /**
     * Feedback labels to treat as positive user feedback. Used to monitor the performance of model configs in the experiment.
     * @type {Array<PositiveLabel>}
     * @memberof ExperimentResponse
     */
    'positive_labels': Array<PositiveLabel>;
    /**
     * 
     * @type {string}
     * @memberof ExperimentResponse
     */
    'created_at': string;
    /**
     * 
     * @type {string}
     * @memberof ExperimentResponse
     */
    'updated_at': string;
}

