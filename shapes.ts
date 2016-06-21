interface Shape {
  height: number,
  width: number,
  color?: string,
  name: string
}

function areaCalc(shape: Shape) {
  let area = shape.height * shape.width;
  return console.log(`I'm a ${shape.name} and I'm have this big of an area: ${area}`)
}

let blueSquare = {
  height: 100,
  width: 100,
  color: 'blue',
  name: 'Blue square'
}

areaCalc(blueSquare);
