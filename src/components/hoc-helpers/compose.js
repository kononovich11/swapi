const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((prevResult, fn) => {
    return fn(prevResult);
  }, comp);
}

export default compose;