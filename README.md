# resamvi.de - Website
![title](https://i.imgur.com/DuKhNcp.png)

<a href="https://resamvi.de">resamvi.de</a> is my personal blog, website and showcase of insights or projects of which I write lengthy articles in German. This website makes use of technologies like VueJS, CircleCI to write and deploy a succint website.


## Development
```
yarn install
yarn run serve
```

### Build website 
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
- Init mail service in CI
