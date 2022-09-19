<script lang="ts" setup>
import { useMutation, useQuery, useApolloClient } from "@vue/apollo-composable";
import type {
  CurrentUserQuery,
  CurrentUserQueryVariables,
  SignUpMutation,
  SignUpMutationVariables,
  SignInMutation,
  SignInMutationVariables,
} from "@/types/graphql";
import CurrentUser from "./apollo/CurrentUser.gql";
import SignUp from "./apollo/SignUp.gql";
import SignIn from "./apollo/SignIn.gql";
import { computed, provide } from "vue";
import { AUTH_PROVIDER_KEY, LOCALSTORAGE_TOKEN_KEY } from "@/constants";

const { resolveClient } = useApolloClient();

const { result: user, loading: authLoading } = useQuery<
  CurrentUserQuery,
  CurrentUserQueryVariables
>(CurrentUser);

const { mutate: signUp } = useMutation<SignUpMutation, SignUpMutationVariables>(
  SignUp,
  {
    update(cache, { data }) {
      if (data?.signUp?.token) {
        localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, data.signUp.token);
      }
    },
    refetchQueries: ["CurrentUser"],
  }
);

const { mutate: signIn } = useMutation<SignInMutation, SignInMutationVariables>(
  SignIn,
  {
    update(cache, { data }) {
      if (data?.signIn?.token) {
        localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, data.signIn.token);
      }
    },
    refetchQueries: ["CurrentUser"],
  }
);

async function logOut() {
  localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
  const apolloClient = resolveClient();
  await apolloClient.clearStore();
  await apolloClient.resetStore();
}

provide(AUTH_PROVIDER_KEY, {
  user: computed(() => user.value?.currentUser),
  isLoggedIn: computed(() => !!user.value?.currentUser?.id),
  authLoading,
  signUp,
  signIn,
  logOut,
});
</script>

<template>
  <slot />
</template>
