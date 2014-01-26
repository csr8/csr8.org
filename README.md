csr8.org
===================================


### Computer Society Region 8 Webpage


### How to try it out
```bash
$ git clone git@github.com:diasdavid/csr8.org.git
$ cd csr8.org
$ npm install
$ npm start
```

## Development

When you change .js files in ./lib, run browserify by:
```bash
$ npm run dist
```

You can start the app by:
```bash
$ npm start
```

Or with nodemon by:
```bash
$ npm run mon
```

## Automate the process

```bash
# set the permissions to be able to execute, just once
$ chmod +x bin/watch.js
```

```bash
$ bin/watch.js
```

