// Describes event handler click button "delete"

export default class DeleteHandler{

    constructor(ObjLocalStorage, ObjView){

        this.ObjLocalStorage=ObjLocalStorage;
        this.ObjView=ObjView;
        this.delete=document.getElementsByClassName('delete');
    };


    deleteChannel(){

        let that=this;

        for(let i=0; i<this.delete.length;i++){

            this.delete[i].onclick=function(){
                
                let arr=that.ObjLocalStorage.listChannels();
                arr.splice(i,1);

                that.ObjLocalStorage.rewriteDataLocalStorage(arr);

                let deleteChannel=document.getElementById(i);
                deleteChannel.remove(); 
                
                window.location.reload();
            };

        };

    };

};
