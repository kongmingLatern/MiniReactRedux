export default function isPromise(action) {
  return !!action //有实际含义的变量才执行方法，变量null，undefined和''空串都为false
    && (typeof action === 'object' || typeof action === 'function') // 初始promise 或 promise.then返回的
    && typeof action.then === 'function';
}
