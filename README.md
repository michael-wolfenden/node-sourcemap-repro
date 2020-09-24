# --enable-source-maps not showing function names

--enable-source-maps does not appear to show function names with webpack sourcemap

```
node --version
npm install
npm run build-index
node --enable-source-maps ./dist/main.js
```

## Output

```output
++ node --version
v12.13.0

++ npm install
npm WARN node-sourcemap-repro@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\watchpack-chokidar2\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 40 packages from 55 contributors, removed 25 packages, updated 353 packages and audited 396 packages in 11.874s
found 0 vulnerabilities

++ npm run build-index
> node-sourcemap-repro@1.0.0 build-index D:\github\node-sourcemap-repro   
> webpack ./index.js --devtool source-map --target node --mode production 
--display none

++ node --enable-source-maps ./dist/main.js
Error: Roh Ruh
    at o (D:\github\node-sourcemap-repro\dist\main.js:1:970)
        -> D:\github\node-sourcemap-repro\dist\webpack:\index.js:14:9     
    at n (D:\github\node-sourcemap-repro\dist\main.js:1:952)
        -> D:\github\node-sourcemap-repro\dist\webpack:\index.js:10:3     
    at r (D:\github\node-sourcemap-repro\dist\main.js:1:940)
        -> D:\github\node-sourcemap-repro\dist\webpack:\index.js:6:3      
    at Object.<anonymous> (D:\github\node-sourcemap-repro\dist\main.js:1:992)
        -> D:\github\node-sourcemap-repro\dist\webpack:\index.js:2:3      
    at r (D:\github\node-sourcemap-repro\dist\main.js:1:110)
        -> D:\github\node-sourcemap-repro\dist\webpack:\webpack\bootstrap:19:22
    at D:\github\node-sourcemap-repro\dist\main.js:1:902
        -> D:\github\node-sourcemap-repro\dist\webpack:\webpack\bootstrap:83:10
    at Object.<anonymous> (D:\github\node-sourcemap-repro\dist\main.js:1:911)
    at Module._compile (internal/modules/cjs/loader.js:956:30)  
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:
973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)   
```