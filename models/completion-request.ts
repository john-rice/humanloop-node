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

import { ModelConfigurationProperty1 } from './model-configuration-property1';
import { ProviderAPIKeysProperty } from './provider-apikeys-property';

/**
 * Completion request with a provided model config.
 * @export
 * @interface CompletionRequest
 */
export interface CompletionRequest {
    /**
     * Unique project name. If no project exists with this name, a new project will be created.
     * @type {string}
     * @memberof CompletionRequest
     */
    'project'?: string;
    /**
     * Unique ID of a project to associate to the log. Either this or `project` must be provided.
     * @type {string}
     * @memberof CompletionRequest
     */
    'project_id'?: string;
    /**
     * ID of the session to associate the datapoint.
     * @type {string}
     * @memberof CompletionRequest
     */
    'session_id'?: string;
    /**
     * A unique string identifying the session to associate the datapoint to. Allows you to log multiple datapoints to a session (using an ID kept by your internal systems) by passing the same `session_reference_id` in subsequent log requests. Specify at most one of this or `session_id`.
     * @type {string}
     * @memberof CompletionRequest
     */
    'session_reference_id'?: string;
    /**
     * ID associated to the parent datapoint in a session.
     * @type {string}
     * @memberof CompletionRequest
     */
    'parent_id'?: string;
    /**
     * A unique string identifying the previously-logged parent datapoint in a session. Allows you to log nested datapoints with your internal system IDs by passing the same reference ID as `parent_id` in a prior log request. Specify at most one of this or `parent_id`. Note that this cannot refer to a datapoint being logged in the same request.
     * @type {string}
     * @memberof CompletionRequest
     */
    'parent_reference_id'?: string;
    /**
     * The inputs passed to the prompt template.
     * @type {object}
     * @memberof CompletionRequest
     */
    'inputs'?: object;
    /**
     * Identifies where the model was called from.
     * @type {string}
     * @memberof CompletionRequest
     */
    'source'?: string;
    /**
     * Any additional metadata to record.
     * @type {object}
     * @memberof CompletionRequest
     */
    'metadata'?: object;
    /**
     * 
     * @type {ProviderAPIKeysProperty}
     * @memberof CompletionRequest
     */
    'provider_api_keys'?: ProviderAPIKeysProperty;
    /**
     * The number of generations.
     * @type {number}
     * @memberof CompletionRequest
     */
    'num_samples'?: number;
    /**
     * Include the log probabilities of the top n tokens in the provider_response
     * @type {number}
     * @memberof CompletionRequest
     */
    'logprobs'?: number;
    /**
     * If true, tokens will be sent as data-only server-sent events. If num_samples > 1, samples are streamed back independently.
     * @type {boolean}
     * @memberof CompletionRequest
     */
    'stream'?: boolean;
    /**
     * The suffix that comes after a completion of inserted text. Useful for completions that act like inserts.
     * @type {string}
     * @memberof CompletionRequest
     */
    'suffix'?: string;
    /**
     * End-user ID passed through to provider call.
     * @type {string}
     * @memberof CompletionRequest
     */
    'user'?: string;
    /**
     * 
     * @type {ModelConfigurationProperty1}
     * @memberof CompletionRequest
     */
    'model_config': ModelConfigurationProperty1;
}

