export const generateCoords = (line, elements) => {
  const x1 = elements[line[0]].current.offsetLeft;
  const x2 = elements[line[2]].current.offsetLeft;
  const y1 = elements[line[0]].current.offsetTop;
  const y2 = elements[line[2]].current.offsetTop;
  let coords = {};
  if (x1 === x2) {
    coords = {
      x1: elements[0].current.offsetWidth / 2 + x1,
      y1: 0,
      x2: elements[2].current.offsetWidth / 2 + x1,
      y2: elements[0].current.offsetHeight * 3
    };
  } else if (y1 === y2) {
    coords = {
      x1: 0,
      y1: y1 + elements[0].current.offsetHeight / 2,
      x2: elements[2].current.offsetWidth * 3,
      y2: y2 + elements[2].current.offsetHeight / 2
    };
  } else {
    if (x1 < x2) {
      coords = {
        x1: x1,
        y1: y1,
        x2: x2 + elements[2].current.offsetWidth,
        y2: y2 + elements[2].current.offsetHeight
      };
    } else {
      coords = {
        x1: x1 + elements[0].current.offsetWidth,
        y1: 0,
        x2: x2,
        y2: y2 + elements[2].current.offsetHeight
      };
    }
  }

  return coords;
};
