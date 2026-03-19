export enum HttpStatusCode {
  OK = 200,
  UNAUTHORIZED = 401,
  NOCONTENT = 204,
  BADREQUEST = 400,
  SERVERERROR = 500,
  NOTFOUND = 404,
}

export type HttpResponse = {
  statusCode: number;
  body?: any;
};
