import fs from 'fs';
import path from 'path';

const inputFile = path.join(path.dirname(new URL(import.meta.url).pathname).slice(1), 'data/posts.json');
const outputFile = path.join(path.dirname(new URL(import.meta.url).pathname).slice(1), 'data/posts_new.json');
console.log(path.dirname(new URL(import.meta.url).pathname).slice(1))

fs.readFile(inputFile, 'utf8', (err, jsonString) => {
  if (err) {
    console.log('Error reading file:', err);
    return;
  }
  
  try {
    const posts = JSON.parse(jsonString);
    
    const postsNew = posts.map(post => {
      return {
        promot: post.title + '-->',
        completion: ' ' + post.category + '$!',
        ...post
      }
    });
    
    fs.writeFile(outputFile, JSON.stringify(postsNew), err => {
      if (err) {
        console.log('Error writing file:', err);
        return;
      }
      
      console.log('File successfully written!');
    });
  } catch (err) {
    console.log('Error parsing JSON object:', err);
    return;
  }
});