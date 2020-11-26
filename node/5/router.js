const { EDEADLK } = require("constants");


function route(handle, pathname) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log('没有找到函数给当前的路由' + pathname);
  }
}

exports.route = route;