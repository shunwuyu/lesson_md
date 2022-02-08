- npm i tsc-watch typescript --save-dev
- tsconfig.json
  不加 "files": ["types/express.d.ts"]
- "start:dev": "tsc-watch --onSuccess \"node dist/main.js\""

- Content-Type  "application/json"
  Body  raw {
    "username": "dddd"
} 