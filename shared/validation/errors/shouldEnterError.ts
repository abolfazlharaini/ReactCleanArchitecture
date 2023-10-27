const shouldEnterError = (name: string): () => string => () =>
    `Please enter ${name}`;
export default shouldEnterError;