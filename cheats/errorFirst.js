function async (callback) {
    setTimeout(() => {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (e) {
            callback(e);
        }
    }, 1000);
}

async((error, dato) => {
    if (error) {
        console.error('tenemos un error');
        console.error(error);
        // throw error //no funciona el throw
        return false

    }
    console.log('todo salio bien', dato);
})