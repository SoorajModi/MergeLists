export function mergeLists(
  first: Array<string>,
  second: Array<string>
): Array<string> {
  const mergedList: Array<string> = [...first];

  second.forEach((student) => {
    if (!mergedList.includes(student)) {
      mergedList.push(student);
    }
  });

  return mergedList;
}

export function mergeLists2(
  first: Array<string>,
  second: Array<string>
): Array<string> {
  const mergedList: Array<string> = [...first, ...second];
  return mergedList.filter((item, index) => mergedList.indexOf(item) === index);
}

export function mergeLists3(
  first: Array<string>,
  second: Array<string>
): Array<string> {
  const mergedList: Array<string> = [...first, ...second];
  const mergedSet: Set<string> = new Set(mergedList);

  return Array.from(mergedSet);
}
