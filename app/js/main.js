
console.log('main is ok ');

import Channel from '../js/Channel.js';
import ChannelLocalStorage from '../js/ChannelLocalStorage.js';
import AddHandler from '../js/AddHandler.js';
import DeleteHandler from '../js/DeleteHandler.js';
import ChannelListView from '../js/ChannelListView.js';

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






