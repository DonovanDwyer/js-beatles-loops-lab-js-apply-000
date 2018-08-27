var musician = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instrument = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musician, instrument) {
  var combination = []
  for (var i = 0; i <= 3; i++) {
    combination.push(musician[i] + " plays " +
    instrument[i])
  }
  return combination
}

const facts = [
        "",
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ]

function johnLennonFacts(facts) {
  let lpedia = []
  let j = 1
  while (j <= 4) {
    lpedia.push(`${facts[j]}!!!`)
    j++
  }
  return lpedia
}
