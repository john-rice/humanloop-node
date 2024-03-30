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
import { ChatMessageWithToolCall } from '../models';
// @ts-ignore
import { CreateDatasetRequest } from '../models';
// @ts-ignore
import { DatapointResponse } from '../models';
// @ts-ignore
import { DatasetResponse } from '../models';
// @ts-ignore
import { DatasetsCreateDatapointRequest } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { PaginatedDataDatapointResponse } from '../models';
// @ts-ignore
import { Target } from '../models';
// @ts-ignore
import { UpdateDatasetRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DatasetsApi - axios parameter creator
 * @export
 */
export const DatasetsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new dataset for a project.
         * @summary Create
         * @param {string} projectId 
         * @param {CreateDatasetRequest} createDatasetRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (projectId: string, createDatasetRequest: CreateDatasetRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('create', 'projectId', projectId)
            // verify required parameter 'createDatasetRequest' is not null or undefined
            assertParamExists('create', 'createDatasetRequest', createDatasetRequest)
            const localVarPath = `/projects/{project_id}/datasets`
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
                requestBody: createDatasetRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/projects/{project_id}/datasets',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createDatasetRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new datapoint for a dataset.  Here in the v4 API, this has the following behaviour: * Retrieve the current latest version of the dataset. * Construct a new version of the dataset with the new testcases added. * Store that latest version as a committed version with an autogenerated commit   message and return the new datapoints
         * @summary Create Datapoint
         * @param {string} datasetId String ID of dataset. Starts with &#x60;evts_&#x60;.
         * @param {DatasetsCreateDatapointRequest} datasetsCreateDatapointRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDatapoint: async (datasetId: string, datasetsCreateDatapointRequest: DatasetsCreateDatapointRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'datasetId' is not null or undefined
            assertParamExists('createDatapoint', 'datasetId', datasetId)
            // verify required parameter 'datasetsCreateDatapointRequest' is not null or undefined
            assertParamExists('createDatapoint', 'datasetsCreateDatapointRequest', datasetsCreateDatapointRequest)
            const localVarPath = `/datasets/{dataset_id}/datapoints`
                .replace(`{${"dataset_id"}}`, encodeURIComponent(String(datasetId !== undefined ? datasetId : `-dataset_id-`)));
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
                requestBody: datasetsCreateDatapointRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/datasets/{dataset_id}/datapoints',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(datasetsCreateDatapointRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a dataset by ID.
         * @summary Delete
         * @param {string} id String ID of dataset. Starts with &#x60;evts_&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('delete', 'id', id)
            const localVarPath = `/datasets/{id}`
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
                configuration,
                pathTemplate: '/datasets/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single dataset by ID.
         * @summary Get
         * @param {string} id String ID of dataset. Starts with &#x60;evts_&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('get', 'id', id)
            const localVarPath = `/datasets/{id}`
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
                configuration,
                pathTemplate: '/datasets/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all datasets for a project.
         * @summary List For Project
         * @param {string} projectId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllForProject: async (projectId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('listAllForProject', 'projectId', projectId)
            const localVarPath = `/projects/{project_id}/datasets`
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
                configuration,
                pathTemplate: '/projects/{project_id}/datasets',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get datapoints for a dataset.
         * @summary Datapoints
         * @param {string} datasetId String ID of dataset. Starts with &#x60;evts_&#x60;.
         * @param {number} [page] 
         * @param {number} [size] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDatapoints: async (datasetId: string, page?: number, size?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'datasetId' is not null or undefined
            assertParamExists('listDatapoints', 'datasetId', datasetId)
            const localVarPath = `/datasets/{dataset_id}/datapoints`
                .replace(`{${"dataset_id"}}`, encodeURIComponent(String(datasetId !== undefined ? datasetId : `-dataset_id-`)));
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
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/datasets/{dataset_id}/datapoints',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a testset by ID.
         * @summary Update
         * @param {string} id String ID of testset. Starts with &#x60;evts_&#x60;.
         * @param {UpdateDatasetRequest} updateDatasetRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (id: string, updateDatasetRequest: UpdateDatasetRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('update', 'id', id)
            // verify required parameter 'updateDatasetRequest' is not null or undefined
            assertParamExists('update', 'updateDatasetRequest', updateDatasetRequest)
            const localVarPath = `/datasets/{id}`
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
                requestBody: updateDatasetRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/datasets/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateDatasetRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DatasetsApi - functional programming interface
 * @export
 */
export const DatasetsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DatasetsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new dataset for a project.
         * @summary Create
         * @param {DatasetsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: DatasetsApiCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DatasetResponse>> {
            const createDatasetRequest: CreateDatasetRequest = {
                description: requestParameters.description,
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(requestParameters.projectId, createDatasetRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new datapoint for a dataset.  Here in the v4 API, this has the following behaviour: * Retrieve the current latest version of the dataset. * Construct a new version of the dataset with the new testcases added. * Store that latest version as a committed version with an autogenerated commit   message and return the new datapoints
         * @summary Create Datapoint
         * @param {DatasetsApiCreateDatapointRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDatapoint(requestParameters: DatasetsApiCreateDatapointRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DatapointResponse>>> {
            const datasetsCreateDatapointRequest: DatasetsCreateDatapointRequest = requestParameters.requestBody;
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDatapoint(requestParameters.datasetId, datasetsCreateDatapointRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a dataset by ID.
         * @summary Delete
         * @param {DatasetsApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete(requestParameters: DatasetsApiDeleteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.delete(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single dataset by ID.
         * @summary Get
         * @param {DatasetsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: DatasetsApiGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DatasetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all datasets for a project.
         * @summary List For Project
         * @param {DatasetsApiListAllForProjectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllForProject(requestParameters: DatasetsApiListAllForProjectRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DatasetResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllForProject(requestParameters.projectId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get datapoints for a dataset.
         * @summary Datapoints
         * @param {DatasetsApiListDatapointsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listDatapoints(requestParameters: DatasetsApiListDatapointsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedDataDatapointResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listDatapoints(requestParameters.datasetId, requestParameters.page, requestParameters.size, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a testset by ID.
         * @summary Update
         * @param {DatasetsApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(requestParameters: DatasetsApiUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DatasetResponse>> {
            const updateDatasetRequest: UpdateDatasetRequest = {
                description: requestParameters.description,
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(requestParameters.id, updateDatasetRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DatasetsApi - factory interface
 * @export
 */
export const DatasetsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DatasetsApiFp(configuration)
    return {
        /**
         * Create a new dataset for a project.
         * @summary Create
         * @param {DatasetsApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: DatasetsApiCreateRequest, options?: AxiosRequestConfig): AxiosPromise<DatasetResponse> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new datapoint for a dataset.  Here in the v4 API, this has the following behaviour: * Retrieve the current latest version of the dataset. * Construct a new version of the dataset with the new testcases added. * Store that latest version as a committed version with an autogenerated commit   message and return the new datapoints
         * @summary Create Datapoint
         * @param {DatasetsApiCreateDatapointRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDatapoint(requestParameters: DatasetsApiCreateDatapointRequest, options?: AxiosRequestConfig): AxiosPromise<Array<DatapointResponse>> {
            return localVarFp.createDatapoint(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a dataset by ID.
         * @summary Delete
         * @param {DatasetsApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete(requestParameters: DatasetsApiDeleteRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.delete(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single dataset by ID.
         * @summary Get
         * @param {DatasetsApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: DatasetsApiGetRequest, options?: AxiosRequestConfig): AxiosPromise<DatasetResponse> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all datasets for a project.
         * @summary List For Project
         * @param {DatasetsApiListAllForProjectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllForProject(requestParameters: DatasetsApiListAllForProjectRequest, options?: AxiosRequestConfig): AxiosPromise<Array<DatasetResponse>> {
            return localVarFp.listAllForProject(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get datapoints for a dataset.
         * @summary Datapoints
         * @param {DatasetsApiListDatapointsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDatapoints(requestParameters: DatasetsApiListDatapointsRequest, options?: AxiosRequestConfig): AxiosPromise<PaginatedDataDatapointResponse> {
            return localVarFp.listDatapoints(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a testset by ID.
         * @summary Update
         * @param {DatasetsApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(requestParameters: DatasetsApiUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<DatasetResponse> {
            return localVarFp.update(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in DatasetsApi.
 * @export
 * @interface DatasetsApiCreateRequest
 */
export type DatasetsApiCreateRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof DatasetsApiCreate
    */
    readonly projectId: string
    
} & CreateDatasetRequest

/**
 * Request parameters for createDatapoint operation in DatasetsApi.
 * @export
 * @interface DatasetsApiCreateDatapointRequest
 */
export type DatasetsApiCreateDatapointRequest = {
    /**
    * String ID of dataset. Starts with `evts_`.
    * @type {string}
    * @memberof DatasetsApiCreateDatapoint
    */
    readonly datasetId: string
    /**
    * 
    * @type {DatasetsCreateDatapointRequest}
    * @memberof DatasetsApiCreateDatapoint
    */
    readonly requestBody: DatasetsCreateDatapointRequest
}

/**
 * Request parameters for delete operation in DatasetsApi.
 * @export
 * @interface DatasetsApiDeleteRequest
 */
export type DatasetsApiDeleteRequest = {
    
    /**
    * String ID of dataset. Starts with `evts_`.
    * @type {string}
    * @memberof DatasetsApiDelete
    */
    readonly id: string
    
}

/**
 * Request parameters for get operation in DatasetsApi.
 * @export
 * @interface DatasetsApiGetRequest
 */
export type DatasetsApiGetRequest = {
    
    /**
    * String ID of dataset. Starts with `evts_`.
    * @type {string}
    * @memberof DatasetsApiGet
    */
    readonly id: string
    
}

/**
 * Request parameters for listAllForProject operation in DatasetsApi.
 * @export
 * @interface DatasetsApiListAllForProjectRequest
 */
export type DatasetsApiListAllForProjectRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof DatasetsApiListAllForProject
    */
    readonly projectId: string
    
}

/**
 * Request parameters for listDatapoints operation in DatasetsApi.
 * @export
 * @interface DatasetsApiListDatapointsRequest
 */
export type DatasetsApiListDatapointsRequest = {
    
    /**
    * String ID of dataset. Starts with `evts_`.
    * @type {string}
    * @memberof DatasetsApiListDatapoints
    */
    readonly datasetId: string
    
    /**
    * 
    * @type {number}
    * @memberof DatasetsApiListDatapoints
    */
    readonly page?: number
    
    /**
    * 
    * @type {number}
    * @memberof DatasetsApiListDatapoints
    */
    readonly size?: number
    
}

/**
 * Request parameters for update operation in DatasetsApi.
 * @export
 * @interface DatasetsApiUpdateRequest
 */
export type DatasetsApiUpdateRequest = {
    
    /**
    * String ID of testset. Starts with `evts_`.
    * @type {string}
    * @memberof DatasetsApiUpdate
    */
    readonly id: string
    
} & UpdateDatasetRequest

/**
 * DatasetsApiGenerated - object-oriented interface
 * @export
 * @class DatasetsApiGenerated
 * @extends {BaseAPI}
 */
export class DatasetsApiGenerated extends BaseAPI {
    /**
     * Create a new dataset for a project.
     * @summary Create
     * @param {DatasetsApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApiGenerated
     */
    public create(requestParameters: DatasetsApiCreateRequest, options?: AxiosRequestConfig) {
        return DatasetsApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new datapoint for a dataset.  Here in the v4 API, this has the following behaviour: * Retrieve the current latest version of the dataset. * Construct a new version of the dataset with the new testcases added. * Store that latest version as a committed version with an autogenerated commit   message and return the new datapoints
     * @summary Create Datapoint
     * @param {DatasetsApiCreateDatapointRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApiGenerated
     */
    public createDatapoint(requestParameters: DatasetsApiCreateDatapointRequest, options?: AxiosRequestConfig) {
        return DatasetsApiFp(this.configuration).createDatapoint(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a dataset by ID.
     * @summary Delete
     * @param {DatasetsApiDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApiGenerated
     */
    public delete(requestParameters: DatasetsApiDeleteRequest, options?: AxiosRequestConfig) {
        return DatasetsApiFp(this.configuration).delete(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single dataset by ID.
     * @summary Get
     * @param {DatasetsApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApiGenerated
     */
    public get(requestParameters: DatasetsApiGetRequest, options?: AxiosRequestConfig) {
        return DatasetsApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all datasets for a project.
     * @summary List For Project
     * @param {DatasetsApiListAllForProjectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApiGenerated
     */
    public listAllForProject(requestParameters: DatasetsApiListAllForProjectRequest, options?: AxiosRequestConfig) {
        return DatasetsApiFp(this.configuration).listAllForProject(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get datapoints for a dataset.
     * @summary Datapoints
     * @param {DatasetsApiListDatapointsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApiGenerated
     */
    public listDatapoints(requestParameters: DatasetsApiListDatapointsRequest, options?: AxiosRequestConfig) {
        return paginate({
            initialParameters: requestParameters,
            request: (parameters: DatasetsApiListDatapointsRequest) => {
                return DatasetsApiFp(this.configuration).listDatapoints(parameters, options).then((request) => request(this.axios, this.basePath));
            },
        });
    }

    /**
     * Update a testset by ID.
     * @summary Update
     * @param {DatasetsApiUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApiGenerated
     */
    public update(requestParameters: DatasetsApiUpdateRequest, options?: AxiosRequestConfig) {
        return DatasetsApiFp(this.configuration).update(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
