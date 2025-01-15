# typescript-complete

https://www.w3schools.com/typescript/index.php

git clone 

npm init --yes

npm i -D typescript

touch 01-helloworld.ts

node 01-helloworld.ts

npx tsc --version

npx tsc --init

// add to the tsconfig.json file:
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
}

npx tsc 

this will transpile ts files inside src folder to js files into build folder
 

// to transpile to js

npx tsc 02-simple-types.ts


npm i -D ts-node

// to run on vscode terminal 

npx ts-node 02-simple-types.ts

