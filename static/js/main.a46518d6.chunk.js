(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{32:function(t,e,a){"use strict";a.r(e);var c=a(0),s=a(1),r=a.n(s),l=a(20),i=a.n(l),o=a(13),n=a(11),j=a(7),d=a(2),b=a.p+"static/media/barrels.0efe09c4.jpg",h=a.p+"static/media/Budweiser.0172cd68.jpg",m=a.p+"static/media/Busch.1c32286d.gif",S=a.p+"static/media/Corona.aeffcab9.jpg",x=a.p+"static/media/Michelob.1c7dc63c.jpg",p=a.p+"static/media/Natural.62d2a08b.jpg",O=a.p+"static/media/ShockTop.8e8252be.jpg";var u=function(){return Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"pt-3",children:"Welcome to Cerveza Heaven"}),Object(c.jsx)("h5",{children:"The land of all beers"}),Object(c.jsx)("img",{src:b,style:{width:"500px"},className:"mt-2 mb-2 img-thumbnail",alt:"Barrels of Beer"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Our Story"}),Object(c.jsxs)("p",{className:"p-5 ml-5 mr-5",children:["Cerveza Heaven was started by a pair of young entrepreneurs that had a love for beer. It did not matter whether the beer came from a local gas station, their uncle's garage brewery, or the cooler section of a Walmart. One day, Bill and Ted decided to switch it up from their long time favorite beer, Busch Lite, and try a beer so magnificent that a virus was named after it. That's right, Bill and Ted tried the one and only Corona. They soon found out that Mexican beer can be just as good, if not better than the classNamey Busch Lite. After having a few sips of Corona, Ted had an epiphany. He told Bill that they should open a liquor store and sell only Anheuser-Busch and Corona products. Bill was ecstatic about the idea and agreed to join Ted in the business. Bill and Ted needed an investor in their business, and this is where I came into the picture. I decided to help fund Bill and Ted's idea, and we came to an agreement that I would get 69% of the business. Unfortunately, both of them have left me stranded with the business. You see, Bill and Ted went on a haitus, an excellent adventure if you will. I have not heard from them in years, however I bring you",Object(c.jsx)("strong",{children:" Cerveza Heaven"}),", the heaven for Corona and Busch fans alike."]})]}),Object(c.jsxs)("div",{className:"container pt-3",children:[Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:"Proud Supplier of"})}),Object(c.jsxs)("div",{className:"row pt-3",children:[Object(c.jsx)("a",{className:"col-sm-4",href:"/shop/#budweiser",title:"Budwesier",children:Object(c.jsx)("img",{src:h,className:"p-2",width:"100%",alt:"Budweiser Logo"})}),Object(c.jsx)("a",{className:"col-sm-4",href:"/shop/#busch",title:"Buschhhhhhh",children:Object(c.jsx)("img",{src:m,className:"p-2",width:"100%",alt:"Busch Lite Logo"})}),Object(c.jsx)("a",{className:"col-sm-4",href:"/shop/#corona",title:"Corona Extra",children:Object(c.jsx)("img",{src:S,className:"p-2",width:"100%",alt:"Corona Logo"})})]}),Object(c.jsxs)("div",{className:"row pt-3 pb-3",children:[Object(c.jsx)("a",{className:"col-sm-4",href:"/shop/#michelob",title:"Michelob Ultra",children:Object(c.jsx)("img",{src:x,className:"p-2",width:"100%",alt:"Michelob Ultra Logo"})}),Object(c.jsx)("a",{className:"col-sm-4",href:"/shop/#natural",title:"Natty Light",children:Object(c.jsx)("img",{src:p,className:"p-2",width:"100%",alt:"Natural Light Logo"})}),Object(c.jsx)("a",{className:"col-sm-4",href:"/shop/#shocktop",title:"Shock Top",children:Object(c.jsx)("img",{src:O,className:"p-2",width:"85%",alt:"Shock Top Logo"})})]})]})]})},g=a.p+"static/media/beer.0292ebd2.jpg",N=function(){return Object(c.jsxs)("nav",{className:"navbar sticky-top navbar-expand navbar-light bg-light",children:[Object(c.jsxs)("ul",{className:"nav navbar-nav pl-2",children:[Object(c.jsx)(j.b,{to:"/",children:Object(c.jsx)("li",{className:"nav-item nav-link",children:Object(c.jsx)("img",{src:g,alt:"beer logo",height:"30px"})})}),Object(c.jsx)(j.b,{style:{textDecoration:"none"},to:"/",children:Object(c.jsx)("li",{className:"nav-item nav-link",children:"Home"})}),Object(c.jsx)(j.b,{style:{textDecoration:"none"},to:"/shop",children:Object(c.jsx)("li",{className:"nav-item nav-link",children:"Shop"})})]}),Object(c.jsx)("ul",{className:"nav navbar-nav pr-2 ml-auto",children:Object(c.jsx)(j.b,{to:"/cart",children:Object(c.jsx)("i",{className:"fa fa-shopping-cart",style:{fontSize:"30px",color:"black",cursor:"pointer"}})})})]})},v=a(12),C=function(t){var e=Object(s.useState)(0),a=Object(n.a)(e,2),r=a[0],l=a[1];return Object(c.jsx)("div",{className:"border",children:Object(c.jsxs)("div",{className:"p-3 text-center",children:[Object(c.jsx)("img",{src:t.img,alt:t.name,width:"80%"}),Object(c.jsx)("p",{className:"m-0",children:t.name}),Object(c.jsxs)("p",{className:"m-1",children:["Price: $ ",t.price]}),Object(c.jsx)("label",{htmlFor:"quantity",className:"pr-1",children:"Quantity"}),Object(c.jsx)("input",{type:"number",style:{width:"50px"},id:"quantity",min:"1",onChange:function(t){return l(parseFloat(t.target.value))}}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){return function(){if(r>0){var e=t.price*r;t.setTotal(t.totalState+e);for(var a=!1,c=0;c<t.cartState.length;c++)t.name===t.cartState[c][0]&&(a=!0);if(a){for(var s=0;s<t.cartState.length;s++)if(t.name===t.cartState[s][0]){var l=Object(v.a)(t.cartState);l[s][2]+=r,l[s][3]+=e,t.setCartState(l)}}else t.setCartState((function(a){return[].concat(Object(v.a)(a),[[t.name,t.price,r,e]])}))}else alert("Quantity must be greater than 0")}()},children:"Add to Cart"})]})})},T=a.p+"static/media/bud1.cef74e9b.jpg",f=a.p+"static/media/bud2.3dedd2e0.jpg",w=a.p+"static/media/bud3.07003f84.jpg",y=a.p+"static/media/bud4.2e098471.jpg",k=function(t){return Object(c.jsx)("div",{id:"budwesier",children:Object(c.jsxs)("div",{className:"container text-center",children:[Object(c.jsx)("h3",{className:"pt-4 pb-2",children:"Budweiser"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:T,name:"Budweiser 16 oz",price:1.25,cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:f,name:"Budweiser 6 pack",price:Number(5).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:w,name:"Budweiser 40 oz",price:Number(2.5).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:y,name:"Budweiser 30 pack",price:Number(23).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})})]})]})})},B=a.p+"static/media/busch1.308b9d49.jpg",F=a.p+"static/media/busch2.3aede8ae.jpeg",z=a.p+"static/media/busch3.6b95ac92.jpeg",L=a.p+"static/media/busch4.67ceb5e9.jpg",M=function(t){return Object(c.jsx)("div",{id:"busch",children:Object(c.jsxs)("div",{className:"container text-center",children:[Object(c.jsx)("h3",{className:"pt-4 pb-2",children:"Busch"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:B,name:"Busch 16 oz",price:Number(1).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:F,name:"Busch 6 pack",price:Number(5).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:z,name:"Busch 40 oz",price:Number(2.5).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:L,name:"Busch 30 pack",price:Number(20).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})})]})]})})},U=a.p+"static/media/corona1.e10ba5ee.jpg",I=a.p+"static/media/corona2.f055a84c.jpg",H=a.p+"static/media/corona3.e1434df5.jpg",q=a.p+"static/media/corona4.35552503.jpg",A=function(t){return Object(c.jsx)("div",{id:"corona",children:Object(c.jsxs)("div",{className:"container text-center",children:[Object(c.jsx)("h3",{className:"pt-4 pb-2",children:"Corona"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:U,name:"Corona 16 oz",price:Number(1).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:I,name:"Corona 6 pack",price:Number(5).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:H,name:"Corona 40 oz",price:Number(2.5).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:q,name:"Corona 24 pack",price:Number(22).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})})]})]})})},P=a.p+"static/media/michelob1.e94a35ed.jpg",Q=a.p+"static/media/michelob2.874a6c36.jpeg",$=a.p+"static/media/michelob3.ce209525.jpeg",D=a.p+"static/media/michelob4.a26753dc.jpeg",E=function(t){return Object(c.jsx)("div",{id:"michelob",children:Object(c.jsxs)("div",{className:"container text-center",children:[Object(c.jsx)("h3",{className:"pt-4 pb-2",children:"Michelob Ultra"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:P,name:"Michelob Ultra 25 oz",price:Number(2).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:Q,name:"Michelob Ultra 6 pack",price:Number(5).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:$,name:"Michelob Ultra 25 oz",price:Number(2).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:D,name:"Michelob Ultra 12 pack",price:Number(22).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})})]})]})})},J=a.p+"static/media/natty1.8ed11b37.jpeg",W=a.p+"static/media/natty2.7419fdd7.jpeg",Y=a.p+"static/media/natty3.76366195.jpeg",G=a.p+"static/media/natty4.90b79440.jpg",K=function(t){return Object(c.jsx)("div",{id:"natural",children:Object(c.jsxs)("div",{className:"container text-center",children:[Object(c.jsx)("h3",{className:"pt-4 pb-2",children:"Natural Light"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:J,name:"Natural Light 25 oz",price:Number(1).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:W,name:"Natural Light 6 pack",price:Number(5).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:Y,name:"Natural Light 32 oz",price:Number(2).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:G,name:"Natural Light 30 pack",price:Number(21).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})})]})]})})},R=a.p+"static/media/shocktop1.e76a710e.jpg",V=a.p+"static/media/shocktop2.2d6e4531.jpg",X=a.p+"static/media/shocktop3.a88d044b.jpeg",Z=a.p+"static/media/shocktop4.260f9b9d.jpg",_=function(t){return Object(c.jsxs)("div",{id:"shocktop",children:[Object(c.jsxs)("div",{className:"container text-center",children:[Object(c.jsx)("h3",{className:"pt-4 pb-2",children:"Shock Top"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:R,name:"Shock Top 16 oz",price:Number(1).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:V,name:"Shock Top 6 pack",price:Number(5).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:X,name:"Shock Top 25 oz",price:Number(2).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})}),Object(c.jsx)("div",{className:"col-lg-3",children:Object(c.jsx)(C,{img:Z,name:"Shock Top 24 pack",price:Number(25).toFixed(2),cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})})]})]}),Object(c.jsx)("br",{})]})},tt=function(t){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"pt-3 text-center",children:"Shop Your Favorites"}),Object(c.jsx)(k,{cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState}),Object(c.jsx)(M,{cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState}),Object(c.jsx)(A,{cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState}),Object(c.jsx)(E,{cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState}),Object(c.jsx)(K,{cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState}),Object(c.jsx)(_,{cartState:t.cartState,totalState:t.totalState,setTotal:t.setTotal,setCartState:t.setCartState})]})},et=function(t){var e=function(e){for(var a,c,s=Object(v.a)(t.cartState),r=0;r<s.length;r++)e===s[r][0]&&(a=r,c=s[r][3]);s.splice(a,1),t.setTotal(t.totalState-c),t.setCartState(s)};return Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("h1",{children:"Cart"}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"Price"}),Object(c.jsx)("th",{scope:"col",children:"Quantity"}),Object(c.jsx)("th",{scope:"col",children:"Total"}),Object(c.jsx)("th",{scope:"col"})]})}),Object(c.jsx)("tbody",{children:function(){for(var a=[],s=function(s){a.push(Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.cartState[s][0]}),Object(c.jsxs)("td",{children:["$",Number(t.cartState[s][1]).toFixed(2)]}),Object(c.jsx)("td",{children:t.cartState[s][2]}),Object(c.jsx)("td",{children:Number(t.cartState[s][3]).toFixed(2)}),Object(c.jsx)("td",{children:Object(c.jsx)("i",{className:"fa fa-trash",onClick:function(){return e(t.cartState[s][0])},style:{fontSize:"25px",color:"red",cursor:"pointer"}})})]}))},r=0;r<t.cartState.length;r++)s(r);return a}()})]}),function(){if(t.totalState>0)return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h5",{children:["Total: $",Number(t.totalState).toFixed(2)]}),Object(c.jsx)("div",{className:"pt-3 row",children:Object(c.jsxs)("div",{className:"mx-auto",children:[Object(c.jsx)(j.b,{to:"/shop",children:Object(c.jsx)("button",{className:"btn btn-secondary mr-5",children:"Continue Shopping"})}),Object(c.jsx)("button",{className:"btn btn-primary ml-5",onClick:function(){return alert("Sorry you can't actually checkout")},children:"Checkout"})]})})]})}()]})},at=function(){var t=Object(s.useState)([]),e=Object(n.a)(t,2),a=e[0],r=e[1],l=Object(s.useState)(0),i=Object(n.a)(l,2),b=i[0],h=i[1];return Object(c.jsx)("div",{children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)(N,{}),Object(c.jsx)(d.a,{path:"/",exact:!0,component:u}),Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/",exact:!0,component:u}),Object(c.jsx)(d.a,{path:"/shop",render:function(t){return Object(c.jsx)(tt,Object(o.a)(Object(o.a)({},t),{},{totalState:b,setTotal:h,cartState:a,setCartState:r}))}}),Object(c.jsx)(d.a,{path:"/cart",render:function(t){return Object(c.jsx)(et,Object(o.a)(Object(o.a)({},t),{},{totalState:b,setTotal:h,cartState:a,setCartState:r}))}})]})]})})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(at,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a46518d6.chunk.js.map