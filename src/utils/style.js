export function classNameRetriever(styles) {
  return (name) => {
    const className = styles[name];

    if (className == null) {
      const names = Object.keys(styles).join(', ')
      throw Error(`could not find class of name '${name}' among: ${names}`);
    } else {
      return className;
    }
  }
}
