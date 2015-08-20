# file-to-datauri

Convert local files into data uris with ease.

## Installation

```bash
npm install --save file-to-datauri
```

## How it works

Read the file, either sync or async, find mime
using file extension, and return file content
encoded as data-uri.

Only support utf8 encoded files.

## Usage

```javascript
  import datauri from 'file-to-datauri'

  // use with a callback
  datauri(__dirname + '/some/file.txt', (err, uri) => {
    if (err) {
      return;
    }
    console.log(uri);
  });

  // use with promise (if no callback given)
  (async () => {
    const uri = datauri(__dirname + '/some/file.txt');
    console.log(uri);
  })();


  // use sync
  const uri = datauri.sync(__dirname + '/some/file.txt');
  console.log(uri);


```

## Credits

Inspired by [data-uri](https://github.com/mcwhittemore/data-uri)

## License
The MIT License (MIT)

Copyright (c) 2015 Andrea Parodi



