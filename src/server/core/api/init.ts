import type { RequestOptions, ResponseApi } from "#build/shared/domain/api/model";

type Interceptor<T> = (config: T) => Promise<T> | T;

class ApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;
  private requestInterceptors: Interceptor<RequestOptions>[];
  private responseInterceptors: Interceptor<Response>[];

  constructor(baseUrl: string, defaultHeaders: Record<string, string> = {}) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = defaultHeaders;
    this.requestInterceptors = [];
    this.responseInterceptors = [];
  }

  addRequestInterceptor(interceptor: Interceptor<RequestOptions>) {
    this.requestInterceptors.push(interceptor);
  }

  addResponseInterceptor(interceptor: Interceptor<Response>) {
    this.responseInterceptors.push(interceptor);
  }

  private async applyRequestInterceptors(
    config: RequestOptions
  ): Promise<RequestOptions> {
    for (const interceptor of this.requestInterceptors) {
      config = (await interceptor(config)) || config;
    }
    return config;
  }

  private async applyResponseInterceptors(
    response: Response
  ): Promise<Response> {
    for (const interceptor of this.responseInterceptors) {
      response = (await interceptor(response)) || response;
    }
    return response;
  }

  private async makeRequest<T>(
    url: string,
    method: string,
    data?: any,
    options: Partial<RequestOptions> = {}
  ): Promise<ResponseApi<T>> {
    let requestOptions: any = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...options.headers,
      },
      cache: "no-cache",
      ...options,
    };

    if (["POST", "PUT", "PATCH"].includes(method) && data) {
      requestOptions.body = JSON.stringify(data);
    }

    requestOptions = await this.applyRequestInterceptors(requestOptions);

    const response = await fetch(`${this.baseUrl}${url}`, requestOptions);

    const interceptedResponse = await this.applyResponseInterceptors(response);

    if (!interceptedResponse.ok) {
      throw new Error(`API request failed: ${interceptedResponse.status}`);
    }

    const res = interceptedResponse.json();
    return res;
  }

  async get<T>(
    url: string,
    options: Partial<RequestOptions> = {}
  ): Promise<ResponseApi<T>> {
    return this.makeRequest<T>(url, "GET", undefined, options);
  }

  async post<R, T>(
    url: string,
    data: R,
    options: Partial<RequestOptions> = {}
  ): Promise<ResponseApi<T>> {
    return this.makeRequest<T>(url, "POST", data, options);
  }

  async put<T>(
    url: string,
    data: any,
    options: Partial<RequestOptions> = {}
  ): Promise<ResponseApi<T>> {
    return this.makeRequest<T>(url, "PUT", data, options);
  }

  async patch<T>(
    url: string,
    data: any,
    options: Partial<RequestOptions> = {}
  ): Promise<ResponseApi<T>> {
    return this.makeRequest<T>(url, "PATCH", data, options);
  }

  async delete<T>(
    url: string,
    options: Partial<RequestOptions> = {}
  ): Promise<ResponseApi<T>> {
    return this.makeRequest<T>(url, "DELETE", undefined, options);
  }
}

export default ApiClient;