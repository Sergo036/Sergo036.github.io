import{r as n,u as h,j as t,m as w,L as l,d,e as N,f as g,g as f}from"./index-CUxs0kOx.js";import{c as v}from"./fakeApi-CwEcjg3Q.js";const k="___breadcrumd_link_3wioj_3",$="___page_title_3wioj_9",y="___item_img_3wioj_27",C="___item_marker_3wioj_39",D="___option_title_3wioj_63",S="___option_list_3wioj_73",I="___new_price_3wioj_81",T="___old_price_3wioj_91",P="___item_count_control_3wioj_113",F="___cart_btn_3wioj_123",E="___count_btn_3wioj_143",H="___item_count_3wioj_113",R="___tabs_btn_3wioj_173",z="___item_description_3wioj_179",e={__breadcrumd_link:k,__page_title:$,__item_img:y,__item_marker:C,__option_title:D,__option_list:S,__new_price:I,__old_price:T,__item_count_control:P,__cart_btn:F,__count_btn:E,__item_count:H,__tabs_btn:R,__item_description:z};function L(){const[i,a]=n.useState(1),[c,r]=n.useState(!0),[o,m]=n.useState(!1),{article:u}=h(),_=v().filter(s=>s.article===u),p=["Антивозростной уход, ","Восстановление, ","Демакияж, ","Защита, ","Коррекция акне"],b=["Купероз, Розация, ","Жирная, ","Зрелая, ","Комбинированная"];let[j,x]=n.useState("");return n.useEffect(()=>{window.scrollTo(0,0),_[0].fullDesHref&&fetch(_[0].fullDesHref).then(s=>s.text()).then(s=>x(s))},[]),t.jsxs(w.section,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5,type:"tween"},className:"container w-100",children:[t.jsx("nav",{className:"","aria-label":"breadcrumb",children:t.jsxs("ol",{className:"breadcrumb",children:[t.jsx("li",{className:`breadcrumb-item ${e.__breadcrumd_link}`,children:t.jsx(l,{to:"/",children:"Главная"})}),t.jsx("li",{className:`breadcrumb-item ${e.__breadcrumd_link}`,children:t.jsx(l,{to:`/products/${_[0].parentHref}`,children:_[0].category})}),t.jsx("li",{className:`breadcrumb-item ${e.__breadcrumd_link}`,children:t.jsx(l,{to:`/products/${_[0].catalog}`,children:_[0].catalog})}),t.jsx("li",{className:`breadcrumb-item ${e.__breadcrumd_link}`,"aria-current":"page",children:_[0].productName})]})}),t.jsxs("div",{className:"container w-100",children:[t.jsxs("div",{className:"row w-100 position-relative",children:[t.jsx("p",{className:e.__page_title,children:_[0].productName}),t.jsxs("div",{className:"col-lg-6 col-12 d-flex justify-content-center position-relative",children:[t.jsx("img",{className:e.__item_img,src:_[0].imgSrc,alt:"..."}),_[0].newItem?t.jsx("span",{className:`badge rounded-pill ${e.__item_marker}`,children:"Новинка"}):_[0].saleItem?t.jsx("span",{className:`badge rounded-pill ${e.__item_marker}`,children:"Скидка"}):""]}),t.jsxs("div",{className:"col-lg-5 col-12 ms-4 mt-4",children:[t.jsxs("p",{className:e.__option_title,children:["Потребности кожи: ",t.jsx("span",{className:e.__option_list,children:p})]}),t.jsxs("p",{className:e.__option_title,children:["Для типов кожи: ",t.jsx("span",{className:e.__option_list,children:b})]}),t.jsxs("p",{className:e.__option_title,children:["Цена: ",_[0].saleItem?t.jsxs("span",{className:e.__old_price,children:[_[0].oldPrice,t.jsx(d,{})]}):""," ",t.jsxs("span",{className:e.__new_price,children:[_[0].newPrice,t.jsx(d,{})]})]}),t.jsxs("p",{className:e.__option_title,children:["Артикул: ",t.jsx("span",{className:e.__option_list,children:_[0].article})]}),t.jsxs("div",{className:"w-100 d-flex justify-content-start align-items-center",children:[t.jsxs("div",{className:`btn-group ${e.__item_count_control}`,role:"group","aria-label":"Basic outlined example",children:[t.jsx("button",{type:"button",className:`btn btn-outline-secondary ${e.__count_btn}`,onClick:()=>a(i>1?i-1:1),children:t.jsx(N,{})}),t.jsx("input",{className:e.__item_count,type:"tel",min:"1",onChange:s=>a(s.currentTarget.value?parseInt(s.currentTarget.value):""),value:i}),t.jsx("button",{type:"button",className:`btn btn-outline-secondary ${e.__count_btn}`,onClick:()=>a(i+1),children:t.jsx(g,{})})]}),t.jsx(f,{className:e.__cart_btn,onClick:()=>alert(`Date:${new Date}, Article: ${_[0].article}, Total count: ${i}`)})]})]})]}),t.jsx("div",{className:"row w-100 d-flex justify-content-end mt-4",children:t.jsxs("div",{className:"btn-group btn-group-sm mt-4 col-lg-2 col-8",role:"group","aria-label":"Basic mixed styles example",children:[t.jsx("button",{type:"button",onClick:()=>{m(!o),r(!c)},className:`btn  btn-light ${c?"active":""} ${e.__tabs_btn}`,children:"Описание"}),t.jsx("button",{type:"button",onClick:()=>{m(!o),r(!c)},className:`btn  btn-light ${o?"active":""}  ${e.__tabs_btn}`,children:"Отзывы"})]})}),t.jsx("div",{className:"row w-100 d-flex justify-content-center",children:t.jsx("p",{className:e.__item_description,children:j})})]})]})}export{L as default};
