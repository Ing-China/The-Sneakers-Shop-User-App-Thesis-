export default function phoneNumberWithoutZeroPrefix(value) {
  if (value.startsWith('0') && value !== '0') {
    value = value.replace(/^0*/, '');
  }

  return value;
}
