(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi",errorContainer:"AvailableMeals_errorContainer__3i9mB",mealsLoading:"AvailableMeals_mealsLoading__Yyvu4",button:"AvailableMeals_button__2zq6R"}},,,,function(e,t,n){e.exports={form:"Checkout_form__26gr1",control:"Checkout_control__2qGfb",actions:"Checkout_actions__2X_6_",submit:"Checkout_submit__2BFZZ",invalid:"Checkout_invalid__2gAN9"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t",register:"Cart_register__V0jRJ",ticket:"Cart_ticket__3EKcY",totalTicket:"Cart_totalTicket__2lz8L",entry:"Cart_entry__2-FIr"}},function(e,t,n){e.exports={orderContainer:"Orders_orderContainer__3wZ6H",order:"Orders_order__UVVA9",card:"Orders_card__25AE6",description:"Orders_description__CsOgs",price:"Orders_price__2q6Jn",amount:"Orders_amount__1Kh3M"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={card:"CategoriesMeals_card__K-1E1","slide-down":"CategoriesMeals_slide-down__HsHMF",container:"CategoriesMeals_container__iHaP4"}},,,function(e,t,n){e.exports={button:"HeaderCardButton_button__1KLkF",icon:"HeaderCardButton_icon__1QA8p",badge:"HeaderCardButton_badge__d6oq0",bump:"HeaderCardButton_bump__2uebu"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},function(e,t,n){e.exports={social:"Footer_social__2M4qp",copyright:"Footer_copyright__1ZVtY",line:"Footer_line__2Ot28"}},function(e,t,n){e.exports={meal:"MealItem_meal__mf3yT",description:"MealItem_description__khXbc",price:"MealItem_price__2IMkY"}},,,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,,,function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__Tfl_k"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(16),a=n.n(c),r=n(32),s=n(3),i=n(1),o=n.n(i),l=n(2),d=n(25),j=n(9),u=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),b=n(0),m={items:[],totalAmount:0},O=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var s=Object(j.a)(Object(j.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(d.a)(e.items))[a]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var b=Object(j.a)(Object(j.a)({},l),{},{amount:l.amount-1});(i=Object(d.a)(e.items))[o]=b}return{items:i,totalAmount:u}}return t.type,m},h=function(e){var t=Object(i.useReducer)(O,m),n=Object(l.a)(t,2),c=n[0],a=n[1],r={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(b.jsx)(u.Provider,{value:r,children:e.children})},x=n(24),p=n.n(x),f=n.p+"static/media/tuc.b5a222c7.jpg",_=n(18),v=n.n(_),C=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},N=function(e){var t=Object(i.useState)(!0),n=Object(l.a)(t,2),c=n[0],a=n[1],r=Object(i.useContext)(u).items,s=r.reduce((function(e,t){return e+t.amount}),0),o="".concat(v.a.button," ").concat(c?v.a.bump:"");return Object(i.useEffect)((function(){if(0!==r.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[r]),Object(b.jsxs)("button",{onClick:e.onClick,className:o,children:[Object(b.jsx)("span",{className:v.a.icon,children:Object(b.jsx)(C,{})}),Object(b.jsx)("span",{children:"Tu Pedido"}),Object(b.jsx)("span",{className:v.a.badge,children:s})]})},g=function(e){return Object(b.jsxs)(o.a.Fragment,{children:[Object(b.jsxs)("header",{className:p.a.header,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"LOS HORNOS"})}),Object(b.jsx)(N,{onClick:e.onShowCart})]}),Object(b.jsx)("div",{className:p.a["main-image"],children:Object(b.jsx)("img",{src:f,alt:"Food table"})})]})},k=n(7),w=n(5),A=n.n(w),y=n(12),S=n.n(y),M=n(11),E=n.n(M),I=function(e){var t=Object(i.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(!0),s=Object(l.a)(r,2),o=s[0],d=s[1],j=Object(i.useState)(null),m=Object(l.a)(j,2),O=m[0],h=m[1],x=Object(i.useContext)(u),p=function(){x.clearCart()};if(Object(i.useEffect)((function(){var e=function(){var e=Object(k.a)(A.a.mark((function e(){var t,n,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://menu-app-d307a-default-rtdb.firebaseio.com/orders.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,orderedItems:n[r].orderedItems,total:n[r].total,user:n[r].user});a(c),d(!1),console.log(c);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setInterval((function(){e()}),1e4),e().catch((function(e){d(!1),h(e.message)}))}),[]),o)return Object(b.jsx)("section",{className:E.a.mealsLoading,children:Object(b.jsx)("p",{children:"Loading..."})});if(O)return Object(b.jsx)("section",{className:E.a.mealsLoading,children:Object(b.jsx)("p",{children:S.a.fire({icon:"error",title:"Oops...",text:O})})});var f=c.reverse().map((function(e){return Object(b.jsx)("li",{className:E.a.order,children:Object(b.jsxs)("div",{className:E.a.card,children:[Object(b.jsx)("h3",{children:e.user.name}),Object(b.jsx)("div",{children:e.orderedItems.map((function(e){return Object(b.jsxs)("div",{className:E.a.description,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:e.name}),Object(b.jsx)("p",{children:e.amount*e.price})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{className:E.a.amount,children:[" x ",e.amount]})})]})}))}),Object(b.jsxs)("div",{className:E.a.price,children:[Object(b.jsxs)("p",{children:["Total: ",e.total.toFixed(2)]}),Object(b.jsx)("button",{onClick:p,children:"Eliminar"})]})]})})}));return Object(b.jsx)("section",{className:E.a.orderContainer,children:Object(b.jsx)("div",{children:f})})},B=function(){return Object(b.jsx)(h,{children:Object(b.jsx)(I,{})})},F=(n(49),n(19)),L=n.n(F),P=function(e){return Object(b.jsx)("div",{className:L.a.backdrop,onClick:e.onClose})},R=function(e){return Object(b.jsx)("div",{className:L.a.modal,children:Object(b.jsx)("div",{className:L.a.content,children:e.children})})},H=document.getElementById("overlays"),G=function(e){return Object(b.jsxs)(o.a.Fragment,{children:[a.a.createPortal(Object(b.jsx)(P,{onClose:e.onClose}),H),a.a.createPortal(Object(b.jsx)(R,{children:e.children}),H)]})},T=n(10),D=n.n(T),V=n(14),z=n.n(V),q=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:z.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:z.a.summary,children:[Object(b.jsx)("span",{className:z.a.price,children:t}),Object(b.jsxs)("span",{className:z.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:z.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},J=n(8),U=n.n(J),Z=function(e){return 0===e.trim().length},K=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(l.a)(t,2),c=n[0],a=n[1],r=Object(i.useRef)(),s=Object(i.useRef)(),o=Object(i.useRef)(),d=Object(i.useRef)();return Object(b.jsxs)("form",{className:U.a.form,onSubmit:function(t){t.preventDefault();var n=r.current.value,c=s.current.value,i=o.current.value,l=d.current.value,j=!Z(n),u=!Z(c),b=!Z(l),m=!(5!==i.trim().length);a({name:j,street:u,city:b,postalCode:m}),j&&b&&u&&m&&e.onConfirm({name:n,street:c,city:l,postalCode:i})},children:[Object(b.jsxs)("div",{className:"".concat(U.a.control," ").concat(c.name?"":U.a.invalid),children:[Object(b.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(b.jsx)("input",{type:"text",id:"name",ref:r}),!c.name&&Object(b.jsx)("p",{children:"Please enter a valid name!"})]}),Object(b.jsxs)("div",{className:"".concat(U.a.control," ").concat(c.street?"":U.a.invalid),children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{type:"text",id:"street",ref:s}),!c.street&&Object(b.jsx)("p",{children:"Please enter a valid street!"})]}),Object(b.jsxs)("div",{className:"".concat(U.a.control," ").concat(c.postalCode?"":U.a.invalid),children:[Object(b.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(b.jsx)("input",{type:"text",id:"postal",ref:o}),!c.postalCode&&Object(b.jsx)("p",{children:"Please enter a valid postal code (5 characters long)"})]}),Object(b.jsxs)("div",{className:"".concat(U.a.control," ").concat(c.city?"":U.a.invalid),children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(b.jsx)("p",{children:"Please enter a valid city!"})]}),Object(b.jsxs)("div",{className:U.a.actions,children:[Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(b.jsx)("button",{className:U.a.submit,children:"Confirm"})]})]})},Q=function(e){var t=Object(i.useState)(!1),n=Object(l.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(!1),s=Object(l.a)(r,2),o=s[0],d=s[1],m=Object(i.useState)(!1),O=Object(l.a)(m,2),h=O[0],x=O[1],p=Object(i.useContext)(u),f="$".concat(p.totalAmount.toFixed(2)),_=p.items.length>0,v=function(e){p.addItem(Object(j.a)(Object(j.a)({},e),{},{amount:1}))},C=function(e){p.removeItem(e)},N=function(){var e=Object(k.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://menu-app-d307a-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:p.items,total:p.totalAmount})});case 3:d(!1),x(!0),p.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Object(b.jsx)("ul",{className:D.a["cart-items"],children:p.items.map((function(e){return Object(b.jsx)(q,{name:e.name,amount:e.amount,price:e.price,onAdd:v.bind(null,e),onRemove:C.bind(null,e.id)},e.id)}))}),w=Object(b.jsxs)("div",{className:D.a.actions,children:[Object(b.jsx)("button",{onClick:e.onClose,className:D.a["button--alt"],children:"Cerrar"}),_&&Object(b.jsx)("button",{className:D.a.button,onClick:function(){a(!0)},children:"Pedir"})]}),y=Object(b.jsxs)(i.Fragment,{children:[g,Object(b.jsxs)("div",{className:D.a.total,children:[Object(b.jsx)("span",{children:"Total:"}),Object(b.jsx)("span",{children:f})]}),c&&Object(b.jsx)(K,{onConfirm:N,onCancel:e.onClose}),!c&&w]}),S=Object(b.jsx)("p",{children:"Enviando el pedido... "}),M=Object(b.jsxs)(i.Fragment,{children:[Object(b.jsx)("div",{className:D.a.register,children:Object(b.jsxs)("div",{className:D.a.ticket,children:[Object(b.jsx)("h1",{children:"Muchas Gracias!"}),Object(b.jsx)("p",{children:"Pedido enviado correctamente!"})]})}),Object(b.jsx)("div",{className:D.a.actions,children:Object(b.jsx)("button",{onClick:e.onClose,className:D.a.button,children:"Cerrar"})})]});return Object(b.jsxs)(G,{onClose:e.onClose,children:[!o&&!h&&y,o&&S,h&&M]})},X=n(20),Y=n.n(X),$=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{className:Y.a.line}),Object(b.jsxs)("ul",{className:Y.a.social,children:[Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"Sobre Nosotros"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"Contacto"})}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{children:"Redes Sociales"})})]}),Object(b.jsx)("p",{className:Y.a.copyright,children:"\xa9 2021 Mat\xedas A. Maldonado. All Rights Reserved. Terms, Privacy & Accessibility"})]})},W=n(4),ee=n.n(W),te=n(21),ne=n.n(te),ce=n(28),ae=n.n(ce),re=o.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:ae.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(j.a)({ref:t},e.input))]})})),se=n(29),ie=n.n(se),oe=function(e){var t=Object(i.useState)(!0),n=Object(l.a)(t,2),c=n[0],a=n[1],r=Object(i.useRef)();return Object(b.jsxs)("form",{className:ie.a.form,onSubmit:function(t){t.preventDefault();var n=r.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(b.jsx)(re,{ref:r,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(b.jsx)("button",{children:"+ Agregar"}),!c&&Object(b.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})},le=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:ne.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:ne.a.description,children:e.description}),Object(b.jsx)("div",{className:ne.a.price,children:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)(oe,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},de=n(30),je=n.n(de),ue=function(e){return Object(b.jsx)("div",{className:"".concat(je.a.card," ").concat(e.className),children:e.children})},be=function(e){var t=Object(i.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(!0),s=Object(l.a)(r,2),o=s[0],d=s[1],j=Object(i.useState)(null),u=Object(l.a)(j,2),m=u[0],O=u[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(k.a)(A.a.mark((function e(){var t,n,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://menu-app-d307a-default-rtdb.firebaseio.com/Empanadas.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),d(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){d(!1),O(e.message)}))}),[]),o)return Object(b.jsx)("section",{className:ee.a.mealsLoading,children:Object(b.jsx)("p",{children:"Loading..."})});if(m){var h=Object(b.jsx)("button",{className:ee.a.button,onClick:e.onGoBack,children:"Atr\xe1s"});return Object(b.jsx)("div",{className:ee.a.errorContainer,children:Object(b.jsxs)(ue,{className:ee.a.mealsLoading,children:[Object(b.jsx)("p",{children:m}),h]})})}var x=c.map((function(e){return Object(b.jsx)(le,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:ee.a.meals,children:Object(b.jsxs)(ue,{children:[Object(b.jsx)("ul",{children:x}),Object(b.jsx)("button",{className:ee.a.button,onClick:e.onGoBack,children:"Atr\xe1s"})]})})},me=n(15),Oe=n.n(me),he=function(e){return Object(b.jsxs)("div",{className:Oe.a.container,children:[Object(b.jsx)("div",{onClick:e.onAddMeal,className:Oe.a.card,children:Object(b.jsx)("h2",{children:"Empanadas"})}),Object(b.jsx)("div",{onClick:e.onAddParrilla,className:Oe.a.card,children:Object(b.jsx)("h2",{children:"Parrillada"})}),Object(b.jsx)("div",{onClick:e.onAddEnsalada,className:Oe.a.card,children:Object(b.jsx)("h2",{children:"Ensaladas"})}),Object(b.jsx)("div",{onClick:e.onAddBebidas,className:Oe.a.card,children:Object(b.jsx)("h2",{children:"Bebidas"})})]})},xe=n(31),pe=n.n(xe),fe=function(){return Object(b.jsxs)("section",{className:pe.a.summary,children:[Object(b.jsx)("h2",{children:"32 a\xf1os compartiendo sabores"}),Object(b.jsx)("p",{children:"Desde 1989 ofreciendo las mejores empanadas de la provincia, adem\xe1s contamos con distintos cortes de carne hechos a la parrilla con productos de primera calidad."})]})},_e=function(e){var t=Object(i.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(!0),s=Object(l.a)(r,2),o=s[0],d=s[1],j=Object(i.useState)(null),u=Object(l.a)(j,2),m=u[0],O=u[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(k.a)(A.a.mark((function e(){var t,n,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://menu-app-d307a-default-rtdb.firebaseio.com/Parrillada.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),d(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){d(!1),O(e.message)}))}),[]),o)return Object(b.jsx)("section",{className:ee.a.mealsLoading,children:Object(b.jsx)("p",{children:"Loading..."})});if(m){var h=Object(b.jsx)("button",{className:ee.a.button,onClick:e.onGoBack,children:"Atr\xe1s"});return Object(b.jsx)("div",{className:ee.a.errorContainer,children:Object(b.jsxs)(ue,{className:ee.a.mealsLoading,children:[Object(b.jsx)("p",{children:m}),h]})})}var x=c.map((function(e){return Object(b.jsx)(le,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:ee.a.meals,children:Object(b.jsxs)(ue,{children:[Object(b.jsx)("ul",{children:x}),Object(b.jsx)("button",{className:ee.a.button,onClick:e.onGoBack,children:"Atr\xe1s"})]})})},ve=function(e){var t=Object(i.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(!0),s=Object(l.a)(r,2),o=s[0],d=s[1],j=Object(i.useState)(null),u=Object(l.a)(j,2),m=u[0],O=u[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(k.a)(A.a.mark((function e(){var t,n,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://menu-app-d307a-default-rtdb.firebaseio.com/Ensaladas.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),d(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){d(!1),O(e.message)}))}),[]),o)return Object(b.jsx)("section",{className:ee.a.mealsLoading,children:Object(b.jsx)("p",{children:"Loading..."})});if(m){var h=Object(b.jsx)("button",{className:ee.a.button,onClick:e.onGoBack,children:"Atr\xe1s"});return Object(b.jsx)("div",{className:ee.a.errorContainer,children:Object(b.jsxs)(ue,{className:ee.a.mealsLoading,children:[Object(b.jsx)("p",{children:m}),h]})})}var x=c.map((function(e){return Object(b.jsx)(le,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:ee.a.meals,children:Object(b.jsxs)(ue,{children:[Object(b.jsx)("ul",{children:x}),Object(b.jsx)("button",{className:ee.a.button,onClick:e.onGoBack,children:"Atr\xe1s"})]})})},Ce=function(e){var t=Object(i.useState)([]),n=Object(l.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(!0),s=Object(l.a)(r,2),o=s[0],d=s[1],j=Object(i.useState)(null),u=Object(l.a)(j,2),m=u[0],O=u[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(k.a)(A.a.mark((function e(){var t,n,c,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://menu-app-d307a-default-rtdb.firebaseio.com/Bebidas.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),d(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){d(!1),O(e.message)}))}),[]),o)return Object(b.jsx)("section",{className:ee.a.mealsLoading,children:Object(b.jsx)("p",{children:"Loading..."})});if(m){var h=Object(b.jsx)("button",{className:ee.a.button,onClick:e.onGoBack,children:"Atr\xe1s"});return Object(b.jsx)("div",{className:ee.a.errorContainer,children:Object(b.jsxs)(ue,{className:ee.a.mealsLoading,children:[Object(b.jsx)("p",{children:m}),h]})})}var x=c.map((function(e){return Object(b.jsx)(le,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:ee.a.meals,children:Object(b.jsxs)(ue,{children:[Object(b.jsx)("ul",{children:x}),Object(b.jsx)("button",{className:ee.a.button,onClick:e.onGoBack,children:"Atr\xe1s"})]})})},Ne=function(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1],a=function(){c(0)};return Object(b.jsxs)(o.a.Fragment,{children:[Object(b.jsx)(fe,{}),0===n&&Object(b.jsx)(he,{onAddMeal:function(){c(1)},onAddParrilla:function(){c(2)},onAddEnsalada:function(){c(3)},onAddBebidas:function(){c(4)}}),1===n&&Object(b.jsx)(be,{onGoBack:a}),2===n&&Object(b.jsx)(_e,{onGoBack:a}),3===n&&Object(b.jsx)(ve,{onGoBack:a}),4===n&&Object(b.jsx)(Ce,{onGoBack:a})]})};var ge=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(h,{children:[n&&Object(b.jsx)(Q,{onClose:function(){c(!1)}}),Object(b.jsx)(g,{onShowCart:function(){c(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(Ne,{})}),Object(b.jsx)($,{})]})};a.a.render(Object(b.jsx)(r.a,{children:Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:"/",element:Object(b.jsx)(ge,{})}),Object(b.jsx)(s.a,{path:"admin",element:Object(b.jsx)(B,{})})]})}),document.getElementById("root"))}],[[50,1,2]]]);
//# sourceMappingURL=main.7c77061b.chunk.js.map