export function toMilliseconds(timestring) {
  let number = parseFloat(timestring);
  const lastchar = timestring[timestring.length - 1];

  if (!isNaN(parseInt(lastchar))) {
    // pass if this is already a number
    return number;
  }

  switch (lastchar) {
    case 's':
      number *= 1000;
      break;
    case 'm':
      number *= 60 * 1000;
      break;
    case 'h':
      number *= 60 * 60 * 1000;
      break;
    case 'd':
      number *= 24 * 60 * 60 * 1000;
      break;
    case 'M':
      number *= 30 * 24 * 60 * 60 * 1000;
      break;
    case 'y':
      number *= 12 * 30 * 24 * 60 * 60 * 1000;
      break;
  }
  return number;
};

export {toMilliseconds as toMs};