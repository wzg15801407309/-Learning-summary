// 异步接口1
function asyncFunction1() {
  return new Promise(resolve => {
    // 异步操作
    setTimeout(() => {
      console.log('异步接口1完成');
      resolve();
    }, 1000);
  });
}

// 异步接口2
function asyncFunction2() {
  return new Promise(resolve => {
    // 异步操作
    setTimeout(() => {
      console.log('异步接口2完成');
      resolve();
    }, 1000);
  });
}

// 异步接口3
function asyncFunction3() {
  return new Promise(resolve => {
    // 异步操作
    setTimeout(() => {
      console.log('异步接口3完成');
      resolve();
    }, 1000);
  });
}

// 异步接口4
function asyncFunction4() {
  return new Promise(resolve => {
    // 异步操作
    setTimeout(() => {
      console.log('异步接口4完成');
      resolve();
    }, 1000);
  });
}

// 异步接口5
function asyncFunction5() {
  return new Promise(resolve => {
    // 异步操作
    setTimeout(() => {
      console.log('异步接口5完成');
      resolve();
    }, 1000);
  });
}
// // 异步接口2 模拟某一个接口报错
// function asyncFunction2() {
//   return new Promise((resolve, reject) => {
//     // 模拟异步操作
//     setTimeout(() => {
//       console.log('异步接口2完成');
//       // 模拟出现错误
//       reject('异步接口2出现错误');
//     }, 1000);
//   });
// }


// 调用5个异步接口后再调用另一个异步接口
async function callAsyncFunctions() {
  try {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
    await asyncFunction4();
    await asyncFunction5();

    // 调用另一个异步接口
    console.log('5个异步接口调用完成，现在调用另一个异步接口');
    // 调用另一个异步接口的代码
  } catch (error) {
    console.error('发生错误：', error);
    // 在这里处理错误，例如进行错误日志记录或其他操作
  }
}

// 调用函数开始执行异步操作
callAsyncFunctions();