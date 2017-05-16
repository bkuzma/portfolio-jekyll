# bkuzma.github.io
Portfolio site for Brian Kuzma

## Local Development

### Download Packages

```
bower install
npm install
bundle install
```

_Note: you may need to have bundler installed, which may require root privileges._
```
gem install bundler
```

### Start Development Server
```
gulp serve
```

_Note: changes should not be committed to the master branch since deployments for github pages are pushed to master._

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
