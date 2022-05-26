class WordDictionary {
  isEnd: boolean = false;
  dict: { [a: string]: WordDictionary } = {};

  addWord(word: string): void {
    if (word === "") {
      this.isEnd = true;
      return;
    }
    if (!(word[0] in this.dict)) this.dict[word[0]] = new WordDictionary();
    this.dict[word[0]].addWord(word.slice(1));
  }

  search(word: string): boolean {
    if (word === "") return this.isEnd;
    else if (word[0] === ".") {
      return Object.keys(this.dict).some((d) =>
        this.dict[d].search(word.slice(1))
      );
    } else if (!(word[0] in this.dict)) return false;
    else return this.dict[word[0]].search(word.slice(1));
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("at");
wordDictionary.addWord("and");
wordDictionary.addWord("an");
wordDictionary.addWord("add");
console.log(wordDictionary.search("a")); // return False
console.log(wordDictionary.search(".at")); // return False
wordDictionary.addWord("bat");
console.log(wordDictionary.search(".at")); // return True
console.log(wordDictionary.search("an.")); // return True
console.log(wordDictionary.search("a.d.")); // return False
console.log(wordDictionary.search("n.")); // return False
console.log(wordDictionary.search("a.d")); // return True
console.log(wordDictionary.search(".")); // return False
