const configure = (id, type) => {
  const config = {
    cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
    uploadPreset: process.env.REACT_APP_CLOUDINARY_PRESET,
  };
  if (type === 'gardener') {
    config.folder = `${process.env.REACT_APP_CLOUDINARY_FOLDER}/gardener/${id || 'others'}`;
    config.tags = ['gardener'];
  }
  return config;
};

export default (
  id,
  type,
  callback,
) => {
  const config = configure(id, type);
  return window.cloudinary.openUploadWidget(
    config,
    (error, result) => {
      console.log('​error', error);
      console.log('​result', result);
      if (result.event === 'success') {
        console.log('success');
        const imageId = result.info.public_id;
        console.log(imageId);
        callback(imageId);
      }
    },
  );
};
