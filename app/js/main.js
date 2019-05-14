
console.log('main is ok ');

import Channel from './Channel.js';
import ChannelLocalStorage from './ChannelLocalStorage.js';
import AddHandler from './AddHandler.js';
import DeleteHandler from './DeleteHandler.js';
import ChannelListView from './ChannelListView.js';
import ServerRequestsNews from './ServerRequestsNews.js';
import ReadNewsHandler from './ReadNewsHandler.js';

let channel=new Channel();
let storage= new ChannelLocalStorage();

storage.listChannels();
let arr=storage.listChannels();

let view =new ChannelListView(arr);
view.viewChannelList();

let add=new AddHandler(channel,storage);
add.addChannel();

let deleteChannel = new DeleteHandler(storage,view);
deleteChannel.deleteChannel();

let serverRequests=new ServerRequestsNews();
console.dir(serverRequests);

let readNews =new ReadNewsHandler(storage, serverRequests);
readNews.readChannelNews();






