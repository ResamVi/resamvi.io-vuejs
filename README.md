# resamvi.de - Website
![title](https://i.imgur.com/DuKhNcp.png)

<a href="https://resamvi.de">resamvi.de</a> is my personal blog, website and showcase of insights or projects of which I write lengthy articles in German. This website makes use of technologies like VueJS, CircleCI to write and deploy a succint website.


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

### NGINX config
To use vue in history mode (omit '#' in URL)
```
location / {
    try_files $uri $uri/ /index.html;
}
```

# TODO
- Conform to Open Closed principle
- Mail service
