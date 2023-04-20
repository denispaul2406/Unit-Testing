 divide(otherFraction) {
    let quotientNumerator = this.numerator * otherFraction.denominator;
    let quotientDenominator = this.denominator * otherFraction.numerator;
    return new Fraction(quotientNumerator, quotientDenominator);
  }

