"use strict";(self.webpackChunksamurai_type=self.webpackChunksamurai_type||[]).push([[737],{2737:function(e,s,a){a.r(s),a.d(s,{default:function(){return M}});var n=a(2791),i="Dialogs_dialogs__I1zPU",t="Dialogs_dialogsItems__DgUal",r="Dialogs_active__I0stq",d="Dialogs_message__OJpEE",o="Dialogs_user__A9tef",c="Dialogs_dialog__9pCZz",u="Dialogs_avatar__N7wKX",l=a(1087),m=a(184),g=function(e){var s="/dialogs/"+e.id;return(0,m.jsx)("div",{className:o,children:(0,m.jsxs)("div",{className:c+" "+r,children:[(0,m.jsx)("img",{className:u,src:e.avatar}),(0,m.jsxs)(l.OL,{to:s,style:function(e){return{color:e.isActive?"red":"darkred",textDecoration:"none"}},children:[" ",e.name," "]})]})})},_=function(e){return(0,m.jsx)("div",{className:c,children:e.message})},f=a(9439),h=a(6139),x=a(704),j=a(1117),v=a(4972),N="AddMessageForm_form__jonL8",p=a(634),D=(0,x.Z)({form:"dialogAddMessage"})((function(e){(0,v.DT)(50),(0,v.oQ)(5);var s=(0,n.useState)(""),a=(0,f.Z)(s,2);a[0],a[1];return(0,m.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,m.jsx)("div",{className:N,children:(0,m.jsx)(h.Z,{className:N,component:j.K,name:"newMessageText",placeholder:"Enter you message..."})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("button",{className:p.Z.button,onClick:function(e){return""},children:"Add"}),(0,m.jsx)("button",{className:p.Z.button,onClick:e.reset,children:"Reset"})]})]})})),b=a(9693),k=a(8687),A=a(7781),Z=a(2932),C=function(e){return e.dialogsReducer},M=(0,A.qC)((0,k.$j)((function(e){return{dialogsState:C(e),isAuth:e.authReducer.isAuth}}),(function(e){return{addMessage:function(s){e((0,b.BZ)(s))}}})),Z.D)((function(e){var s=e.dialogsState,a=e.addMessage,n=s.users.map((function(e){return(0,m.jsx)(g,{id:e.id,name:e.name,avatar:e.avatar},e.id)})),r=s.messages.map((function(e){return(0,m.jsx)(_,{id:e.id,message:e.message},e.id)}));return(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("div",{className:t,children:n}),(0,m.jsx)("div",{className:d,children:r}),(0,m.jsx)(D,{onSubmit:function(e){a(e.newMessageText)}})]})}))}}]);
//# sourceMappingURL=737.d6e42811.chunk.js.map