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
import { CreateExperimentRequest } from '../models';
// @ts-ignore
import { ExperimentResponse } from '../models';
// @ts-ignore
import { GetModelConfigResponse } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { PositiveLabel } from '../models';
// @ts-ignore
import { UpdateExperimentRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ExperimentsApi - axios parameter creator
 * @export
 */
export const ExperimentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create an experiment for your project.  You can optionally specify IDs of your project\'s model configs to include in the experiment, along with a set of labels to consider as positive feedback and whether the experiment should be set as active.
         * @summary Create
         * @param {string} projectId String ID of project. Starts with &#x60;pr_&#x60;.
         * @param {CreateExperimentRequest} createExperimentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (projectId: string, createExperimentRequest: CreateExperimentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('create', 'projectId', projectId)
            // verify required parameter 'createExperimentRequest' is not null or undefined
            assertParamExists('create', 'createExperimentRequest', createExperimentRequest)
            const localVarPath = `/projects/{project_id}/experiments`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId !== undefined ? projectId : `-project_id-`)));
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
                requestBody: createExperimentRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createExperimentRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete the experiment with the specified ID.
         * @summary Delete
         * @param {string} experimentId String ID of experiment. Starts with &#x60;exp_&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete: async (experimentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'experimentId' is not null or undefined
            assertParamExists('delete', 'experimentId', experimentId)
            const localVarPath = `/experiments/{experiment_id}`
                .replace(`{${"experiment_id"}}`, encodeURIComponent(String(experimentId !== undefined ? experimentId : `-experiment_id-`)));
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
         * Get an array of experiments associated to your project.
         * @summary List 
         * @param {string} projectId String ID of project. Starts with &#x60;pr_&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (projectId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('list', 'projectId', projectId)
            const localVarPath = `/projects/{project_id}/experiments`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId !== undefined ? projectId : `-project_id-`)));
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
         * Samples a model config from the experiment\'s active model configs.
         * @summary Sample
         * @param {string} experimentId String ID of experiment. Starts with &#x60;exp_&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sample: async (experimentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'experimentId' is not null or undefined
            assertParamExists('sample', 'experimentId', experimentId)
            const localVarPath = `/experiments/{experiment_id}/model-config`
                .replace(`{${"experiment_id"}}`, encodeURIComponent(String(experimentId !== undefined ? experimentId : `-experiment_id-`)));
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
         * Update your experiment, including registering and de-registering model configs.
         * @summary Update
         * @param {string} experimentId String ID of experiment. Starts with &#x60;exp_&#x60;.
         * @param {UpdateExperimentRequest} updateExperimentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (experimentId: string, updateExperimentRequest: UpdateExperimentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'experimentId' is not null or undefined
            assertParamExists('update', 'experimentId', experimentId)
            // verify required parameter 'updateExperimentRequest' is not null or undefined
            assertParamExists('update', 'updateExperimentRequest', updateExperimentRequest)
            const localVarPath = `/experiments/{experiment_id}`
                .replace(`{${"experiment_id"}}`, encodeURIComponent(String(experimentId !== undefined ? experimentId : `-experiment_id-`)));
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
                requestBody: updateExperimentRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateExperimentRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExperimentsApi - functional programming interface
 * @export
 */
export const ExperimentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExperimentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create an experiment for your project.  You can optionally specify IDs of your project\'s model configs to include in the experiment, along with a set of labels to consider as positive feedback and whether the experiment should be set as active.
         * @summary Create
         * @param {ExperimentsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: ExperimentsApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExperimentResponse>> {
            const createExperimentRequest: CreateExperimentRequest = {
                name: requestParameters.name,
                config_ids: requestParameters.config_ids,
                positive_labels: requestParameters.positive_labels,
                set_active: requestParameters.set_active
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(requestParameters.projectId, createExperimentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete the experiment with the specified ID.
         * @summary Delete
         * @param {ExperimentsApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete(requestParameters: ExperimentsApiDeleteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete(requestParameters.experimentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get an array of experiments associated to your project.
         * @summary List 
         * @param {ExperimentsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: ExperimentsApiListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ExperimentResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.projectId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Samples a model config from the experiment\'s active model configs.
         * @summary Sample
         * @param {ExperimentsApiSampleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sample(requestParameters: ExperimentsApiSampleRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetModelConfigResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sample(requestParameters.experimentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update your experiment, including registering and de-registering model configs.
         * @summary Update
         * @param {ExperimentsApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(requestParameters: ExperimentsApiUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExperimentResponse>> {
            const updateExperimentRequest: UpdateExperimentRequest = {
                name: requestParameters.name,
                positive_labels: requestParameters.positive_labels,
                config_ids_to_register: requestParameters.config_ids_to_register,
                config_ids_to_deregister: requestParameters.config_ids_to_deregister
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(requestParameters.experimentId, updateExperimentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ExperimentsApi - factory interface
 * @export
 */
export const ExperimentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExperimentsApiFp(configuration)
    return {
        /**
         * Create an experiment for your project.  You can optionally specify IDs of your project\'s model configs to include in the experiment, along with a set of labels to consider as positive feedback and whether the experiment should be set as active.
         * @summary Create
         * @param {ExperimentsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: ExperimentsApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<ExperimentResponse> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete the experiment with the specified ID.
         * @summary Delete
         * @param {ExperimentsApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete(requestParameters: ExperimentsApiDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.delete(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get an array of experiments associated to your project.
         * @summary List 
         * @param {ExperimentsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: ExperimentsApiListRequest, options?: AxiosRequestConfig): AxiosPromise<Array<ExperimentResponse>> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Samples a model config from the experiment\'s active model configs.
         * @summary Sample
         * @param {ExperimentsApiSampleRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sample(requestParameters: ExperimentsApiSampleRequest, options?: AxiosRequestConfig): AxiosPromise<GetModelConfigResponse> {
            return localVarFp.sample(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update your experiment, including registering and de-registering model configs.
         * @summary Update
         * @param {ExperimentsApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(requestParameters: ExperimentsApiUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<ExperimentResponse> {
            return localVarFp.update(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in ExperimentsApi.
 * @export
 * @interface ExperimentsApiCreateRequest
 */
export type ExperimentsApiCreateRequest = {
    
    /**
    * String ID of project. Starts with `pr_`.
    * @type {string}
    * @memberof ExperimentsApiCreate
    */
    readonly projectId: string
    
} & CreateExperimentRequest

/**
 * Request parameters for delete operation in ExperimentsApi.
 * @export
 * @interface ExperimentsApiDeleteRequest
 */
export type ExperimentsApiDeleteRequest = {
    
    /**
    * String ID of experiment. Starts with `exp_`.
    * @type {string}
    * @memberof ExperimentsApiDelete
    */
    readonly experimentId: string
    
}

/**
 * Request parameters for list operation in ExperimentsApi.
 * @export
 * @interface ExperimentsApiListRequest
 */
export type ExperimentsApiListRequest = {
    
    /**
    * String ID of project. Starts with `pr_`.
    * @type {string}
    * @memberof ExperimentsApiList
    */
    readonly projectId: string
    
}

/**
 * Request parameters for sample operation in ExperimentsApi.
 * @export
 * @interface ExperimentsApiSampleRequest
 */
export type ExperimentsApiSampleRequest = {
    
    /**
    * String ID of experiment. Starts with `exp_`.
    * @type {string}
    * @memberof ExperimentsApiSample
    */
    readonly experimentId: string
    
}

/**
 * Request parameters for update operation in ExperimentsApi.
 * @export
 * @interface ExperimentsApiUpdateRequest
 */
export type ExperimentsApiUpdateRequest = {
    
    /**
    * String ID of experiment. Starts with `exp_`.
    * @type {string}
    * @memberof ExperimentsApiUpdate
    */
    readonly experimentId: string
    
} & UpdateExperimentRequest

/**
 * ExperimentsApiGenerated - object-oriented interface
 * @export
 * @class ExperimentsApiGenerated
 * @extends {BaseAPI}
 */
export class ExperimentsApiGenerated extends BaseAPI {
    /**
     * Create an experiment for your project.  You can optionally specify IDs of your project\'s model configs to include in the experiment, along with a set of labels to consider as positive feedback and whether the experiment should be set as active.
     * @summary Create
     * @param {ExperimentsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExperimentsApiGenerated
     */
    public create(requestParameters: ExperimentsApiCreateRequest, options?: AxiosRequestConfig) {
        return ExperimentsApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete the experiment with the specified ID.
     * @summary Delete
     * @param {ExperimentsApiDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExperimentsApiGenerated
     */
    public delete(requestParameters: ExperimentsApiDeleteRequest, options?: AxiosRequestConfig) {
        return ExperimentsApiFp(this.configuration).delete(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get an array of experiments associated to your project.
     * @summary List 
     * @param {ExperimentsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExperimentsApiGenerated
     */
    public list(requestParameters: ExperimentsApiListRequest, options?: AxiosRequestConfig) {
        return ExperimentsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Samples a model config from the experiment\'s active model configs.
     * @summary Sample
     * @param {ExperimentsApiSampleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExperimentsApiGenerated
     */
    public sample(requestParameters: ExperimentsApiSampleRequest, options?: AxiosRequestConfig) {
        return ExperimentsApiFp(this.configuration).sample(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update your experiment, including registering and de-registering model configs.
     * @summary Update
     * @param {ExperimentsApiUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExperimentsApiGenerated
     */
    public update(requestParameters: ExperimentsApiUpdateRequest, options?: AxiosRequestConfig) {
        return ExperimentsApiFp(this.configuration).update(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
