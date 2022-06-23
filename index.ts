import fs from "fs/promises";
import puppeteer from "puppeteer-serverless";
import 'dotenv/config';
import * as nunjucks from "nunjucks";


type HTMLType = "post" | "page";
type HTMLContent = {
  title: string;
  description?: string;
  image?: string;
};

const generateHTML = async (
  type: HTMLType,
  content: HTMLContent
): Promise<string> => {
  nunjucks.configure({ autoescape: true });
  // get file needed
  const fileText = await fs.readFile(`./templates/${type}.html`, {
    encoding: "utf-8",
  });
  // generate the file as needed
  const generatedHTML = nunjucks.renderString(fileText, content);
  return generatedHTML;
};

const renderHTML = async (htmlCode: string): Promise<any> => {
  const browser = await puppeteer.launch({executablePath: process.env.PATH_TO_CHROME});
  const page = await browser.newPage();
  await page.setContent(htmlCode);
  await page.setViewport({ width: 1200, height: 630 });
  await page.screenshot({ path: "./screenshot.png" });
};

const run = async () => {
  const html = await generateHTML("post", { title: "Hello World!" });
  await renderHTML(html);
};

run();
