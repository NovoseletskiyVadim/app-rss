
// Describes view list channel

export default class ChannelListView {

    constructor(arrFromLocalStorage){

        this.arrFromLocalStorage=arrFromLocalStorage;
    };


    viewChannelList(){
        
        for(let i=0; i<this.arrFromLocalStorage.length;i++){
            
            let list=document.getElementById('list');
            let tr=document.createElement('tr');
            tr.setAttribute('id',i);

            let tdChannelName=document.createElement('td');
                
            let tdReadChannel=document.createElement('td');
            let buttonRead=document.createElement('button');
            buttonRead.innerText='read channel';
            buttonRead.classList.add('readNews');
            tdReadChannel.appendChild(buttonRead);

            let tdBtnDelete=document.createElement('td');
            let buttonDelete=document.createElement('button');
            buttonDelete.innerText='delete';
            buttonDelete.classList.add('delete');
            tdBtnDelete.appendChild(buttonDelete);
            
            tdChannelName.innerText=this.arrFromLocalStorage[i].nameChannel;
            tr.appendChild(tdChannelName);
            tr.appendChild(tdChannelName);
            tr.appendChild(tdReadChannel);
            tr.appendChild(tdBtnDelete);
            list.appendChild(tr);

        };

    };

};