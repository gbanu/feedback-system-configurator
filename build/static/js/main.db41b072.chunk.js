(this["webpackJsonpfeedback-system-configurator"]=this["webpackJsonpfeedback-system-configurator"]||[]).push([[0],{193:function(e,t,n){},194:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(29),c=n.n(i),r=(n(193),n(194),n(28)),o=n.n(r),l=n(37),u=n(24),j=n(307),b=n(93),d=n(63),p=n(305),x=n(182),f=n(52),h=n(59),m=n(313),O=n(185),y=n(314),g=n(41),v=n.n(g),w=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAIL":return{user:null,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},k=n(6),A={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},I=Object(a.createContext)(A),F=function(e){var t=e.children,n=Object(a.useReducer)(w,A),s=Object(u.a)(n,2),i=s[0],c=s[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(i.user))}),[i.user]),Object(k.jsx)(I.Provider,{value:{user:i.user,isFetching:i.isFetching,error:i.error,dispatch:c},children:t})},C="/configurator",S="/feedback",B="/",E="/manage",W="/login",U="/register",G="Create new",Q="My Forms",L="Login",H="Specify Input",q="Define Goal",D="Design",Y="Configure Crowd",z="Share",R={multiple:"Multiple choice",single:"Single choice",rating:"Raiting",textarea:"Free text",input:"Input",slider:"Slider",likert:"7-point Likert Scale",yesno:"Yes/No"},P=[{value:!0,label:"yes"},{value:!1,label:"no"}],T=[{value:1,label:"Very strongly disagree"},{value:2,label:"Strongly disagree"},{value:3,label:"Disagree"},{value:4,label:"Neutral"},{value:5,label:"Agree"},{value:6,label:"Strongly agree"},{value:7,label:"Very strongly agree"}],V=[{label:"Qualitative",value:"Qualitative"},{label:"Quantitative",value:"Quantitative"}],N=[{label:"Functional",value:"Functional"},{label:"Non-functional",value:"Non-functional"},{label:"Content",value:"Content"}],J=[{label:"Generate new ideas",value:"Generate"},{label:"Assess current system",value:"Assess"}],M=[{label:"System quality",value:"System quality"},{label:"Usability",value:"Usability"},{label:"Utilization",value:"Utilization"},{label:"User satisfaction",value:"User satisfaction"},{label:"Personal benefits",value:"Personal benefits"}],K=[{label:"Anonymous users",value:"anonymous",description:"Best incentive for anonymous users is financial reward. See platform recommendations below."},{label:"Actual and potential users",value:"proxy",description:"You can directly sent invitation link to your actual and potential users."},{label:"Social networks",value:"social",description:"Post the invitation link to your social media account and ask your social contacts to participate."},{label:"Web forum users",value:"forum",description:"Post the inviataion link to the forum of your choice. See platform recommendations below."},{label:"Students",value:"students",description:"Use this option if you are conducting a feedback solicitation in a classroom. Students are usually incentivized by course credits and social contacts."},{label:"Friends and family",value:"convenience",description:"You can use this option in combination with other. Send the invitation link to your friends and family."}],Z=p.a.Meta,X=function(e){var t=e.data,n=Object(a.useContext)(I).user,s=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,v.a.delete("/forms/"+t,{data:{username:n.username}});case 3:a=e.sent,console.log(a),x.b.success("Form deleted"),window.location.replace(B);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)(f.a,{xs:12,sm:8,md:6,children:Object(k.jsx)(p.a,{style:{maxWidth:240,width:"100% ",borderRadius:"10px",boxShadow:"0px 0px 10px 4px rgba(0, 0, 0, 0.1)"},actions:[Object(k.jsx)(h.b,{to:"manage/".concat(t._id),title:"View answers",children:Object(k.jsx)(m.a,{},"answers")}),Object(k.jsx)(h.b,{to:"feedback/".concat(t._id),title:"Preview",children:Object(k.jsx)(O.a,{},"preview")}),Object(k.jsx)(y.a,{title:"Delete form",onClick:function(){return s(t._id)}},"delete")],children:Object(k.jsx)(Z,{title:t.title,description:new Date(t.createdAt).toDateString()})})})},_=n(20),$=j.a.Title,ee=[{_id:"Create new",data:"create new form"},{_id:"form1",data:"formdata"},{_id:"form2",data:"formdata"}],te=function(){var e=Object(a.useContext)(I).user,t=Object(a.useState)(ee),n=Object(u.a)(t,2),s=n[0],i=n[1],c=Object(_.f)();Object(a.useEffect)((function(){var t=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("forms/userforms",{username:t});case 2:n=e.sent,console.log(n),i(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t(e.username)}),[]);var r=s.map((function(e){return Object(k.jsx)(X,{data:e},e._id)}));return Object(k.jsxs)("div",{children:[Object(k.jsxs)(b.a,{justify:"space-between",align:"middle",style:{padding:"20px 40px"},children:[Object(k.jsx)($,{level:3,children:Q}),Object(k.jsx)(d.a,{type:"primary",onClick:function(){c("/configurator/")},children:"Add new"})]}),Object(k.jsx)(b.a,{gutter:[24,16],style:{marginRight:"5%",marginLeft:"5%"},children:s?r:"No forms yet"})]})},ne=(n(282),n(283),n(31)),ae=n(309),se=n(306),ie=n(104),ce={display:"flex",justifyContent:"center"},re=function(e){var t=e.children,n=e.callbackFunction,a=e.nextButtonTitle,s=void 0===a?"Next":a,i=e.customStyle,c=void 0===i?null:i,r=e.form,o=void 0===r?null:r,l=e.initialValues,u=void 0===l?null:l;return Object(k.jsx)("div",{style:c||ce,children:Object(k.jsxs)(se.a,{name:"basic",onFinish:function(e){console.log(e),n(e),console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",form:o,layout:"vertical",initialValues:u,children:[t,Object(k.jsx)(se.a.Item,{wrapperCol:{offset:12,span:12},children:Object(k.jsx)(d.a,{type:"primary",htmlType:"submit",children:s})})]})})},oe=function(e){var t=e.callbackFunction,n=e.initialValues;return Object(k.jsx)(re,{callbackFunction:t,initialValues:n,children:Object(k.jsx)(se.a.Item,{name:"crowd",label:"Select your crowd type",children:Object(k.jsx)(ie.a.Group,{children:K.map((function(e){return Object(k.jsx)(b.a,{style:{border:"1px solid #C4C4C4",borderRadius:"10px",padding:"5px 10px",margin:"10px"},children:Object(k.jsx)(ie.a,{value:e.value,style:{display:"flex",alignItems:"center"},children:Object(k.jsxs)("div",{style:{display:"flex",flexDirection:"column",paddingLeft:"5px"},children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:e.label}),Object(k.jsx)("span",{children:e.description})]})})},e.value)}))})})})},le=function(e){var t=e.callbackFunction,n=e.initialValues,s=Object(a.useState)(n.goal.includes("Assess")),i=Object(u.a)(s,2),c=i[0],r=i[1];return Object(k.jsx)("div",{children:Object(k.jsxs)(re,{callbackFunction:t,initialValues:n,children:[Object(k.jsx)(se.a.Item,{name:"type",label:"Select feedback type",children:Object(k.jsx)(ie.a.Group,{options:V})}),Object(k.jsx)(se.a.Item,{name:"scope",label:"Define feedback scope",children:Object(k.jsx)(ie.a.Group,{options:N})}),Object(k.jsx)(se.a.Item,{name:"goal",label:"Define your goal",children:Object(k.jsx)(ie.a.Group,{options:J,onChange:function(e){e.includes("Assess")?r(!0):r(!1)}})}),c&&Object(k.jsx)(se.a.Item,{name:"measures",label:"Select measures",children:Object(k.jsx)(ie.a.Group,{options:M})})]})})},ue=n(103),je=n(186),be=n(184),de=n(312),pe=n(311),xe=n(102),fe=n(315),he=function(e){var t=e.remove,n=e.name,s=e.fieldKey,i=e.restField,c=Object(a.useState)(""),r=Object(u.a)(c,2),o=r[0],l=r[1],j=Object(a.useState)(!1),b=Object(u.a)(j,2),d=b[0],p=b[1],x=Object(a.useState)(!1),f=Object(u.a)(x,2),h=f[0],m=f[1];return Object(a.useEffect)((function(){return"multiple"===o||"single"===o?p(!0):"slider"!==o&&"rating"!==o||m(!0),function(){p(!1),m(!1)}}),[o]),Object(k.jsxs)(de.b,{style:{display:"flex",marginBottom:8},align:"baseline",children:[Object(k.jsx)(se.a.Item,Object(ne.a)(Object(ne.a)({},i),{},{name:[n,"question"],fieldKey:[s,"question"],rules:[{required:!0,message:"Please enter question"}],children:Object(k.jsx)(pe.a,{style:{width:"500px"},placeholder:"Question"})})),Object(k.jsx)(se.a.Item,Object(ne.a)(Object(ne.a)({},i),{},{name:[n,"type"],fieldKey:[s,"type"],rules:[{required:!0,message:"Please select type of question"}],children:Object(k.jsx)(xe.a,{style:{width:120},onChange:function(e){l(e)},children:Object.keys(R).map((function(e){return Object(k.jsx)(xe.a.Option,{value:e,children:R[e]},e)}))})})),d&&Object(k.jsx)(se.a.Item,Object(ne.a)(Object(ne.a)({},i),{},{name:[n,"options"],fieldKey:[s,"options"],rules:[{required:!0,message:"Please provide answer options"}],children:Object(k.jsx)(pe.a,{placeholder:"option1, option2"})})),h&&Object(k.jsx)(se.a.Item,Object(ne.a)(Object(ne.a)({},i),{},{name:[n,"maxValue"],fieldKey:[s,"maxValue"],rules:[{required:!0,message:"Please provide maximum value"}],children:Object(k.jsx)(pe.a,{placeholder:"5",type:"number"})})),Object(k.jsx)(fe.a,{onClick:function(){return t(n)}})]})},me={answerFormat:"likert",questions:["Using the system in my job would enable me to accomplish tasks more quickly.","Using the system would improve my job performance.","Using the system would improve increase my productivity.","Using the system would enhance my effectiveness on the job.","Using the system would make it easier to do my job.","I would find the system useful in my job."]},Oe={answerFormat:"likert",questions:["My interaction with the system would be clear and understandable.","I  would find the system to be flexible to interact with.","I would find it easy to the system to do what I want it to do.","Learning to operate the system would be easy for me.","It would be easy for me to become skilled at using the system.","I would find the system easy to use."]},ye={answerFormat:"likert",questions:["I think that I would like to use this system frequently.","I found the system unnecessarily complex.","I thought the system was easy to use.","I think that I would need the support of a technical person to be able to use this system.","I found the various functions in this system were well integrated.","I thought there was too much inconsistency in this system.","I would imagine that most people would learn to use this system very quickly.","I found the system very cumbersome to use.","I felt very confident using the system.","I needed to learn a lot of things before I could get going with this system."]},ge={answerFormat:"yesno",questions:["Does the system provide the precise information you need?","Are you satisifed with the accuracy of the system?","Do you think the output is presented in a useful format?","Is the system user friendly? ","Does the system provide up-to-date information?"]},ve={answerFormat:"yesno",questions:["I intend to use the the system in the next weeks.","I predict I would use the system in the next weeks."]},we=["key","name","fieldKey"],ke=function(e){var t=e.category,n=e.initialValues;console.log(n);var a=function(){switch(t){case"System quality":return Oe;case"Utilization":return ve;case"Usability":return ye;case"User satisfaction":return ge;case"Personal benefits":return me;default:return null}},s=a()?function(e){var t=e.questions.map((function(t){return{type:e.answerFormat,question:t}}));return n?[].concat(Object(ue.a)(n),Object(ue.a)(t)):t}(a()):n;return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:t}),Object(k.jsx)(se.a.List,{name:t,initialValue:s,children:function(e,t){var n=t.add,a=t.remove;return Object(k.jsxs)(k.Fragment,{children:[e.map((function(e){var t=e.key,n=e.name,s=e.fieldKey;Object(je.a)(e,we);return Object(k.jsx)(he,{remove:a,name:n,fieldKey:s,restField:void 0},t)})),Object(k.jsx)(se.a.Item,{children:Object(k.jsx)(d.a,{type:"dashed",onClick:function(){return n()},block:!0,icon:Object(k.jsx)(be.a,{}),children:"Add field"})})]})}})]})},Ae=n(175),Ie=n.n(Ae),Fe=function(e){var t=e.callbackFunction,n=e.measures,s=e.initialValues,i=e.updateRubrics,c=Object(a.useState)(n||[]),r=Object(u.a)(c,2),o=r[0],l=r[1];console.log(o,n);return Object(a.useEffect)((function(){i(o)}),[o]),Object(k.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(k.jsxs)(se.a,{onFinish:function(e){l((function(t){return[].concat(Object(ue.a)(t),[e.category])}))},layout:"inline",style:{margin:"20px"},children:[Object(k.jsx)(se.a.Item,{name:"category",rules:[{required:!0}],children:Object(k.jsx)(pe.a,{placeholder:"category name"})}),Object(k.jsx)(se.a.Item,{children:Object(k.jsx)(d.a,{htmlType:"submit",children:"Add category"})})]}),Object(k.jsx)(re,{callbackFunction:t,children:o.map((function(e){return Object(k.jsxs)("div",{style:{display:"flex",margin:"0px 10px"},children:[Object(k.jsx)(ke,{category:e,initialValues:s[e]},e),Object(k.jsx)(Ie.a,{title:"Delete category",onClick:function(){return function(e){l((function(t){return t.filter((function(t){return t!=e}))}))}(e)}})]})}))})]})},Ce=function(e){var t=e.copyText,n=Object(a.useState)(!1),s=Object(u.a)(n,2),i=s[0],c=s[1];function r(){return(r=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("clipboard"in navigator)){e.next=6;break}return e.next=3,navigator.clipboard.writeText(t);case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",document.execCommand("copy",!0,t));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){return function(){}}),[i]);return Object(k.jsxs)("div",{style:{margin:"10px auto",width:"max-content"},children:[Object(k.jsx)("input",{type:"text",value:t,readOnly:!0,style:{width:"300px"}}),Object(k.jsx)("button",{onClick:function(){(function(e){return r.apply(this,arguments)})(t).then((function(){c(!0)})).catch((function(e){console.log(e)}))},children:Object(k.jsx)("span",{children:i?"Copied!":"Copy"})})]})},Se=function(e){var t=e.callbackFunction,n=e.shareLink,s=Object(a.useState)(!1),i=Object(u.a)(s,2);i[0],i[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Ce,{copyText:n}),Object(k.jsx)(re,{callbackFunction:t,nextButtonTitle:"Finish",children:"Share the link above to start gathering feedback!"})]})},Be=n(128),Ee=function(e){var t=e.callbackFunction,n=e.initialValues;return Object(k.jsxs)(re,{callbackFunction:t,initialValues:n,children:[Object(k.jsx)(se.a.Item,{name:"title",label:"Title of the form",children:Object(k.jsx)(pe.a,{})}),Object(k.jsx)(se.a.Item,{name:"link",label:"Link to your website",rules:[{required:!0},{type:"url"},{type:"string",min:6}],children:Object(k.jsx)(pe.a,{})}),Object(k.jsx)(se.a.Item,{name:"iframe",label:"Does your website allow iframe?",children:Object(k.jsxs)(Be.a.Group,{children:[Object(k.jsx)(Be.a,{value:!0,children:"iframe allowed"}),Object(k.jsx)(Be.a,{value:!1,children:"iframe not allowed"})]})})]})},We=ae.a.Step,Ue={contentWrapper:{margin:"20px 50px"}},Ge=function(){var e=Object(a.useContext)(I).user,t=Object(a.useState)(0),n=Object(u.a)(t,2),s=n[0],i=n[1],c=Object(a.useState)(""),r=Object(u.a)(c,2),j=r[0],b=r[1],p=Object(_.f)(),f=window.location.href.split("/")[2];console.log(f,"BASEURL");Object(a.useEffect)((function(){s===F.length-1&&g()}),[s]);var h=Object(a.useState)({username:e.username,link:void 0,iframe:!1,type:[],scope:[],goal:[],measures:[],questions:[],crowd:void 0}),m=Object(u.a)(h,2),O=m[0],y=m[1],g=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(O),x.b.success("Form created!"),e.next=4,v.a.post("/forms/",O);case 4:t=e.sent,console.log(t),b("".concat(f).concat(S,"/").concat(t.data._id));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){p(B)},A=function(){s===F.length-1?w():i(s+1)},F=[{title:H,content:Object(k.jsx)(Ee,{callbackFunction:function(e){console.log(e),y((function(t){return Object(ne.a)(Object(ne.a)({},t),e)})),A()},initialValues:O})},{title:q,content:Object(k.jsx)(le,{callbackFunction:function(e){var t=e.type,n=e.scope,a=e.goal,s=e.measures;y((function(e){return Object(ne.a)(Object(ne.a)({},e),{},{type:t,scope:n,goal:a,measures:s})})),A()},initialValues:O})},{title:D,content:Object(k.jsx)(Fe,{callbackFunction:function(e){console.log(e),y((function(t){return Object(ne.a)(Object(ne.a)({},t),{},{questions:e})})),A()},measures:O.measures,initialValues:O.questions,updateRubrics:function(e){y((function(t){return Object(ne.a)(Object(ne.a)({},t),{},{measures:e})}))}})},{title:Y,content:Object(k.jsx)(oe,{callbackFunction:function(e){y((function(t){return Object(ne.a)(Object(ne.a)({},t),e)})),A()},initialValues:O})},{title:z,content:Object(k.jsx)(Se,{callbackFunction:w,shareLink:j})}];return Object(k.jsxs)("div",{style:Ue.contentWrapper,children:[Object(k.jsx)(ae.a,{current:s,style:{margin:" 0px 10px 30px 10px"},children:F.map((function(e){return Object(k.jsx)(We,{title:e.title},e.title)}))}),s>0&&s<F.length-1&&Object(k.jsx)(d.a,{onClick:function(){i(s-1)},children:"Back"}),Object(k.jsx)("div",{className:"steps-content",children:F[s].content})]})},Qe=function(){return Object(k.jsx)(Ge,{})},Le=n(310),He=n(308),qe=pe.a.TextArea,De=function(e){switch(e.type){case"textarea":return Object(k.jsx)(qe,{});case"rating":return Object(k.jsx)(Le.a,{count:e.maxValue});default:return Object(k.jsx)(pe.a,{});case"slider":return Object(k.jsx)(He.a,{max:e.maxValue});case"multiple":return Object(k.jsx)(ie.a.Group,{options:e.options.split(",")});case"single":return Object(k.jsx)(Be.a.Group,{options:e.options.split(",")});case"likert":return Object(k.jsx)(Be.a.Group,{options:T});case"likert":return Object(k.jsx)(Be.a.Group,{options:P})}},Ye=function(e){var t=Object.keys(e);return console.log(t,e),t.map((function(t){return Object(k.jsxs)("div",{style:{margin:"10px"},children:[Object(k.jsx)("h3",{children:t}),e[t].map((function(e){return Object(k.jsx)(se.a.Item,{label:e.question,name:e.question,children:De(e)},e.question)}))]},t)}))},ze={height:"calc(100vh - 50px)",width:"100%",margin:"0"},Re=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(""),c=Object(u.a)(i,2),r=c[0],j=c[1],p=Object(_.e)().pathname.split("/")[2];Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/forms/"+t);case 2:n=e.sent,s(n.data.questions),j(n.data.link);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(p)}),[p]);var h=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,v.a.post("/feedback/",{form:p,answers:t});case 3:n=e.sent,console.log(n),x.b.success("Thank you for your feedback!");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)(b.a,{style:{height:"100vh - 50px"},children:[Object(k.jsx)(f.a,{span:18,children:Object(k.jsx)("iframe",{style:ze,title:"subject",src:r})}),Object(k.jsx)(f.a,{span:6,children:Object(k.jsx)("div",{children:Object(k.jsxs)(se.a,{onFinish:h,layout:"vertical",children:[Ye(n),Object(k.jsx)(se.a.Item,{wrapperCol:{offset:8,span:16},children:Object(k.jsx)(d.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})]})},Pe=function(){var e=Object(a.useContext)(I).dispatch,t=function(){var t=Object(l.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"LOGIN_START"}),t.prev=1,t.next=4,v.a.post("/auth/login/",{username:n.username,password:n.password});case 4:a=t.sent,console.log(a),e({type:"LOGIN_SUCCESS",payload:a.data}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),e({type:"LOGIN_FAIL"});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(k.jsx)("div",{style:{maxWidth:"500px",margin:"auto",marginTop:"50px",padding:"20px"},children:Object(k.jsxs)(se.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:t,onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[Object(k.jsx)(se.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(k.jsx)(pe.a,{})}),Object(k.jsx)(se.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(k.jsx)(pe.a.Password,{})}),Object(k.jsx)(se.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:Object(k.jsx)(ie.a,{children:"Remember me"})}),Object(k.jsx)(se.a.Item,{wrapperCol:{offset:8,span:16},children:Object(k.jsx)(d.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})},Te=n(304),Ve=n(176),Ne=n.n(Ve),Je=n(177),Me=n.n(Je),Ke=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)([]),c=Object(u.a)(i,2),r=c[0],j=c[1],b=Object(_.e)().pathname.split("/")[2];Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/forms/"+t);case 2:return n=e.sent,e.next=5,v.a.post("/feedback/formfeedback/",{form:t});case 5:a=e.sent,s(n.data),j(a.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(b)}),[b]);var d;return Object(k.jsx)("div",{style:{margin:"20px"},children:void 0!==n&&Object(k.jsx)(Te.a,{dataSource:(d=r,d.map((function(e){return e.answers}))),children:function(e){var t=Object.keys(e);return console.log(e,t),t.map((function(t){return Object(k.jsx)(Ne.a,{title:t,children:e[t].map((function(e){return Object(k.jsx)(Me.a,{title:e.question,dataIndex:e.question},e.question)}))},t)}))}(n.questions)})})},Ze=function(){return Object(k.jsx)(Ke,{})},Xe={div:{width:"100%",height:"50px",display:"flex",justifyContent:"space-between",boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.16)"},side:{maxHeight:"100%",display:"flex",alignItems:"center",margin:"0px 10px 0px 10px"},linkTopbar:{padding:10,fontWeight:600}},_e=function(){var e=Object(a.useContext)(I),t=e.user,n=e.dispatch;return Object(k.jsxs)("div",{style:Xe.div,children:[Object(k.jsxs)("div",{style:Xe.side,children:[Object(k.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",height:"100%"}),t?Object(k.jsx)(h.b,{style:Xe.linkTopbar,to:B,children:Q}):null,t?Object(k.jsx)(h.b,{style:Xe.linkTopbar,to:C,children:G}):null]}),Object(k.jsx)("div",{style:Xe.side,children:t?Object(k.jsx)("span",{style:Xe.linkTopbar,onClick:function(){n({type:"LOGOUT"})},children:"Logout"}):Object(k.jsx)(h.b,{style:Xe.linkTopbar,to:W,children:L})})]})};var $e=function(){var e=Object(a.useContext)(I).user;return Object(k.jsxs)(h.a,{children:[Object(k.jsx)(_e,{}),Object(k.jsxs)(_.c,{children:[Object(k.jsx)(_.a,{path:B,element:e?Object(k.jsx)(te,{}):Object(k.jsx)(Pe,{})}),Object(k.jsx)(_.a,{path:E+"/:id",element:e?Object(k.jsx)(Ze,{}):Object(k.jsx)(Pe,{})}),Object(k.jsx)(_.a,{path:C,element:e?Object(k.jsx)(Qe,{}):Object(k.jsx)(Pe,{})}),Object(k.jsx)(_.a,{path:U,element:e?Object(k.jsx)(te,{}):Object(k.jsx)(Pe,{})}),Object(k.jsx)(_.a,{path:W,element:e?Object(k.jsx)(te,{}):Object(k.jsx)(Pe,{})}),Object(k.jsx)(_.a,{path:S+"/:id",element:Object(k.jsx)(Re,{})})]})]})},et=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,316)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(F,{children:Object(k.jsx)($e,{})})}),document.getElementById("root")),et()}},[[301,1,2]]]);
//# sourceMappingURL=main.db41b072.chunk.js.map