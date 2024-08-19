# `--required`のテスト

[test.ts](./test.ts)と[test-required.ts](./test-required.ts)を使用

```
node ➜ /workspaces/typescript-train (main) $ npx ts-node --require ./otel-instrumentation/test-required.ts  ./otel-instrumentation/test.ts 
Hello from module specified --required
Hello from test.ts
node ➜ /workspaces/typescript-train (main) $ 
```
