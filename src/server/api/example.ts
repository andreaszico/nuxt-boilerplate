import { joinURL } from "ufo";
import { Routes } from "../routes/routes.server";
import type { IncomingHttpHeaders } from "http";

export default defineEventHandler(async (event) => {
  // const coreUrl = useRuntimeConfig().NUXT_BASE_URL_JSON_PLACEHOLDER_SERVER;
  // let path = "";
  // let target = "";
  // console.log(event.path);
  // /*
  //  * Case: /api
  //  * */
  // if (event.path.startsWith(Routes.core.name)) {
  //   path = event.path.replace(Routes.core.name, "");
  //   target = joinURL(coreUrl, path);
  // }
  // const token = getCookie(event, "X-AUTH-TOKEN");
  // const test: IncomingHttpHeaders = {
  //   authorization: `Bearer ${token}`,
  // };
  // console.log(test);
  // // event.node.req.headers.authorization = ;
  // return proxyRequest(event, target);
});
