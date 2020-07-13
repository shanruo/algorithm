/**
 * @param {string} IP
 * @return {string}
 */

const validIPAddress = function(IP) {
  const arr4 = IP.split('.');
  const arr6 = IP.split(':');
  if (arr4.length === 4) {
    if (arr4.every(item => (item.match(/^0$|^([1-9]\d{0,2})$/) && item < 256))) {
      return 'IPv4';
    }
  } else if (arr6.length === 8) {
    if (arr6.every(item => item.match(/^[0-9a-fA-F]{1,4}$/))) {
      return 'IPv6';
    }
  }
  return 'Neither';
};
