(this["webpackJsonpreact-flashcard"]=this["webpackJsonpreact-flashcard"]||[]).push([[0],{10:function(e,t,n){e.exports={item:"StudySetItem_item__2TZrx",image:"StudySetItem_image__1cjhh",content:"StudySetItem_content__3q3AC",actions:"StudySetItem_actions__23imy",buttonGroup:"StudySetItem_buttonGroup__1WD4E",altImg:"StudySetItem_altImg__1crsu"}},12:function(e,t,n){e.exports={card:"FlashcardModeKernel_card__36hCT",previousBtn:"FlashcardModeKernel_previousBtn__1PGw5",nextBtn:"FlashcardModeKernel_nextBtn__t8OGK",flipBtn:"FlashcardModeKernel_flipBtn__lSATL",displayArea:"FlashcardModeKernel_displayArea__1z9wO",actionCenter:"FlashcardModeKernel_actionCenter__2yKh1"}},15:function(e,t,n){e.exports={termTable:"ViewSet_termTable__2xCXv",actions:"ViewSet_actions__2P7T5",studyBtn:"ViewSet_studyBtn__111n9"}},17:function(e,t,n){e.exports={modal:"Modal_modal__2iEZU"}},18:function(e,t,n){e.exports={header:"MainNavigation_header__i4v2g",logo:"MainNavigation_logo__3Fpj4",active:"MainNavigation_active__3JirC",badge:"MainNavigation_badge__3QUbO"}},24:function(e,t,n){e.exports={card:"Card_card__3uyPT"}},25:function(e,t,n){e.exports={backdrop:"Backdrop_backdrop__31DHF"}},28:function(e,t,n){e.exports={list:"StudySetList_list__1FCPz"}},29:function(e,t,n){e.exports={main:"Layout_main__2R6of"}},36:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(23),a=n.n(r),s=(n(36),n(2)),o=n(3);var l=function(e,t){var n=i.a.useState((function(){return JSON.parse(localStorage.getItem(e))||t})),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(a))}),[e,a]),[a,s]},d=n(0),j=Object(c.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}}),u=function(e){var t=l("favorites",[]),n=Object(o.a)(t,2),c=n[0],i=n[1],r={favorites:c,totalFavorites:c.length,addFavorite:function(e){i((function(t){return t.concat(e)}))},removeFavorite:function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return c.some((function(t){return t.id===e}))}};return Object(d.jsx)(j.Provider,{value:r,children:e.children})},b=n(10),h=n.n(b),O=n(24),m=n.n(O),x=function(e){return Object(d.jsx)("div",{className:m.a.card,children:e.children})},f=n(8),v=n(17),p=n.n(v),_=function(e){return Object(d.jsxs)("div",{className:p.a.modal,children:[Object(d.jsx)("p",{children:"Are you sure?"}),Object(d.jsx)("button",{className:p.a.cancelButton,onClick:e.onClickCancel,children:"Cancel"}),Object(d.jsx)("button",{className:p.a.confirmButton,onClick:e.onClickConfirm,children:"Confirm"})]})},g=n(25),C=n.n(g),y=function(e){var t=e.onClick;return Object(d.jsx)("div",{className:C.a.backdrop,onClick:t})},S=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),i=n[0],r=n[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){r(!0)},children:"Delete"}),i&&Object(d.jsx)(_,{onClickCancel:function(){r(!1)},onClickConfirm:function(){r(!1),e.onDelete(e.id)}}),i&&Object(d.jsx)(y,{onClick:function(){r(!1)}})]})},N=n(31),F=Object(c.createContext)({onDelete:function(){},loadedSets:[]}),I=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),a=Object(o.a)(r,2),s=a[0],l=a[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),b=u[0],h=u[1];Object(c.useEffect)((function(){i(!0),fetch("https://react-meetup-a340c-default-rtdb.firebaseio.com/study-sets.json").then((function(e){return e.json()})).then((function(e){console.log(e);var t=[];for(var n in e){var c=Object(N.a)({id:n},e[n]);t.push(c)}i(!1),l(t),h(!1)}))}),[b]);var O={onDelete:function(){h(!0)},loadedSets:s};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Your study sets"}),Object(d.jsxs)(F.Provider,{value:O,children:[" ",n?Object(d.jsx)("p",{children:"Loading..."}):Object(d.jsx)(H,{studysets:s})]})]})},B=n(30),k=Object(c.createContext)({currentList:[],currentTitle:"",currentDescription:"",currentImage:"",currentId:0,currentIndex:0,currentMode:"",updateInfoHandler:function(e,t,n,c,i){},resetFlashCardMode:function(){},previousItemHandler:function(){},nextItemHandler:function(){},flipHandler:function(){},changeCurrentItem:function(){}}),M=function(e){var t=l("list",[]),n=Object(o.a)(t,2),c=n[0],i=n[1],r=l("title",""),a=Object(o.a)(r,2),s=a[0],j=a[1],u=l("description",""),b=Object(o.a)(u,2),h=b[0],O=b[1],m=l("image",""),x=Object(o.a)(m,2),f=x[0],v=x[1],p=l("id",0),_=Object(o.a)(p,2),g=_[0],C=_[1],y=l("index",0),S=Object(o.a)(y,2),N=S[0],F=S[1],I=l("mode","term"),B=Object(o.a)(I,2),M=B[0],D=B[1],T={currentList:c,currentTitle:s,currentDescription:h,currentImage:f,currentIndex:N,currentId:g,currentMode:M,updateInfoHandler:function(e,t,n,r,a){console.log("Update info"),i(e),j(t),O(n),v(r),C(a),console.log(c),console.log(g)},resetFlashCardMode:function(){F(0),D("term")},nextItemHandler:function(){F((function(e){return e+1<c.length?e+1:e}))},previousItemHandler:function(){F((function(e){return e-1>=0?e-1:e}))},flipHandler:function(){D((function(e){return"term"===e?"definition":"term"}))}};return Object(d.jsx)(k.Provider,{value:T,children:e.children})},D=function(e){Object(s.f)();var t=Object(c.useContext)(j),n=Object(c.useContext)(F),i=Object(c.useContext)(k),r=t.itemIsFavorite(e.id);return Object(d.jsx)("li",{className:h.a.item,children:Object(d.jsxs)(x,{children:[Object(d.jsx)("div",{className:h.a.image,children:e.image?Object(d.jsx)("img",{src:e.image,alt:e.title}):Object(d.jsx)(B.a,{className:h.a.altImg})}),Object(d.jsxs)("div",{className:h.a.content,children:[Object(d.jsx)("h3",{children:e.title}),Object(d.jsx)("p",{children:e.description})]}),Object(d.jsxs)("div",{className:h.a.buttonGroup,children:[Object(d.jsx)("div",{className:h.a.actions,onClick:function(){i.resetFlashCardMode(),i.updateInfoHandler(e.list,e.title,e.description,e.image,e.id)},children:Object(d.jsx)(f.b,{to:{pathname:"/viewset",state:{title:e.title,list:e.list,description:e.description,image:e.image,id:e.id}},children:Object(d.jsx)("button",{children:" Open"})})}),Object(d.jsx)("div",{className:h.a.actions,children:Object(d.jsx)(S,{id:e.id,onDelete:function(e){fetch("https://react-meetup-a340c-default-rtdb.firebaseio.com/study-sets/".concat(e,".json"),{method:"Delete"}).then((function(e){return e.json()})).then((function(e){console.log(e),n.onDelete()}))}})}),Object(d.jsx)("div",{className:h.a.actions,children:Object(d.jsx)("button",{onClick:function(){r?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,description:e.description,image:e.image})},children:r?"Remove from Favorites":"To Favorites"})})]})]})})},T=n(28),w=n.n(T),H=function(e){return Object(d.jsx)("ul",{className:w.a.list,children:e.studysets.length>0?e.studysets.map((function(e){return Object(d.jsx)(D,{id:e.id,image:e.image,title:e.title,description:e.description,list:e.list},e.id)})):"You don't have a study set. Go create one."})},A=function(){var e,t=Object(c.useContext)(j);return e=0===t.totalFavorites?Object(d.jsx)("p",{children:"You got no favorites yet. Start adding some?"}):Object(d.jsx)(H,{studysets:t.favorites}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"My Favorites"}),e]})},L=n(18),E=n.n(L),P=function(){var e=Object(c.useContext)(j);return Object(d.jsxs)("header",{className:E.a.header,children:[Object(d.jsx)("div",{className:E.a.logo,children:"Flashtastic"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(f.b,{to:"/",children:"All Study Sets"})}),Object(d.jsx)("li",{children:Object(d.jsx)(f.b,{to:"/new-set",children:"Create New Study Set"})}),Object(d.jsx)("li",{children:Object(d.jsxs)(f.b,{to:"/favorites",children:["My Favorites",Object(d.jsx)("span",{className:E.a.badge,children:e.totalFavorites})]})})]})})]})},K=n(29),J=n.n(K),G=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(P,{}),Object(d.jsx)("main",{className:J.a.main,children:e.children})]})},q=n(19),R=n(9),U=n.n(R),V=function(e){var t=e.list,n=e.title,i=e.imgurl,r=e.description,a=e.id,s=Object(c.useState)(t||[{term:"",definition:""}]),l=Object(o.a)(s,2),j=l[0],u=l[1],b=Object(c.useState)(n||""),h=Object(o.a)(b,2),O=h[0],m=h[1],f=Object(c.useState)(i||""),v=Object(o.a)(f,2),p=v[0],_=v[1],g=Object(c.useState)(r||""),C=Object(o.a)(g,2),y=C[0],S=C[1],N=function(e,t){var n=e.target,c=n.name,i=n.value;console.log("Name: ",c),console.log("Value: ",i);var r=Object(q.a)(j);r[t][c]=i,u(r)},F=function(){u([].concat(Object(q.a)(j),[{term:"",definition:""}]))};return Object(d.jsx)(x,{children:Object(d.jsxs)("form",{className:U.a.form,onSubmit:function(t){t.preventDefault();var n={title:O,image:p,description:y,list:j};e.onAddSet(n,a)},children:[Object(d.jsxs)("div",{className:U.a.control,children:[Object(d.jsx)("label",{htmlFor:"title",children:"Set Name"}),Object(d.jsx)("input",{type:"text",placeholder:"Create a name for your study set",required:!0,id:"title",value:O,onChange:function(e){return m(e.target.value)}})]}),Object(d.jsxs)("div",{className:U.a.control,children:[Object(d.jsx)("label",{htmlFor:"image",children:" Set Image"}),Object(d.jsx)("input",{type:"url",id:"image",placeholder:"Enter the url for your chosen image for the study set (optional)",value:p,onChange:function(e){return _(e.target.value)}})]}),Object(d.jsxs)("div",{className:U.a.control,children:[Object(d.jsx)("label",{htmlFor:"description",children:" Description"}),Object(d.jsx)("textarea",{id:"description",placeholder:"Say something about the study set (optional)",rows:"5",value:y,onChange:function(e){return S(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"termDefs",children:"Please enter your terms and definitions below:"})]}),Object(d.jsx)("div",{id:"termDefs",children:j.map((function(e,t){return Object(d.jsxs)("div",{className:U.a.control,children:[Object(d.jsx)("div",{className:U.a.counter,children:t+1}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"text",name:"term",placeholder:"Enter term",id:"term".concat(t),value:e.term,required:!0,onChange:function(e){return N(e,t)}}),Object(d.jsx)("input",{type:"text",name:"definition",placeholder:"Enter definition",id:"definition".concat(t),value:e.definition,required:!0,onChange:function(e){return N(e,t)}}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:U.a.buttonBox,children:[1!==j.length&&Object(d.jsx)("button",{className:U.a.removeButton,onClick:function(){return function(e){var t=Object(q.a)(j);t.splice(e,1),u(t)}(t)},children:"Remove"}),j.length-1===t&&Object(d.jsx)("button",{className:U.a.addButton,onClick:F,children:"Add"})]})]})}))}),Object(d.jsx)("div",{className:U.a.actions,children:Object(d.jsx)("input",{type:"submit",value:"Save",className:U.a.submitButton})})]})})},X=function(){var e=Object(s.f)();return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Add New Set"}),Object(d.jsx)(V,{onAddSet:function(t){fetch("https://react-meetup-a340c-default-rtdb.firebaseio.com/study-sets.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){alert("Study set successfully added!"),e.replace("/")}))}})]})},Y=n(15),z=n.n(Y),Q=function(){Object(s.g)().state;var e=Object(c.useContext)(k),t=(Object(c.useContext)(j),e.currentList),n=e.currentTitle,i=e.currentDescription,r=e.currentImage,a=e.currentId;return console.log(e),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:z.a.termTable,children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Term"}),Object(d.jsx)("th",{children:"Definition"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.term}),Object(d.jsx)("td",{children:e.definition})]})}))})]})}),Object(d.jsxs)("div",{className:z.a.actions,children:[Object(d.jsx)(f.b,{to:{pathname:"/editset",state:{list:t,title:n,description:i,image:r,id:a}},children:Object(d.jsx)("button",{className:z.a.editBtn,children:" Edit Set"})}),Object(d.jsx)(f.b,{to:{pathname:"/flashcardMode",state:{list:t}},children:Object(d.jsx)("button",{className:z.a.studyBtn,children:" Study Set"})})]})]})},W=function(){var e=Object(s.f)(),t=Object(c.useContext)(k),n=t.currentList,i=t.currentTitle,r=t.currentDescription,a=t.currentImage,o=t.currentId;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:"Edit Set"}),Object(d.jsx)(V,{onAddSet:function(t,n){fetch("https://react-meetup-a340c-default-rtdb.firebaseio.com/study-sets/".concat(n,".json"),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(t){alert("Edit successful!"),e.replace("/")}))},list:n,title:i,id:o,description:r,imgurl:a})]})},Z=n(12),$=n.n(Z),ee=function(){var e=Object(c.useContext)(k),t=e.currentIndex,n=(e.currentList,e.currentMode),i=e.currentList[t];return Object(d.jsxs)("div",{className:$.a.card,children:[Object(d.jsx)("a",{className:$.a.displayArea,children:Object(d.jsx)("p",{children:i[n]})}),Object(d.jsxs)("div",{className:$.a.actionCenter,children:[Object(d.jsx)("a",{className:$.a.previousBtn,title:"previous",onClick:function(){e.previousItemHandler()},children:" \u276e "}),Object(d.jsx)("button",{className:$.a.flipBtn,onClick:function(){e.flipHandler()},children:" Flip Card"}),Object(d.jsx)("a",{className:$.a.nextBtn,title:"next",onClick:function(){e.nextItemHandler()},children:"\u276f"})]})]})},te=function(){Object(s.f)();var e=Object(c.useContext)(k).currentList;return console.log("Data: ",e),Object(d.jsx)(ee,{})};var ne=function(){return Object(d.jsx)(G,{children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",children:Object(d.jsx)(I,{})}),Object(d.jsx)(s.a,{path:"/new-set",children:Object(d.jsx)(X,{})}),Object(d.jsx)(s.a,{path:"/favorites",children:Object(d.jsx)(A,{})}),Object(d.jsx)(s.a,{path:"/viewset",children:Object(d.jsx)(Q,{})}),Object(d.jsx)(s.a,{path:"/editset",children:Object(d.jsx)(W,{})}),Object(d.jsx)(s.a,{path:"/flashcardMode",children:Object(d.jsx)(te,{})})]})})};a.a.render(Object(d.jsx)(u,{children:Object(d.jsx)(M,{children:Object(d.jsx)(f.a,{children:Object(d.jsx)(ne,{})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"FlashcardForm_form__wRPwI",control:"FlashcardForm_control__Bb0eW",counter:"FlashcardForm_counter__2jXjK",actions:"FlashcardForm_actions__3gri3",removeButton:"FlashcardForm_removeButton__1Thy9",addButton:"FlashcardForm_addButton__1cLIX",submitButton:"FlashcardForm_submitButton__3rrQ8"}}},[[46,1,2]]]);
//# sourceMappingURL=main.485a5f5c.chunk.js.map