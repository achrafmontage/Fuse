(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{202:function(t,a,s){},295:function(t,a,s){"use strict";var i=s(202);s.n(i).a},301:function(t,a,s){"use strict";s.r(a);s(63),s(24),s(129),s(32),s(45),s(21),s(15),s(19);var i=[{name:"Kiro Risk",city:"San Francisco, CA, USA",social:{github:"krisk",twitter:"kirorisk",linkedin:"kirollos",reddit:"kirorisk"},languages:["en","it","fr"],work:{role:"Creator",org:"Fuse.js"},links:["https://github.com/sponsors/krisk","https://www.patreon.com/krisk"]}],n={en:"English",zh:"中文",vi:"Tiếng Việt",pl:"Polski",pt:"Português",ru:"Русский",jp:"日本語",fr:"Français",de:"Deutsch",it:"Italiano",el:"Ελληνικά",es:"Español",hi:"हिंदी",fa:"فارسی",ko:"한국어",ro:"Română"},e={name:"Team",data:function(){return{team:i}},methods:{workHtml:function(t){var a=t.work,s="";return a.orgUrl?(s+='<a href="'.concat(a.orgUrl,'" target="_blank">'),a.org?s+=a.org:this.minimizeLink(a.orgUrl),s+="</a>"):a.org&&(s+=a.org),a.role&&(s=s.length>0?"".concat(a.role," @ ").concat(s):a.role),s},githubUrl:function(t,a){return a&&a.url?a.url:a&&-1!==a.indexOf("/")?"https://github.com/".concat(a.replace(/\/\*$/,"")):"https://github.com/".concat(t,"/").concat(a||"")},languageListHtml:function(t){if(!t.languages)return"";var a=globalThis.navigator,s=a?a.languages?a.languages[0]:a.userLanguage||a.language:null;return"<ul><li>"+t.languages.map((function(a,i){var e=n[a];if("en"!==a&&s&&a===s.slice(0,2)){var r="".concat(t.name," can give technical talks in your preferred language.");return'<span class="user-match" title="'.concat(r,'">').concat(e,"</span>")}return e})).join("</li><li>")+"</li></ul>"},minimizeLink:function(t){return t.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"").replace(/^mailto:/,"")}}},r=(s(295),s(3)),l=Object(r.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{attrs:{id:"team-members"}},t._l(t.team,(function(a){return s("li",{staticClass:"profile-container"},[s("div",{staticClass:"avatar"},[a.social.github?s("img",{attrs:{src:"https://github.com/"+a.social.github+".png",alt:a.name,width:"80",height:"80"}}):t._e()]),t._v(" "),s("div",{staticClass:"profile"},[s("h3",{attrs:{"data-official-title":a.title}},[t._v("\n        "+t._s(a.name)+"\n        ")]),t._v(" "),s("dl",[a.work?[t._m(0,!0),t._v(" "),s("dd",{domProps:{innerHTML:t._s(t.workHtml(a))}})]:t._e(),t._v(" "),a.city?[t._m(1,!0),t._v(" "),s("dd",[t._v("\n            "+t._s(a.city)+"\n          ")])]:t._e(),t._v(" "),a.languages?[t._m(2,!0),t._v(" "),s("dd",{staticClass:"language-list",domProps:{innerHTML:t._s(t.languageListHtml(a))}})]:t._e(),t._v(" "),a.links?[t._m(3,!0),t._v(" "),s("dd",[s("ul",t._l(a.links,(function(a){return s("li",[s("a",{attrs:{href:a,target:"_blank"}},[t._v(t._s(t.minimizeLink(a)))])])})),0)])]:t._e(),t._v(" "),s("footer",{staticClass:"social"},[a.social.github?s("a",{staticClass:"github",attrs:{href:t.githubUrl(a.social.github)}},[s("i",{staticClass:"fab fa-github"}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Github")])]):t._e(),t._v(" "),a.social.twitter?s("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/"+a.social.twitter}},[s("i",{staticClass:"fab fa-twitter"}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Twitter")])]):t._e(),t._v(" "),a.social.linkedin?s("a",{staticClass:"linkedin",attrs:{href:"https://linkedin.com/in/"+a.social.linkedin}},[s("i",{staticClass:"fab fa-linkedin"}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("LinkedIn")])]):t._e(),t._v(" "),a.social.reddit?s("a",{staticClass:"reddit",attrs:{href:"https://www.reddit.com/user/"+a.social.reddit}},[s("i",{staticClass:"fab fa-reddit"}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Reddit")])]):t._e()])],2)])])})),0)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("dt",[a("i",{staticClass:"fa fa-briefcase"}),this._v(" "),a("span",{staticClass:"sr-only"},[this._v("Work")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("dt",[a("i",{staticClass:"fa fa-map-marker"}),this._v(" "),a("span",{staticClass:"sr-only"},[this._v("City")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("dt",[a("i",{staticClass:"fa fa-globe"}),this._v(" "),a("span",{staticClass:"sr-only"},[this._v("Languages")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("dt",[a("i",{staticClass:"fa fa-link"}),this._v(" "),a("span",{staticClass:"sr-only"},[this._v("Links")])])}],!1,null,null,null);a.default=l.exports}}]);