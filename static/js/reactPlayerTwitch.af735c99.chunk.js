(self.webpackChunkbookmyshow=self.webpackChunkbookmyshow||[]).push([[42],{267:(e,t,r)=>{var s,a=Object.create,l=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,r,s)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let a of o(t))p.call(e,a)||a===r||l(e,a,{get:()=>t[a],enumerable:!(s=n(t,a))||s.enumerable});return e},y=(e,t,r)=>(((e,t,r)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>P}),e.exports=(s=d,h(l({},"__esModule",{value:!0}),s));var u=((e,t,r)=>(r=null!=e?a(i(e)):{},h(!t&&e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)))(r(43)),c=r(206),m=r(520);class P extends u.Component{constructor(){super(...arguments),y(this,"callPlayer",c.callPlayer),y(this,"playerID",this.props.config.playerId||`twitch-player-${(0,c.randomString)()}`),y(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),y(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:r,onError:s,config:a,controls:l}=this.props,n=m.MATCH_URL_TWITCH_CHANNEL.test(e),o=n?e.match(m.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(m.MATCH_URL_TWITCH_VIDEO)[1];t?n?this.player.setChannel(o):this.player.setVideo("v"+o):(0,c.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,{video:n?"":o,channel:n?o:"",height:"100%",width:"100%",playsinline:r,autoplay:this.props.playing,muted:this.props.muted,controls:!!n||l,time:(0,c.parseStartTime)(e),...a.options});const{READY:s,PLAYING:i,PAUSE:p,ENDED:h,ONLINE:y,OFFLINE:d,SEEK:u}=t.Player;this.player.addEventListener(s,this.props.onReady),this.player.addEventListener(i,this.props.onPlay),this.player.addEventListener(p,this.props.onPause),this.player.addEventListener(h,this.props.onEnded),this.player.addEventListener(u,this.props.onSeek),this.player.addEventListener(y,this.props.onLoaded),this.player.addEventListener(d,this.props.onLoaded)}),s)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return u.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}y(P,"displayName","Twitch"),y(P,"canPlay",m.canPlay.twitch),y(P,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.af735c99.chunk.js.map