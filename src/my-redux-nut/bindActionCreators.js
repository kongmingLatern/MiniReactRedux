function bingActionCreator(createor, dispatch) {
  return (...args) => dispatch(createor(...args))
}

export default function bindActionCreators(creators, dispatch) {
  let obj = {}

  for (const key in creators) {
    obj[key] = bingActionCreator(creators[key], dispatch)
  }

  return obj
};