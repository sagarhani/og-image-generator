import chromium from "chrome-aws-lambda";

const execPath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

const getOptions = async (isDev: boolean) => {
  let options: Options;
  if (isDev) {
    options = {
      args: [],
      executablePath: execPath,
      headless: true
    };
  } else {
    options = {
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: chromium.headless
    };
  }
  return options;
};

export async function getScreenshot(url: string, isDev: boolean) {
  const options = await getOptions(isDev);
  const browser = await chromium.puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(url);
  const screenshot = await page.screenshot({ type: "jpeg", quality: 100 });
  await browser.close();
  return screenshot;
}
