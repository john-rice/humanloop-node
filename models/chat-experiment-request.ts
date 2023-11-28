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
 * Base chat request.
 * @export
 * @interface ChatExperimentRequest
 */
export interface ChatExperimentRequest {
    /**
     * Unique project name. If no project exists with this name, a new project will be created.
     * @type {string}
     * @memberof ChatExperimentRequest
     */
    'project'?: string;
    /**
     * Unique ID of a project to associate to the log. Either this or `project` must be provided.
     * @type {string}
     * @memberof ChatExperimentRequest
     */
    'project_id'?: string;
    /**
     * ID of the session to associate the datapoint.
     * @type {string}
     * @memberof ChatExperimentRequest
     */
    'session_id'?: string;
    /**
     * A unique string identifying the session to associate the datapoint to. Allows you to log multiple datapoints to a session (using an ID kept by your internal systems) by passing the same `session_reference_id` in subsequent log requests. Specify at most one of this or `session_id`.
     * @type {string}
     * @memberof ChatExperimentRequest
     */
    'session_reference_id'?: string;
    /**
     * ID associated to the parent datapoint in a session.
     * @type {string}
     * @memberof ChatExperimentRequest
     */
    'parent_id'?: string;
    /**
     * A unique string identifying the previously-logged parent datapoint in a session. Allows you to log nested datapoints with your internal system IDs by passing the same reference ID as `parent_id` in a prior log request. Specify at most one of this or `parent_id`. Note that this cannot refer to a datapoint being logged in the same request.
     * @type {string}
     * @memberof ChatExperimentRequest
     */
    'parent_reference_id'?: string;
    /**
     * The inputs passed to the prompt template.
     * @type {object}
     * @memberof ChatExperimentRequest
     */
    'inputs'?: object;
    /**
     * Identifies where the model was called from.
     * @type {string}
     * @memberof ChatExperimentRequest
     */
    'source'?: string;
    /**
     * Any additional metadata to record.
     * @type {object}
     * @memberof ChatExperimentRequest
     */
    'metadata'?: object;
    /**
     * ID of the source datapoint if this is a log derived from a datapoint in a dataset.
     * @type {string}
     * @memberof ChatExperimentRequest
     */
    'source_datapoint_id'?: string;
    /**
     * The messages passed to the to provider chat endpoint.
     * @type {Array<ChatMessage>}
     * @memberof ChatExperimentRequest
     */
    'messages': Array<ChatMessage>;
    /**
     * 
     * @type {ProviderAPIKeysProperty}
     * @memberof ChatExperimentRequest
     */
    'provider_api_keys'?: ProviderAPIKeysProperty;
    /**
     * The number of chat responses, where each chat response will use a model configuration sampled from the experiment.
     * @type {number}
     * @memberof ChatExperimentRequest
     */
    'num_samples'?: number;
    /**
     * If true, tokens will be sent as data-only server-sent events. If num_samples > 1, samples are streamed back independently.
     * @type {boolean}
     * @memberof ChatExperimentRequest
     */
    'stream'?: boolean;
    /**
     * End-user ID passed through to provider call.
     * @type {string}
     * @memberof ChatExperimentRequest
     */
    'user'?: string;
    /**
     * 
     * @type {ToolChoiceProperty}
     * @memberof ChatExperimentRequest
     */
    'tool_choice'?: ToolChoiceProperty;
    /**
     * 
     * @type {ToolCallProperty1}
     * @memberof ChatExperimentRequest
     * @deprecated
     */
    'tool_call'?: ToolCallProperty1;
    /**
     * If specified, model will make a best effort to sample deterministically, but it is not guaranteed.
     * @type {number}
     * @memberof ChatExperimentRequest
     */
    'seed'?: number;
    /**
     * 
     * @type {ResponseFormatProperty}
     * @memberof ChatExperimentRequest
     */
    'response_format'?: ResponseFormatProperty;
    /**
     * If an experiment ID is provided a model configuration will be sampled from the experiments active model configurations.
     * @type {string}
     * @memberof ChatExperimentRequest
     */
    'experiment_id': string;
}

