export default function AtCoderColorByRate(num: number): string {
  let colorName: string;
  if (num < 400) {
    colorName = 'gray';
  } else if (num < 800) {
    colorName = 'brown';
  } else if (num < 1200) {
    colorName = 'green';
  } else if (num < 1600) {
    colorName = 'cyan';
  } else if (num < 2000) {
    colorName = 'blue';
  } else if (num < 2400) {
    colorName = 'yellow';
  } else if (num < 2800) {
    colorName = 'orange';
  } else {
    colorName = 'red';
  }
  return 'atcoder_' + colorName;
}
