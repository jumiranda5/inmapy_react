/*
 *    code to remove exif from : http://jsfiddle.net/mowglisanu/frhwm2xe/3/
*/

export const removeExif = (file) => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = () => {

      const result = reader.result;

      var dv = new DataView(result);
      var offset = 0, recess = 0;
      var pieces = [];
      var i = 0;

      if (dv.getUint16(offset) === 0xffd8){
        offset += 2;
        let app1 = dv.getUint16(offset);
        offset += 2;
        while (offset < dv.byteLength){
          if (app1 === 0xffe1){

            pieces[i] = {recess:recess,offset:offset-2};
            recess = offset + dv.getUint16(offset);
            i++;
          }
          else if (app1 === 0xffda){
            break;
          }
          offset += dv.getUint16(offset);
          app1 = dv.getUint16(offset);
          offset += 2;
        }
        if (pieces.length > 0){
          var newPieces = [];
          pieces.forEach(function(v){
              newPieces.push(result.slice(v.recess, v.offset));
          }, this);
          newPieces.push(result.slice(recess));
          var br = new Blob(newPieces, {type: 'image/jpeg'}); // change to file.type
        }
      }

      console.log(br);

      resolve(br);

    }

    reader.readAsArrayBuffer(file);

    }
    catch (error) {
      console.log(error);
      reject(null);
    }
  });
}
