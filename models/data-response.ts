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
import { ToolResultResponse } from './tool-result-response';

/**
 * 
 * @export
 * @interface DataResponse
 */
export interface DataResponse {
    /**
     * Unique ID for the model inputs and output logged to Humanloop. Use this when recording feedback later.
     * @type {string}
     * @memberof DataResponse
     */
    'id': string;
    /**
     * The index for the sampled generation for a given input. The num_samples request parameter controls how many samples are generated.
     * @type {number}
     * @memberof DataResponse
     */
    'index': number;
    /**
     * Output text returned from the provider model with leading and trailing whitespaces stripped.
     * @type {string}
     * @memberof DataResponse
     */
    'output': string;
    /**
     * Raw output text returned from the provider model.
     * @type {string}
     * @memberof DataResponse
     */
    'raw_output': string;
    /**
     * The inputs passed to the prompt template.
     * @type {object}
     * @memberof DataResponse
     */
    'inputs': object;
    /**
     * Why the generation ended. One of \'stop\' (indicating a stop token was encountered), or \'length\' (indicating the max tokens limit has been reached), or \'tool_call\' (indicating that the model has chosen to call a tool - in which case the tool_call parameter of the response will be populated). It will be set as null for the intermediary responses during a stream, and will only be set as non-null for the final streamed token.
     * @type {string}
     * @memberof DataResponse
     */
    'finish_reason'?: string;
    /**
     * The model configuration used to create the generation.
     * @type {string}
     * @memberof DataResponse
     */
    'model_config_id': string;
    /**
     * Results of any tools run during the generation.
     * @type {Array<ToolResultResponse>}
     * @memberof DataResponse
     */
    'tool_results'?: Array<ToolResultResponse>;
}

