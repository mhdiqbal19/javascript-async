addEventListener(type:"message", listener:function (message:MessageEvent<any>){
        const total = message.data;

        for (let i = 0; i < total; i++) {
            postMessage(i);
        }
    })