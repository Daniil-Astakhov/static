(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8609],{7866:function(e,t,s){Promise.resolve().then(s.bind(s,1725))},1725:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ez}});var i=s(7437),a=s(4033),l=s(251),r=s(2265),n=s(439),o=s(9965),c=s(3378),u=s(9958),d=s(4318),p=s(1609),x=s(6999),_=s(1718),h=s(9571),b=s(162),m=s(3198),v=s(7601),f=s(5677),g=s(6041),j=s(4733);let w=e=>e.validationQuiz.validArr;var q=s(8229);let N=e=>e.education.quizResults;var z=s(7361),k=s(9080),y=s.n(k),M=e=>{var t;let[s,a]=(0,r.useState)([]),o=(0,j.TL)(),{t:c}=(0,l.$G)(),{onClose:u}=e,d=(0,m.v9)(N),[p,x]=(0,n.Xs)("materialUuid","");(0,r.useEffect)(()=>{if(null==d?void 0:d.questions){var e;let t=null==d?void 0:null===(e=d.questions)||void 0===e?void 0:e.filter(e=>"correct"===e.result);a(t.length)}},[d]);let _=(0,m.v9)(w);return(0,r.useEffect)(()=>{_.length&&o((0,q.x)({quiz_id:p,questions:[..._]}))},[_]),(0,i.jsxs)(b.E.div,{...z.XT,transition:{duration:.5,stiffness:0,ease:"backInOut"},className:y().wrapper,children:[(0,i.jsx)("h3",{className:y().congratulations,children:c("Results.Main.congratulation")}),(0,i.jsxs)("div",{className:y().progressWrapper,children:[(0,i.jsx)(v.Z,{"aria-label":"loading",classNames:{svg:y().svg,indicator:"w-[170px] h-[170px] bg-emerald-400 ".concat(d.answered_percentage>=d.pass_percent?"text-[#4ADE80]":"text-[#F31260]"),track:y().track,value:y().value},value:d.answered_percentage,strokeWidth:5,showValueLabel:!0}),(0,i.jsxs)("div",{className:y().percentWrapper,children:[(0,i.jsxs)("p",{className:y().result,children:[c("Results.Main.result"),":"]}),(0,i.jsxs)("p",{className:y().corrects,children:[c("Results.Main.correct")," ",s,"/",null==d?void 0:null===(t=d.questions)||void 0===t?void 0:t.length]}),(0,i.jsx)("p",{className:y().passed,children:c(d.answered_percentage>=d.pass_percent?"Results.Main.passed":"Results.Main.failed")})]})]}),(0,i.jsxs)("div",{className:y().btnsWrapper,children:[(0,i.jsx)(f.A,{className:"text-[#71717A] w-[fit-content] h-[34px] text-base bg-none hover:bg-[#fff0] hover:text-[#52525B] active:text-[#52525B] disabled:text-disabledColor ",variant:"light",type:"button",onClick:()=>o(g.$.setQuizLayoutAsResults()),children:c("Results.Main.answers")}),(0,i.jsx)(f.A,{className:"text-white w-[fit-content] h-[34px] text-base  bg-black border-2 border-black  hover:border-pinkColor border-solid  hover:bg-pinkColor transition",variant:"bordered",onClick:()=>{u(),o(g.$.resetQuizLayout())},children:c("Test.Main.finish")})]})]})},R=s(3249),E=s.n(R),C=s(3310),T=s(1507),S=s(1213),W=s(3328),A=s(4156),D=e=>{let{option:t}=e,{text:s}=t;return(0,i.jsx)(A.K,{value:"".concat(t.id),children:s},t.id)},L=s(3095),X=s(9475),I=e=>{let{option:t}=e,{text:s}=t;return(0,i.jsx)(X.J,{value:"".concat(t.id),children:s},t.id)},P=e=>{let{option:t}=e,{text:s}=t;return(0,i.jsx)(X.J,{value:"".concat(t.id),children:s},t.id)},Q=s(5942),F=s.n(Q),O=e=>{var t;let{question:s,index:a}=e,{question_title:l,result:r,options:n,answers:o,choices:c,type:u}=s,d={correct:(0,L.sC)(),partly_correct:(0,L.Zi)(),incorrect:(0,L.o)()};return(0,i.jsxs)("div",{className:F().question,children:[(0,i.jsx)("div",{className:"flex justify-center mb-[20px]",children:d[r]},E()()),(0,i.jsxs)("div",{className:F().titleWrapper,children:[(0,i.jsx)("p",{className:F().titleNumber,children:"".concat(a+1,")")}),(0,i.jsx)("p",{className:F().title,children:l})]}),"Single"===u&&(0,i.jsx)(S.X,{color:"default",isDisabled:!0,defaultValue:"".concat(null===(t=c[0])||void 0===t?void 0:t.id),children:o.map(e=>(0,i.jsx)(P,{option:e},E()()))},E()()),"Multiple"===u&&(0,i.jsx)(W.X,{color:"default",isDisabled:!0,defaultValue:c.map(e=>"".concat(e.id)),children:o.map(e=>(0,i.jsx)(D,{option:e},E()()))},E()()),"Select"===u&&(0,i.jsx)(i.Fragment,{children:n.map((e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{className:F().optionHeading,children:null==o?void 0:o[t].text},E()()),(0,i.jsx)(S.X,{color:"default",isDisabled:!0,defaultValue:"".concat(e.id),children:n.map(e=>(0,i.jsx)(I,{option:e},E()()))},E()())]}))})]},E()())},B=()=>{var e,t;let[s,a]=(0,r.useState)([]),[o,u]=(0,r.useState)("yellow"),d=(0,j.TL)(),{t:p}=(0,l.$G)(),x=(0,m.v9)(N),[_,h]=(0,n.Xs)("materialUuid","");(0,r.useEffect)(()=>{if(null==x?void 0:x.questions){var e;let t=null==x?void 0:null===(e=x.questions)||void 0===e?void 0:e.filter(e=>"correct"===e.result);a(t.length)}},[x]);let v=()=>{d(g.$.resetQuizLayout()),d(g.$.resetQuizAnswersQuestions()),d(g.$.resetFetchCorrects()),d(g.$.resetQuizResults())};return(0,r.useEffect)(()=>{x.length&&u((0,c.mu)(x.answered_percentage))},[x]),(0,i.jsxs)(b.E.div,{...z.XT,transition:{duration:.5,stiffness:0,ease:"backInOut"},children:[(0,i.jsx)("h2",{className:F().yourResult,children:p("Results.Main.result")}),(0,i.jsxs)("div",{className:F().wrapper,children:[(0,i.jsx)(C.w,{classNames:{base:"w-full h-[300px] minPc:sticky top-[105px]",body:F().resultWrapper},shadow:"none",radius:"none",children:(0,i.jsx)(T.G,{children:(0,i.jsx)("div",{className:F().wrapper,children:(0,i.jsxs)("div",{className:F().resultWrapper,children:[(0,i.jsxs)("div",{className:F().result,children:[(0,i.jsxs)("h3",{className:"".concat(F().percent," ").concat(F()[o]),children:[x.answered_percentage,"%"]}),(0,i.jsxs)("p",{className:F().corrects,children:[p("Results.Main.correct")," ",s,"/",null==x?void 0:null===(e=x.questions)||void 0===e?void 0:e.length]}),(0,i.jsx)("p",{className:F().passed,children:x.answered_percentage>=x.pass_percent?"".concat(p("Results.Main.passed")):"".concat(p("Results.Main.failed"))})]}),(0,i.jsx)(f.A,{className:"text-white w-[130px] h-[34px] text-base  bg-black border-2 border-black  hover:border-pinkColor border-solid  hover:bg-pinkColor transition",variant:"bordered",onClick:()=>v(),children:p("Results.Main.again")})]})})})},"result"),(0,i.jsx)(C.w,{classNames:{base:"w-full",body:F().questions},shadow:"none",radius:"none",children:(0,i.jsx)(T.G,{children:null==x?void 0:null===(t=x.questions)||void 0===t?void 0:t.map((e,t)=>(0,i.jsx)(O,{index:t,question:e},E()()))})},"question")]})]})},K=s(4480),G=s(9945),V=s(5607),$=s.n(V),H=e=>{var t;let[s,a]=(0,r.useState)([]),{questionToIterate:n,setQuestionNumber:o,questionNumber:c,quizData:u}=e,{translation:{questions:d}}=u,p=(0,m.v9)(w),x=(0,j.TL)(),{t:_}=(0,l.$G)(),h=async()=>{p&&s.length&&await x(G.KN.setValidArrStep([...p,{question_id:n.id,choices:s.map(e=>({id:e}))}])),c!==(null==d?void 0:d.length)-1&&o(e=>e+=1),c===(null==d?void 0:d.length)-1&&await x(g.$.setQuizLayoutAsDiagram())},v="ar"===u.translation.lang;return(0,i.jsx)("form",{className:$().form,children:(0,i.jsxs)("div",{className:$().groupWrapper,children:[(0,i.jsxs)(b.E.div,{...z.XT,transition:{duration:.5,stiffness:0,ease:"backInOut"},className:"flex flex-row maxPc:flex-col w-full",children:[(0,i.jsx)(b.E.div,{...z.XT,transition:{duration:.5,stiffness:0,ease:"backInOut"},className:"maxPc:max-w-[100%] max-w-[50%] min-w-[50%] flex justify-center items-center minPc:pr-[10px]",children:(0,i.jsx)("p",{className:"".concat($().title," ").concat(v&&$().titleArabic),children:null==n?void 0:n.title})}),(0,i.jsx)(W.X,{value:s,onValueChange:a,className:$().group,children:null==n?void 0:null===(t=n.answers)||void 0===t?void 0:t.map(e=>(0,i.jsx)(A.K,{color:"default",classNames:{base:(0,K.cn)("inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between","flex-row max-w-[100%] justify-start cursor-pointer rounded-lg gap-4 min-h-[50px]  border-2 border-transparent shadow-[0px_0px_1px_0px_rgba(0,0,0,0.20),_0px_2px_30px_0px_rgba(0,_0,_0,_0.06),_0px_0px_15px_0px_rgba(0,_0,_0,_0.03)]","data-[selected=true]:border-[#F31260]"),label:"text-[13px] minPc:text-[16px]"},className:"".concat($().choice," ").concat(v&&$().choiceArabic),value:e.id,children:e.text},e.id))})]}),(0,i.jsx)("div",{className:$().buttonWrapper,children:(0,i.jsx)(f.A,{className:"text-white w-[fit-content] h-[34px] text-base  bg-black border-2 border-black  hover:border-pinkColor border-solid  hover:bg-pinkColor transition ",variant:"bordered",isLoading:0===s.length,type:"submit",spinner:(0,i.jsx)("span",{className:"hidden"}),onClick:h,children:_(s.length?c+1===(null==d?void 0:d.length)?"Test.Main.finish":"Test.Main.next":"Test.Main.choose")})})]})})},U=s(16),Z=s(6802),J=e=>{var t;let{styles:s,questionToIterate:a,isArabicLanguage:n,questionNumber:o,setQuestionNumber:c,questions:u,options:d}=e,[p,x]=(0,r.useState)("0"),_=(0,j.TL)(),h=(0,m.v9)(w),[v,q]=(0,r.useState)([]),{t:N}=(0,l.$G)(),[k,y]=(0,r.useState)(!1),[M,R]=(0,r.useState)();(0,r.useEffect)(()=>{q({question_id:a.id,choices:a.answers.map(()=>({id:0,belongsTo:0}))}),R(a.answers.map(()=>({flag:null})))},[]),(0,r.useEffect)(()=>{null==M||M.forEach(e=>{e.flag?y(!0):y(!1)})},[v]);let E=async()=>{h&&v&&await _(G.KN.setValidArrStep([...h,v])),o!==(null==u?void 0:u.length)-1&&c(e=>e+=1),o===(null==u?void 0:u.length)-1&&_(g.$.setQuizLayoutAsDiagram())};return(0,i.jsxs)("div",{className:s.groupWrapper,children:[(0,i.jsxs)(b.E.div,{...z.XT,transition:{duration:.5,stiffness:0,ease:"backInOut"},className:"flex flex-row maxPc:flex-col w-full",children:[(0,i.jsx)(b.E.div,{...z.XT,transition:{duration:.5,stiffness:0,ease:"backInOut"},className:"maxPc:max-w-[100%] max-w-[50%] min-w-[50%] flex justify-start items-start minPc:pr-[10px]",children:(0,i.jsx)("p",{className:"".concat(s.title," ").concat(n&&s.titleArabic),children:null==a?void 0:a.title})}),(0,i.jsx)("div",{className:"minPc:w-[50%]",children:(0,i.jsx)(U.n,{className:s.questions,selectedKey:p,onSelectionChange:x,children:null==a?void 0:null===(t=a.answers)||void 0===t?void 0:t.map((e,t)=>{var l;return(0,i.jsxs)(Z.r,{title:t+1,children:[(0,i.jsx)("p",{className:"".concat(s.optionTitle," ").concat(n&&s.arabicOptionTitle),children:e.text}),(0,i.jsxs)(S.X,{defaultValue:null==M?void 0:null===(l=M[t])||void 0===l?void 0:l.flag,onValueChange:e=>{q(s=>{var i;let l=[...s.choices];return l[t]={id:e.split("||")[0],belongsTo:null==a?void 0:null===(i=a.options)||void 0===i?void 0:i[t].content_id},{question_id:a.id,choices:l}}),R(s=>{let i=[...s];return i[t]={flag:e},i})},className:s.group,children:[null==d?void 0:d.map(e=>(0,i.jsx)(X.J,{color:"default",classNames:{base:(0,K.cn)("inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between","flex-row max-w-[100%] justify-start cursor-pointer rounded-lg gap-4 min-h-[50px]  border-2 border-transparent shadow-[0px_0px_1px_0px_rgba(0,0,0,0.20),_0px_2px_30px_0px_rgba(0,_0,_0,_0.06),_0px_0px_15px_0px_rgba(0,_0,_0,_0.03)]","data-[selected=true]:border-[#F31260]"),label:"text-[13px] minPc:text-[16px]"},className:"".concat(s.choice," ").concat(n&&s.choiceArabic),value:e.value,children:e.label},"".concat(e.value,"-").concat(t))),(0,i.jsx)("div",{className:"w-full flex justify-end",children:(0,i.jsx)(f.A,{isLoading:p==="".concat((null==a?void 0:a.answers.length)-1),variant:"light",spinner:(0,i.jsx)("span",{className:"hidden"}),onClick:()=>x(e=>"".concat(+e+1)),children:"Дальше"})})]})]},t)})})})]}),(0,i.jsx)("div",{className:s.buttonWrapper,children:(0,i.jsx)(f.A,{className:"text-white w-[fit-content] h-[34px] text-base  bg-black border-2 border-black  hover:border-pinkColor border-solid  hover:bg-pinkColor transition",variant:"bordered",isLoading:!k,type:"submit",spinner:(0,i.jsx)("span",{className:"hidden"}),onClick:E,children:N(k?o+1===(null==u?void 0:u.length)?"Test.Main.finish":"Test.Main.next":"Test.Main.match")})})]})},Y=s(3848),ee=s.n(Y),et=e=>{var t,s;let{questionToIterate:a,setQuestionNumber:l,questionNumber:r,quizData:n}=e,{translation:o}=n,{questions:c}=o,u=null==a?void 0:null===(t=a.answers)||void 0===t?void 0:t.map((e,t)=>{var s;return{value:"".concat(e.id,"||"),label:null==a?void 0:null===(s=a.options)||void 0===s?void 0:s[t].text}}),d=null==a?void 0:null===(s=a.answers)||void 0===s?void 0:s.map(e=>({value:"".concat(e.question_id,"||"),label:e.text})),p="ar"===n.translation.lang;return(0,i.jsx)("form",{className:ee().form,children:(0,i.jsx)(J,{styles:ee(),questionToIterate:a,isArabicLanguage:p,questionNumber:r,questions:c,options:u,answers:d,setQuestionNumber:l})})},es=s(1736),ei=s.n(es),ea=e=>{var t;let[s,a]=(0,r.useState)(""),{questionToIterate:n,setQuestionNumber:o,questionNumber:c,quizData:u}=e,{translation:{questions:d}}=u,{t:p}=(0,l.$G)(),x=(0,j.TL)(),_=(0,m.v9)(w),h=async()=>{if(_&&s){let e=s.split("||");await x(G.KN.setValidArrStep([..._,{question_id:n.id,choices:[{id:e[0]}]}]))}c!==(null==d?void 0:d.length)-1&&o(e=>e+=1),c===(null==d?void 0:d.length)-1&&await x(g.$.setQuizLayoutAsDiagram())},v="ar"===u.translation.lang;return(0,i.jsx)("form",{className:ei().form,children:(0,i.jsxs)("div",{className:ei().groupWrapper,children:[(0,i.jsxs)(b.E.div,{...z.XT,transition:{duration:.5,stiffness:0,ease:"backInOut"},className:"flex flex-row maxPc:flex-col w-full",children:[(0,i.jsx)(b.E.div,{...z.XT,transition:{duration:.5,stiffness:0,ease:"backInOut"},className:"maxPc:max-w-[100%] max-w-[50%] min-w-[50%] flex justify-center items-center minPc:pr-[10px]",children:(0,i.jsx)("p",{className:"".concat(ei().title," ").concat(v&&ei().titleArabic),children:null==n?void 0:n.title})}),(0,i.jsx)(S.X,{color:"default",onValueChange:e=>{a(e)},className:ei().group,children:null==n?void 0:null===(t=n.answers)||void 0===t?void 0:t.map(e=>(0,i.jsx)(X.J,{classNames:{base:(0,K.cn)("inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between","flex-row max-w-[100%] justify-start cursor-pointer rounded-lg gap-4 min-h-[50px]  border-2 border-transparent shadow-[0px_0px_1px_0px_rgba(0,0,0,0.20),_0px_2px_30px_0px_rgba(0,_0,_0,_0.06),_0px_0px_15px_0px_rgba(0,_0,_0,_0.03)]","data-[selected=true]:border-[#F31260]"),label:"text-[13px] minPc:text-[16px]"},className:"".concat(ei().choice," ").concat(v&&ei().choiceArabic),value:"".concat(e.id,"||").concat(e.text),children:e.text},e.id))})]}),(0,i.jsx)("div",{className:ei().buttonWrapper,children:(0,i.jsx)(f.A,{className:"text-white w-[fit-content] h-[34px] text-base st bg-black border-2 border-black  hover:border-pinkColor border-solid  hover:bg-pinkColor transition",variant:"bordered",isLoading:0===s.length,type:"submit",spinner:(0,i.jsx)("span",{className:"hidden"}),onClick:h,children:p(s?c+1===(null==d?void 0:d.length)?"Test.Main.finish":"Test.Main.next":"Test.Main.choose")})})]})})},el=s(6310),er=s.n(el),en=e=>{let{quizData:t,quizAnswers:s,questionNumber:a,questionToIterate:l,setQuestionNumber:n}=e;return(0,r.useEffect)(()=>()=>n(0),[]),(0,i.jsxs)("div",{className:er().wrapper,children:[(null==l?void 0:l.type)==="Single"&&(0,i.jsx)(ea,{quizData:t,questionNumber:a,setQuestionNumber:n,questionToIterate:l,quizAnswers:s}),(null==l?void 0:l.type)==="Multiple"&&(0,i.jsx)(H,{quizData:t,questionNumber:a,setQuestionNumber:n,questionToIterate:l,quizAnswers:s}),(null==l?void 0:l.type)==="Select"&&(0,i.jsx)(et,{quizData:t,questionNumber:a,setQuestionNumber:n,questionToIterate:l,quizAnswers:s})]},null==l?void 0:l.id)},eo=s(9154),ec=s(5),eu=s(3968),ed=e=>{var t;let{quizData:s,quizLayout:a,questionNumber:l,questionsLength:r,tabletSize:n}=e;return(0,i.jsxs)("div",{className:"relative w-full",children:[(0,i.jsxs)("div",{className:"relative w-full flex justify-between",children:[(0,i.jsx)("p",{className:n?"w-[83%] text-[10px]":"",children:null==s?void 0:null===(t=s.translation)||void 0===t?void 0:t.title}),(0,i.jsx)("div",{className:n?"flex text-center absolute left-[90%] translate-x-[-50%]":"",children:"Results"!==a&&(0,i.jsxs)("p",{className:n?" text-[11px] w-[max-content]":"",children:[l+1," ",(0,eu.t)("Test.Main.from")," ",r]})})]}),"Results"!==a&&(0,i.jsx)(ec.W,{"aria-label":"loading",size:"sm",value:(l+1)/r*100,color:"default"})]})},ep=s(5232),ex=s(8527),e_=s.n(ex),eh=s(2470),eb=e=>{var t,s,a,l;let{quiz_id:o,open:c=!1,onChange:u=()=>null,okCallback:b=()=>{},closeCallback:m=()=>{}}=e,{quizData:v,quizLayout:f,quizAnswers:g,quizResults:w}=(0,j.CG)(e=>e.education),q=(0,j.TL)(),{isOpen:N,onOpen:z,onClose:k}=(0,d.q)(),[y,R]=(0,r.useState)(0),E=(0,n.iP)(),C=null==v?void 0:null===(s=v.translation)||void 0===s?void 0:null===(t=s.questions)||void 0===t?void 0:t[y],T=null==v?void 0:null===(l=v.translation)||void 0===l?void 0:null===(a=l.questions)||void 0===a?void 0:a.length;(0,r.useEffect)(()=>{c&&o&&(z(),q((0,eo.r)({quiz_id:o})))},[c,o]),(0,r.useEffect)(()=>{u(N)},[N]),(0,r.useEffect)(()=>{var e,t;let s=document.getElementById(":rb:");s&&(null==v?void 0:null===(t=v.translation)||void 0===t?void 0:null===(e=t.questions)||void 0===e?void 0:e[y].type)!=="Select"&&(s.scrollTop=0)},[C]);let S=null!==E.width&&(null==E?void 0:E.width)<1024;return(0,i.jsx)(p.R,{classNames:{wrapper:e_().wrapper,base:e_().base,backdrop:e_().backdrop,header:e_().header,body:e_().body,footer:e_().footer,closeButton:e_().closeButton},size:"3xl",isOpen:N,onClose:()=>{m&&m(),(0,eh.e)(q),q(G.KN.setValidArrStep([])),k()},backdrop:"blur",children:(0,i.jsx)(x.A,{children:()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.k,{className:"flex flex-col gap-1",children:(0,i.jsx)(ed,{quizData:v,quizLayout:f,questionsLength:T,questionNumber:y,tabletSize:S})}),(0,i.jsx)(h.I,{children:(0,i.jsxs)(i.Fragment,{children:[!!(!T&&!w)&&(0,i.jsx)(ep.default,{}),!!(T||w)&&(0,i.jsxs)(i.Fragment,{children:["Quiz"===f&&(0,i.jsx)(en,{quizData:v,questionNumber:y,setQuestionNumber:R,questionToIterate:C,quizAnswers:g}),"Diagram"===f&&(0,i.jsx)(M,{onClose:k}),"Results"===f&&(0,i.jsx)(B,{})]})]})})]})})})},em=s(2445),ev=s(7427),ef=e=>{let{setModalData:t,setIsModalOpen:s,setMaterialUuid:a}=e,{t:n}=(0,l.$G)(),[o,c]=(0,r.useState)([""]),{educationArray:u}=(0,j.CG)(e=>e.education);(0,r.useEffect)(()=>{(null==u?void 0:u.filter(e=>e.isRead&&!e.quiz.passed).length)?c(["1"]):c(["2"])},[u]);let[d,p]=(0,r.useState)(null);return(0,i.jsx)(b.E.div,{...z.XT,transition:{duration:1.2,stiffness:0,ease:"backInOut"},className:"w-full max-w-[800px]",children:(0,i.jsxs)(em.d,{className:"mb-[20px] px-0",variant:"shadow",itemClasses:{base:"py-0 w-full p-0",title:"font-normal text-medium ml-[20px]",trigger:"",indicator:"text-medium mr-[20px]",content:"text-small"},selectedKeys:o,onSelectionChange:c,children:[(0,i.jsx)(ev.G,{"aria-label":"Accordion 1",title:n("Education.Main.toComplete"),isDisabled:!(null==u?void 0:u.filter(e=>e.isRead&&!e.quiz.passed).length),children:null==u?void 0:u.filter(e=>e.isRead&&!e.quiz.passed).sort((e,t)=>e.position-t.position).map((e,l)=>(0,i.jsx)(b.E.div,{className:"relative h-[70px] hover:bg-[#FEE7EF] cursor-pointer border-b last:border-b-0 pr-[20px] pl-[20px] transition-colors",onClick:()=>{t({headerData:e.title,bodyData:n("Education.Main.readLecture")}),a(e.quiz.id),s(!0)},onMouseEnter:()=>p(l),onMouseLeave:()=>p(null),children:(0,i.jsxs)("div",{className:"flex flex-row w-full h-full items-center justify-between ",children:[(0,i.jsx)("span",{className:"text-[15px]",children:e.title}),(0,i.jsx)(b.E.span,{initial:{y:0,x:0},animate:d===l?z.aF:{y:[0],x:[0]},transition:z.RH,children:(0,L.fm)({color:d===l?"#F31260":"black"})})]})},l))},"1"),(0,i.jsx)(ev.G,{"aria-label":"Accordion 2",title:n("Education.Main.passed"),isDisabled:!(null==u?void 0:u.filter(e=>e.isRead&&e.quiz.passed).length),children:null==u?void 0:u.filter(e=>e.isRead&&e.quiz.passed).sort((e,t)=>e.position-t.position).map((e,l)=>(0,i.jsx)("div",{className:"relative h-[70px] hover:bg-[#FEE7EF] cursor-pointer border-b last:border-b-0 pr-[20px] pl-[20px] transition-colors",onClick:()=>{t({headerData:e.title,bodyData:n("Education.Main.readLecture")}),a(e.quiz.id),s(!0)},onMouseEnter:()=>p(l),onMouseLeave:()=>p(null),children:(0,i.jsxs)("div",{className:"flex flex-row w-full h-full items-center justify-between pr-[10px]",children:[(0,i.jsx)("span",{className:"text-[15px]",children:e.title}),(0,i.jsx)(b.E.span,{initial:{rotate:0},animate:d===l?{rotate:90}:{rotate:0},children:(0,L.H5)({color:d===l?"#F31260":"black"})})]})},l))},"2")]})})},eg=s(5901),ej=s(138),ew=s(6018),eq=s.n(ew);function eN(){let{t:e}=(0,l.$G)(),[t,s]=(0,r.useState)(!1),[d,p]=(0,r.useState)(c.mF),[x,_]=(0,n.Xs)("isTestModalOpen",!1),[h,b]=(0,n.Xs)("materialUuid","");(0,r.useEffect)(()=>{(0,eh.l)(v)},[]);let{job:m}=(0,j.CG)(e=>e.profile),v=(0,j.TL)();(0,r.useEffect)(()=>{m.id&&v((0,o.V)({jobTitle:m.id,page:1}))},[m]);let f=(0,a.useRouter)();return(0,r.useEffect)(()=>{v((0,eg.I)()).then(e=>{"fetchProfile/rejected"===e.type&&(localStorage.clear(),sessionStorage.clear(),f.push("/login")),v((0,ej.r)())})},[]),(0,i.jsxs)("div",{className:eq().collapseWrapper,children:[(0,i.jsx)(ef,{setModalData:p,setIsModalOpen:s,setMaterialUuid:b}),(0,i.jsx)(u.T,{open:t,buttonLabel:e("Education.Main.test"),contents:{header:(0,i.jsx)("div",{children:d.headerData}),body:(0,i.jsx)("div",{children:d.bodyData})},callback:()=>_(!0),onChange:e=>{s(e)}}),(0,i.jsx)(eb,{open:x,quiz_id:h,okCallback:()=>_(!1),onChange:e=>_(e)})]})}function ez(){return(0,i.jsx)(eN,{})}},7361:function(e,t,s){"use strict";s.d(t,{RH:function(){return l},XT:function(){return i},aF:function(){return a}});let i={initial:{opacity:0},animate:{opacity:1}},a={y:[0,-5,5,0],x:[0,2,4,0,2,-2,0]},l={y:{duration:1.5,ease:"easeInOut",repeat:1/0},x:{duration:1.5,ease:"easeInOut",repeat:1/0}}},5232:function(e,t,s){"use strict";s.r(t);var i=s(7437),a=s(162),l=s(7361),r=s(5840),n=s.n(r);t.default=()=>(0,i.jsxs)(a.E.div,{...l.XT,transition:{duration:.5},className:n().ldsRing,children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})},9958:function(e,t,s){"use strict";s.d(t,{T:function(){return _}});var i=s(7437),a=s(4318),l=s(1609),r=s(6999),n=s(1718),o=s(9571),c=s(2913),u=s(5677),d=s(2265),p=s(8302),x=s.n(p);let _=e=>{let{open:t=!1,contents:s={header:(0,i.jsx)("div",{children:"Хедер"}),body:(0,i.jsx)("div",{children:"Боди"})},onChange:p=()=>null,callback:_=()=>{},buttonLabel:h="Закрыть"}=e,{isOpen:b,onOpen:m,onClose:v}=(0,a.q)();return(0,d.useEffect)(()=>{t&&m()},[t]),(0,d.useEffect)(()=>{p(b)},[b]),(0,i.jsx)(l.R,{classNames:{body:x().body,backdrop:x().backdrop,wrapper:x().wrapper,base:x().base,header:x().header,footer:x().footer,closeButton:"hover:bg-white/5 active:bg-white/10"},size:"3xl",isOpen:b,onClose:v,placement:"center",children:(0,i.jsx)(r.A,{className:"z-[9999]",children:e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.k,{className:"flex flex-col gap-1",children:s.header}),(0,i.jsx)(o.I,{children:s.body}),(0,i.jsx)(c.R,{children:(0,i.jsx)(u.A,{className:"text-white w-[fit-content] min-h-[35px] text-base  bg-black border-2 border-black h-full hover:border-pinkColor border-solid  hover:bg-pinkColor transition",variant:"bordered",type:"button",onClick:()=>{_&&_(),e()},children:h})})]})})})}},9080:function(e){e.exports={wrapper:"quizDiagram_wrapper__QZhHu",congratulations:"quizDiagram_congratulations__3D2yl",progressWrapper:"quizDiagram_progressWrapper__TPjav",percentWrapper:"quizDiagram_percentWrapper__STEde",svg:"quizDiagram_svg__vCCZe",track:"quizDiagram_track__z3iLy",value:"quizDiagram_value__3oAiB",result:"quizDiagram_result__pTfRM",corrects:"quizDiagram_corrects__qmmwW",passed:"quizDiagram_passed__8MoBE",btnsWrapper:"quizDiagram_btnsWrapper__ByGWK"}},5607:function(e){e.exports={form:"quizMultiple_form__LiPWA",title:"quizMultiple_title__WK1KL",groupWrapper:"quizMultiple_groupWrapper__FOzXM",group:"quizMultiple_group__PDzo1",choice:"quizMultiple_choice__76yKx",buttonWrapper:"quizMultiple_buttonWrapper__EIPRl",titleArabic:"quizMultiple_titleArabic__XLf_A"}},5942:function(e){e.exports={wrapper:"quizResults_wrapper__zMVMT",resultWrapper:"quizResults_resultWrapper___o8Lg",questions:"quizResults_questions__EkB_T",question:"quizResults_question__JoCSA",titleWrapper:"quizResults_titleWrapper__b07NU",titleNumber:"quizResults_titleNumber__DCf08",title:"quizResults_title__AYA6V",result:"quizResults_result__VKLyj",percent:"quizResults_percent__4clsn",corrects:"quizResults_corrects__tDlfb",passed:"quizResults_passed__CcB1L",optionHeading:"quizResults_optionHeading__KX8IM",crutch:"quizResults_crutch__l_vrt",yourResult:"quizResults_yourResult__lPCm6",red:"quizResults_red__IiseK",yellow:"quizResults_yellow__DcuGC",green:"quizResults_green__WVXAn",black:"quizResults_black__RSH_S"}},3848:function(e){e.exports={form:"quizSelect_form__QQet5",title:"quizSelect_title__WqXGO",questions:"quizSelect_questions__O7cTE",listQuestions:"quizSelect_listQuestions__CaRoQ",groupWrapper:"quizSelect_groupWrapper__wFv8Y",group:"quizSelect_group__wQUUY",choice:"quizSelect_choice__LAc7g",buttonWrapper:"quizSelect_buttonWrapper__sZIQG",titleArabic:"quizSelect_titleArabic__F_1ET",optionTitle:"quizSelect_optionTitle__DKbnT"}},1736:function(e){e.exports={form:"quizSingle_form__HdqUp",title:"quizSingle_title__wodyS",groupWrapper:"quizSingle_groupWrapper__nfh65",group:"quizSingle_group__Koh__",choice:"quizSingle_choice__MIKNc",buttonWrapper:"quizSingle_buttonWrapper__QPZWp",titleArabic:"quizSingle_titleArabic__W4ZZ_"}},6310:function(e){e.exports={wrapper:"quizController_wrapper__iP1z1"}},5840:function(e){e.exports={ldsRing:"lichiLoader_ldsRing__FvPZr"}},8302:function(e){e.exports={wrapper:"lichiModal_wrapper__6HW48",body:"lichiModal_body__1Bs2n",backdrop:"lichiModal_backdrop__3qxEk",base:"lichiModal_base__7WAv4",header:"lichiModal_header__cocXz",footer:"lichiModal_footer__bpX05",closeButton:"lichiModal_closeButton__56kUY"}},8527:function(e){e.exports={wrapper:"testsModal_wrapper__khQeM",backdrop:"testsModal_backdrop__0C8CX",base:"testsModal_base__SjzOR",header:"testsModal_header__aUN5G",body:"testsModal_body__PBWuD",footer:"testsModal_footer__KMThv",a:"testsModal_a__b2vW_",closeButton:"testsModal_closeButton__xK54O",applyBtn:"testsModal_applyBtn__IR8b_",topHeaderBlock:"testsModal_topHeaderBlock__iMNWE"}},6018:function(e){e.exports={collapseWrapper:"tests_collapseWrapper__Z9mSn"}}},function(e){e.O(0,[4330,3468,439,3071,2765,7428,878,191,5613,3826,4733,6809,2971,2472,1744],function(){return e(e.s=7866)}),_N_E=e.O()}]);