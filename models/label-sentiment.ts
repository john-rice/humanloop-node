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


/**
 * How a label should be treated in calculating model config performance.  Used by a project\'s PAPV metric.
 * @export
 * @enum {string}
 */
export type LabelSentiment = 'positive' | 'negative' | 'neutral' | 'unset'

