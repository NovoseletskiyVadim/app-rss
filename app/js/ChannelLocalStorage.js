
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


        }else{

            const infoFromLocalStorage=JSON.parse(window.localStorage.getItem(this.myKey));
            infoFromLocalStorage.push(infChannelObj);

            const serialArray=JSON.stringify(infoFromLocalStorage);
            window.localStorage.setItem(this.myKey,serialArray);

        }

    };

    listChannels(){

        const infoFromLocalStorage=JSON.parse(window.localStorage.getItem(this.myKey));

        if(infoFromLocalStorage){

            return infoFromLocalStorage;

        }else{

            const serialInfo=JSON.stringify(this.infInitialize);
            window.localStorage.setItem(this.myKey,serialInfo);
            return infoFromLocalStorage;

        };

    };

};