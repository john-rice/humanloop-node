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
import { CreateEvaluatorRequest } from '../models';
// @ts-ignore
import { EvaluatorArgumentsType } from '../models';
// @ts-ignore
import { EvaluatorResponse } from '../models';
// @ts-ignore
import { EvaluatorReturnTypeEnum } from '../models';
// @ts-ignore
import { EvaluatorType } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { ModelConfigCompletionRequest } from '../models';
// @ts-ignore
import { UpdateEvaluatorRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EvaluatorsApi - axios parameter creator
 * @export
 */
export const EvaluatorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create an evaluator within your organization.
         * @summary Create
         * @param {CreateEvaluatorRequest} createEvaluatorRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createEvaluatorRequest: CreateEvaluatorRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createEvaluatorRequest' is not null or undefined
            assertParamExists('create', 'createEvaluatorRequest', createEvaluatorRequest)
            const localVarPath = `/evaluators`;
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
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-KEY", keyParamName: "xAPIKEY", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createEvaluatorRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createEvaluatorRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an evaluator within your organization.
         * @summary Delete
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('delete', 'id', id)
            const localVarPath = `/evaluators/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-KEY", keyParamName: "xAPIKEY", configuration })

    
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
         * Get an evaluator within your organization.
         * @summary Get
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('get', 'id', id)
            const localVarPath = `/evaluators/{id}`
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
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-KEY", keyParamName: "xAPIKEY", configuration })

    
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
         * Get all evaluators within your organization.
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/evaluators`;
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
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-KEY", keyParamName: "xAPIKEY", configuration })

    
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
         * Update an evaluator within your organization.
         * @summary Update
         * @param {string} id 
         * @param {UpdateEvaluatorRequest} updateEvaluatorRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (id: string, updateEvaluatorRequest: UpdateEvaluatorRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('update', 'id', id)
            // verify required parameter 'updateEvaluatorRequest' is not null or undefined
            assertParamExists('update', 'updateEvaluatorRequest', updateEvaluatorRequest)
            const localVarPath = `/evaluators/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-KEY", keyParamName: "xAPIKEY", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateEvaluatorRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateEvaluatorRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EvaluatorsApi - functional programming interface
 * @export
 */
export const EvaluatorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EvaluatorsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create an evaluator within your organization.
         * @summary Create
         * @param {EvaluatorsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: EvaluatorsApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EvaluatorResponse>> {
            const createEvaluatorRequest: CreateEvaluatorRequest = {
                description: requestParameters.description,
                name: requestParameters.name,
                arguments_type: requestParameters.arguments_type,
                return_type: requestParameters.return_type,
                code: requestParameters.code,
                model_config: requestParameters.model_config,
                type: requestParameters.type
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(createEvaluatorRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete an evaluator within your organization.
         * @summary Delete
         * @param {EvaluatorsApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete(requestParameters: EvaluatorsApiDeleteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get an evaluator within your organization.
         * @summary Get
         * @param {EvaluatorsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: EvaluatorsApiGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EvaluatorResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all evaluators within your organization.
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<EvaluatorResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update an evaluator within your organization.
         * @summary Update
         * @param {EvaluatorsApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(requestParameters: EvaluatorsApiUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EvaluatorResponse>> {
            const updateEvaluatorRequest: UpdateEvaluatorRequest = {
                description: requestParameters.description,
                name: requestParameters.name,
                arguments_type: requestParameters.arguments_type,
                return_type: requestParameters.return_type,
                code: requestParameters.code,
                model_config: requestParameters.model_config
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(requestParameters.id, updateEvaluatorRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EvaluatorsApi - factory interface
 * @export
 */
export const EvaluatorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EvaluatorsApiFp(configuration)
    return {
        /**
         * Create an evaluator within your organization.
         * @summary Create
         * @param {EvaluatorsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: EvaluatorsApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<EvaluatorResponse> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an evaluator within your organization.
         * @summary Delete
         * @param {EvaluatorsApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete(requestParameters: EvaluatorsApiDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.delete(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get an evaluator within your organization.
         * @summary Get
         * @param {EvaluatorsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: EvaluatorsApiGetRequest, options?: AxiosRequestConfig): AxiosPromise<EvaluatorResponse> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all evaluators within your organization.
         * @summary List
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(options?: AxiosRequestConfig): AxiosPromise<Array<EvaluatorResponse>> {
            return localVarFp.list(options).then((request) => request(axios, basePath));
        },
        /**
         * Update an evaluator within your organization.
         * @summary Update
         * @param {EvaluatorsApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(requestParameters: EvaluatorsApiUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<EvaluatorResponse> {
            return localVarFp.update(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in EvaluatorsApi.
 * @export
 * @interface EvaluatorsApiCreateRequest
 */
export type EvaluatorsApiCreateRequest = {
    
} & CreateEvaluatorRequest

/**
 * Request parameters for delete operation in EvaluatorsApi.
 * @export
 * @interface EvaluatorsApiDeleteRequest
 */
export type EvaluatorsApiDeleteRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EvaluatorsApiDelete
    */
    readonly id: string
    
}

/**
 * Request parameters for get operation in EvaluatorsApi.
 * @export
 * @interface EvaluatorsApiGetRequest
 */
export type EvaluatorsApiGetRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EvaluatorsApiGet
    */
    readonly id: string
    
}

/**
 * Request parameters for update operation in EvaluatorsApi.
 * @export
 * @interface EvaluatorsApiUpdateRequest
 */
export type EvaluatorsApiUpdateRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof EvaluatorsApiUpdate
    */
    readonly id: string
    
} & UpdateEvaluatorRequest

/**
 * EvaluatorsApiGenerated - object-oriented interface
 * @export
 * @class EvaluatorsApiGenerated
 * @extends {BaseAPI}
 */
export class EvaluatorsApiGenerated extends BaseAPI {
    /**
     * Create an evaluator within your organization.
     * @summary Create
     * @param {EvaluatorsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EvaluatorsApiGenerated
     */
    public create(requestParameters: EvaluatorsApiCreateRequest, options?: AxiosRequestConfig) {
        return EvaluatorsApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete an evaluator within your organization.
     * @summary Delete
     * @param {EvaluatorsApiDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EvaluatorsApiGenerated
     */
    public delete(requestParameters: EvaluatorsApiDeleteRequest, options?: AxiosRequestConfig) {
        return EvaluatorsApiFp(this.configuration).delete(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get an evaluator within your organization.
     * @summary Get
     * @param {EvaluatorsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EvaluatorsApiGenerated
     */
    public get(requestParameters: EvaluatorsApiGetRequest, options?: AxiosRequestConfig) {
        return EvaluatorsApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all evaluators within your organization.
     * @summary List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EvaluatorsApiGenerated
     */
    public list(options?: AxiosRequestConfig) {
        return EvaluatorsApiFp(this.configuration).list(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update an evaluator within your organization.
     * @summary Update
     * @param {EvaluatorsApiUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EvaluatorsApiGenerated
     */
    public update(requestParameters: EvaluatorsApiUpdateRequest, options?: AxiosRequestConfig) {
        return EvaluatorsApiFp(this.configuration).update(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
