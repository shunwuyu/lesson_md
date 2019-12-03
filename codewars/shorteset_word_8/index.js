const findShort = s => s.split(' ').map(w => w.length).sort((a, b) => a-b)[0];

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));