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

import { ModelConfigRequest } from './model-config-request';
import { ToolConfigRequest } from './tool-config-request';
import { UserResponse } from './user-response';

/**
 * 
 * @export
 * @interface AgentConfigResponse
 */
export interface AgentConfigResponse {
    /**
     * Description of config.
     * @type {string}
     * @memberof AgentConfigResponse
     */
    'description'?: string;
    /**
     * String ID of config. Starts with `config_`.
     * @type {string}
     * @memberof AgentConfigResponse
     */
    'id': string;
    /**
     * Other parameters that define the config.
     * @type {object}
     * @memberof AgentConfigResponse
     */
    'other'?: object;
    /**
     * 
     * @type {string}
     * @memberof AgentConfigResponse
     */
    'type': AgentConfigResponseTypeEnum;
    /**
     * The user who created the config.
     * @type {UserResponse}
     * @memberof AgentConfigResponse
     */
    'created_by'?: UserResponse;
    /**
     * Name of config.
     * @type {string}
     * @memberof AgentConfigResponse
     */
    'name': string;
    /**
     * Class of the agent.
     * @type {string}
     * @memberof AgentConfigResponse
     */
    'agent_class': string;
    /**
     * Tools associated with the agent.
     * @type {Array<ToolConfigRequest>}
     * @memberof AgentConfigResponse
     */
    'tools'?: Array<ToolConfigRequest>;
    /**
     * Model config associated with the agent.
     * @type {ModelConfigRequest}
     * @memberof AgentConfigResponse
     */
    'model_config': ModelConfigRequest;
}

type AgentConfigResponseTypeEnum = 'agent'


