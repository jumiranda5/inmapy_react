/*
 *  Orientation function copied from stackoverflow...
 *  https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side/20600869
*/

export const getOrientation = (file) => {
  return new Promise((resolve, reject) => {
    try {
      getExifOrientation(file, (orientation) => {
        resolve(orientation);
      });
    }
    catch(error) {
      console.log(error);
      reject(null);
    }
  });
};

export function getExifOrientation(file, callback) {
    var reader = new FileReader();
    reader.onload = function(e) {

      var view = new DataView(e.target.result);
      if (view.getUint16(0, false) !== 0xFFD8){
          return callback(-2);
      }
      var length = view.byteLength, offset = 2;
      while (offset < length) {
          if (view.getUint16(offset+2, false) <= 8) return callback(-1);
          var marker = view.getUint16(offset, false);
          offset += 2;
          if (marker === 0xFFE1) {
              if (view.getUint32(offset += 2, false) !== 0x45786966) {
                  return callback(-1);
              }

              var little = view.getUint16(offset += 6, false) === 0x4949;
              offset += view.getUint32(offset + 4, little);
              var tags = view.getUint16(offset, little);
              offset += 2;
              for (var i = 0; i < tags; i++) {
                  if (view.getUint16(offset + (i * 12), little) === 0x0112) {
                      return callback(view.getUint16(offset + (i * 12) + 8, little));
                  }
              }
          }
          else if ((marker & 0xFF00) !== 0xFF00) {
              break;
          }
          else {
              offset += view.getUint16(offset, false);
          }
      }
      return callback(-1);
    };
    reader.readAsArrayBuffer(file);
}

// **  usage: **
// var input = document.getElementById('input');
// input.onchange = function(e) {
//     getOrientation(input.files[0], function(orientation) {
//         alert('orientation: ' + orientation);
//     });
// }
