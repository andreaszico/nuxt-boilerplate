import type { ResponseApi } from "#build/shared/domain/api/model";
import type {$Fetch, NitroFetchOptions} from 'nitropack'

interface IHttpFactory{
  method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'get' | 'head' | 'patch' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace',
  url: string,
  fetchOptions?: NitroFetchOptions<'json'>,
  body?: object,
}


class HttpFactory {
  private readonly $fetch: $Fetch;

  constructor(fetch: $Fetch) {
    this.$fetch = fetch;
  }

  async call<T>({method, url, fetchOptions, body}: IHttpFactory): Promise<ResponseApi<T>> {
    return this.$fetch<ResponseApi<T>>(
        url,
        {
          method,
          body,
          headers: {
            'Content-Type': 'application/json',
          },
          ...fetchOptions,
        }
    )
  }

  
  async get<T>(
    url: string,
    options: NitroFetchOptions<'json'> = {}
  ): Promise<ResponseApi<T>> {
    return this.call({
      method: "GET",
      url: url,
      fetchOptions: options,
    })
  }

  async post<T>(
    url: string,
    data: object,
    options: NitroFetchOptions<'json'> = {}
  ): Promise<ResponseApi<T>> {
    return this.call({
      method: "POST",
      url: url,
      fetchOptions: options,
      body: data,
    })
  }

  async put<T>(
    url: string,
    data: object,
    options: NitroFetchOptions<'json'> = {}
  ): Promise<ResponseApi<T>> {
    return this.call({
      method: "PUT",
      url: url,
      fetchOptions: options,
      body: data,
    })
  }

  async patch<T>(
    url: string,
    data: object,
    options: NitroFetchOptions<'json'> = {}
  ): Promise<ResponseApi<T>> {
    return this.call({
      method: "PATCH",
      url: url,
      fetchOptions: options,
      body: data,
    })
  }

  async delete<T>(
    url: string,
    options: NitroFetchOptions<'json'> = {}
  ): Promise<ResponseApi<T>> {
    return this.call({
      method: "DELETE",
      url: url,
      fetchOptions: options,
    })
  }
}
export default HttpFactory;