function inCommon(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let student = array[i][0];
    let course = array[i][1];
    if (!obj[student]) {
      obj[student] = [course];
    } else {
      obj[student].push(course);
    }
  }
  let ids = Object.keys(obj);

  let newArr = [];
  for (let i = 0; i < ids.length; i++) {
    // console.log(i + 1) //whyyyy?
    for (let j = i + 1; j < ids.length; j++) {
      let id_a = ids[i];
      let id_b = ids[j];
      let pair = [id_a, id_b];
      let obj_a = obj[id_a];
      let obj_b = obj[id_b];

      let common = obj_a.filter((element) => obj_b.includes(element));
      newArr[pair] = common;
    }
  }
  console.log(newArr);
}

const studentCoursePairs1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
];

inCommon(studentCoursePairs1);
