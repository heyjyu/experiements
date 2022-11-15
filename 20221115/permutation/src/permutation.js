function test() {
  console.log("possible(0, [2,0,0,0]): true = " + possible(0, [2, 0, 0, 0]));
  console.log("possible(1, [1,3,0,0]): true = " + possible(1, [1, 3, 0, 0]));
  console.log("possible(1, [1,2,0,0]): true = " + possible(1, [1, 2, 0, 0]));
  console.log("possible(1, [1,1,0,0]): false = " + possible(1, [1, 1, 0, 0]));

  console.log("backtrack(0, [0,0,0]): [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] = "
    + JSON.stringify(backtrack(0, [0, 0, 0])));
}

function solution(n) {
  test();
  var answer = backtrack(0, [...Array(n)].fill(0));
  return answer;
}

function backtrack(level, array) {
  let permutations = [];

  if (level === array.length) {
    return [[...array]];
  }

  for (let i = 0; i < array.length; i += 1) {
    array[level] = i + 1;

    if (possible(level, array)) {
      permutations = [...permutations, ...backtrack(level + 1, array)];
    }
  }

  return permutations;
}

function possible(level, array) {
  for (let i = 0; i < level; i += 1) {
    if (array[i] === array[level]) {
      return false;
    }
  }

  return true;
}

console.log(solution(4));
