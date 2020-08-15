const str = 'Daniel 0 Guerra';
const vogais = 'aeiou'.split('');
const parts = str
    .split('')
    .filter(letra => vogais.indexOf(letra) < 0)
    .join('');

console.log(parts);