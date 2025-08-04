// Klarna
// Credit Card Masker fn

/*
Functional Requirements
• It should replace all but the 1st and last 4 digits in the provided sequence.
• Should not mask input shorter than 6 characters.
• Should not mask non-numeric characters.
• Should return empty string for all other input types apart from string and number.

  Syntax: maskify(cardNumber);
*/

function maskify(cardNumber) {
  const strCard = String(cardNumber);
  const length = strCard.length;
  const inputType = typeof cardNumber;

  if (length < 6) {
    return cardNumber;
  }

  if (inputType !== 'string' && inputType !== 'number') {
    return '';
  }

  const first = strCard.slice(0, 1);
  const lastFour = strCard.slice(-4);
  const masked = strCard.slice(1, -4).replace(/\d/g, '#');

  return `${first}${masked}${lastFour}`;
}

console.log(maskify(1234567890098765));
console.log(maskify('1234567890098765'));
console.log(maskify('1234-5678-9009-8765'));
console.log(maskify(12345));
console.log(maskify('12345'));
console.log(maskify('S1k2i3p4554p7j9'));
