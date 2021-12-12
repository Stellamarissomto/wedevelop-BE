import cloudi from 'cloudinary'

cloudi.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

   export const cloudiUploads = (file: string) => {
    return new Promise(() => {
      cloudi.v2.uploader.upload( file);
    });
  };

  