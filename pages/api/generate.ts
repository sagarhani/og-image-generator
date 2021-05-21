import type { NextApiRequest, NextApiResponse } from "next";
import { parseRequest } from "../../utils/urlParser";
import { getScreenshot } from "../../utils/chromium";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //   TODO: Fix this type
    const ogCardContent: any = parseRequest(req);
    const image = await getScreenshot(
      `${process.env.NEXT_PUBLIC_APP_URL}/template?${new URLSearchParams(
        ogCardContent
      )}`,
      process.env.NODE_ENV === "development"
    );
    res.status(200);
    res.setHeader("Content-type", "image/jpeg");
    res.end(image);
  } catch (error) {
    res.status(500);
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Internal Server Error</h1>");
  }
};
