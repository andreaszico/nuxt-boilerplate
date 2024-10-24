export type ResponseApi<T> = {
  meta: Meta;
  data: T;
};

interface Meta {
  code: number;
  success: boolean;
  message: string;
}

export type RequestOptions = {
  method: string;
  headers: Record<string, string>;
  body?: string;
};

