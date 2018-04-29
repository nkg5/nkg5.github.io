# nkg5.github.io
This is the source code of my personal website [http://nkovacevic.com](http://nkovacevic.com).

## Preparing environment

- Make sure you have **Node.js** installed on your system ([https://nodejs.org](https://nodejs.org))
- Make sure you have **Ruby** installed on your system ([https://www.ruby-lang.org](https://www.ruby-lang.org/))
- Install npm packages: `npm install` _(might need root privileges)_
- Install **sass** ruby package: `gem install sass` _(might need root privileges)_

## Development

### Folder structure 
- **src** -> contains source code for the website (jade, sass, javascript)
- **res** -> contains static assets for the website (images, json files ...)
- **xsd** -> contains XML Schema definitions used by other applications
- **_dist** -> contains compiled source code

### Build scripts

`npm run main`
- deletes _dist folder
- initializes new _dist folder
- compiles all source files _(jade, uglify, sass, cssmin...)_
- starts web server listening at [localhost:8080](http://localhost:8080)
- watches for source file changes and compiles them on change

`npm run build`
- deletes _dist folder
- initializes new _dist folder
- compiles all source files _(jade, uglify, sass, cssmin...)_
- copies compiled files to root folder

