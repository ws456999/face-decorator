import Faced from 'faced'
var faced = new Faced()
var fs = require('fs')
var path = require('path')

let temp

function worker(faces, image, file) {
  // console.log(faces, image, file)
  var output, colors = {
      "face": [0, 0, 0],
      "mouth": [255, 0, 0],
      "nose": [255, 255, 255],
      "eyeLeft": [0, 0, 255],
      "eyeRight": [0, 255, 0]
  };
//   console.log(faces, 123)
  temp = faces
//   return faces

  if (!faces) {
      console.error("Could not open %s", file);
      return;
  }

  function draw(feature, color) {
      image.rectangle(
          [feature.getX(), feature.getY()],
          [feature.getWidth(), feature.getHeight()],
          color,
          2
      );
  }

  // faces.forEach((face) => {
  //   draw(face, colors.face);
  //     Object.keys(face.getFeatures()).forEach((name) => {
  //       face.getFeatures()[name].forEach((feature) => {
  //         draw(feature, colors[name])
  //     })
  //   })
  // })

  // output = file.split('.');
  // output.push('features', output.pop());
  // output = output.join('.');

  // console.log('Processed %s', output);
  // image.save(output);
}

export function faceDetecte (file) {
  // faced.detect(path.resolve(file), worker)
  faced.detect(file, worker)
  return temp
}