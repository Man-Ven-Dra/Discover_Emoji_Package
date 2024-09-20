import { emojis } from "./constant/emojis.js";

export function findEmoji(query) {
    
    if (query in emojis) {
      return emojis[query].emoji;
    }
  
    for (const [key, value] of Object.entries(emojis)) {
      if (value.unicode === query) {
        return value.unicode;
      }
    }
  
    return "Emoji not Found!";
  }
  
  const keywordSearch = findEmoji("mad");
  const unicodeSearch = findEmoji("U+1F620");