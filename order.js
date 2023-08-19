const placeorder = (callback) =>{
    setTimeout(()=> {
        console.log("order placed");
        callback();
    },2000);
};

const startProduction = (callback) => {
    setTimeout(() =>{
        console.log('Production started');
        callback();
    }, 5000);
};

const printID = (callback) =>{
    setTimeout(()=>{
        console.log("Id printed");
        callback();
    },5000);
};

const productName = (callback) => {
    setTimeout(()=>{
        console.log("Product name printed");
        callback();
    },5000);
};
const productDesc = (callback) => {
    setTimeout(()=>{
        console.log("Product Desc printed");
        callback();
    },5000);
};



console.log('ordering product...');
placeorder(()=>{
    console.log("In production");
    startProduction(()=>{
        console.log("printing items started");
        printID(()=>{
            productName(()=> {
                productDesc(() =>{
                    console.log("Day Ended");
                });
            });
        });
    });
});