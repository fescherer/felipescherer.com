export function getYearsOld() {
  // https://stackoverflow.com/questions/10008050/get-age-from-birthdate
  const birthdate = new Date('2000/05/11').getTime()
  const today = new Date().getTime()
  return Math.floor((today - birthdate) / 31557600000) // Divide by 1000*60*60*24*365.25
}
