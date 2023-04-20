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

