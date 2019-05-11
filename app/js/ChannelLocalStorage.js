
/* 
    Describes a record of the channels in the local storage

*/

export default class ChannelLocalStorage{

    constructor(infChannelObj){

        this.infChannelObj=infChannelObj;
        this.myKey='rssChannels';
        this.infInitialize=[
            {
                nameChannel:"@channel_1",
                urlChannel:"http//"
            },
        
            {
                nameChannel:"@channel_2",
                urlChannel:"http//"
            },
        
            {
                nameChannel:"@channel_3",
                urlChannel:"http//"
            },
        
            {
                nameChannel:"@channel_4",
                urlChannel:"http//"
            },
        
            {
                nameChannel:"@channel_5",
                urlChannel:"http//"
            }
        ];

    };

    addNewCannel(infChannelObj){

        if(this.infChannelObj!==undefined){

            const infoFromLocalStorage=JSON.parse(window.localStorage.getItem(this.myKey));
            infoFromLocalStorage.push(this.infChannelObj);

            const serialArray=JSON.stringify(infoFromLocalStorage);
            window.localStorage.setItem(this.myKey,serialArray);
            window.location.reload();



        }else{

            const infoFromLocalStorage=JSON.parse(window.localStorage.getItem(this.myKey));
            infoFromLocalStorage.push(infChannelObj);

            const serialArray=JSON.stringify(infoFromLocalStorage);
            window.localStorage.setItem(this.myKey,serialArray);
            window.location.reload();


        }

    };

    listChannels(){

        const infoFromLocalStorage=JSON.parse(window.localStorage.getItem(this.myKey));

        if(infoFromLocalStorage){

            return infoFromLocalStorage;

        }else{

            const serialInfo=JSON.stringify(this.infInitialize);
            window.localStorage.setItem(this.myKey,serialInfo);

            const info=JSON.parse(window.localStorage.getItem(this.myKey));
            return info;

        };

    };

    rewriteDataLocalStorage(arr){

        const serialArr=JSON.stringify(arr);
        window.localStorage.setItem(this.myKey,serialArr);
        
        const infoFromLocalStorage=JSON.parse(window.localStorage.getItem(this.myKey));
        return infoFromLocalStorage;

    } 

};