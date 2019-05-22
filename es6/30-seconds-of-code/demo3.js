const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

console.log(stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'));