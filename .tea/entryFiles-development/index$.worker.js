if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../page/index/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../page/home/home?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../page/mine/mine?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../page/component/tabBar/tabBar?hash=ba6a91ecdd53012e82098a484c63784bf2a9afe7');
require('../../page/index/views/news/news?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}