#### Configurations

yarn : 1.22.15
node: v14.16.0


#### HOW TO

1. Update your `package.json`

```
{
  "name": "jest-test-sample",
  "type": "module",
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/.bin/jest"
  },
  "devDependencies": {
    "@types/jest": "^26.0.20",
    "@types/node": "^14.14.25",
    "jest": "^27.0.0-next.3",
    "ts-jest": "^27.0.0-next.7",
    "typescript": "^4.1.3",
    "jest-environment-node": "^27.0.0-next.3"
  }
}
```

2. Update your jest.config.js

```
export default {
  testEnvironment: "jest-environment-node",
  testTimeout: 30000,
  transform: {},

  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(.*)\\.js$": "$1",
  },
};
```

3. Run tests

#### ISSUES

---

1. `export default` not working inside `jest.config.js`

```
export default {
^^^^^^

SyntaxError: Unexpected token 'export'
    at wrapSafe (internal/modules/cjs/loader.js:979:16)
    at Module._compile (internal/modules/cjs/loader.js:1027:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at requireOrImportModule (/Users/psapien/projects/personal/jest_es6_node/node_modules/jest-util/build/requireOrImportModule.js:53:28)
    at readConfigFileAndSetRootDir (/Users/psapien/projects/personal/jest_es6_node/node_modules/jest-config/build/readConfigFileAndSetRootDir.js:109:66)
    at readConfig (/Users/psapien/projects/personal/jest_es6_node/node_modules/jest-config/build/index.js:233:65)
```

#### SOLUTION

1. Please put `type: "module"` in your package.json file.
2. Use `node --experimental-vm-modules node_modules/.bin/jest` instead of `jest` in your scripts

--------------------------------------------
node version : v14.16.0
