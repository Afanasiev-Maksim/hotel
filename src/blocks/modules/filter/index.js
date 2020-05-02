const initialData= [
  {
    title: "Studio",
    room: 0,
    areaFrom: 33,
    areaTo: 35,
    areaPrice: 24000000,
  },
  {
    title: "1PN+1",
    room: 1,
    areaFrom: 46,
    areaTo: 47,
    areaPrice: 29000000,
  },
  {
    title: "2PN+1WC",
    room: 2,
    areaFrom: 58,
    areaTo: 62,
    areaPrice: 32000000,
  },
  {
    title: "2PN+2WC",
    room: 2,
    areaFrom: 66,
    areaTo: 70,
    areaPrice: 34000000,
  },
  {
    title: "3PN",
    room: 3,
    areaFrom: 80,
    areaTo: 89,
    areaPrice: 34000000,
  }
]

const resultArr = [];

for (let i = 5; i <= 30; i++) {
  for (let j = 0; j < initialData.length; j++) {
    let tmp = Object.assign({}, initialData[j]);
    tmp.floor = i;
    resultArr.push(tmp);
  }
}

export default resultArr;