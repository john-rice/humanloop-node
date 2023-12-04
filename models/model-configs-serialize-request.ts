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
import { ModelConfigChatRequest } from './model-config-chat-request';
import { ModelConfigCompletionRequest } from './model-config-completion-request';
import { ModelConfigToolRequest } from './model-config-tool-request';
import { ModelEndpoints } from './model-endpoints';
import { ModelProviders } from './model-providers';
import { ResponseFormatProperty } from './response-format-property';
import { StopSequenceSProperty } from './stop-sequence-sproperty';

/**
 * @type ModelConfigsSerializeRequest
 * @export
 */
export type ModelConfigsSerializeRequest = ModelConfigChatRequest | ModelConfigCompletionRequest;

