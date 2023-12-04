/* tslint:disable */
/* eslint-disable */
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

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BodyModelConfigsDeserialize } from '../models';
// @ts-ignore
import { ChatMessage } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { ModelConfigResponse } from '../models';
// @ts-ignore
import { ModelConfigToolRequest } from '../models';
// @ts-ignore
import { ModelConfigsSerializeRequest } from '../models';
// @ts-ignore
import { ModelEndpoints } from '../models';
// @ts-ignore
import { ModelProviders } from '../models';
// @ts-ignore
import { ProjectConfigResponse } from '../models';
// @ts-ignore
import { ProjectModelConfigRequest } from '../models';
// @ts-ignore
import { ResponseFormatProperty } from '../models';
// @ts-ignore
import { StopSequenceSProperty } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ModelConfigsApi - axios parameter creator
 * @export
 */
export const ModelConfigsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deserialize a model config from a .prompt file format.
         * @summary Deserialize
         * @param {BodyModelConfigsDeserialize} bodyModelConfigsDeserialize 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deserialize: async (bodyModelConfigsDeserialize: BodyModelConfigsDeserialize, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bodyModelConfigsDeserialize' is not null or undefined
            assertParamExists('deserialize', 'bodyModelConfigsDeserialize', bodyModelConfigsDeserialize)
            const localVarPath = `/model-configs/deserialize`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: bodyModelConfigsDeserialize,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(bodyModelConfigsDeserialize, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Export a model config to a .prompt file by ID.
         * @summary Export by ID
         * @param {string} id String ID of the model config. Starts with &#x60;config_&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        export: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('export', 'id', id)
            const localVarPath = `/model-configs/{id}/export`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a specific model config by ID.
         * @summary Get
         * @param {string} id String ID of the model config. Starts with &#x60;config_&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('get', 'id', id)
            const localVarPath = `/model-configs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Register a model config to a project and optionally add it to an experiment.  If the project name provided does not exist, a new project will be created automatically.  If an experiment name is provided, the specified experiment must already exist. Otherwise, an error will be raised.  If the model config is the first to be associated to the project, it will be set as the active model config.
         * @summary Register
         * @param {ProjectModelConfigRequest} projectModelConfigRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register: async (projectModelConfigRequest: ProjectModelConfigRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectModelConfigRequest' is not null or undefined
            assertParamExists('register', 'projectModelConfigRequest', projectModelConfigRequest)
            const localVarPath = `/model-configs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: projectModelConfigRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(projectModelConfigRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Serialize a model config to a .prompt file format.
         * @summary Serialize
         * @param {ModelConfigsSerializeRequest} modelConfigsSerializeRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serialize: async (modelConfigsSerializeRequest: ModelConfigsSerializeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelConfigsSerializeRequest' is not null or undefined
            assertParamExists('serialize', 'modelConfigsSerializeRequest', modelConfigsSerializeRequest)
            const localVarPath = `/model-configs/serialize`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: modelConfigsSerializeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(modelConfigsSerializeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ModelConfigsApi - functional programming interface
 * @export
 */
export const ModelConfigsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ModelConfigsApiAxiosParamCreator(configuration)
    return {
        /**
         * Deserialize a model config from a .prompt file format.
         * @summary Deserialize
         * @param {ModelConfigsApiDeserializeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deserialize(requestParameters: ModelConfigsApiDeserializeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelConfigResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deserialize(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Export a model config to a .prompt file by ID.
         * @summary Export by ID
         * @param {ModelConfigsApiExportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async export(requestParameters: ModelConfigsApiExportRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.export(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a specific model config by ID.
         * @summary Get
         * @param {ModelConfigsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: ModelConfigsApiGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ModelConfigResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Register a model config to a project and optionally add it to an experiment.  If the project name provided does not exist, a new project will be created automatically.  If an experiment name is provided, the specified experiment must already exist. Otherwise, an error will be raised.  If the model config is the first to be associated to the project, it will be set as the active model config.
         * @summary Register
         * @param {ModelConfigsApiRegisterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async register(requestParameters: ModelConfigsApiRegisterRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectConfigResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.register(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Serialize a model config to a .prompt file format.
         * @summary Serialize
         * @param {ModelConfigsApiSerializeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async serialize(requestParameters: ModelConfigsApiSerializeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.serialize(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ModelConfigsApi - factory interface
 * @export
 */
export const ModelConfigsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ModelConfigsApiFp(configuration)
    return {
        /**
         * Deserialize a model config from a .prompt file format.
         * @summary Deserialize
         * @param {ModelConfigsApiDeserializeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deserialize(requestParameters: ModelConfigsApiDeserializeRequest, options?: AxiosRequestConfig): AxiosPromise<ModelConfigResponse> {
            return localVarFp.deserialize(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Export a model config to a .prompt file by ID.
         * @summary Export by ID
         * @param {ModelConfigsApiExportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        export(requestParameters: ModelConfigsApiExportRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.export(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a specific model config by ID.
         * @summary Get
         * @param {ModelConfigsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: ModelConfigsApiGetRequest, options?: AxiosRequestConfig): AxiosPromise<ModelConfigResponse> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Register a model config to a project and optionally add it to an experiment.  If the project name provided does not exist, a new project will be created automatically.  If an experiment name is provided, the specified experiment must already exist. Otherwise, an error will be raised.  If the model config is the first to be associated to the project, it will be set as the active model config.
         * @summary Register
         * @param {ModelConfigsApiRegisterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register(requestParameters: ModelConfigsApiRegisterRequest, options?: AxiosRequestConfig): AxiosPromise<ProjectConfigResponse> {
            return localVarFp.register(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Serialize a model config to a .prompt file format.
         * @summary Serialize
         * @param {ModelConfigsApiSerializeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        serialize(requestParameters: ModelConfigsApiSerializeRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.serialize(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deserialize operation in ModelConfigsApi.
 * @export
 * @interface ModelConfigsApiDeserializeRequest
 */
export type ModelConfigsApiDeserializeRequest = {
    
} & BodyModelConfigsDeserialize

/**
 * Request parameters for export operation in ModelConfigsApi.
 * @export
 * @interface ModelConfigsApiExportRequest
 */
export type ModelConfigsApiExportRequest = {
    
    /**
    * String ID of the model config. Starts with `config_`.
    * @type {string}
    * @memberof ModelConfigsApiExport
    */
    readonly id: string
    
}

/**
 * Request parameters for get operation in ModelConfigsApi.
 * @export
 * @interface ModelConfigsApiGetRequest
 */
export type ModelConfigsApiGetRequest = {
    
    /**
    * String ID of the model config. Starts with `config_`.
    * @type {string}
    * @memberof ModelConfigsApiGet
    */
    readonly id: string
    
}

/**
 * Request parameters for register operation in ModelConfigsApi.
 * @export
 * @interface ModelConfigsApiRegisterRequest
 */
export type ModelConfigsApiRegisterRequest = {
    
} & ProjectModelConfigRequest

/**
 * Request parameters for serialize operation in ModelConfigsApi.
 * @export
 * @interface ModelConfigsApiSerializeRequest
 */
export type ModelConfigsApiSerializeRequest = {
    
} & ModelConfigsSerializeRequest

/**
 * ModelConfigsApiGenerated - object-oriented interface
 * @export
 * @class ModelConfigsApiGenerated
 * @extends {BaseAPI}
 */
export class ModelConfigsApiGenerated extends BaseAPI {
    /**
     * Deserialize a model config from a .prompt file format.
     * @summary Deserialize
     * @param {ModelConfigsApiDeserializeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelConfigsApiGenerated
     */
    public deserialize(requestParameters: ModelConfigsApiDeserializeRequest, options?: AxiosRequestConfig) {
        return ModelConfigsApiFp(this.configuration).deserialize(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Export a model config to a .prompt file by ID.
     * @summary Export by ID
     * @param {ModelConfigsApiExportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelConfigsApiGenerated
     */
    public export(requestParameters: ModelConfigsApiExportRequest, options?: AxiosRequestConfig) {
        return ModelConfigsApiFp(this.configuration).export(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a specific model config by ID.
     * @summary Get
     * @param {ModelConfigsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelConfigsApiGenerated
     */
    public get(requestParameters: ModelConfigsApiGetRequest, options?: AxiosRequestConfig) {
        return ModelConfigsApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Register a model config to a project and optionally add it to an experiment.  If the project name provided does not exist, a new project will be created automatically.  If an experiment name is provided, the specified experiment must already exist. Otherwise, an error will be raised.  If the model config is the first to be associated to the project, it will be set as the active model config.
     * @summary Register
     * @param {ModelConfigsApiRegisterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelConfigsApiGenerated
     */
    public register(requestParameters: ModelConfigsApiRegisterRequest, options?: AxiosRequestConfig) {
        return ModelConfigsApiFp(this.configuration).register(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Serialize a model config to a .prompt file format.
     * @summary Serialize
     * @param {ModelConfigsApiSerializeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ModelConfigsApiGenerated
     */
    public serialize(requestParameters: ModelConfigsApiSerializeRequest, options?: AxiosRequestConfig) {
        return ModelConfigsApiFp(this.configuration).serialize(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
