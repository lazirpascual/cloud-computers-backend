(this["webpackJsonpshopping-website"]=this["webpackJsonpshopping-website"]||[]).push([[0],{153:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(11),i=a.n(r),o=(a(54),a(27)),s=a(14),l=a(59),d=a(100),j=a(18),u=a(45),b=a.n(u),h="/api/cartitems",m={getAll:function(){return b.a.get(h).then((function(t){return t.data}))},create:function(t){return b.a.post(h,t).then((function(t){return t.data}))},update:function(t,e){return b.a.put("".concat(h,"/").concat(t),e).then((function(t){return t.data}))},remove:function(t){return b.a.delete("".concat(h,"/").concat(t)).then((function(t){return t.data}))}},O=a(2),x=Object(n.createContext)(),p=function(t){var e=Object(n.useState)([]),a=Object(j.a)(e,2),c=a[0],r=a[1];Object(n.useEffect)((function(){m.getAll().then((function(t){r(t)}))}),[]);var i=function(t){var e=t.quantity*t.price;return Math.round(100*e)/100};return Object(O.jsx)(x.Provider,{value:{productList:c,addProduct:function(t){var e=c,a=e.findIndex((function(e){return e.name===t.name}));a>=0?(e[a].quantity++,r(e)):m.create(t).then((function(t){r([].concat(Object(d.a)(c),[t]))}))},deleteProduct:function(t){window.confirm("Remove This Product?")&&m.remove(t).then((function(){r(c.filter((function(e){return e.id!==t})))}))},calculateSubtotal:i,calculateOrderTotal:function(){var t=c.reduce((function(t,e){return t+i(e)}),0);return Math.round(100*t)/100},calculateTotalQuantity:function(){return c.reduce((function(t,e){return t+e.quantity}),0)},updateQuantity:function(t,e){var a=Object(l.a)(Object(l.a)({},e),{},{quantity:t});m.update(e.id,a).then((function(t){r(c.map((function(a){return a.id!==e.id?a:t})))})).catch((function(t){console.log(t.response.data)}))},updateCartState:function(){var t=c.filter((function(t){return t}));r(t)}},children:t.children})},g=a(89),f=a(183),v=a(185),y=a(95),N=a.n(y),C=a(181),T=a(182),w=a(186),S=a(198),P=Object(g.a)((function(t){return{header:{backgroundColor:"inherit",color:"black",boxShadow:"0px 0px 0px 0px",marginTop:100,height:0},spacing:{fontSize:"25px",marginLeft:100,marginRight:100,textDecoration:"none",color:"inherit"},company:{fontSize:"25px",marginLeft:100,marginRight:"auto",textDecoration:"none",color:"inherit"},navbar:{marginBottom:200}}})),L=function(){var t=P(),e=Object(n.useContext)(x).calculateTotalQuantity,a=Object(C.a)(),c=Object(s.g)().pathname.split("/")[1];return Object(O.jsxs)("div",{className:t.navbar,children:[Object(O.jsx)(T.a,{appear:!1,direction:"down",in:!a,children:Object(O.jsx)(f.a,{position:"fixed",className:t.header,children:Object(O.jsxs)(v.a,{className:c||"home",children:[Object(O.jsx)(o.b,{to:"/",className:t.company,children:Object(O.jsx)(w.a,{variant:"h6",children:Object(O.jsx)(S.a,{letterSpacing:4,children:"CLOUD COMPUTERS"})})}),Object(O.jsx)(o.b,{to:"/shop",className:t.spacing,children:Object(O.jsx)(w.a,{variant:"h6",children:"Shop"})}),Object(O.jsxs)(o.b,{to:"/cart",className:t.spacing,children:[Object(O.jsx)(N.a,{fontSize:"large"})," (",e(),")"]})]})})}),Object(O.jsx)(v.a,{})]})},k=a(156),D=Object(g.a)({main:{paddingLeft:120,paddingTop:"35vh",color:"rgb(248, 244, 240)"},button:{marginTop:20}}),I=function(){var t=D(),e=Object(s.f)();return Object(O.jsx)("div",{className:"home-bg",children:Object(O.jsxs)("div",{className:t.main,children:[Object(O.jsx)(w.a,{variant:"h3",gutterBottom:!0,children:"Nvidia Gefore RTX 3090"}),Object(O.jsx)(w.a,{variant:"h5",gutterBottom:!0,children:"Now available for preorder, shipping December, 2020."}),Object(O.jsx)(k.a,{onClick:function(){return e.push("/shop")},className:t.button,variant:"contained",size:"large",children:Object(O.jsx)(w.a,{className:"button",variant:"h5",gutterBottom:!0,children:"SHOP NOW"})})]})})},z={getAll:function(){return b.a.get("/api/products").then((function(t){return t.data}))}},B=Object(n.createContext)(),A=function(t){var e=Object(n.useState)([]),a=Object(j.a)(e,2),c=a[0],r=a[1];Object(n.useEffect)((function(){z.getAll().then((function(t){r(t)}))}),[]);return Object(O.jsx)(B.Provider,{value:{products:c,setProducts:r,filterProduct:function(t){var e=c.filter((function(e){return e.category===t}));r(e)}},children:t.children})},M=a(187),E=Object(g.a)({media:{height:250,paddingTop:25,paddingBottom:25},mediaHovered:{height:250,paddingTop:25,paddingBottom:25,transform:"scale3d(1.3, 1.3, 1)",transition:"all .1s cubic-bezier(.61,1,.88,1),transform .15s cubic-bezier(.61,1,.88,1)"}}),W=function(t){var e=t.product,a=E(),c=Object(n.useState)(!1),r=Object(j.a)(c,2),i=r[0],o=r[1];return Object(O.jsx)(M.a,{onMouseOver:function(){return o(!0)},onMouseOut:function(){return o(!1)},className:i?a.mediaHovered:a.media,component:"img",src:i?e.imgPreview:e.imgPath,title:e.name})},R=Object(n.createContext)(),q=function(t){var e=Object(n.useState)({}),a=Object(j.a)(e,2),c=a[0],r=a[1];return Object(O.jsx)(R.Provider,{value:{preview:c,savePreview:function(t){r(t)}},children:t.children})},Q=a(190),$=a(191),H=a(188),U=a(189),J=Object(g.a)({root:{backgroundColor:"#f2eeeb",maxWidth:700,height:425,margin:15,cursor:"pointer"}}),V=function(){var t=J(),e=Object(n.useContext)(B).products,a=Object(n.useContext)(R).savePreview,c=Object(s.f)();return Object(O.jsx)(H.a,{children:Object(O.jsx)(U.a,{container:!0,children:e.map((function(e){return Object(O.jsx)(U.a,{item:!0,xs:12,md:6,lg:4,children:Object(O.jsxs)(Q.a,{onClick:function(){return function(t){a(t),c.push("/preview")}(e)},className:t.root,children:[Object(O.jsx)(W,{product:e}),Object(O.jsxs)($.a,{children:[Object(O.jsx)(w.a,{gutterBottom:!0,variant:"h6",component:"h2",children:e.name}),Object(O.jsxs)(w.a,{variant:"body1",component:"p",children:["$",e.price]})]})]},e.id)})}))})})},F=a(192),G=Object(g.a)({main:{marginBottom:150},category:{fontSize:"17px",justifyContent:"flex-start"}}),X=function(){var t=G(),e=Object(n.useContext)(B),a=e.setProducts,c=e.filterProduct,r=Object(n.useState)("All Products"),i=Object(j.a)(r,2),o=i[0],s=i[1],l=Object(n.useState)(!0),d=Object(j.a)(l,2),u=d[0],b=d[1],h=function(){b(!u)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(w.a,{className:t.main,variant:"p",children:"Shop /"}),Object(O.jsx)(w.a,{className:t.main,variant:"h4",gutterBottom:!0,children:o}),Object(O.jsx)(F.a,{orientation:"vertical",color:"inherit","aria-label":"vertical outlined primary button group",variant:"text",size:"large",children:u?[{category:"Processors"},{category:"Memory"},{category:"Motherboard"},{category:"Video Card"},{category:"Case"}].map((function(e){return Object(O.jsx)(k.a,{className:t.category,onClick:function(){return t=e.category,c(t),s(t),void h();var t},children:e.category},e.category)})):Object(O.jsx)(k.a,{className:t.category,onClick:function(){z.getAll().then((function(t){a(t)})),s("All Products"),h()},children:"View All Products"})})]})},Y=Object(g.a)({root:{maxWidth:"30%",paddingLeft:"10%"},main:{maxWidth:"70%"}}),K=function(){var t=Y(),e=Object(n.useContext)(B).setProducts;return Object(n.useEffect)((function(){z.getAll().then((function(t){e(t)}))}),[]),Object(O.jsx)("div",{className:"shop-bg",children:Object(O.jsxs)(U.a,{container:!0,children:[Object(O.jsx)(U.a,{className:t.root,item:!0,xs:12,md:6,lg:4,children:Object(O.jsx)(X,{})}),Object(O.jsx)(U.a,{className:t.main,item:!0,xs:"auto",md:"auto",lg:"auto",children:Object(O.jsx)(V,{})})]})})},Z=a(193),_=Object(g.a)({divider:{marginTop:30},heading:{marginLeft:150},summary:{width:300,height:650,paddingTop:80,marginLeft:100,backgroundColor:"rgb(238, 238, 238)"},summaryItems:{marginTop:100},button:{marginLeft:36,marginTop:100}}),tt=function(t){t.productList;var e=t.calculateOrderTotal,a=_(),c=Object(n.useContext)(x).calculateTotalQuantity;return Object(O.jsxs)(U.a,{container:!0,direction:"column",className:a.summary,children:[Object(O.jsx)(w.a,{align:"center",variant:"h4",children:"Order Summary"}),Object(O.jsx)(Z.a,{className:a.divider}),Object(O.jsxs)(w.a,{className:a.summaryItems,align:"center",variant:"h6",children:["ITEMS: ",c()]}),Object(O.jsxs)(w.a,{className:a.summaryItems,align:"center",variant:"h6",children:["TOTAL PRICE: $",e()]}),Object(O.jsx)(k.a,{style:{fontSize:22,width:230,height:70},variant:"contained",color:"primary",className:a.button,children:"Checkout"})]})},et=a(90),at=a(96),nt=a.n(at),ct=a(194),rt=a(197),it=a(200),ot=Object(g.a)({cartDetails:{width:50,marginTop:20,marginLeft:40},name:{width:250,marginTop:20,marginLeft:30},divider:{marginTop:10},image:{cursor:"pointer",width:80,height:70}}),st=function(t){var e=t.product,a=ot(),c=Object(n.useContext)(x),r=c.updateCartState,i=c.deleteProduct,o=c.calculateSubtotal,l=c.updateQuantity,d=Object(n.useContext)(R).savePreview,u=Object(s.f)(),b=Object(n.useState)(e.quantity),h=Object(j.a)(b,2),m=h[0],p=h[1];Object(n.useEffect)((function(){l(m,e),r()}),[m]);return Object(O.jsxs)(H.a,{children:[Object(O.jsxs)(U.a,{container:!0,alignItems:"center",justifyContent:"space-evenly",children:[Object(O.jsx)("img",{onClick:function(){return d(e),void u.push("/preview")},className:a.image,src:e.productPreview,alt:e.name}),Object(O.jsx)(w.a,{className:a.name,variant:"body1",children:e.name}),Object(O.jsx)(ct.a,{className:a.cartDetails,children:Object(O.jsxs)(rt.a,{value:m,onChange:function(t){t.preventDefault(),p(t.target.value)},children:[Object(O.jsx)(it.a,{value:1,children:"1"}),Object(O.jsx)(it.a,{value:2,children:"2"}),Object(O.jsx)(it.a,{value:3,children:"3"}),Object(O.jsx)(it.a,{value:4,children:"4"}),Object(O.jsx)(it.a,{value:5,children:"5"}),Object(O.jsx)(it.a,{value:6,children:"6"})]})}),Object(O.jsxs)(w.a,{className:a.cartDetails,variant:"body1",children:["$",e.price]}),Object(O.jsxs)(w.a,{className:a.cartDetails,variant:"body1",children:["$",o(e)]}),Object(O.jsx)(U.a,{children:Object(O.jsx)(et.a,{className:a.cartDetails,children:Object(O.jsx)(nt.a,{onClick:function(){return i(e.id)}})})})]}),Object(O.jsx)(Z.a,{className:a.divider})]})},lt=Object(g.a)({cartDetails:{fontWeight:"bold",marginTop:30,marginLeft:42},divider:{marginTop:30},heading:{fontWeight:"bold",marginTop:30,marginLeft:160,marginRight:130},cartWidth:{maxWidth:"70%"},summary:{width:300,height:800,paddingTop:80,marginLeft:100,backgroundColor:"rgb(238, 238, 238)"}}),dt=function(t){var e=t.productList,a=lt();return Object(O.jsxs)(U.a,{item:!0,xs:"auto",md:"auto",lg:"auto",className:a.cartWidth,children:[Object(O.jsx)(w.a,{variant:"h2",children:"Shopping Cart"}),Object(O.jsx)(Z.a,{variant:"fullWidth",className:a.divider}),Object(O.jsxs)(U.a,{container:!0,children:[Object(O.jsx)(Z.a,{className:a.divider}),Object(O.jsx)(w.a,{className:a.heading,variant:"body1",children:"Product Details"}),Object(O.jsx)(w.a,{className:a.cartDetails,variant:"body1",children:"Quantity"}),Object(O.jsx)(w.a,{className:a.cartDetails,variant:"body1",children:"Price"}),Object(O.jsx)(w.a,{className:a.cartDetails,variant:"body1",children:"Subtotal"})]}),Object(O.jsx)(Z.a,{className:a.divider}),e.length?e.map((function(t){return Object(O.jsx)(st,{product:t},t.id)})):Object(O.jsx)(w.a,{align:"center",className:a.divider,variant:"h5",children:"\u2014 Your Cart is Empty \u2014"})]})},jt=function(){var t=Object(n.useContext)(x),e=t.productList,a=t.calculateOrderTotal;return Object(O.jsx)(H.a,{children:Object(O.jsxs)(U.a,{container:!0,direction:"row",children:[Object(O.jsx)(dt,{productList:e}),Object(O.jsx)(tt,{productList:e,calculateOrderTotal:a})]})})},ut=a(199),bt=a(98),ht=a.n(bt),mt=a(97),Ot=a.n(mt);function xt(t){return Object(O.jsx)(Ot.a,Object(l.a)({elevation:6,variant:"filled"},t))}var pt=Object(g.a)({productInfo:{marginTop:40}}),gt=function(t){var e=t.preview,a=t.setCompleteOrder,c=pt(),r=Object(n.useContext)(x).addProduct,i=Object(n.useState)(!1),o=Object(j.a)(i,2),s=o[0],l=o[1],d=function(t,e){"clickaway"!==e&&l(!1)};return Object(O.jsxs)("div",{children:[Object(O.jsx)(k.a,{onClick:function(){r(e),l(!0),a(!0)},startIcon:Object(O.jsx)(ht.a,{}),size:"large",variant:"outlined",className:c.productInfo,style:{width:250,height:70},color:"secondary",children:"Add To Cart"}),Object(O.jsx)(ut.a,{open:s,autoHideDuration:4e3,onClose:d,children:Object(O.jsx)(xt,{variant:"standard",onClose:d,severity:"success",children:Object(O.jsxs)(w.a,{variant:"h4",children:[e.name," (",e.quantity,") has been added to the Cart!"]})})})]})},ft=a(99),vt=a.n(ft),yt=Object(g.a)({productInfo:{marginTop:40},productName:{marginTop:50},price:{marginLeft:250,marginTop:180},addCart:{marginTop:50},image:{marginTop:20}}),Nt=function(){var t=yt(),e=Object(n.useContext)(R).preview,a=Object(s.f)(),c=Object(n.useState)(!1),r=Object(j.a)(c,2),i=r[0],o=r[1];return Object(O.jsx)(H.a,{className:"cart-bg",children:Object(O.jsxs)(U.a,{container:!0,direction:"row",alignItems:"flex-start",spacing:10,children:[Object(O.jsxs)(U.a,{item:!0,xs:6,md:6,lg:6,children:[Object(O.jsx)(k.a,{onClick:function(){return a.push("/shop")},size:"large",variant:"contained",color:"primary",children:"Back To Shopping"}),Object(O.jsxs)(w.a,{variant:"h6",className:t.productInfo,children:["Shop / ",e.category]}),Object(O.jsx)(w.a,{align:"center",variant:"h3",className:t.productName,gutterBottom:!0,children:e.name}),Object(O.jsx)(U.a,{container:!0,justify:"center",children:Object(O.jsx)("img",{className:t.image,src:e.productPreview,alt:e.name})})]}),Object(O.jsxs)(U.a,{item:!0,xs:6,md:"auto",lg:"auto",className:t.price,children:[Object(O.jsx)(w.a,{variant:"h6",children:Object(O.jsx)(S.a,{letterSpacing:6,children:"CLOUD COMPUTERS"})}),Object(O.jsxs)(w.a,{variant:"h3",className:t.productInfo,children:["$",e.price]}),Object(O.jsx)(gt,{preview:e,setCompleteOrder:o}),i&&Object(O.jsx)(k.a,{onClick:function(){return a.push("/cart")},startIcon:Object(O.jsx)(vt.a,{}),size:"large",variant:"outlined",className:t.productInfo,style:{width:250,height:70,color:"#C71585",fontSize:17},color:"inherit",children:"Complete Order"})]})]})})},Ct=function(){return Object(O.jsxs)(o.a,{children:[Object(O.jsx)(L,{}),Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/",component:I}),Object(O.jsx)(s.a,{exact:!0,path:"/shop",component:K}),Object(O.jsx)(s.a,{exact:!0,path:"/cart",component:jt}),Object(O.jsx)(s.a,{exact:!0,path:"/preview",component:Nt})]})]})},Tt=a(50),wt=a(196),St=Object(Tt.a)({palette:{primary:{main:"#778899"},secondary:{main:"#006400"}},typography:{h6:{fontFamily:"Montserrat, sans-serif"}}}),Pt=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(A,{children:Object(O.jsx)(q,{children:Object(O.jsx)(p,{children:Object(O.jsx)(wt.a,{theme:St,children:Object(O.jsx)(Ct,{})})})})})})};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Pt,{})}),document.getElementById("root"))},54:function(t,e,a){}},[[153,1,2]]]);
//# sourceMappingURL=main.0ac7c6c5.chunk.js.map