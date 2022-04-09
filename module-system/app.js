// // myModule : IIFE(Immediately Invoked Function Expression), 즉시 실행 함수 표현
// const myModule = (() => {
//   const privateFoo = () => { };
//   const privateBar = () => { };

//   const exported = {
//     publicFoo: () => { },
//     publicBar: () => { },
//   };

//   return exported;
// })(); // 여기서 괄호가 파싱되면, 함수는 호출됨

// console.log(myModule);
// console.log(myModule.privateFoo, myModule.privateBar);

// module loader

function loadModule(filename, module, require) {
  const wrappedSrc = `
    (function(module, exports, require){
      ${fs.readFileSync(filename, 'utf-8')}
    })(module, module.exports, require)
  `
  eval(wrappedSrc);
}// 50p까지!