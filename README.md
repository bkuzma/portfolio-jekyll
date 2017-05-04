# bkuzma.github.io
Portfolio site for Brian Kuzma

## Local Development
```
bower install
npm install
gulp serve
```

Note: changes should not be committed to the master branch since deployments for github pages are pushed to master.

## Preview Production Build

```
gulp build
gulp serve:dist
```

## Deploying

```
gulp deploy
```

Note: build step is handled in deploy step so you don't need to explicitly build before deploying.
