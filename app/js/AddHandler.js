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

            if(channel.nameChannel==''){

                alert('write name of chanel, please');

            }else if (channel.urlChannel==''){

                alert('write url of chanel, please');

            }else{

                let localStorage=that.storageObj;
                let idChannel=localStorage.listChannels().length;
                localStorage.addNewCannel(channel);

                let list=document.getElementById('list');

                let tr=document.createElement('tr');
                tr.setAttribute('id',idChannel);

                let tdChannelName=document.createElement('td');
                
                let tdReadChannel=document.createElement('td');
                let buttonRead=document.createElement('button');
                buttonRead.innerText='read channel';
                tdReadChannel.appendChild(buttonRead);

                let tdBtnDelete=document.createElement('td');
                let buttonDelete=document.createElement('button');
                buttonDelete.innerText='delete';
                buttonDelete.classList.add('delete');

                tdBtnDelete.appendChild(buttonDelete);
                
                tdChannelName.innerText=channel.nameChannel;
                tr.appendChild(tdChannelName);
                tr.appendChild(tdReadChannel);
                tr.appendChild(tdBtnDelete);
                list.appendChild(tr);

                document.getElementById('nameChannel').value='';
                document.getElementById('urlChannel').value='';
            };
            
        };

    };
};