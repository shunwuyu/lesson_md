import type { CurrentUser } from '~/types/use.type';

type UseApiFetchOptions = {
  method?: string;
  body?: Record<string, any>;
};

export const useApiFetch = <T>(
  api: string | (() => string),
  options?: UseApiFetchOptions,
) => {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  const currentUser = useState<CurrentUser>('currentUser');

  return useFetch<T>(api, {
    baseURL: apiBaseUrl,

    onRequest: async (context) => {
      if (currentUser.value) {
        context.options.headers = {
          Authorization: `Bearer ${currentUser.value.token}`,
        };
      }
    },

    ...options,
  });
};