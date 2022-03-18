const fs = require('fs');

// 1) Convertir la map en array
const mapData = fs.readFileSync('./maps/rect_01.map', 'utf-8')
  .replaceAll('\r', '') // Remplacer les espaces par rien
  .split('\n') //

let start = {x: 0, y: 0 }
let end = {x: 0, y: 0 }

// 2) Je prends les coordonnées du début = 1 et de la fin du jeu = 2
mapData.forEach((line, indexY) => {
  line.split('').forEach((element, indexX) => {
    if (element == 1) {
      start = {x:indexX, y: indexY}
    }

    if (element == 2) {
      end = {x:indexX, y: indexY}
    }
  })
})

// To get the beginning mapData[start.y][start.x]and the end mapData[end.y][end.x]
// y du start doit aller vers le y de la fin

// 3) Navigate
console.log(mapData[1][11]) // 1
console.log(mapData[1][10]) 
console.log(mapData[1][9])
// 4)
// 5)
// 6)
