(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8332],{3779:function(e,t,n){Promise.resolve().then(n.bind(n,2960))},2960:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(7437),i=n(2265),s=n(162),r=n(4033),l=n(4733),c=n(7361),o=n(7092),m=n(7693),d=n(3967),u=n(2650),f=n(6125),h=({children:e,locale:t="en-US",navigate:n,...i})=>{let s=e;return n&&(s=(0,a.jsx)(u.pG,{navigate:n,children:s})),(0,a.jsx)(d.bd,{locale:t,children:(0,a.jsx)(f.N3,{...i,children:s})})},x=e=>{let{children:t}=e;return(0,a.jsx)(h,{children:t})};function g(e){let{children:t}=e,n=(0,r.usePathname)(),d="/registration"===n||"/login"===n;return(0,i.useEffect)(()=>{var e;window&&(document.documentElement.lang=(null===(e=window)||void 0===e?void 0:e.localStorage.getItem("i18nextLng"))||"ru")},[]),(0,a.jsx)(x,{children:(0,a.jsx)(l.g3,{children:(0,a.jsxs)(s.E.section,{...c.XT,transition:{duration:.5,stiffness:0,ease:"backInOut"},className:"flex flex-col h-[100vh] max-h-[100vh] maxPc:h-[100dvh] maxPc:max-h-[100dvh]",children:[d||(0,a.jsx)(s.E.div,{className:"relative",initial:{top:-100},animate:{top:0},transition:{duration:.8,stiffness:0,ease:"backInOut"},children:(0,a.jsx)(m.Z,{})}),t,d||(0,a.jsx)(s.E.div,{className:"relative",initial:{bottom:-100},animate:{bottom:0},transition:{duration:.8,stiffness:0,ease:"backInOut"},children:(0,a.jsx)(o.Z,{})})]})})})}},7361:function(e,t,n){"use strict";n.d(t,{RH:function(){return s},XT:function(){return a},aF:function(){return i}});let a={initial:{opacity:0},animate:{opacity:1}},i={y:[0,-5,5,0],x:[0,2,4,0,2,-2,0]},s={y:{duration:1.5,ease:"easeInOut",repeat:1/0},x:{duration:1.5,ease:"easeInOut",repeat:1/0}}},7092:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7437),i=n(439),s=n(1396),r=n.n(s),l=n(4033),c=n(251),o=n(1176),m=n.n(o),d=()=>{let e=(0,l.usePathname)(),{t}=(0,c.$G)(),n=[{name:"lectures",imgLink:"/icons/sort/sort.svg",activeImgLink:"/icons/sort/pinkSort.svg",label:"".concat(t("Main.lectures")),to:"/lectures"},{name:"tests",imgLink:"/icons/flag/flag.svg",activeImgLink:"/icons/flag/pinkFlag.svg",label:"".concat(t("Main.tests")),to:"/tests"},{name:"rating",imgLink:"/icons/cup/cup.svg",activeImgLink:"/icons/cup/pinkCup.svg",label:"".concat(t("Main.rating")),to:"/rating"}];return(0,a.jsx)("footer",{className:m().footer,children:(0,a.jsx)("nav",{className:m().footerNav,children:n.map((t,n)=>(0,a.jsxs)(r(),{className:m().element,href:t.to,children:[(0,a.jsx)("img",{src:e===t.to?t.activeImgLink:t.imgLink,width:23,height:23,alt:t.label}),(0,a.jsx)("p",{className:"".concat(e===t.to&&m().activeElement),children:t.label})]},n))})})},u=()=>{let e=(0,i.iP)(),{width:t}=e;return(0,a.jsx)(a.Fragment,{children:null!==t&&t<1024&&(0,a.jsx)(d,{})})}},7693:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var a=n(7437),i=n(2265),s=n(439),r=n(4033),l=n(4733),c=n(2470),o=n(5271),m=n(251),d=n(2267),u=n(6691),f=n.n(u),h=n(1339),x=n(7231),g=n(1555),p=n(5968),v=n(8e3),j=n(3409),_=n(4468),b=n(9015),N=n(8793),w=n(1396),k=n.n(w),P=n(9853),I=()=>{var e,t,n,s;let c=(0,i.useRef)(null),o=(0,i.useRef)(null),u=(0,r.usePathname)(),w=(0,l.TL)(),{t:I}=(0,m.$G)(),E=[{name:"".concat(I("Rating.lectures")),to:"/lectures"},{name:"".concat(I("Rating.tests")),to:"/tests"},{name:"".concat(I("Rating.rating")),to:"/rating"}],L=()=>{null==o||o.current.addConfetti({confettiRadius:3,emojiSize:5,confettiNumber:30})};return(0,i.useEffect)(()=>{o.current=new d.Z({canvas:c.current})},[]),(0,a.jsxs)(h.R,{classNames:{item:["flex","relative","text-[20px]","transition","font-[500]","hover:text-pinkColor","data-[active=true]:text-pinkColor","data-[active=true]:font-[500]"],wrapper:["justify-center","min-w-[100vw]","pl-[40px]","pr-[40px]"]},children:[(0,a.jsx)(x.U,{children:(0,a.jsxs)(g.H,{children:[(0,a.jsx)("canvas",{className:"absolute h-[300px] w-[200px] left-[0px] rotate-[120deg] top-[30px] ",ref:c}),(0,a.jsx)(f(),{className:"z-[999999]",src:"/academy_mini_logo.svg",alt:"a",width:43,height:43,onClick:()=>{L()}})]})}),(0,a.jsxs)(x.U,{className:" flex w-[250px] gap-[32px] ",justify:"center",children:[(0,a.jsx)(p.k,{isActive:u===E[0].to,className:"flex justify-center items-center",children:(0,a.jsx)(k(),{href:E[0].to,children:E[0].name})}),(0,a.jsx)(p.k,{isActive:u===E[1].to,className:"flex justify-center items-center",children:(0,a.jsx)(k(),{href:E[1].to,children:E[1].name})}),(0,a.jsx)(p.k,{isActive:u===E[2].to,className:"flex justify-center items-center",children:(0,a.jsx)(k(),{href:E[2].to,children:E[2].name})})]}),(0,a.jsx)(x.U,{as:"div",justify:"end",children:(0,a.jsxs)(v.F,{placement:"bottom-end",children:[(0,a.jsx)(j.S,{children:(0,a.jsxs)("div",{className:"flex flex-row cursor-pointer min-w-[60px] justify-between",children:[(0,a.jsx)("div",{className:"flex justify-center items-center mr-[10px]",children:(0,a.jsx)("span",{children:(null===(t=window)||void 0===t?void 0:null===(e=t.sessionStorage)||void 0===e?void 0:e.getItem("name"))||""})}),(0,a.jsx)(_.h,{as:"button",className:"transition-transform",name:(null===(s=window)||void 0===s?void 0:null===(n=s.sessionStorage)||void 0===n?void 0:n.getItem("name"))||"",size:"sm",src:""})]})}),(0,a.jsxs)(b.a,{"aria-label":"Profile Actions",variant:"flat",children:[(0,a.jsx)(N.W,{color:"danger",children:(0,a.jsx)(k(),{className:"flex w-full h-full",href:"/profile",children:I("Main.profile")})},"help_and_feedback"),(0,a.jsx)(N.W,{color:"danger",children:(0,a.jsx)(k(),{className:"flex w-full h-full",href:"/login",onClick:()=>{window.localStorage.removeItem("academy-bitrix-token"),window.localStorage.removeItem("bearer"),window.sessionStorage.clear(),w((0,P.g)())},children:I("Main.logout")})},"logout")]})]})})]})},E=n(3198);let L=e=>e.profile.name,S=e=>e.profile.lastname;var y=n(3095);let F=e=>e.analytics.rating;var M=n(3378),H=n(2140),C=n.n(H),R=()=>{let[e,t]=(0,s.Xs)("reting",0),[n,l]=(0,i.useState)({color:"#171717"}),{t:c}=(0,m.$G)(),o=(0,r.useRouter)(),d=(0,r.usePathname)(),u=(0,E.v9)(L),f=(0,E.v9)(S),h=(0,E.v9)(F);(0,i.useEffect)(()=>{h&&t(h),h&&l((0,M.mu)(h))},[h]);let x={"/profile":"".concat(c("Main.profile")),"/lectures":"".concat(c("Main.lectures")),"/tests":"".concat(c("Main.tests")),"/rating":"".concat(c("Main.rating"))};return(0,a.jsxs)("header",{className:C().header,children:[(0,a.jsx)("div",{className:C().profileIcon,onClick:()=>o.push("/profile"),children:(0,a.jsxs)("p",{className:C().initials,children:[u[0],f[0]]})}),(0,a.jsx)("p",{className:C().tabName,children:x[d]}),(0,a.jsxs)("div",{className:C().ratingWrapper,children:[(0,y.xy)({color:"".concat(n)}),(0,a.jsxs)("p",{className:C().rating,children:[e,"%"]})]})]})},O=n(2708),Z=n.n(O),G=()=>{let e=(0,r.usePathname)(),{t}=(0,m.$G)(),n={"/profile":"".concat(t("Main.profile")),"/lectures":"".concat(t("Main.lectures")),"/tests":"".concat(t("Main.tests")),"/rating":"".concat(t("Main.rating"))};return(0,a.jsxs)("header",{className:Z().header,children:[(0,a.jsx)(k(),{href:"/lectures",children:(0,a.jsx)(f(),{src:"/icons/arrow.svg",alt:"<",width:"24",height:"24"})}),(0,a.jsx)("h2",{className:Z().tabName,children:n[e]})]})},W=()=>{let e=(0,s.iP)(),{width:t}=e,n=(0,r.usePathname)(),m=(0,l.TL)(),d=/^[a-z]{2}-[A-Z]{2}$/g;(0,i.useEffect)(()=>{(0,c.l)(m)},[]),(0,i.useEffect)(()=>{let e=localStorage.getItem("i18nextLng");e||(o.a.changeLanguage("ru"),localStorage.setItem("i18nextLng","ru")),(null==e?void 0:e.match(d))&&(o.a.changeLanguage(e.slice(0,2)),localStorage.setItem("i18nextLng",e.slice(0,2)))},[]);let u=null===t;return(0,a.jsxs)(a.Fragment,{children:[!u&&t>=1024&&(0,a.jsx)(I,{}),!u&&t<1024&&"/profile"===n&&(0,a.jsx)(G,{}),!u&&t<1024&&"/profile"!==n&&(0,a.jsx)(R,{})]})}},1176:function(e){e.exports={footer:"mobileFooter_footer__7kI9N",footerNav:"mobileFooter_footerNav__PXFKF",element:"mobileFooter_element__VJlzZ",activeElement:"mobileFooter_activeElement__BwEq3"}},2140:function(e){e.exports={header:"mobilePageHeader_header__ssSEb",profileIcon:"mobilePageHeader_profileIcon__ZBQjd",initials:"mobilePageHeader_initials__fDKmO",ratingWrapper:"mobilePageHeader_ratingWrapper__seeLN",rating:"mobilePageHeader_rating__YS6iK",tabName:"mobilePageHeader_tabName__GKF4d"}},2708:function(e){e.exports={header:"mobileProfileHeader_header__a8kuS",tabName:"mobileProfileHeader_tabName__FJgFp",hidden:"mobileProfileHeader_hidden__TmeVW"}}},function(e){e.O(0,[4330,3468,439,3071,2765,7428,878,2714,6691,9461,9306,4733,5271,6809,2971,2472,1744],function(){return e(e.s=3779)}),_N_E=e.O()}]);