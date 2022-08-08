const createImage = (url) => {
  return  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })
}

export async function resetOrientation(imageSrc, srcOrientation) {

  console.log(`Orientation: ${srcOrientation}`);

  const img = await createImage(imageSrc);

  const canvas = document.createElement("canvas");
  //const dpr = window.devicePixelRatio || 1;
  //const rect = canvas.getBoundingClientRect();
  //canvas.width = rect.width * dpr;
  // canvas.height = rect.height * dpr;
  const ctx = canvas.getContext('2d');
  //ctx.scale(dpr, dpr);

  let width = img.width;
  let height = img.height;

  //  set proper canvas dimensions before transform & export
  if (4 < srcOrientation && srcOrientation < 9) {
    console.log('__')
    canvas.width = height;
    canvas.height = width;
  } else {
    console.log('||')
    canvas.width = width;
    canvas.height = height;
  }


  // transform context before drawing image
  switch (srcOrientation) {
    case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
    case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
    case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
    case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
    case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
    case 7: ctx.transform(0, -1, -1, 0, height, width); break;
    case 8: ctx.transform(0, -1, 1, 0, 0, width); break; // maybe dont transform..
    default: break;
  }

  ctx.imageSmoothingEnabled = false;
  ctx.imageSmoothingQuality = "high";

  // draw image
  ctx.drawImage(img, 0, 0, width, height);
  console.log(`Width: ${width}, Height: ${height}`);



  // export base64
  //return canvas.toDataURL("image/jpeg",1);

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      resolve(URL.createObjectURL(file))
    }, 'image/jpeg')
  })

};
