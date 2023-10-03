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
import { AgentConfigRequest } from './agent-config-request';
// May contain unused imports in some cases
// @ts-ignore
import { ChatMessage } from './chat-message';
// May contain unused imports in some cases
// @ts-ignore
import { ChatRole } from './chat-role';
// May contain unused imports in some cases
// @ts-ignore
import { GenericConfigRequest } from './generic-config-request';
// May contain unused imports in some cases
// @ts-ignore
import { ModelConfigProperty } from './model-config-property';
// May contain unused imports in some cases
// @ts-ignore
import { ModelConfigRequest } from './model-config-request';
// May contain unused imports in some cases
// @ts-ignore
import { ModelEndpoints } from './model-endpoints';
// May contain unused imports in some cases
// @ts-ignore
import { ModelProviders } from './model-providers';
// May contain unused imports in some cases
// @ts-ignore
import { StopSequenceSProperty } from './stop-sequence-sproperty';
// May contain unused imports in some cases
// @ts-ignore
import { ToolCallProperty } from './tool-call-property';
// May contain unused imports in some cases
// @ts-ignore
import { ToolConfigRequest } from './tool-config-request';

/**
 * @type ConfigProperty1
 * The model config used for this generation. Required unless `trial_id` is provided.
 * @export
 */
export type ConfigProperty1 = { type: 'agent' } & AgentConfigRequest | { type: 'generic' } & GenericConfigRequest | { type: 'model' } & ModelConfigRequest | { type: 'tool' } & ToolConfigRequest;


