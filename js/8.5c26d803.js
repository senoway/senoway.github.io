(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{f8af:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",round:"",icon:t.drawerOpen?"keyboard_arrow_left":"keyboard_arrow_right"},on:{click:function(e){t.drawerOpen=!t.drawerOpen}}}),a("q-btn",{attrs:{flat:"",round:"",icon:"apps"},on:{click:t.onClickApps}}),a("q-toolbar-title",{staticClass:"__shyme-app-header"},[t._v("\n         \n      ")]),a("q-toolbar-title",[a("q-icon",{attrs:{name:t.urlObj.icon}}),t._v("  "+t._s(t.$t(t.urlObj.name)))],1),a("q-space"),a("q-btn",{attrs:{flat:"",round:"",icon:"email"}},[a("q-badge",{attrs:{floating:"",color:"negative"}},[t._v("2")])],1),a("q-btn",{attrs:{flat:"",round:"",icon:"person_pin"}})],1)],1),a("q-drawer",{attrs:{"show-if-above":"",width:280,breakpoint:400},model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}},[a("q-scroll-area",{staticClass:"__shyme-drawer-scroll-area"},[a("q-list",{staticClass:"rounded-borders",attrs:{padding:""}},t._l(t.apps,(function(e,r){return a("q-expansion-item",{key:r,scopedSlots:t._u([{key:"header",fn:function(){return[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:e.thum}})])],1),a("q-item-section",[t._v(t._s(t.$t(e.name)))])]},proxy:!0}],null,!0)},t._l(3,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e,attrs:{"inset-level":1,clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"arrow_right"}})],1),a("q-item-section",[t._v("\n              Dummy Item\n            ")])],1)})),1)})),1)],1),a("q-img",{staticClass:"absolute-top",staticStyle:{height:"150px"},attrs:{src:"statics/img/dummy-back.jpg"}},[a("div",{staticClass:"absolute-bottom bg-transparent"},[a("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"66px"}},[a("img",{attrs:{src:"statics/img/dummy-face.jpg"}})]),a("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.user.getName()))]),a("div",[t._v(t._s(t.user.getUsername()))])],1)])],1),a("q-page-container",[a("router-view")],1)],1)},s=[],n=(a("ac6a"),a("cadf"),a("06db"),a("456d"),a("2cf4")),i={preFetch:function(t){var e=t.store,a=(t.currentRoute,t.previousRoute,t.redirect);t.ssrContext;e.dispatch("userSession/init");var r=e.state.userSession.session;r.isEmpty()&&a(n["a"].USER.LOGIN.url)},data:function(){return{drawerOpen:!0}},methods:{onClickApps:function(){this.$router.push(n["a"].USER.TOP.url).catch((function(){}))}},computed:{apps:function(){return Object.keys(n["a"].USER).filter((function(t){var e=n["a"].USER[t].isApp;return e})).map((function(t){return n["a"].USER[t]}))},urlObj:function(){var t=this.$router.currentRoute;return Object(n["b"])(t.path)},user:function(){return this.$store.state.userSession.session}}},o=i,c=a("2877"),l=a("4d5a"),u=a("e359"),p=a("65c6"),d=a("9c40"),m=a("6ac5"),b=a("0016"),f=a("2c91"),v=a("58a8"),q=a("9404"),_=a("4983"),h=a("1c1c"),w=a("3b73"),g=a("4074"),Q=a("cb32"),k=a("66e5"),y=a("068f"),O=a("09e3"),S=a("714f"),C=a("eebe"),x=a.n(C),R=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=R.exports;x()(R,"components",{QLayout:l["a"],QHeader:u["a"],QToolbar:p["a"],QBtn:d["a"],QToolbarTitle:m["a"],QIcon:b["a"],QSpace:f["a"],QBadge:v["a"],QDrawer:q["a"],QScrollArea:_["a"],QList:h["a"],QExpansionItem:w["a"],QItemSection:g["a"],QAvatar:Q["a"],QItem:k["a"],QImg:y["a"],QPageContainer:O["a"]}),x()(R,"directives",{Ripple:S["a"]})}}]);