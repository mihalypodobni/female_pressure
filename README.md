# female_pressure

female pressure website 2022

## Project setup

### node version

Project is built and run with node v12, using `nvm` for managing node
versions. `nvm` should be installed with your node installation. If it
is not, I used this command to install it

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

from [Node Version Manager github](https://github.com/nvm-sh/nvm)

Starting from node v16, it was

```
nvm install 12
```

and then

```
nvm use 12
```

### Install node packages

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run the server

```
node server/server.js
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## postgres

sudo apt install postgres postgres-contrib

sudo -i -u postgres

psql

createuser --interactive

createdb fp_db_dev

psql

\conninfo

import postgres db from dump


