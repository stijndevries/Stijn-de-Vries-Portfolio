!function(t,e,n){var a=t.screen,r=encodeURIComponent,o=Math.max,i=t.performance,d=i&&i.timing,c=function(t){return isNaN(t)||t==1/0||t<0?void 0:t},g=function(t){return Math.random().toString(36).slice(-t)},m=function(t){return Math.ceil(Math.random()*(t-1))+1};function s(){var i=[g(m(4))+"="+g(m(6)),"ga="+t.ga_tid,"dt="+r(e.title),"de="+r(e.characterSet||e.charset),"dr="+r(e.referrer),"ul="+(n.language||n.browserLanguage||n.userLanguage),"sd="+a.colorDepth+"-bit","sr="+a.width+"x"+a.height,"vp="+o(e.documentElement.clientWidth,t.innerWidth||0)+"x"+o(e.documentElement.clientHeight,t.innerHeight||0),"plt="+c(d.loadEventStart-d.navigationStart||0),"dns="+c(d.domainLookupEnd-d.domainLookupStart||0),"pdt="+c(d.responseEnd-d.responseStart||0),"rrt="+c(d.redirectEnd-d.redirectStart||0),"tcp="+c(d.connectEnd-d.connectStart||0),"srt="+c(d.responseStart-d.requestStart||0),"dit="+c(d.domInteractive-d.domLoading||0),"clt="+c(d.domContentLoadedEventStart-d.navigationStart||0),"z="+Date.now()];t.__ga_img=new Image,t.__ga_img.src=t.ga_api+"?"+i.join("&")}t.cfga=s,"complete"===e.readyState?s():t.addEventListener("load",s)}(window,document,navigator);
