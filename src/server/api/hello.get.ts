import type { ResponseApi } from "#build/shared/domain/api/model";


export default defineEventHandler(async (event) => {
  const response = await $fetch("https://jsonplaceholder.typicode.com/photos");
  
  const app: ResponseApi<any> = {
    data: response,
    meta: { 
      code: 200,
      message: "",
      success: true
    }
  }


  return {
    hello: "world",
    ...app
  };
});
