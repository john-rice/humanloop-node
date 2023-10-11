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

import { ChatMessage } from './chat-message';
import { ChatRole } from './chat-role';
import { ConfigProperty2 } from './config-property2';
import { ConfigResponse } from './config-response';
import { EvaluationResultResponse } from './evaluation-result-response';
import { EvaluationTestcaseSnapshotResponse } from './evaluation-testcase-snapshot-response';
import { FeedbackLabelsProperty } from './feedback-labels-property';
import { LogResponse } from './log-response';
import { ProviderResponseProperty } from './provider-response-property';
import { Target } from './target';
import { TestcaseResponse } from './testcase-response';
import { ToolCallProperty } from './tool-call-property';
import { ValueProperty } from './value-property';

/**
 * 
 * @export
 * @interface PaginatedDataEvaluationTestcaseSnapshotResponse
 */
export interface PaginatedDataEvaluationTestcaseSnapshotResponse {
    /**
     * 
     * @type {Array<EvaluationTestcaseSnapshotResponse>}
     * @memberof PaginatedDataEvaluationTestcaseSnapshotResponse
     */
    'records': Array<EvaluationTestcaseSnapshotResponse>;
    /**
     * 
     * @type {number}
     * @memberof PaginatedDataEvaluationTestcaseSnapshotResponse
     */
    'page': number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedDataEvaluationTestcaseSnapshotResponse
     */
    'size': number;
    /**
     * 
     * @type {number}
     * @memberof PaginatedDataEvaluationTestcaseSnapshotResponse
     */
    'total': number;
}

