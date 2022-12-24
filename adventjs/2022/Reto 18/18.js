function dryNumber(dry, numbers) {
    return new Array(numbers)
          .fill('')
          .map( (_, i) => i+1)
          .filter( n => String(n).includes(dry))
}