(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(3),s=n.n(c),i=n(6),a=n(2),h="CHANGE_SEARCH_FIELD",u="REQUEST_ROBOTS_PENDING",b="REQUEST_ROBOTS_SUCCESS",d="REQUEST_ROBOTS_FAILED",l={searchField:""},j={isPending:!1,robots:[],error:""},O=n(15),p=n(16),g=(n(26),n(4)),f=n(5),v=n(8),x=n(7),m=n(1),y=function(e){var t=e.name,n=e.email,r=e.id;return Object(m.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(m.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robots"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:t}),Object(m.jsx)("p",{children:n})]})]})},E=function(e){var t=e.robots;return Object(m.jsx)("div",{children:t.map((function(e,n){return Object(m.jsx)(y,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},R=function(e){var t=e.searchChange;return Object(m.jsx)("div",{className:"pa2",children:Object(m.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},S=function(e){var t=e.children;return Object(m.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:t})},C=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(e){var r;return Object(g.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(f.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(m.jsx)("h1",{children:"Opps Something went wrong..."}):this.props.children}}]),n}(r.Component),_=(n(28),function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(m.jsx)("h1",{children:"Loading"}):Object(m.jsxs)("div",{className:"tc",children:[Object(m.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(m.jsx)(R,{searchChange:n}),Object(m.jsx)(S,{children:Object(m.jsx)(C,{children:Object(m.jsx)(E,{robots:c})})})]})}}]),n}(r.Component)),w=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:h,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:u}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){console.log(t),e({type:b,payload:t})})).catch((function(t){return e({type:d,payload:t})}))}))}}}))(_),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))},P=(n(29),Object(O.createLogger)()),N=Object(a.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case h:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case u:return Object.assign({},e,{isPending:!0});case b:return Object.assign({},e,{robots:t.payload,isPending:!1});case d:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,L=Object(a.e)(N,T(Object(a.a)(p.a,P)));s.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(i.a,{store:L,children:Object(m.jsx)(w,{})})}),document.getElementById("root")),F()}},[[30,1,2]]]);
//# sourceMappingURL=main.6a5444a2.chunk.js.map