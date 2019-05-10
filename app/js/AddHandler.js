// Describes event handler click button "add"

export default class AddHandler{

    constructor(channelObj, storageObj){

        this.channelObj=channelObj;
        this.storageObj=storageObj;
        this.addData=document.getElementById('add');

    };

    addChannel(){

        let that=this;

        this.addData.onclick=function(){

            let channel=that.channelObj;
            channel.nameChannel=document.getElementById('nameChannel').value;
            channel.urlChannel=document.getElementById('urlChannel').value;
            
            let localStorage=that.storageObj;
            localStorage.addNewCannel(channel);

        };

    };
};