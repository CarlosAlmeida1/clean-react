export enum HttpStatusCode {
  UNAUTHORIZED = 401,
  NOCONTENT = 204,
}

export type HttpResponse = {
  statusCode: number;
  body?: any;
};
