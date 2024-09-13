#!/usr/bin/env node

import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';

import qr from '../lib/qr.js';

function file(name) {
    const dirname = path.dirname(url.fileURLToPath(import.meta.url));
    return fs.createWriteStream(dirname + '/' + name);
}

const text = 'Hello, world!';

qr(text, { ec_level: 'Q' }).pipe(file('qr.svg'));