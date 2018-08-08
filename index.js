const solution = (str = '') => {  
  if (typeof str !== 'string' || (str && str.length === 0)) return NaN

  const validChars = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
  }

  let isNumberNegative = false

  // Handle negative numbers
  if (str.charAt(0) === '-') isNumberNegative = true
  if (validChars[str.charAt(0)] === undefined && str.charAt(0) !== '-') return NaN

  // Break input into an array
  const chars = str.split('')

  let returnValue = []
  let result = 0


  let isCurrentValid = true

  let i = 0

  while (isCurrentValid === true && chars.length > i) {
    const currentChar = chars[i]

    if (typeof validChars[currentChar] === 'number') {
      returnValue.push(validChars[currentChar])
    } else if (i === 0 && currentChar === '-') {
      // If the first character is the negative symbol, we will then later negate the number we produce from the input
      isNumberNegative = true
    } else {
      // Stop iterating now to avoid parsing beyond the first valid number
      isCurrentValid = false
    }    

    i++
  }

  let expIndex = 0

  for (let index = returnValue.length - 1; index >= 0; index--) {

    const element = returnValue[index]
    
    const exponent = Math.pow(10, expIndex)

    result += element * exponent

    expIndex++
  }
  
  if (isNumberNegative) {
    return result *= -1
  }

  return result
}

module.exports = solution
