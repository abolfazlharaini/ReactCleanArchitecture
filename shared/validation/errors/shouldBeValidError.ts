
const shouldBeValidError = (name: string): () => string => () =>
    `The ${name} is not valid.`;
export default shouldBeValidError;