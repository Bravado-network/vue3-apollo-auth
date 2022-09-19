/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const value: DocumentNode;
  export default value;
}

declare module "*.gql" {
  import { DocumentNode } from "graphql";
  const value: DocumentNode;
  export default value;
}
