/* tslint:disable */
/* eslint-disable */
/**
 * Humanloop API
 * The Humanloop API allows you to interact with Humanloop from your product or service.  You can do this through HTTP requests from any language or via our official Python or TypeScript SDK.  To install the official [Python SDK](https://pypi.org/project/humanloop/), run the following command:  ```bash pip install humanloop ```  To install the official [TypeScript SDK](https://www.npmjs.com/package/humanloop), run the following command:  ```bash npm i humanloop ```  ---  Guides and further details about key concepts can be found in [our docs](https://docs.humanloop.com/).
 *
 * The version of the OpenAPI document: 4.0.0
 * 
 *
 * NOTE: This file is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { ChatMessage } from './chat-message';
// May contain unused imports in some cases
// @ts-ignore
import { ChatRole } from './chat-role';
// May contain unused imports in some cases
// @ts-ignore
import { ConfigProperty2 } from './config-property2';
// May contain unused imports in some cases
// @ts-ignore
import { ConfigResponse } from './config-response';
// May contain unused imports in some cases
// @ts-ignore
import { EvaluationResultResponse } from './evaluation-result-response';
// May contain unused imports in some cases
// @ts-ignore
import { FeedbackLabelsProperty } from './feedback-labels-property';
// May contain unused imports in some cases
// @ts-ignore
import { LogResponse } from './log-response';
// May contain unused imports in some cases
// @ts-ignore
import { ProviderResponseProperty } from './provider-response-property';
// May contain unused imports in some cases
// @ts-ignore
import { Target } from './target';
// May contain unused imports in some cases
// @ts-ignore
import { TestcaseResponse } from './testcase-response';
// May contain unused imports in some cases
// @ts-ignore
import { ToolCallProperty } from './tool-call-property';
// May contain unused imports in some cases
// @ts-ignore
import { ValueProperty } from './value-property';

/**
 * 
 * @export
 * @interface EvaluationTestcaseSnapshotResponse
 */
export interface EvaluationTestcaseSnapshotResponse {
    /**
     * 
     * @type {TestcaseResponse}
     * @memberof EvaluationTestcaseSnapshotResponse
     */
    'testcase': TestcaseResponse;
    /**
     * 
     * @type {LogResponse}
     * @memberof EvaluationTestcaseSnapshotResponse
     */
    'datapoint'?: LogResponse;
    /**
     * 
     * @type {Array<EvaluationResultResponse>}
     * @memberof EvaluationTestcaseSnapshotResponse
     */
    'evaluation_results': Array<EvaluationResultResponse>;
}

