import { mergeLists, mergeLists2, mergeLists3 } from "../src/index";

const listA: Array<string> = ["Allison", "Brian", "Peter"];
const listB: Array<string> = ["Jason", "Brian", "Peter", "Jason", "Sara"];
const mergedList: Array<string> = [
  "Allison",
  "Brian",
  "Peter",
  "Jason",
  "Sara",
];

it("should merge two lists with no duplicates", () => {
  expect(mergeLists(listA, listB)).toStrictEqual(mergedList);
  expect(mergeLists2(listA, listB)).toStrictEqual(mergedList);
  expect(mergeLists3(listA, listB)).toStrictEqual(mergedList);
});
