const fs = require('fs')

// 1) Convertir la map en array
let wayMap = []
const mapData = fs.readFileSync('./maps/rect_01.map', 'utf-8')
  .replaceAll('\r', '') // Remplacer les espaces par rien
  .split('\n') //

wayMap = mapData.map(line=> line.split(''))

let start = {x: 0, y: 0 }
let end = { x: 0, y: 0 }
let xMax = 0
let yMax = 0

// 2) Je prends les coordonnées du début = 1 et de la fin du jeu = 2
mapData.forEach((line, indexY) => {
  line[indexY+1][0] ? '' : yMax= indexY
  line.split('').forEach((element, indexX) => {
    line[0][indexX + 1] ? '' : xMax= indexX
    if (element == 1) {
      start = {x:indexX, y: indexY}
    }

    if (element == 2) {
      end = {x:indexX, y: indexY}
    }
  })
})

let startLine = start.y
let endLine = end.y


// Let's go
while ((start.x === end.x) && (start.y === end.y)) {
  // let startpoint = start
  // let endpoint = end
  let oldpoint;
  if (start.y < end.y) {
    // If nextpoint exists
    if (wayMap[start.y + 1][start.x]) {
      // If contains a space
      if (wayMap[start.y + 1][start.x] === ' ') {
        wayMap[start.y + 1][start.x] = '-'
        start.y++
        // If contains a star
      } else if (wayMap[start.y + 1][start.x] === '*') {
        // If start x < end.x
        if (start.x < end.x) {
          // Tu vas checker à gauche ou à droite
          // A droite
          if (wayMap[start.y][start.x + 1] === '*') {
            oldpoint = wayMap[start.y][start.x + 1]
          } else if (wayMap[start.y][start.x + 1] === ' ') {
            wayMap[start.y][start.x + 1] = '-'
            start.x++

          // A gauche
          } else if (wayMap[start.y][start.x - 1] === ' ') {
            wayMap[start.y][start.x - 1] = '-'
            start.x--
          } else {
            oldpoint = wayMap[start.y][start.x - 1]
          }
        }
        
      }
    } else {}
  }

  
}




wayMap = wayMap.flat()
console.log(wayMap)
