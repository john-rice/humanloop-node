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
import { ConfigProperty1 } from './config-property1';
import { FeedbackLabelsProperty } from './feedback-labels-property';
import { OutputMessageProperty } from './output-message-property';

/**
 * Request model for logging a datapoint.
 * @export
 * @interface LogRequest
 */
export interface LogRequest {
    /**
     * Unique project name. If no project exists with this name, a new project will be created.
     * @type {string}
     * @memberof LogRequest
     */
    'project'?: string;
    /**
     * Unique ID of a project to associate to the log. Either this or `project` must be provided.
     * @type {string}
     * @memberof LogRequest
     */
    'project_id'?: string;
    /**
     * ID of the session to associate the datapoint.
     * @type {string}
     * @memberof LogRequest
     */
    'session_id'?: string;
    /**
     * A unique string identifying the session to associate the datapoint to. Allows you to log multiple datapoints to a session (using an ID kept by your internal systems) by passing the same `session_reference_id` in subsequent log requests. Specify at most one of this or `session_id`.
     * @type {string}
     * @memberof LogRequest
     */
    'session_reference_id'?: string;
    /**
     * ID associated to the parent datapoint in a session.
     * @type {string}
     * @memberof LogRequest
     */
    'parent_id'?: string;
    /**
     * A unique string identifying the previously-logged parent datapoint in a session. Allows you to log nested datapoints with your internal system IDs by passing the same reference ID as `parent_id` in a prior log request. Specify at most one of this or `parent_id`. Note that this cannot refer to a datapoint being logged in the same request.
     * @type {string}
     * @memberof LogRequest
     */
    'parent_reference_id'?: string;
    /**
     * The inputs passed to the prompt template.
     * @type {object}
     * @memberof LogRequest
     */
    'inputs'?: object;
    /**
     * Identifies where the model was called from.
     * @type {string}
     * @memberof LogRequest
     */
    'source'?: string;
    /**
     * Any additional metadata to record.
     * @type {object}
     * @memberof LogRequest
     */
    'metadata'?: object;
    /**
     * Whether the request/response payloads will be stored on Humanloop.
     * @type {boolean}
     * @memberof LogRequest
     */
    'save'?: boolean;
    /**
     * ID of the source datapoint if this is a log derived from a datapoint in a dataset.
     * @type {string}
     * @memberof LogRequest
     */
    'source_datapoint_id'?: string;
    /**
     * A unique string to reference the datapoint. Allows you to log nested datapoints with your internal system IDs by passing the same reference ID as `parent_id` in a subsequent log request.
     * @type {string}
     * @memberof LogRequest
     */
    'reference_id'?: string;
    /**
     * Unique ID of an experiment trial to associate to the log.
     * @type {string}
     * @memberof LogRequest
     */
    'trial_id'?: string;
    /**
     * The messages passed to the to provider chat endpoint.
     * @type {Array<ChatMessageWithToolCall>}
     * @memberof LogRequest
     */
    'messages'?: Array<ChatMessageWithToolCall>;
    /**
     * Generated output from your model for the provided inputs. Can be `None` if logging an error, or if logging a parent datapoint with the intention to populate it later
     * @type {string}
     * @memberof LogRequest
     */
    'output'?: string;
    /**
     * Unique ID of a config to associate to the log.
     * @type {string}
     * @memberof LogRequest
     */
    'config_id'?: string;
    /**
     * 
     * @type {ConfigProperty1}
     * @memberof LogRequest
     */
    'config'?: ConfigProperty1;
    /**
     * The environment name used to create the log.
     * @type {string}
     * @memberof LogRequest
     */
    'environment'?: string;
    /**
     * 
     * @type {FeedbackLabelsProperty}
     * @memberof LogRequest
     */
    'feedback'?: FeedbackLabelsProperty;
    /**
     * User defined timestamp for when the log was created. 
     * @type {string}
     * @memberof LogRequest
     */
    'created_at'?: string;
    /**
     * Error message if the log is an error.
     * @type {string}
     * @memberof LogRequest
     */
    'error'?: string;
    /**
     * Duration of the logged event in seconds.
     * @type {number}
     * @memberof LogRequest
     */
    'duration'?: number;
    /**
     * 
     * @type {OutputMessageProperty}
     * @memberof LogRequest
     */
    'output_message'?: OutputMessageProperty;
    /**
     * Number of tokens in the prompt used to generate the output.
     * @type {number}
     * @memberof LogRequest
     */
    'prompt_tokens'?: number;
    /**
     * Number of tokens in the output generated by the model.
     * @type {number}
     * @memberof LogRequest
     */
    'output_tokens'?: number;
    /**
     * Raw request sent to provider.
     * @type {object}
     * @memberof LogRequest
     */
    'provider_request'?: object;
    /**
     * Raw response received the provider.
     * @type {object}
     * @memberof LogRequest
     */
    'provider_response'?: object;
}

