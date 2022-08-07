# 0x06. React Immutable

`Front-end` `JavaScrpt` `ES6` `React`

![React-Immutable](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/f3ca19e8b16c650e59d8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20220805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220805T140901Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a0ae887514dd93a81a1be0f2b3945b97ea075a3aeaf76a565f98fd5b8a625e3e)

## Resources

**Read or watch:**
* [Immutable Object concept](https://en.wikipedia.org/wiki/Immutable_object)
* [Immutable.js Documentation](https://immutable-js.com/docs/v4.1.0)
* [Immutable.js GitHub](https://github.com/immutable-js/immutable-js)

## Learning Objectives
At the end of this project, you are expected to be able to `explain to anyone,` without the help of Google:

* Immutable objects. Who, what, when, where, and why?
* How to use the Immutable.js library to bring immutability to Javascript
* The differences between List and Map
* How to use Merge, Concat, and Deep Merging
* What a lazy Seq is

# Setup

* Install NodeJS 12.11.x
* Install npm 6.11.x
The script below installs the above 2 at the specified versions
```
$ curl -sl https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs
```
## Provided files
babel.config.js
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```
jsconfig.json
```

{
  "compilerOptions": {
    "target": "es6"
  },
  "exclude": [
    "node_modules"
  ]
}
```
package.json
```
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  },
  "dependencies": {
    "immutable": "^4.0.0-rc.12"
  }
}
```