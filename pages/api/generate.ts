import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h3>This is a sample page</h3>
      </body>
    </html>
    `;
    res.status(200);
    res.setHeader("Content-type", "text/html");
    res.end(html);
  } catch (error) {
    res.status(500);
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Internal Server Error</h1>");
  }
};
