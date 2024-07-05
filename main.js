import * as csstree from 'css-tree';

const ast = csstree.parse('50%', { context: 'value' });
const result = csstree.lexer.matchProperty('scale', ast);

console.log(result)
if (result.error){
  const errorElm = document.createElement('pre')
  errorElm.textContent = `${result.error.message} \n ${result.error.stack} \n\n Please check console for more details`
  document.body.appendChild(errorElm)
}
