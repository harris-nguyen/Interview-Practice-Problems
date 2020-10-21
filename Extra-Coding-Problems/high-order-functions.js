let times = [
  {
    id: 10622,
    day: 6,
    day_string: "Sat",
    time_block: 7,
    time_string: "10pm - Midnight",
    next_occurrence: "2017-07-15T21:09:09.000-07:00",
  },

  {
    id: 10621,
    day: 3,
    day_string: "Wed",
    time_block: 4,
    time_string: "4pm - 6pm",
    next_occurrence: "2017-07-12T21:09:07.000-07:00",
  },
  {
    id: 10620,
    day: 1,
    day_string: "Mon",
    time_block: 4,
    time_string: "4pm - 6pm",
    next_occurrence: "2017-07-10T21:09:06.000-07:00",
  },
  {
    id: 10619,
    day: 3,
    day_string: "Wed",
    time_block: 2,
    time_string: "12pm - 2pm",
    next_occurrence: "2017-07-12T21:09:05.000-07:00",
  },
  {
    id: 10618,
    day: 5,
    day_string: "Fri",
    time_block: 2,
    time_string: "12pm - 2pm",
    next_occurrence: "2017-07-14T21:09:04.000-07:00",
  },
  {
    id: 10617,
    day: 1,
    day_string: "Mon",
    time_block: 1,
    time_string: "10am - 12pm",
    next_occurrence: "2017-07-10T21:09:02.000-07:00",
  },
  {
    id: 10616,
    day: 1,
    day_string: "Mon",
    time_block: 2,
    time_string: "12pm - 2pm",
    next_occurrence: "2017-07-10T21:09:01.000-07:00",
  },
  {
    id: 10615,
    day: 1,
    day_string: "Mon",
    time_block: 3,
    time_string: "2pm - 4pm",
    next_occurrence: "2017-07-10T20:39:32.000-07:00",
  },
  {
    id: 10614,
    day: 0,
    day_string: "Sun",
    time_block: 4,
    time_string: "4pm - 6pm",
    next_occurrence: "2017-07-16T20:02:06.000-07:00",
  },
  {
    id: 10612,
    day: 2,
    day_string: "Tues",
    time_block: 4,
    time_string: "4pm - 6pm",
    next_occurrence: "2017-07-11T20:00:39.000-07:00",
  },
  {
    id: 2542,
    day: 1,
    day_string: "Mon",
    time_block: 5,
    time_string: "6pm - 8pm",
    next_occurrence: "2017-07-10T15:43:33.000-07:00",
  },
];

function newtime(array) {
  array = array.sort((a, b) => {
    return a.day > b.day ? 1 : -1;
  });

  return array.reduce((acc, day) => {
    console.log({ ...acc, [day.day_string]: [day] });
  }, {});
}

console.log(newtime(times));

function findShortestElement(arr) {
  return arr.reduce((a, b) => {
    return a.length <= b.length ? a : b;
  });
}

var output = findShortestElement(["a", "two", "three"]);
console.log(output); // --> 'a'

var array = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
];

function getObj(array) {
  return array.reduce((acc, element) => {
    acc[element[0]] = element[1];
    return acc;
  }, {});
}

console.log(getObj(array));
//{ make: 'Ford', model: 'Mustang', year: 1964 }

var array = [
  {
    name: "x",
    age: 21,
    addr: [
      { flat: 1, add: "xyz" },
      { flat: 2, add: "xsr" },
    ],
  },
  {
    name: "y",
    age: 22,
    addr: [
      { flat: 3, add: "xyz1" },
      { flat: 4, add: "xsr1" },
    ],
  },
];

function flatList(array) {
  return array.reduce((acc, value) => {
    acc = acc.concat(
      value.addr.map((val) => {
        return { name: value.name, age: value.age, addr: val };
      })
    );
    return acc;
  }, []);
}

console.log(flatList(array));
 [ { name: 'x', age: 21, addr: { flat: 1, add: 'xyz' } },
  { name: 'x', age: 21, addr: { flat: 2, add: 'xsr' } },
  { name: 'y', age: 22, addr: { flat: 3, add: 'xyz1' } },
  { name: 'y', age: 22, addr: { flat: 4, add: 'xsr1' } } ]

const FRUITS = [
  "banana",
  "apple",
  "orange",
  "banana",
  "orange",
  "apple",
  "apple",
  "orange",
  "orange",
  "banana",
  "orange",
  "banana",
];

function total(arr) {
  return arr.reduce((acc, value) => {
    if (acc[value]) {
      acc[value]++;
    } else {
      acc[value] = 1;
    }
    return acc;
  }, {});
}

console.log(total(FRUITS)); // { banana: 4, apple: 3, orange: 5}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function totalVotes(arr) {
  var newArr = arr
    .sort((a, b) => a.age - b.age)
    .filter((val) => {
      if (val.voted === true) {
        return val;
      }
    });
  return newArr.reduce(
    (acc, value, index) => {
      if (value.age <= 25) {
        acc.under25++;
      }
      if (value.age > 25 && value.age <= 35) {
        acc.under35++;
      }
      if (value.age > 35) {
        acc.above36++;
      }
      return acc;
    },
    { under25: 0, under35: 0, above36: 0 }
  );
}
console.log(totalVotes(voters)); //{ under25: 1, under35: 3, above36: 3 }

var currentInventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

function calculateAveragePricePerDesigner(inventory) {
  return inventory.reduce(
    (acc, value) => {
      var total = 0;
      value.shoes.filter((val) => {
        total += val.price;
      });
      var avg = total / value.shoes.length;
      acc.designers.push({
        name: value.name,
        AverageTotal: avg,
      });
      return acc;
    },
    { designers: [] }
  );
}

console.log(calculateAveragePricePerDesigner(currentInventory));
