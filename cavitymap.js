function cavityMap(grid) {
  let size_grid = grid.length
  let result_grid = [...grid]
  for (let y = 1; y < size_grid - 1; y++){
    for (let x = 1; x < size_grid - 1; x++){
      if (grid[y][x] > grid[y - 1][x] && grid[y][x] > grid[y + 1][x] && grid[y][x] > grid[y][x - 1] && grid[y][x] > grid[y][x + 1]) result_grid[y] = result_grid[y].substring(0,x) + 'X' + result_grid[y].substring(x + 1)
    }
  }
  return result_grid
}
