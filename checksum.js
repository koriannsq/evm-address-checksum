const crypto = require('crypto');
function toChecksum(addr) { addr = addr.toLowerCase().replace(/^0x/, ''); const hash = crypto.createHash('sha3-256').update(addr).digest('hex'); let out = '0x'; for (let i=0; i<addr.length; i++) { out += parseInt(hash[i], 16) >= 8 ? addr[i].toUpperCase() : addr[i]; } return out; }
module.exports = { toChecksum };
