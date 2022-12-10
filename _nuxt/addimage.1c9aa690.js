import{_ as N}from"./Navbar.2cc58723.js";import{_ as D,c as j,a as X,b as Y}from"./EmbedPDFView.vue_vue_type_script_setup_true_lang.d2c99702.js";import{a as P,o as _,e as x,f as e,r as i,b as C,h as p,w as h,v as w,u as s,i as b,k as E,l as R,F as L}from"./entry.72d8231a.js";const O={class:"container flex flex-wrap items-center justify-between mx-auto"},S=e("label",{class:"block mb-2 text-sm font-medium text-black dark:text-black",for:"upload"},"Upload a PNG Image",-1),G=P({__name:"ImageButton",emits:["imageChanged"],setup(k,{emit:o}){const c=r=>{var l;let a=(l=r.target.files)==null?void 0:l[0];a&&a.type!=="image/png"&&(a=void 0),o("imageChanged",a)};return(r,a)=>(_(),x("div",O,[S,e("input",{class:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",type:"file",name:"upload",onChange:c,accept:"image/png"},null,32)]))}}),H={class:"space-y-5"},M={class:"space-y-5"},T={class:"container flex flex-wrap items-center justify-between mx-auto space-y-5"},q={class:"container flex flex-wrap items-left mx-auto flex space-x-10"},z=e("label",{class:"block mb-2 text-sm font-medium text-black dark:text-black",for:"posX"},"Posisi X",-1),A=e("label",{class:"block mb-2 text-sm font-medium text-black dark:text-black",for:"posY"},"Posisi Y",-1),J=e("label",{class:"block mb-2 text-sm font-medium text-black dark:text-black",for:"pageidx"},"Halaman ",-1),K=["href"],Q=P({__name:"ImageForm",props:{filePdf:null},emits:["update:filePdf"],setup(k,{emit:o}){const c=k,r=i(!1);let a=!1;const l=i(),u=i(),f=i(),g=i(""),m=i(!1);let y;const $=n=>{m.value=!1,o("update:filePdf",n),console.log("update")},F=n=>{m.value=!1,n&&(y=n)},v=()=>{m.value=!1,a=u.value!==""&&l.value!=="",console.log("change")},I=C(()=>async()=>{if(console.log("tes submit"),!c.filePdf||!a||!y){r.value=!0;return}const n=new FormData;n.append("position",`${u.value},${l.value}`),n.append("page-idx",f.value),n.append("pdf-file",c.filePdf),n.append("image-file",y);try{const t=await j("add-image",{method:"post",body:n});g.value=window.URL.createObjectURL(t),m.value=!0}catch{r.value=!0}});return(n,t)=>{const U=X,B=G,V=D;return _(),x("div",null,[e("div",H,[p(U,{onPdfChanged:$})]),e("div",M,[p(B,{onImageChanged:F})]),e("div",T,[e("div",q,[e("div",null,[z,h(e("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=d=>b(u)?u.value=d:null),onInput:v,name:"posX",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[w,s(u)]])]),e("div",null,[A,h(e("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=d=>b(l)?l.value=d:null),onInput:v,name:"posY",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[w,s(l)]])]),e("div",null,[J,h(e("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=d=>b(f)?f.value=d:null),onInput:v,name:"pageidx",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[w,s(f)]])])]),e("button",{onClick:t[3]||(t[3]=(...d)=>s(I)&&s(I)(...d)),class:"focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},"Submit"),s(m)?(_(),x("a",{key:0,href:s(g),download:"result.pdf",class:"focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},"Download",8,K)):E("",!0)]),p(V,{activated:s(r),onOnClose:t[4]||(t[4]=d=>r.value=!1)},null,8,["activated"])])}}}),W={class:"container flex flex-wrap items-center justify-between mx-auto"},oe=P({__name:"addimage",setup(k){let o=i(),c=C(()=>{if(!!o.value)return new Blob([o.value],{type:"application/pdf"})});return R(o,r=>{console.log(`watched: ${r}`)}),(r,a)=>{const l=N,u=Q,f=Y;return _(),x(L,null,[e("div",null,[p(l)]),e("div",null,[e("div",W,[p(u,{filePdf:s(o),"onUpdate:filePdf":a[0]||(a[0]=g=>b(o)?o.value=g:o=g)},null,8,["filePdf"]),p(f,{pdfBlob:s(c)},null,8,["pdfBlob"])])])],64)}}});export{oe as default};
