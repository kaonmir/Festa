type ReadFile = (path: string) => Promise<string>;

function getImportAndLog(code: string): [string[], boolean] {
  // Get file path from string "import * as funcA from 'src/funcA'";
  const importRegex = /from\s+['"](.+)['"];/;
  const importMatches = code.matchAll(importRegex);
  const importPaths: string[] = [];
  for (const match of importMatches) {
    importPaths.push(match[1]);
  }

  const isConsoleLog = code.match(/console\.log/) !== null;

  return [importPaths, isConsoleLog];
}

async function solution(readFile: ReadFile, mainJs: string) {
  // const code = await readFile(path);
  const visited: Record<string, boolean> = {};
  const answer: string[] = [];
  const queue: string[] = [];

  const [importPaths, _] = getImportAndLog(mainJs);

  queue.push(...importPaths);
  while (queue.length > 0) {
    const path = queue.shift() as string;
    visited[path] = true;
    const code = await readFile(path);
    const [importPaths, isConsoleLog] = getImportAndLog(code);
    if (isConsoleLog) {
      answer.push(path);
    }

    importPaths
      .filter((path) => !visited[path])
      .forEach((path) => queue.push(path));
  }

  return answer;
}
