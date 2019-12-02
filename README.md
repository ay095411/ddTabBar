钉钉小程序自定义tabbar

- 通过组件形式进行自定义tabbar

----------
### 项目要求
钉钉小程序进行实现，tabbar要求中间是一个icon 添加背景颜色，比较突出。
### 出现bug、解决bug
刚开始使用的 navigator 来进行跳转，结果每次在点击的时候都会刷新页面，在当前页面点击当前页也会出现跳转，显然是不合理的。
<br/>	
后面换成了组件的形式，与vue原理一样，进行组件切换 避免了上面的问题。

### 效果图

![](http://49.235.173.225/images/tabbar.png)

### 启动项目
将项目拷贝下来使用小程序idea启动即可


### 增加request请求

    import config from '/config/config'
    export default {
      $http(url, method, data) {
    	return new Promise(function(resolve, reject) {
      	dd.httpRequest({
    		url: config.BASE_URL+url,
    		method: method,
    		data: data,
    		success: (res) => {
      			if (res.status == 200) {
    				resolve(res);
      		} else {
    			reject(res);
      		}
    		},
    		fail: () => {
      			reject();
    		}
      	})
    	})
      }
    }
    
### 使用    
    dd.utils.$http('/login','post').then(
    (data) => {
      console.log(data)
    },
    (err) => {
      console.log('错误:'+err)
    });
