
compare(otherFraction) {
    let thisDecimal = this.numerator / this.denominator;
    let otherDecimal = otherFraction.numerator / otherFraction.denominator;
    if (thisDecimal < otherDecimal) {
      return -1;
    } else if (thisDecimal > otherDecimal) {
      return 1;
    } else {
      return 0;
    }
divide(otherFraction) {
    let quotientNumerator = this.numerator * otherFraction.denominator;
    let quotientDenominator = this.denominator * otherFraction.numerator;
    return new Fraction(quotientNumerator, quotientDenominator);
  }
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
add(otherFraction) {
    let commonDenominator = this.denominator * otherFraction.denominator;
    let numeratorSum = (this.numerator * otherFraction.denominator) + (otherFraction.numerator * this.denominator);
    return new Fraction(numeratorSum, commonDenominator);
  }

  subtract(otherFraction) {
    let commonDenominator = this.denominator * otherFraction.denominator;
    let numeratorDiff = (this.numerator * otherFraction.denominator) - (otherFraction.numerator * this.denominator);
    return new Fraction(numeratorDiff, commonDenominator);



