# How to Exec TypeScript Code

We can complile TypeScript code to JavaScript code by `tsc` command.
```
<!-- Compile TypeScript Code -->
node ➜ /workspaces/typescript-train/ts-tutorial/section2 (main) $ tsc hello.ts 
node ➜ /workspaces/typescript-train/ts-tutorial/section2 (main) $ ll | grep hello
-rw-r--r-- 1 node node   58 Aug 24 23:28 hello.js
-rw-r--r-- 1 node node   59 Aug 24 23:27 hello.ts
node ➜ /workspaces/typescript-train/ts-tutorial/section2 (main) $ 
```

We can exec that code with `node` command like JavaScript
```
node ➜ /workspaces/typescript-train/ts-tutorial/section2 (main) $ node hello.js 
Hello, Test
```

And directly exex TS code with `ts-node` module.
```
node ➜ /workspaces/typescript-train/ts-tutorial/section2 (main) $ npx ts-node hello.ts 
Hello, Test
``` 
