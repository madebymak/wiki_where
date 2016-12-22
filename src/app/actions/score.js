const MAX_SCORE = 1000;
const MIN_RADIUS = 25;
const DIAMETER = 12742;
const HALF_RATE = 500;

function distance(location1, location2) {
  function degToRad(theta) {
    return theta * 0.017453292519943295;
  }
  // diameter of earth
  const c = Math.cos;
  const a = 0.5 - c(degToRad(location2[1] - location1[1])) / 2 +
          c(degToRad(location1[1])) * c(degToRad(location2[1])) *
          (1 - c(degToRad(location2[0] - location1[0]))) / 2;
  return DIAMETER * Math.asin(Math.sqrt(a));
}

export default function scoreAnswer(location1, location2, hintCount) {
  const dist = distance(location1, location2);
  let outputScore;
  if (dist < MIN_RADIUS) {
    outputScore = MIN_RADIUS;
  } else {
    outputScore = Math.floor(MAX_SCORE / hintCount * Math.pow(2, -dist / HALF_RATE));
  }
  return outputScore;
}
