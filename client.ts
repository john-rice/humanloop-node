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

import { AxiosRequestConfig } from "axios";
import {
  ChatsApi,
  ChatsApiCreateRequest,
  ChatsApiCreateDeployedRequest,
  ChatsApiCreateExperimentRequest,
  ChatsApiCreateModelConfigRequest,
  CompletionsApi,
  CompletionsApiCreateRequest,
  CompletionsApiCreateDeployedRequest,
  CompletionsApiCreateExperimentRequest,
  CompletionsApiCreateModelConfigRequest,
  EvaluationsApi,
  EvaluatorsApi,
  ExperimentsApi,
  FeedbackApi,
  FeedbackApiFeedbackRequest,
  LogsApi,
  LogsApiLogRequest,
  ModelConfigsApi,
  ProjectsApi,
  SessionsApi,
  TestcasesApi,
  TestsetsApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { HumanloopCustom } from "./client-custom";

export class Humanloop extends HumanloopCustom {
  readonly chats: ChatsApi;
  readonly completions: CompletionsApi;
  readonly evaluations: EvaluationsApi;
  readonly evaluators: EvaluatorsApi;
  readonly experiments: ExperimentsApi;
  readonly feedbackApi: FeedbackApi;
  readonly logs: LogsApi;
  readonly modelConfigs: ModelConfigsApi;
  readonly projects: ProjectsApi;
  readonly sessions: SessionsApi;
  readonly testcases: TestcasesApi;
  readonly testsets: TestsetsApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.chats = new ChatsApi(configuration);
    this.completions = new CompletionsApi(configuration);
    this.evaluations = new EvaluationsApi(configuration);
    this.evaluators = new EvaluatorsApi(configuration);
    this.experiments = new ExperimentsApi(configuration);
    this.feedbackApi = new FeedbackApi(configuration);
    this.logs = new LogsApi(configuration);
    this.modelConfigs = new ModelConfigsApi(configuration);
    this.projects = new ProjectsApi(configuration);
    this.sessions = new SessionsApi(configuration);
    this.testcases = new TestcasesApi(configuration);
    this.testsets = new TestsetsApi(configuration);
  }

   chat(requestParameters: ChatsApiCreateRequest, options?: AxiosRequestConfig) {
       return this.chats.create(requestParameters, options)
   }

   chatDeployed(requestParameters: ChatsApiCreateDeployedRequest, options?: AxiosRequestConfig) {
       return this.chats.createDeployed(requestParameters, options)
   }

   chatExperiment(requestParameters: ChatsApiCreateExperimentRequest, options?: AxiosRequestConfig) {
       return this.chats.createExperiment(requestParameters, options)
   }

   chatModelConfiguration(requestParameters: ChatsApiCreateModelConfigRequest, options?: AxiosRequestConfig) {
       return this.chats.createModelConfig(requestParameters, options)
   }

   complete(requestParameters: CompletionsApiCreateRequest, options?: AxiosRequestConfig) {
       return this.completions.create(requestParameters, options)
   }

   completeDeployed(requestParameters: CompletionsApiCreateDeployedRequest, options?: AxiosRequestConfig) {
       return this.completions.createDeployed(requestParameters, options)
   }

   completeExperiment(requestParameters: CompletionsApiCreateExperimentRequest, options?: AxiosRequestConfig) {
       return this.completions.createExperiment(requestParameters, options)
   }

   completeModelConfiguration(requestParameters: CompletionsApiCreateModelConfigRequest, options?: AxiosRequestConfig) {
       return this.completions.createModelConfig(requestParameters, options)
   }

   feedback(requestParameters: FeedbackApiFeedbackRequest, options?: AxiosRequestConfig) {
       return this.feedbackApi.feedback(requestParameters, options)
   }

   log(requestParameters: LogsApiLogRequest, options?: AxiosRequestConfig) {
       return this.logs.log(requestParameters, options)
   }

}
