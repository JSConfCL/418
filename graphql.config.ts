import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  schema: "https://fmvmygdo.api.sanity.io/v1/graphql/production/default",
  documents: ["src/**/*.gql"],
};

export default config;
