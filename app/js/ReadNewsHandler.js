// Describes event handler click button "read"


export default class ReadNewsHandler{


    constructor(ObjLocalStorage,ObjServerRequests){

      this.ObjLocalStorage=ObjLocalStorage; 
      this.ObjServerRequests=ObjServerRequests; 
      this.readNews=document.getElementsByClassName('readNews');  
    
    };



    readChannelNews(){

        let that=this;

        for(let i=0; i<this.readNews.length;i++){

            this.readNews[i].onclick=function(){

                console.table(that.ObjLocalStorage);
                let arr=that.ObjLocalStorage.listChannels();
                let selectUrlChannel=arr[i].urlChannel;



                // этот никак не работает
                
                // that.ObjServerRequests.serverRequestsNews(selectUrlChannel);
                
                // этот работает для channel1
                that.ObjServerRequests.serverFetchNews(selectUrlChannel);


                console.log("click read="+i);
            };
        };

    };

};