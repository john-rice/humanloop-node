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

import { ChatMessageWithToolCall } from './chat-message-with-tool-call';
import { ModelEndpoints } from './model-endpoints';
import { ModelProviders } from './model-providers';
import { ResponseFormatProperty } from './response-format-property';
import { StopSequenceSProperty } from './stop-sequence-sproperty';
import { ToolConfigResponse } from './tool-config-response';
import { ToolResponse } from './tool-response';

/**
 * Model config request.  Contains fields that are common to all (i.e. both chat and complete) endpoints.
 * @export
 * @interface ModelConfigResponse
 */
export interface ModelConfigResponse {
    /**
     * A description of the model config.
     * @type {string}
     * @memberof ModelConfigResponse
     */
    'description'?: string;
    /**
     * String ID of config. Starts with `config_`.
     * @type {string}
     * @memberof ModelConfigResponse
     */
    'id': string;
    /**
     * Other parameter values to be passed to the provider call.
     * @type {object}
     * @memberof ModelConfigResponse
     */
    'other'?: object;
    /**
     * 
     * @type {string}
     * @memberof ModelConfigResponse
     */
    'type': ModelConfigResponseTypeEnum;
    /**
     * A friendly display name for the model config. If not provided, a name will be generated.
     * @type {string}
     * @memberof ModelConfigResponse
     */
    'name'?: string;
    /**
     * The company providing the underlying model service.
     * @type {ModelProviders}
     * @memberof ModelConfigResponse
     */
    'provider'?: ModelProviders;
    /**
     * The model instance used. E.g. text-davinci-002.
     * @type {string}
     * @memberof ModelConfigResponse
     */
    'model': string;
    /**
     * The maximum number of tokens to generate. Provide max_tokens=-1 to dynamically calculate the maximum number of tokens to generate given the length of the prompt
     * @type {number}
     * @memberof ModelConfigResponse
     */
    'max_tokens'?: number;
    /**
     * What sampling temperature to use when making a generation. Higher values means the model will be more creative.
     * @type {number}
     * @memberof ModelConfigResponse
     */
    'temperature'?: number;
    /**
     * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.
     * @type {number}
     * @memberof ModelConfigResponse
     */
    'top_p'?: number;
    /**
     * 
     * @type {StopSequenceSProperty}
     * @memberof ModelConfigResponse
     */
    'stop'?: StopSequenceSProperty;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the generation so far.
     * @type {number}
     * @memberof ModelConfigResponse
     */
    'presence_penalty'?: number;
    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on how frequently they appear in the generation so far.
     * @type {number}
     * @memberof ModelConfigResponse
     */
    'frequency_penalty'?: number;
    /**
     * If specified, model will make a best effort to sample deterministically, but it is not guaranteed.
     * @type {number}
     * @memberof ModelConfigResponse
     */
    'seed'?: number;
    /**
     * 
     * @type {ResponseFormatProperty}
     * @memberof ModelConfigResponse
     */
    'response_format'?: ResponseFormatProperty;
    /**
     * Prompt template that will take your specified inputs to form your final request to the model. NB: Input variables within the prompt template should be specified with syntax: {{INPUT_NAME}}.
     * @type {string}
     * @memberof ModelConfigResponse
     */
    'prompt_template'?: string;
    /**
     * Messages prepended to the list of messages sent to the provider. These messages that will take your specified inputs to form your final request to the provider model. NB: Input variables within the template should be specified with syntax: {{INPUT_NAME}}.
     * @type {Array<ChatMessageWithToolCall>}
     * @memberof ModelConfigResponse
     */
    'chat_template'?: Array<ChatMessageWithToolCall>;
    /**
     * NB: Deprecated with tools field. Definition of tools shown to the model.
     * @type {Array<ToolConfigResponse>}
     * @memberof ModelConfigResponse
     * @deprecated
     */
    'tool_configs'?: Array<ToolConfigResponse>;
    /**
     * Tools shown to the model.
     * @type {Array<ToolResponse>}
     * @memberof ModelConfigResponse
     */
    'tools'?: Array<ToolResponse>;
    /**
     * The provider model endpoint used.
     * @type {ModelEndpoints}
     * @memberof ModelConfigResponse
     */
    'endpoint'?: ModelEndpoints;
}

type ModelConfigResponseTypeEnum = 'model'


