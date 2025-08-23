function main () {
    const errorMsg = readLine();
    
    const MyPromise = () => {
        return new Promise((resolve,reject) => {
            reject(errorMsg)
        });
    };
    MyPromise().catch(error => console.log(error))
}