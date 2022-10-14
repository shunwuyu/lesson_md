process.stdin.on('data', (buffer) => {
    const action = buffer.toString().trim();
    console.log(action)
})