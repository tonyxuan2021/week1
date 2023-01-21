const isValid = (s) => {
  let hashmap = { '(': ')', '{': '}', '[': ']' };
  let stack = [];

  for (let key of s) {
    if (hashmap[key]) {
      stack.push(hashmap[key]);
    } else {
      if (stack.pop() !== key) return false;
    }
  }
  return !stack.length;
};

// isValid('()[]');
