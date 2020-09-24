const functionA = () => {
  functionB()
}

const functionB = () => {
  functionC()
}

const functionC = () => {
  functionD()
}

const functionD = () => {
  throw new Error('Roh Ruh')
}

functionA()