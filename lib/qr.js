"use strict";

import {Readable} from 'node:stream';
import {QR} from './qr-base.js';
import SVG from './vector.js';

var fn_noop = function() {};

export default function qr(text, options) {
    const {
        ec_level = 'M',
        parse_url = false,
        margin = 1,
        size = 0
    } = options || {};

    var matrix = QR(text, options.ec_level, options.parse_url);
    var stream = new Readable();
    stream._read = fn_noop;

    process.nextTick(function() {
        SVG(matrix, stream, margin, size);
    });

    return stream;
}
