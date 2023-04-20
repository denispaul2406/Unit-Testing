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
