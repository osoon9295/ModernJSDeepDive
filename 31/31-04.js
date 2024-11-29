const count = (str, char) => (str.match(new RegExp(char, "gi")) ?? []).length;

count("is this all there is?", "is"); // -> 3
