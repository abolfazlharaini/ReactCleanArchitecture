
const exceptionLog = (level: 'low' | 'error' | 'fatal', reason: any) => {

    console.error(`${level} error`);
    if (reason) {
        console.error(reason);
    }

}
export default exceptionLog;