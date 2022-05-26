class Trie {
  isEnd: boolean = false;
  dict: { [a: string]: Trie } = {};

  insert(word: string): void {
    if (word === "") {
      this.isEnd = true;
      return;
    }
    if (!(word[0] in this.dict)) this.dict[word[0]] = new Trie();
    this.dict[word[0]].insert(word.slice(1));
  }

  search(word: string): boolean {
    if (word === "") return this.isEnd;
    else if (!(word[0] in this.dict)) return false;
    else return this.dict[word[0]].search(word.slice(1));
  }

  startsWith(prefix: string): boolean {
    if (prefix === "") return true;
    else if (!(prefix[0] in this.dict)) return false;
    else return this.dict[prefix[0]].startsWith(prefix.slice(1));
  }
}

const obj = new Trie();
obj.insert("apple");
console.log(obj.search("apple")); // true
console.log(obj.search("app")); // false
console.log(obj.startsWith("app")); // true
obj.insert("app");
console.log(obj.search("app")); // true
