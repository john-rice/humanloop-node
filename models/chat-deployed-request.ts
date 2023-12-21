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

import { ChatMessage } from './chat-message';
import { ProviderAPIKeysProperty } from './provider-apikeys-property';
import { ResponseFormatProperty } from './response-format-property';
import { ToolCallProperty1 } from './tool-call-property1';
import { ToolChoiceProperty } from './tool-choice-property';

/**
 * Chat request for active deployment.
 * @export
 * @interface ChatDeployedRequest
 */
export interface ChatDeployedRequest {
    /**
     * Unique project name. If no project exists with this name, a new project will be created.
     * @type {string}
     * @memberof ChatDeployedRequest
     */
    'project'?: string;
    /**
     * Unique ID of a project to associate to the log. Either this or `project` must be provided.
     * @type {string}
     * @memberof ChatDeployedRequest
     */
    'project_id'?: string;
    /**
     * ID of the session to associate the datapoint.
     * @type {string}
     * @memberof ChatDeployedRequest
     */
    'session_id'?: string;
    /**
     * A unique string identifying the session to associate the datapoint to. Allows you to log multiple datapoints to a session (using an ID kept by your internal systems) by passing the same `session_reference_id` in subsequent log requests. Specify at most one of this or `session_id`.
     * @type {string}
     * @memberof ChatDeployedRequest
     */
    'session_reference_id'?: string;
    /**
     * ID associated to the parent datapoint in a session.
     * @type {string}
     * @memberof ChatDeployedRequest
     */
    'parent_id'?: string;
    /**
     * A unique string identifying the previously-logged parent datapoint in a session. Allows you to log nested datapoints with your internal system IDs by passing the same reference ID as `parent_id` in a prior log request. Specify at most one of this or `parent_id`. Note that this cannot refer to a datapoint being logged in the same request.
     * @type {string}
     * @memberof ChatDeployedRequest
     */
    'parent_reference_id'?: string;
    /**
     * The inputs passed to the prompt template.
     * @type {object}
     * @memberof ChatDeployedRequest
     */
    'inputs'?: object;
    /**
     * Identifies where the model was called from.
     * @type {string}
     * @memberof ChatDeployedRequest
     */
    'source'?: string;
    /**
     * Any additional metadata to record.
     * @type {object}
     * @memberof ChatDeployedRequest
     */
    'metadata'?: object;
    /**
     * ID of the source datapoint if this is a log derived from a datapoint in a dataset.
     * @type {string}
     * @memberof ChatDeployedRequest
     */
    'source_datapoint_id'?: string;
    /**
     * 
     * @type {ProviderAPIKeysProperty}
     * @memberof ChatDeployedRequest
     */
    'provider_api_keys'?: ProviderAPIKeysProperty;
    /**
     * The number of generations.
     * @type {number}
     * @memberof ChatDeployedRequest
     */
    'num_samples'?: number;
    /**
     * If true, tokens will be sent as data-only server-sent events. If num_samples > 1, samples are streamed back independently.
     * @type {boolean}
     * @memberof ChatDeployedRequest
     */
    'stream'?: boolean;
    /**
     * End-user ID passed through to provider call.
     * @type {string}
     * @memberof ChatDeployedRequest
     */
    'user'?: string;
    /**
     * If specified, model will make a best effort to sample deterministically, but it is not guaranteed.
     * @type {number}
     * @memberof ChatDeployedRequest
     */
    'seed'?: number;
    /**
     * Whether to return the inputs in the response. If false, the response will contain an empty dictionary under inputs. This is useful for reducing the size of the response. Defaults to true.
     * @type {boolean}
     * @memberof ChatDeployedRequest
     */
    'return_inputs'?: boolean;
    /**
     * The messages passed to the to provider chat endpoint.
     * @type {Array<ChatMessage>}
     * @memberof ChatDeployedRequest
     */
    'messages': Array<ChatMessage>;
    /**
     * 
     * @type {ToolChoiceProperty}
     * @memberof ChatDeployedRequest
     */
    'tool_choice'?: ToolChoiceProperty;
    /**
     * 
     * @type {ToolCallProperty1}
     * @memberof ChatDeployedRequest
     * @deprecated
     */
    'tool_call'?: ToolCallProperty1;
    /**
     * 
     * @type {ResponseFormatProperty}
     * @memberof ChatDeployedRequest
     */
    'response_format'?: ResponseFormatProperty;
    /**
     * The environment name used to create a chat response. If not specified, the default environment will be used.
     * @type {string}
     * @memberof ChatDeployedRequest
     */
    'environment'?: string;
}

