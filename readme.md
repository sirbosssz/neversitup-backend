# Neversitup Test (Backend)

## Project Setup

1. install node.js

   > (currently use v20.15.0)

2. clone git project
3. run **npm** command below to install `node_modules`

   ```shell
   npm install
   ```

5. open `src/index.ts` and uncomment function that want to test and change input
6. run command to start
  - if you want to use nodemon, run **npm** command below

  ```shell
  npm run dev
  ```

  - if you want to compile TypeScript to JavaScript, run **npm** command below

  compile:
  ```shell
  npm run build
  ```

  start:
  ```shell
  npm start
  ```

  - if you want to run unit test, run **npm** command below

  ```shell
  npm run test
  ```

## Project Structure

Project Tree ( - is folder, -- is file)

```plaintext
- node_modules
- src
  -- index.ts
  -- index.spec.ts
  -- manipulate.ts
  -- manipulate.spec.ts
  -- odd-int.ts
  -- odd-int.spec.ts
  -- smiley.ts
  -- smiley.spec.ts
-- package.json
-- readme.md
```

Explaination

- `node_modules` contain module for node.js package
- `src` source of project files that contain each answer
  - `index.ts` is starter file for project
  - `manipulate.ts` and `manipulate.spec.ts` is an answer for **permutation** question with unit test
  - `odd-int.ts` and `odd-int.spec.ts` is an answer for **odd int** question with unit test
  - `smiley.ts` and `smiley.spec.ts` is an answer for **smiley** question with unit test