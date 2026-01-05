

function Promises() {

    const p1 = new Promise((resolve, reject) => {
        const success = true;
        if (success) {
            resolve("p1 resolved");
        } else {
            reject("p1 rejected");
        }
    });


    const p2 = () => {
        return new Promise((resolve, reject) => {
            const success = true;
            if (success) {
                resolve("p2 resolved");
            } else {
                reject("p2 rejected");
            }
        });
    };


    const p3 = () => {
        return new Promise((resolve, reject) => {
            const success = true;
            if (success) {
                resolve("p3 resolved");
            } else {
                reject("p3 rejected");
            }
        });
    };


    const p4 = () => {
        return new Promise((resolve, reject) => {
            const success = true;
            if (success) {
                resolve("p4 resolved");
            } else {
                reject("p4 rejected");
            }
        });
    };

    p1.then((res1) => {
        console.log(res1);
        return p2();
    })
        .then((res2) => {
            console.log(res2);
            return p3();
        })
        .then((res3) => {
            console.log(res3);
            return p4();
        })
        .then((res4) => {
            console.log(res4);
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

Promises();
