const board = (function () {
    const grid = (a) => new Array(a*a);
    return {grid};
})();

console.log(board.grid(3))

function createPlayer (name) {
    return {name}
}