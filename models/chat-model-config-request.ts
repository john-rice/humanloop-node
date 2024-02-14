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
import { ProviderAPIKeysProperty } from './provider-apikeys-property';
import { ResponseFormatProperty } from './response-format-property';
import { ToolCallProperty1 } from './tool-call-property1';
import { ToolChoiceProperty } from './tool-choice-property';

/**
 * Base chat request.
 * @export
 * @interface ChatModelConfigRequest
 */
export interface ChatModelConfigRequest {
    /**
     * Unique project name. If no project exists with this name, a new project will be created.
     * @type {string}
     * @memberof ChatModelConfigRequest
     */
    'project'?: string;
    /**
     * Unique ID of a project to associate to the log. Either this or `project` must be provided.
     * @type {string}
     * @memberof ChatModelConfigRequest
     */
    'project_id'?: string;
    /**
     * ID of the session to associate the datapoint.
     * @type {string}
     * @memberof ChatModelConfigRequest
     */
    'session_id'?: string;
    /**
     * A unique string identifying the session to associate the datapoint to. Allows you to log multiple datapoints to a session (using an ID kept by your internal systems) by passing the same `session_reference_id` in subsequent log requests. Specify at most one of this or `session_id`.
     * @type {string}
     * @memberof ChatModelConfigRequest
     */
    'session_reference_id'?: string;
    /**
     * ID associated to the parent datapoint in a session.
     * @type {string}
     * @memberof ChatModelConfigRequest
     */
    'parent_id'?: string;
    /**
     * A unique string identifying the previously-logged parent datapoint in a session. Allows you to log nested datapoints with your internal system IDs by passing the same reference ID as `parent_id` in a prior log request. Specify at most one of this or `parent_id`. Note that this cannot refer to a datapoint being logged in the same request.
     * @type {string}
     * @memberof ChatModelConfigRequest
     */
    'parent_reference_id'?: string;
    /**
     * The inputs passed to the prompt template.
     * @type {object}
     * @memberof ChatModelConfigRequest
     */
    'inputs'?: object;
    /**
     * Identifies where the model was called from.
     * @type {string}
     * @memberof ChatModelConfigRequest
     */
    'source'?: string;
    /**
     * Any additional metadata to record.
     * @type {object}
     * @memberof ChatModelConfigRequest
     */
    'metadata'?: object;
    /**
     * Whether the request/response payloads will be stored on Humanloop.
     * @type {boolean}
     * @memberof ChatModelConfigRequest
     */
    'save'?: boolean;
    /**
     * ID of the source datapoint if this is a log derived from a datapoint in a dataset.
     * @type {string}
     * @memberof ChatModelConfigRequest
     */
    'source_datapoint_id'?: string;
    /**
     * 
     * @type {ProviderAPIKeysProperty}
     * @memberof ChatModelConfigRequest
     */
    'provider_api_keys'?: ProviderAPIKeysProperty;
    /**
     * The number of generations.
     * @type {number}
     * @memberof ChatModelConfigRequest
     */
    'num_samples'?: number;
    /**
     * If true, tokens will be sent as data-only server-sent events. If num_samples > 1, samples are streamed back independently.
     * @type {boolean}
     * @memberof ChatModelConfigRequest
     */
    'stream'?: boolean;
    /**
     * End-user ID passed through to provider call.
     * @type {string}
     * @memberof ChatModelConfigRequest
     */
    'user'?: string;
    /**
     * Deprecated field: the seed is instead set as part of the request.config object.
     * @type {number}
     * @memberof ChatModelConfigRequest
     * @deprecated
     */
    'seed'?: number;
    /**
     * Whether to return the inputs in the response. If false, the response will contain an empty dictionary under inputs. This is useful for reducing the size of the response. Defaults to true.
     * @type {boolean}
     * @memberof ChatModelConfigRequest
     */
    'return_inputs'?: boolean;
    /**
     * The messages passed to the to provider chat endpoint.
     * @type {Array<ChatMessageWithToolCall>}
     * @memberof ChatModelConfigRequest
     */
    'messages': Array<ChatMessageWithToolCall>;
    /**
     * 
     * @type {ToolChoiceProperty}
     * @memberof ChatModelConfigRequest
     */
    'tool_choice'?: ToolChoiceProperty;
    /**
     * 
     * @type {ToolCallProperty1}
     * @memberof ChatModelConfigRequest
     * @deprecated
     */
    'tool_call'?: ToolCallProperty1;
    /**
     * 
     * @type {ResponseFormatProperty}
     * @memberof ChatModelConfigRequest
     */
    'response_format'?: ResponseFormatProperty;
    /**
     * Identifies the model configuration used to create a chat response.
     * @type {string}
     * @memberof ChatModelConfigRequest
     */
    'model_config_id': string;
}

