(this["webpackJsonpreddit-media"]=this["webpackJsonpreddit-media"]||[]).push([[0],{34:function(t,e,n){t.exports={Home:"Home_Home__1QMo7",HomeButton:"Home_HomeButton__16oiD",noMedia:"Home_noMedia__15nsW"}},42:function(t,e,n){t.exports={Drawer:"Drawer_Drawer__OgWpa",close:"Drawer_close__3oRXg",active:"Drawer_active__cRoBs"}},43:function(t,e,n){t.exports={MenuToggle:"MenuToggle_MenuToggle__3Ed8g",open:"MenuToggle_open__2g7CF"}},60:function(t,e,n){t.exports={Layout:"Layout_Layout__1sDQK"}},61:function(t,e,n){t.exports={Backdrop:"Backdrop_Backdrop__2WCUm"}},82:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),i=(n(82),n(15)),s=n(16),l=n(18),d=n(17),u=n(60),j=n.n(u),b=n(27),h=n(61),f=n.n(h),p=n(2),O=function(t){return Object(p.jsx)("div",{className:f.a.Backdrop,onClick:t.onClick})},g=n(42),m=n.n(g),x=[{to:"/",label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",exact:!0},{to:"/favorite",label:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",exact:!1}],v=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).clickHandler=function(){t.props.onClose()},t}return Object(s.a)(n,[{key:"renderLinks",value:function(){var t=this;return x.map((function(e,n){return Object(p.jsx)("li",{children:Object(p.jsx)(b.b,{to:e.to,exact:e.exact,activeClassName:m.a.active,onClick:t.clickHandler,component:t.component,children:e.label})},n)}))}},{key:"render",value:function(){var t=[m.a.Drawer];return this.props.isOpen||t.push(m.a.close),Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("nav",{className:t.join(" "),children:Object(p.jsx)("ul",{children:this.renderLinks()})}),this.props.isOpen?Object(p.jsx)(O,{onClick:this.props.onClose}):null]})}}]),n}(a.Component),k=n(43),_=n.n(k),y=n(62),S=n(50),w=function(t){var e={icon:t.isOpen?S.b:S.a,classes:t.isOpen?"".concat(_.a.MenuToggle," ").concat(_.a.open):_.a.MenuToggle};return Object(p.jsx)("i",{onClick:t.onToggle,children:Object(p.jsx)(y.a,{icon:e.icon,className:e.classes,size:"sm"})})},C=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={menu:!1},t.toggleMenuHandler=function(){t.setState({menu:!t.state.menu})},t.menuCloseHandler=function(){t.setState({menu:!1})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:j.a.Layout,children:[Object(p.jsx)(v,{isOpen:this.state.menu,onClose:this.menuCloseHandler}),Object(p.jsx)(w,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),this.props.children]})}}]),n}(a.Component),H=n(7),N=n(34),M=n.n(N),B=n(39),T=n(113),D=n(120),L=n(63),F=n(5),I=n(125),P=n(115),J=n(116),W=n(117),A=n(118),z=n(124),E=n(119),Q=n(44),R=n(64),K=n.n(R),U=n(65),X=n.n(U),q=Object(T.a)((function(t){return{root:{maxWidth:345,margin:15},media:{width:400,height:400},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),G=function(t){var e=q(),n=r.a.useState(!1),a=Object(B.a)(n,2),o=a[0],c=a[1];return Object(p.jsxs)(I.a,{className:e.root,children:[Object(p.jsx)(P.a,{subheader:t.data.data.subreddit_name_prefixed}),Object(p.jsx)(J.a,{component:!1===t.data.data.is_video?"img":"video",className:e.media,image:!1===t.data.data.is_video?t.data.data.url:"",src:!1!==t.data.data.is_video?t.data.data.media.reddit_video.fallback_url:"",title:"Paella dish",autoPlay:!0}),Object(p.jsx)(W.a,{children:Object(p.jsxs)(Q.a,{variant:"body2",color:"textSecondary",component:"p",children:["posted by ",t.data.data.author]})}),Object(p.jsxs)(A.a,{disableSpacing:!0,children:[Object(p.jsx)(E.a,{"aria-label":"add to favorites",onClick:function(){localStorage.setItem("posts",JSON.stringify([{id:t.data.data.id},{url:t.data.data.url},{title:t.data.data.title}]))},children:Object(p.jsx)(K.a,{})}),Object(p.jsx)(E.a,{className:Object(F.a)(e.expand,Object(L.a)({},e.expandOpen,o)),onClick:function(){c(!o)},"aria-expanded":o,"aria-label":"show more",children:Object(p.jsx)(X.a,{})})]}),Object(p.jsx)(z.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(p.jsx)(W.a,{children:Object(p.jsx)(Q.a,{paragraph:!0,children:t.data.data.title})})})]})},V=Object(T.a)((function(t){return{root:{boxSizing:"border-box",width:"90%",margin:"0 auto"},gridItem:{boxSizing:"border-box",width:400,height:400,margin:10,padding:0},icon:{color:"rgba(255, 255, 255, 0.54)"},a:{color:"#fff",textDecoration:"none",fontWeight:"bold",letterSpacing:"0.05rem"}}})),Y=function(t){var e=t.content,n=(t.sorting,t.changeSort,r.a.useState(2)),a=Object(B.a)(n,2),o=a[0],c=(a[1],V());return e?Object(p.jsx)(D.a,{container:!0,justify:"center",spacing:10,className:c.root,children:Object(p.jsx)(D.a,{item:!0,xs:12,children:Object(p.jsx)(D.a,{container:!0,justify:"center",spacing:o,children:e.map((function(t){if(t.data.preview)return Object(p.jsx)(G,{data:t,content:e},t.data.id)}))})})}):Object(p.jsx)("div",{})},Z=n(121),$=n(122),tt=Object(T.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}})),et=function(t){var e=tt();return Object(p.jsx)("div",{className:e.root,children:Object(p.jsxs)(Z.a,{onClick:t.onClick,variant:"contained",color:"primary",children:["\u0434\u0430\u043b\u044c\u0448\u0435 ",Object(p.jsx)($.a,{})]})})},nt=n(123),at=Object(T.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}})),rt=function(t){var e=at();return Object(p.jsx)("div",{className:e.root,children:Object(p.jsxs)(Z.a,{onClick:t.onClick,variant:"contained",color:"primary",children:[Object(p.jsx)(nt.a,{}),"  \u041d\u0430\u0437\u0430\u0434"]})})},ot=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={currentSubreddit:"cats",sort:"top",sorts:["hot","new","top","controversial","rising"],after:null,before:null,loading:!0,page:1,posts:[],favorite:[]},a.clickButtonNextHandler=function(){fetch(a.url+a.state.currentSubreddit+"/"+a.state.sort+".json?count="+25*a.state.page+"&after="+a.state.after).then((function(t){return t.json()})).then((function(t){console.log(t),a.setState({posts:t.data.children,after:t.data.after,before:t.data.before,page:a.state.page+1}),window.scrollTo(0,0)}))},a.clickButtonPrevHandler=function(){fetch(a.url+a.state.currentSubreddit+"/"+a.state.sort+".json?count="+(25*(a.state.page-1)-1)+"&before="+a.state.after).then((function(t){return t.json()})).then((function(t){console.log(t),a.setState({posts:t.data.children,after:t.data.after,before:t.data.before,page:a.state.page-1}),window.scrollTo(0,0)}))},a.url="http://www.reddit.com/r/",a.sorts=["hot","new","top","controversial","rising"],a.subredditArray=["cats","dogs"],a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.renderMedia(this.state.currentSubreddit)}},{key:"renderMedia",value:function(t){var e=this;this.setState({posts:[],currentSubreddit:t,page:1}),fetch(this.url+t+"/"+this.state.sort+".json").then((function(t){return t.json()})).then((function(t){e.setState({posts:t.data.children,after:t.data.after,before:t.data.before}),window.scroll(0,0)}))}},{key:"addToFavorite",value:function(){localStorage.setItem("post",JSON.stringify(this.state.posts.data.data.id))}},{key:"render",value:function(){var t;if(this.state.posts.length>0){var e,n=Object(p.jsx)(et,{onClick:this.clickButtonNextHandler}),a=Object(p.jsx)(rt,{onClick:this.clickButtonPrevHandler});null===this.state.before&&null!==this.state.after&&(e=Object(p.jsxs)("div",{className:M.a.HomeButton,children:[a," "]})),null===this.state.before&&null!==this.state.after&&(e=Object(p.jsxs)("div",{className:M.a.HomeButton,children:[n," "]})),null!==this.state.after&&null!==this.state.before&&(e=Object(p.jsxs)("div",{className:M.a.HomeButton,children:[a,n]})),t=Object(p.jsxs)("div",{children:[Object(p.jsx)(Y,{content:this.state.posts,changeSort:this.changeSort,sorting:this.state.sorts}),e]})}else t=Object(p.jsx)("div",{className:M.a.noMedia,children:"\u041a\u043e\u0442\u0438\u043a\u043e\u0432 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e....\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."});return Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("main",{children:t})})}}]),n}(a.Component),ct=n(51),it=n(52),st=function(t){t.key;var e=t.src;return Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:e,alt:"",width:"400"})})},lt=JSON.parse(localStorage.getItem("posts"));console.log(lt);var dt,ut,jt=function(t){var e=t.files;return Object(p.jsx)("div",{children:e.map((function(t){if(localStorage.getItem("posts"))return Object(p.jsx)(st,{src:t.data.url},t.data.id)}))})},bt=it.a.h1(dt||(dt=Object(ct.a)(["\nmargin:0;\nbackground-color: transparent;\n"]))),ht=it.a.div(ut||(ut=Object(ct.a)(["\ndisplay: flex;\njustify-content: center;\nwidth:100%;\nheight:100vh;\nalign-items: center;\nflex-direction:column;\n"]))),ft=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={currentSubreddit:"cats",sort:"top",posts:[]},a.renderMedia=function(){fetch(a.url+a.state.currentSubreddit+".json").then((function(t){return t.json()})).then((function(t){a.setState({posts:t.data.children})}))},a.url="http://www.reddit.com/r/",a.sorts=["hot","new","top","controversial","rising"],a.subredditArray=["cats","dogs"],a}return Object(s.a)(n,[{key:"render",value:function(){var t=Object(p.jsxs)("div",{children:[" ",Object(p.jsx)(jt,{files:this.state.posts})," "]});return Object(p.jsxs)(ht,{children:[Object(p.jsx)(bt,{children:"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u044b"}),t]})}}]),n}(a.Component),pt={},Ot=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsx)(C,{children:Object(p.jsxs)(H.c,{children:[Object(p.jsx)(H.a,{path:"/",exact:!0,component:ot,arr:pt}),Object(p.jsx)(H.a,{path:"/favorite",component:ft,arr:pt})]})})}}]),n}(a.Component),gt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),o(t),c(t)}))},mt=Object(p.jsx)(b.a,{children:Object(p.jsx)(Ot,{})});c.a.render(Object(p.jsx)(r.a.StrictMode,{children:mt}),document.getElementById("root")),gt()}},[[91,1,2]]]);
//# sourceMappingURL=main.f8f0d375.chunk.js.map