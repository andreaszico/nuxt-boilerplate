import AuthModule from "~/core/modules/auth.module";
import PostModule from "~/core/modules/post.module";

export interface IApiInstance {
  post: PostModule;
  auth: AuthModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const NUXT_BASE_URL_PROXY_SERVER: string =
    config.public.NUXT_BASE_URL_PROXY_SERVER;

  const apiFetcher = $fetch.create({
    baseURL: NUXT_BASE_URL_PROXY_SERVER,
    onRequest({ request, response }) {},
  });

  const postModule = new PostModule(apiFetcher);
  const authModule = new AuthModule(apiFetcher);

  const modules: IApiInstance = {
    post: postModule,
    auth: authModule,
  };

  return {
    provide: {
      api: modules,
    },
  };
});
