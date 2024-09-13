"use strict";

import {QR} from './qr-base.js';
import SVG from './vector.js';

export default function qr(text, options) {
    const {
        ec_level = 'M',
        parse_url = false,
        margin = 1,
        size = 0
    } = options || {};

    var matrix = QR(text, ec_level, parse_url);
    var stream = [];
    var result;

    SVG(matrix, stream, margin, size);
    result = stream.filter(Boolean).join('');

    return result;
}
