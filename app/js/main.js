
console.log('main is ok ');

import Channel from '../js/Channel.js';
import ChannelLocalStorage from '../js/ChannelLocalStorage.js';
import AddHandler from '../js/AddHandler.js';

let channel=new Channel();
let storage= new ChannelLocalStorage();
storage.listChannels();


let add=new AddHandler(channel,storage);
add.addChannel();

