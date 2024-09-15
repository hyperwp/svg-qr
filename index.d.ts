/**
 * Generate QR code from data
 * 
 * @param data String to convert to QR code
 * 
 * @param options Options for QR code
 * 
 * @returns SVG string of QR code
 */
export default function qr(data: string, options?: {
    ec_level: 'L' | 'M' | 'Q' | 'H',
}): string;