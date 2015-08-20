import {readFile, readFileSync} from 'fs';
import mimeFromFile from 'mime';

const _datauri = (filename) => (resolve, reject) => {
  try {
    const mime = mimeFromFile.lookup(filename);
    readFile(filename, (err, content) => {
      if (err) {
        return reject(err);
      }
      const encoded = content.toString('base64');
      const result = `data:${mime};charset=utf-8;base64,${encoded}`;
      resolve(result);
    });
  } catch (err) {
    reject(err);
  }
};

export default function datauri(filename, cb) {
  if (cb) {
    const resolve = _datauri(filename);
    return resolve(uri => cb(null, uri), cb);
  }
  return new Promise( _datauri(filename) );
}

datauri.sync = function datauriSync(filename) {
  const mime = mimeFromFile.lookup(filename);
  const content = readFileSync(filename);
  const encoded = content.toString('base64');
  const result = `data:${mime};charset=utf-8;base64,${encoded}`;
  return result;
};

