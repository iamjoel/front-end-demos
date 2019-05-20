/*
 * 找坑
 * 坑的左侧值小于等于坑右侧的值，大于坑里面的值
 * @returns 类似 [[5, 1, 5], [5,2,3,6]]
 */
function findHoles (arr) {
  var res = []
  var holeLeftValue = arr[0]
  var holeRightValue
  var tempHole = [holeLeftValue]
  arr.forEach(function (each, index) {
    if (index > 0) {
      if (each < holeLeftValue) {
        tempHole.push(each)
      } else {
        holeRightValue = each
        holeLeftValue = holeRightValue
        if (tempHole.length >= 2) {
          tempHole.push(holeRightValue)
          res.push(tempHole)
        }
        tempHole = [holeLeftValue]
      }
    }
  })
  return res
}
/*
 * 算洞的空间
 * @param 形如 [[5, 1, 5], [5,2,3,6]]
 */
function calulateHole (holeArr) {
  var sum = holeArr.reduce(function (prev, hole) {
    var min = Math.min(hole[0], hole[holeArr.length - 1])
    hole.shift()
    hole.pop()
    return prev + hole.reduce(function (prevRes, item, index) {
      return prevRes + min - item
    }, 0)
  }, 0)
  return sum
}
var value = calulateHole(findHoles([2, 5, 1, 2, 3, 4, 7, 7, 6]))
console.log(value)
