function serompe() {
    return 3 + z
    
}

function seRompeAsync(cb) {
    setTimeout(() => {
        try {
            return 3 + z
            
        } catch (error) {
            console.error("error en async");
            cb(error);
            
        }
    }, 1000);
}


try {
    // serompe();
    seRompeAsync(() => {
        console.log("hay error")
        
    });
} catch (error) {
    console.error("algo salio mal");
    console.error(error.message);
}

console.log("esto esta al final");