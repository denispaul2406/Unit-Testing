multiply(otherFraction) {
    let productNumerator = this.numerator * otherFraction.numerator;
    let productDenominator = this.denominator * otherFraction.denominator;
    return new Fraction(productNumerator, productDenominator);
  }
