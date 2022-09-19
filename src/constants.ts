import { ComputedRef, InjectionKey, Ref } from "vue";
import { MutateFunction } from "@vue/apollo-composable";
import {
  CurrentUserQuery,
  SignInMutation,
  SignInMutationVariables,
  SignUpMutation,
  SignUpMutationVariables,
} from "./types/graphql";

// Provide/inject keys
export const AUTH_PROVIDER_KEY = Symbol() as InjectionKey<{
  user: ComputedRef<CurrentUserQuery["currentUser"] | undefined>;
  isLoggedIn: ComputedRef<boolean>;
  authLoading: Ref<boolean>;
  signUp: MutateFunction<SignUpMutation, SignUpMutationVariables>;
  signIn: MutateFunction<SignInMutation, SignInMutationVariables>;
  logOut: () => void;
}>;

// app constants
export const LOCALSTORAGE_TOKEN_KEY = "token";
