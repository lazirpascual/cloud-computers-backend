(this["webpackJsonpshopping-website"]=this["webpackJsonpshopping-website"]||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),i=a.n(r),o=(a(54),a(27)),s=a(14),l=a(59),d=a(100),j=a(18),u=a(45),b=a.n(u),h="/api/cartitems",m={getAll:function(){return b.a.get(h).then((function(e){return e.data}))},create:function(e){return b.a.post(h,e).then((function(e){return e.data}))},update:function(e,t){return b.a.put("".concat(h,"/").concat(e),t).then((function(e){return e.data}))},remove:function(e){return b.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))}},O=a(2),p=Object(n.createContext)(),x=function(e){var t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){m.getAll().then((function(e){r(e)}))}),[]);var i=function(e){var t=e.quantity*e.price;return Math.round(100*t)/100};return Object(O.jsx)(p.Provider,{value:{productList:c,addProduct:function(e){var t=c,a=t.findIndex((function(t){return t.name===e.name}));a>=0?(t[a].quantity++,r(t)):m.create(e).then((function(e){r([].concat(Object(d.a)(c),[e]))}))},deleteProduct:function(e){window.confirm("Remove This Product?")&&m.remove(e).then((function(){r(c.filter((function(t){return t.id!==e})))}))},calculateSubtotal:i,calculateOrderTotal:function(){var e=c.reduce((function(e,t){return e+i(t)}),0);return Math.round(100*e)/100},calculateTotalQuantity:function(){return c.reduce((function(e,t){return e+t.quantity}),0)},updateQuantity:function(e,t){var a=Object(l.a)(Object(l.a)({},t),{},{quantity:e});m.update(t.id,a).then((function(e){r(c.map((function(a){return a.id!==t.id?a:e})))})).catch((function(e){console.log(e.response.data)}))},updateCartState:function(){var e=c.filter((function(e){return e}));r(e)}},children:e.children})},g=a(89),f=a(183),v=a(185),y=a(95),N=a.n(y),C=a(181),w=a(182),T=a(186),S=a(198),P=Object(g.a)((function(e){return{header:{backgroundColor:"inherit",color:"black",boxShadow:"0px 0px 0px 0px",marginTop:100,height:0},spacing:{fontSize:"25px",marginLeft:100,marginRight:100,textDecoration:"none",color:"inherit"},company:{fontSize:"25px",marginLeft:100,marginRight:"auto",textDecoration:"none",color:"inherit"},navbar:{marginBottom:200}}})),L=function(){var e=P(),t=Object(n.useContext)(p).calculateTotalQuantity,a=Object(C.a)(),c=Object(s.g)().pathname.split("/")[1];return Object(O.jsxs)("div",{className:e.navbar,children:[Object(O.jsx)(w.a,{appear:!1,direction:"down",in:!a,children:Object(O.jsx)(f.a,{position:"fixed",className:e.header,children:Object(O.jsxs)(v.a,{className:c||"home",children:[Object(O.jsx)(o.b,{to:"/",className:e.company,children:Object(O.jsx)(T.a,{variant:"h6",children:Object(O.jsx)(S.a,{letterSpacing:4,children:"CLOUD COMPUTERS"})})}),Object(O.jsx)(o.b,{to:"/shop",className:e.spacing,children:Object(O.jsx)(T.a,{variant:"h6",children:"Shop"})}),Object(O.jsxs)(o.b,{to:"/cart",className:e.spacing,children:[Object(O.jsx)(N.a,{fontSize:"large"})," (",t(),")"]})]})})}),Object(O.jsx)(v.a,{})]})},k=a(156),D=Object(g.a)({main:{paddingLeft:120,paddingTop:"35vh",color:"rgb(248, 244, 240)"},button:{marginTop:20}}),I=function(){var e=D(),t=Object(s.f)();return Object(O.jsx)("div",{className:"home-bg",children:Object(O.jsxs)("div",{className:e.main,children:[Object(O.jsx)(T.a,{variant:"h3",gutterBottom:!0,children:"Nvidia Gefore RTX 3090"}),Object(O.jsx)(T.a,{variant:"h5",gutterBottom:!0,children:"Now available for preorder, shipping December, 2020."}),Object(O.jsx)(k.a,{onClick:function(){return t.push("/react-shopping-website/shop")},className:e.button,variant:"contained",size:"large",children:Object(O.jsx)(T.a,{className:"button",variant:"h5",gutterBottom:!0,children:"SHOP NOW"})})]})})},z={getAll:function(){return b.a.get("/api/products").then((function(e){return e.data}))}},B=Object(n.createContext)(),A=function(e){var t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){z.getAll().then((function(e){r(e)}))}),[]);return Object(O.jsx)(B.Provider,{value:{products:c,setProducts:r,filterProduct:function(e){var t=c.filter((function(t){return t.category===e}));r(t)}},children:e.children})},M=a(187),E=Object(g.a)({media:{height:250,paddingTop:25,paddingBottom:25},mediaHovered:{height:250,paddingTop:25,paddingBottom:25,transform:"scale3d(1.3, 1.3, 1)",transition:"all .1s cubic-bezier(.61,1,.88,1),transform .15s cubic-bezier(.61,1,.88,1)"}}),W=function(e){var t=e.product,a=E(),c=Object(n.useState)(!1),r=Object(j.a)(c,2),i=r[0],o=r[1];return Object(O.jsx)(M.a,{onMouseOver:function(){return o(!0)},onMouseOut:function(){return o(!1)},className:i?a.mediaHovered:a.media,component:"img",src:i?t.imgPreview:t.imgPath,title:t.name})},R=Object(n.createContext)(),q=function(e){var t=Object(n.useState)({}),a=Object(j.a)(t,2),c=a[0],r=a[1];return Object(O.jsx)(R.Provider,{value:{preview:c,savePreview:function(e){r(e)}},children:e.children})},Q=a(190),$=a(191),H=a(188),U=a(189),J=Object(g.a)({root:{backgroundColor:"#f2eeeb",maxWidth:700,height:425,margin:15,cursor:"pointer"}}),V=function(){var e=J(),t=Object(n.useContext)(B).products,a=Object(n.useContext)(R).savePreview,c=Object(s.f)();return Object(O.jsx)(H.a,{children:Object(O.jsx)(U.a,{container:!0,children:t.map((function(t){return Object(O.jsx)(U.a,{item:!0,xs:12,md:6,lg:4,children:Object(O.jsxs)(Q.a,{onClick:function(){return function(e){a(e),c.push("/react-shopping-website/preview")}(t)},className:e.root,children:[Object(O.jsx)(W,{product:t}),Object(O.jsxs)($.a,{children:[Object(O.jsx)(T.a,{gutterBottom:!0,variant:"h6",component:"h2",children:t.name}),Object(O.jsxs)(T.a,{variant:"body1",component:"p",children:["$",t.price]})]})]},t.id)})}))})})},F=a(192),G=Object(g.a)({main:{marginBottom:150},category:{fontSize:"17px",justifyContent:"flex-start"}}),X=function(){var e=G(),t=Object(n.useContext)(B),a=t.setProducts,c=t.filterProduct,r=Object(n.useState)("All Products"),i=Object(j.a)(r,2),o=i[0],s=i[1],l=Object(n.useState)(!0),d=Object(j.a)(l,2),u=d[0],b=d[1],h=function(){b(!u)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(T.a,{className:e.main,variant:"p",children:"Shop /"}),Object(O.jsx)(T.a,{className:e.main,variant:"h4",gutterBottom:!0,children:o}),Object(O.jsx)(F.a,{orientation:"vertical",color:"inherit","aria-label":"vertical outlined primary button group",variant:"text",size:"large",children:u?[{category:"Processors"},{category:"Memory"},{category:"Motherboard"},{category:"Video Card"},{category:"Case"}].map((function(t){return Object(O.jsx)(k.a,{className:e.category,onClick:function(){return e=t.category,c(e),s(e),void h();var e},children:t.category},t.category)})):Object(O.jsx)(k.a,{className:e.category,onClick:function(){z.getAll().then((function(e){a(e)})),s("All Products"),h()},children:"View All Products"})})]})},Y=Object(g.a)({root:{maxWidth:"30%",paddingLeft:"10%"},main:{maxWidth:"70%"}}),K=function(){var e=Y(),t=Object(n.useContext)(B).setProducts;return Object(n.useEffect)((function(){z.getAll().then((function(e){t(e)}))}),[]),Object(O.jsx)("div",{className:"shop-bg",children:Object(O.jsxs)(U.a,{container:!0,children:[Object(O.jsx)(U.a,{className:e.root,item:!0,xs:12,md:6,lg:4,children:Object(O.jsx)(X,{})}),Object(O.jsx)(U.a,{className:e.main,item:!0,xs:"auto",md:"auto",lg:"auto",children:Object(O.jsx)(V,{})})]})})},Z=a(193),_=Object(g.a)({divider:{marginTop:30},heading:{marginLeft:150},summary:{width:300,height:650,paddingTop:80,marginLeft:100,backgroundColor:"rgb(238, 238, 238)"},summaryItems:{marginTop:100},button:{marginLeft:36,marginTop:100}}),ee=function(e){e.productList;var t=e.calculateOrderTotal,a=_(),c=Object(n.useContext)(p).calculateTotalQuantity;return Object(O.jsxs)(U.a,{container:!0,direction:"column",className:a.summary,children:[Object(O.jsx)(T.a,{align:"center",variant:"h4",children:"Order Summary"}),Object(O.jsx)(Z.a,{className:a.divider}),Object(O.jsxs)(T.a,{className:a.summaryItems,align:"center",variant:"h6",children:["ITEMS: ",c()]}),Object(O.jsxs)(T.a,{className:a.summaryItems,align:"center",variant:"h6",children:["TOTAL PRICE: $",t()]}),Object(O.jsx)(k.a,{style:{fontSize:22,width:230,height:70},variant:"contained",color:"primary",className:a.button,children:"Checkout"})]})},te=a(90),ae=a(96),ne=a.n(ae),ce=a(194),re=a(197),ie=a(200),oe=Object(g.a)({cartDetails:{width:50,marginTop:20,marginLeft:40},name:{width:250,marginTop:20,marginLeft:30},divider:{marginTop:10},image:{cursor:"pointer",width:80,height:70}}),se=function(e){var t=e.product,a=oe(),c=Object(n.useContext)(p),r=c.updateCartState,i=c.deleteProduct,o=c.calculateSubtotal,l=c.updateQuantity,d=Object(n.useContext)(R).savePreview,u=Object(s.f)(),b=Object(n.useState)(t.quantity),h=Object(j.a)(b,2),m=h[0],x=h[1];Object(n.useEffect)((function(){l(m,t),r()}),[m]);return Object(O.jsxs)(H.a,{children:[Object(O.jsxs)(U.a,{container:!0,alignItems:"center",justifyContent:"space-evenly",children:[Object(O.jsx)("img",{onClick:function(){return d(t),void u.push("/react-shopping-website/preview")},className:a.image,src:t.productPreview,alt:t.name}),Object(O.jsx)(T.a,{className:a.name,variant:"body1",children:t.name}),Object(O.jsx)(ce.a,{className:a.cartDetails,children:Object(O.jsxs)(re.a,{value:m,onChange:function(e){e.preventDefault(),x(e.target.value)},children:[Object(O.jsx)(ie.a,{value:1,children:"1"}),Object(O.jsx)(ie.a,{value:2,children:"2"}),Object(O.jsx)(ie.a,{value:3,children:"3"}),Object(O.jsx)(ie.a,{value:4,children:"4"}),Object(O.jsx)(ie.a,{value:5,children:"5"}),Object(O.jsx)(ie.a,{value:6,children:"6"})]})}),Object(O.jsxs)(T.a,{className:a.cartDetails,variant:"body1",children:["$",t.price]}),Object(O.jsxs)(T.a,{className:a.cartDetails,variant:"body1",children:["$",o(t)]}),Object(O.jsx)(U.a,{children:Object(O.jsx)(te.a,{className:a.cartDetails,children:Object(O.jsx)(ne.a,{onClick:function(){return i(t.id)}})})})]}),Object(O.jsx)(Z.a,{className:a.divider})]})},le=Object(g.a)({cartDetails:{fontWeight:"bold",marginTop:30,marginLeft:42},divider:{marginTop:30},heading:{fontWeight:"bold",marginTop:30,marginLeft:160,marginRight:130},cartWidth:{maxWidth:"70%"},summary:{width:300,height:800,paddingTop:80,marginLeft:100,backgroundColor:"rgb(238, 238, 238)"}}),de=function(e){var t=e.productList,a=le();return Object(O.jsxs)(U.a,{item:!0,xs:"auto",md:"auto",lg:"auto",className:a.cartWidth,children:[Object(O.jsx)(T.a,{variant:"h2",children:"Shopping Cart"}),Object(O.jsx)(Z.a,{variant:"fullWidth",className:a.divider}),Object(O.jsxs)(U.a,{container:!0,children:[Object(O.jsx)(Z.a,{className:a.divider}),Object(O.jsx)(T.a,{className:a.heading,variant:"body1",children:"Product Details"}),Object(O.jsx)(T.a,{className:a.cartDetails,variant:"body1",children:"Quantity"}),Object(O.jsx)(T.a,{className:a.cartDetails,variant:"body1",children:"Price"}),Object(O.jsx)(T.a,{className:a.cartDetails,variant:"body1",children:"Subtotal"})]}),Object(O.jsx)(Z.a,{className:a.divider}),t.length?t.map((function(e){return Object(O.jsx)(se,{product:e},e.id)})):Object(O.jsx)(T.a,{align:"center",className:a.divider,variant:"h5",children:"\u2014 Your Cart is Empty \u2014"})]})},je=function(){var e=Object(n.useContext)(p),t=e.productList,a=e.calculateOrderTotal;return Object(O.jsx)(H.a,{children:Object(O.jsxs)(U.a,{container:!0,direction:"row",children:[Object(O.jsx)(de,{productList:t}),Object(O.jsx)(ee,{productList:t,calculateOrderTotal:a})]})})},ue=a(199),be=a(98),he=a.n(be),me=a(97),Oe=a.n(me);function pe(e){return Object(O.jsx)(Oe.a,Object(l.a)({elevation:6,variant:"filled"},e))}var xe=Object(g.a)({productInfo:{marginTop:40}}),ge=function(e){var t=e.preview,a=e.setCompleteOrder,c=xe(),r=Object(n.useContext)(p).addProduct,i=Object(n.useState)(!1),o=Object(j.a)(i,2),s=o[0],l=o[1],d=function(e,t){"clickaway"!==t&&l(!1)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(k.a,{onClick:function(){r(t),l(!0),a(!0)},startIcon:Object(O.jsx)(he.a,{}),size:"large",variant:"outlined",className:c.productInfo,style:{width:250,height:70},color:"secondary",children:"Add To Cart"}),Object(O.jsx)(ue.a,{open:s,autoHideDuration:4e3,onClose:d,children:Object(O.jsx)(pe,{variant:"standard",onClose:d,severity:"success",children:Object(O.jsxs)(T.a,{variant:"h4",children:[t.name," (",t.quantity,") has been added to the Cart!"]})})})]})},fe=a(99),ve=a.n(fe),ye=Object(g.a)({productInfo:{marginTop:40},productName:{marginTop:50},price:{marginLeft:250,marginTop:180},addCart:{marginTop:50},image:{marginTop:20}}),Ne=function(){var e=ye(),t=Object(n.useContext)(R).preview,a=Object(s.f)(),c=Object(n.useState)(!1),r=Object(j.a)(c,2),i=r[0],o=r[1];return Object(O.jsx)(H.a,{className:"cart-bg",children:Object(O.jsxs)(U.a,{container:!0,direction:"row",alignItems:"flex-start",spacing:10,children:[Object(O.jsxs)(U.a,{item:!0,xs:6,md:6,lg:6,children:[Object(O.jsx)(k.a,{onClick:function(){return a.push("/react-shopping-website/shop")},size:"large",variant:"contained",color:"primary",children:"Back To Shopping"}),Object(O.jsxs)(T.a,{variant:"h6",className:e.productInfo,children:["Shop / ",t.category]}),Object(O.jsx)(T.a,{align:"center",variant:"h3",className:e.productName,gutterBottom:!0,children:t.name}),Object(O.jsx)(U.a,{container:!0,justify:"center",children:Object(O.jsx)("img",{className:e.image,src:t.productPreview,alt:t.name})})]}),Object(O.jsxs)(U.a,{item:!0,xs:6,md:"auto",lg:"auto",className:e.price,children:[Object(O.jsx)(T.a,{variant:"h6",children:Object(O.jsx)(S.a,{letterSpacing:6,children:"CLOUD COMPUTERS"})}),Object(O.jsxs)(T.a,{variant:"h3",className:e.productInfo,children:["$",t.price]}),Object(O.jsx)(ge,{preview:t,setCompleteOrder:o}),i&&Object(O.jsx)(k.a,{onClick:function(){return a.push("/react-shopping-website/cart")},startIcon:Object(O.jsx)(ve.a,{}),size:"large",variant:"outlined",className:e.productInfo,style:{width:250,height:70,color:"#C71585",fontSize:17},color:"inherit",children:"Complete Order"})]})]})})},Ce=function(){return Object(O.jsxs)(o.a,{children:[Object(O.jsx)(L,{}),Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/",component:I}),Object(O.jsx)(s.a,{exact:!0,path:"/shop",component:K}),Object(O.jsx)(s.a,{exact:!0,path:"/cart",component:je}),Object(O.jsx)(s.a,{exact:!0,path:"/preview",component:Ne})]})]})},we=a(50),Te=a(196),Se=Object(we.a)({palette:{primary:{main:"#778899"},secondary:{main:"#006400"}},typography:{h6:{fontFamily:"Montserrat, sans-serif"}}}),Pe=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(A,{children:Object(O.jsx)(q,{children:Object(O.jsx)(x,{children:Object(O.jsx)(Te.a,{theme:Se,children:Object(O.jsx)(Ce,{})})})})})})};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Pe,{})}),document.getElementById("root"))},54:function(e,t,a){}},[[153,1,2]]]);
//# sourceMappingURL=main.ce3fc259.chunk.js.map