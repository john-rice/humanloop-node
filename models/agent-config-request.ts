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

import { ModelConfigProperty } from './model-config-property';
import { ToolConfigRequest } from './tool-config-request';

/**
 * Base config request for all config types.  Contains fields that are common to all config types. Specifically, `name` and `description` that are saved at the organization-level.
 * @export
 * @interface AgentConfigRequest
 */
export interface AgentConfigRequest {
    /**
     * A description of the model config.
     * @type {string}
     * @memberof AgentConfigRequest
     */
    'description'?: string;
    /**
     * A friendly display name for the model config. If not provided, a name will be generated.
     * @type {string}
     * @memberof AgentConfigRequest
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof AgentConfigRequest
     */
    'type': AgentConfigRequestTypeEnum;
    /**
     * Class of the agent.
     * @type {string}
     * @memberof AgentConfigRequest
     */
    'agent_class': string;
    /**
     * Tools to associate with the agent.
     * @type {Array<ToolConfigRequest>}
     * @memberof AgentConfigRequest
     */
    'tools'?: Array<ToolConfigRequest>;
    /**
     * 
     * @type {ModelConfigProperty}
     * @memberof AgentConfigRequest
     */
    'model_config': ModelConfigProperty;
    /**
     * Other parameters that define the config.
     * @type {object}
     * @memberof AgentConfigRequest
     */
    'other'?: object;
}

type AgentConfigRequestTypeEnum = 'agent'


