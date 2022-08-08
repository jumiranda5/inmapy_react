const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 */

export default async function cropImage(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')

  const dpr = window.devicePixelRatio || 1;
  canvas.width = pixelCrop.width * dpr
  canvas.height = pixelCrop.height * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr);

  ctx.imageSmoothingEnabled = false;
  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  // export base64
  //return canvas.toDataURL("image/jpeg",1);

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      resolve(URL.createObjectURL(file))
    }, 'image/jpeg')
  })
}
