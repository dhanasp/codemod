// using https://astexplorer.net/ to get the syntax tree

// Press ctrl+space for code completion
export default function transformer(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.Identifier)
    .forEach((path) => {
      if (path.value.name === "makeItQuestion") {
        path.value.name = "getYesNoTypeQue";
      }
    })
    .toSource();
}
