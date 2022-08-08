const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

export async function resizeImg(imageSrc, maxSize) {

  console.log(imageSrc);

  const img = await createImage(imageSrc);

  const canvas = document.createElement("canvas");
  var dpr = window.devicePixelRatio || 1;
  var rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  //let MAX_WIDTH = maxSize;
  //let MAX_HEIGHT = maxSize;
  let width = img.width;
  let height = img.height;

  // if (width > height) {
  //   if (width > MAX_WIDTH) {
  //     height *= MAX_WIDTH / width;
  //     width = MAX_WIDTH;
  //   }
  // } else {
  //   if (height > MAX_HEIGHT) {
  //     width *= MAX_HEIGHT / height;
  //     height = MAX_HEIGHT;
  //   }
  // }

  ctx.imageSmoothingEnabled = false;
  ctx.imageSmoothingQuality = "high";

  let start = new Date().getTime();
  let scalingSteps = 0;
  const scale = 0.75;

  // Margin to scale down the last 25%
  const maxScalableSize = maxSize * 1.35;

  while (width >= maxScalableSize || height >= maxScalableSize ) {
    scalingSteps +=1;
    width *= scale;
    height *= scale;
    console.log('+1 round');
  }

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(img, 0, 0, Math.round(width), Math.round(height));

  const endTime =new Date().getTime();
  console.log("execution time: "+ ( endTime - start) + "ms. scale per frame: "+ scale + " scaling step count: "+scalingSteps);
  console.log(`Width: ${width}, Height: ${height}`);

  //console.log(canvas.toDataURL("image/jpeg",1))
  // export base64
  return canvas.toDataURL("image/jpeg",1);

  // As a blob
  // return new Promise((resolve, reject) => {
  //   canvas.toBlob(file => {
  //     resolve(URL.createObjectURL(file))
  //   }, 'image/jpeg')
  // })

}
