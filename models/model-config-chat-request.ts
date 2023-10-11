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
import { ModelConfigToolRequest } from './model-config-tool-request';
import { ModelEndpoints } from './model-endpoints';
import { ModelProviders } from './model-providers';
import { StopSequenceSProperty } from './stop-sequence-sproperty';
import { ToolCallProperty } from './tool-call-property';

/**
 * Chat model config request.
 * @export
 * @interface ModelConfigChatRequest
 */
export interface ModelConfigChatRequest {
    /**
     * A description of the model config.
     * @type {string}
     * @memberof ModelConfigChatRequest
     */
    'description'?: string;
    /**
     * A friendly display name for the model config. If not provided, a name will be generated.
     * @type {string}
     * @memberof ModelConfigChatRequest
     */
    'name'?: string;
    /**
     * The company providing the underlying model service.
     * @type {ModelProviders}
     * @memberof ModelConfigChatRequest
     */
    'provider'?: ModelProviders;
    /**
     * The model instance used. E.g. text-davinci-002.
     * @type {string}
     * @memberof ModelConfigChatRequest
     */
    'model': string;
    /**
     * The maximum number of tokens to generate. Provide max_tokens=-1 to dynamically calculate the maximum number of tokens to generate given the length of the prompt
     * @type {number}
     * @memberof ModelConfigChatRequest
     */
    'max_tokens'?: number;
    /**
     * What sampling temperature to use when making a generation. Higher values means the model will be more creative.
     * @type {number}
     * @memberof ModelConfigChatRequest
     */
    'temperature'?: number;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.
     * @type {number}
     * @memberof ModelConfigChatRequest
     */
    'top_p'?: number;
    /**
     * 
     * @type {StopSequenceSProperty}
     * @memberof ModelConfigChatRequest
     */
    'stop'?: StopSequenceSProperty;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the generation so far.
     * @type {number}
     * @memberof ModelConfigChatRequest
     */
    'presence_penalty'?: number;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on how frequently they appear in the generation so far.
     * @type {number}
     * @memberof ModelConfigChatRequest
     */
    'frequency_penalty'?: number;
    /**
     * Other parameter values to be passed to the provider call.
     * @type {object}
     * @memberof ModelConfigChatRequest
     */
    'other'?: object;
    /**
     * The provider model endpoint used.
     * @type {ModelEndpoints}
     * @memberof ModelConfigChatRequest
     */
    'endpoint'?: ModelEndpoints;
    /**
     * Messages prepended to the list of messages sent to the provider. These messages that will take your specified inputs to form your final request to the provider model. Input variables within the template should be specified with syntax: {{INPUT_NAME}}.
     * @type {Array<ChatMessage>}
     * @memberof ModelConfigChatRequest
     */
    'chat_template'?: Array<ChatMessage>;
    /**
     * Make tools available to OpenAIs chat model as functions.
     * @type {Array<ModelConfigToolRequest>}
     * @memberof ModelConfigChatRequest
     */
    'tools'?: Array<ModelConfigToolRequest>;
}

