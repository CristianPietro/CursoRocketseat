// setInterval irá rodar uma função N vezes
// depois de x milissigundos

const timeOut = 3000

const checking = () => console.log('checking!')
setInterval(checking, timeOut)