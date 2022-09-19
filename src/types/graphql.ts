export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthInput = {
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  signIn?: Maybe<Token>;
  signUp?: Maybe<Token>;
};

export type MutationSignInArgs = {
  input?: InputMaybe<AuthInput>;
};

export type MutationSignUpArgs = {
  input?: InputMaybe<AuthInput>;
};

export type Query = {
  __typename?: "Query";
  currentUser?: Maybe<User>;
};

export type Token = {
  __typename?: "Token";
  token: Scalars["String"];
};

export type User = {
  __typename?: "User";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserQuery = {
  __typename?: "Query";
  currentUser?: {
    __typename?: "User";
    id?: string | null;
    email?: string | null;
  } | null;
};

export type SignInMutationVariables = Exact<{
  input: AuthInput;
}>;

export type SignInMutation = {
  __typename?: "Mutation";
  signIn?: { __typename?: "Token"; token: string } | null;
};

export type SignUpMutationVariables = Exact<{
  input: AuthInput;
}>;

export type SignUpMutation = {
  __typename?: "Mutation";
  signUp?: { __typename?: "Token"; token: string } | null;
};
