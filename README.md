# OG Image Generator 📸

This is a Serverless OG Image Generator. It's meant to work with Netlify Functions, but should work on any serverless platform you're using.

The image generator uses HTML templates, renders them using Puppeteer, and then takes a screenshot that can be returned back to the user as a response. You should be able to scale this relatively easily as images are generated per-request, and can likely use cache-control headers to ensure efficient operation.

## Testing Locally
This isn't really production ready, as much as it is a proof of concept. 
To run this locally you're going to need to set a few options in a .env file

```env
# .env
NODE_ENV="development"
PATH_TO_CHROME="/your/path/to/chrome"
```

and then run

```bash
npm install && npm run start
```
