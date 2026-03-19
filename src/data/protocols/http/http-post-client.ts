export type HttpPostParams = {
  url: string;
  body?: any;
  params?: any;
};

export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<void>;
}
