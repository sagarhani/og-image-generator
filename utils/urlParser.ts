import type { NextApiRequest } from "next";
import { parse } from "url";
import querystring from "querystring";

export function parseRequest(req: NextApiRequest) {
  const parsedUrl = parse(req.url!);
  const parsedQueryParams = querystring.parse(parsedUrl.query!);
  return parsedQueryParams;
}
