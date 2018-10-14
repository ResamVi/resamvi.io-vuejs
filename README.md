# resamvi.de

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### NGINX config
To use vue in history mode (omit '#' in URL)
```
location / {
    try_files $uri $uri/ /index.html;
}
```
