import{_ as X}from"./Navbar.2cc58723.js";import{_ as z,c as R,a as T,b as Y}from"./EmbedPDFView.vue_vue_type_script_setup_true_lang.d2c99702.js";import{a as B,r as a,b as C,e as U,f as e,h as x,w as i,v as c,u as t,i as u,k as j,o as V,l as E,F as S}from"./entry.72d8231a.js";const L={class:"space-y-5"},O={class:"container flex flex-wrap items-center justify-between mx-auto space-y-5"},G={class:"container flex flex-wrap items-left mx-auto flex space-x-10"},H=e("label",null,null,-1),M=e("label",{class:"block mb-2 text-sm font-medium text-black dark:text-black",for:"text"},"Text :",-1),q=e("label",{class:"block mb-2 text-sm font-medium text-black dark:text-black",for:"X"},"Posisi X :",-1),A=e("label",{class:"block mb-2 text-sm font-medium text-black dark:text-black",for:"X"},"Posisi Y :",-1),J=e("label",{class:"block mb-2 text-sm font-medium text-black dark:text-black",for:"no-page"},"Halaman :",-1),K=e("label",{class:"block mb-2 text-sm font-medium text-black dark:text-black",for:"size"},"Font Size :",-1),Q=e("br",null,null,-1),W=e("label",{class:"block mb-2 text-sm font-medium text-black dark:text-black",for:"color"},"Color (RGB) :",-1),Z=e("br",null,null,-1),ee=e("br",null,null,-1),re={class:"container flex flex-wrap items-left mx-auto flex space-x-10"},le=["href"],te=B({__name:"TextForm",props:{file:null},emits:["update:file"],setup(F,{emit:n}){const m=F,g=a(!1);let k=!1;const d=a(),s=a(),f=a(),p=a(),y=a(),v=a(),_=a(),w=a(""),I=a(""),h=a(!1),P=o=>{h.value=!1,n("update:file",o)},b=()=>{h.value=!1,k=d.value!==""&&s.value!==""},$=C(()=>async()=>{if(console.log(`file: ${m.file}`),!k||!m.file){g.value=!0;return}const o=new FormData;o.append("position",`${d.value},${s.value}`),o.append("no-page",f.value),o.append("red",p.value),o.append("green",y.value),o.append("blue",v.value),o.append("size",_.value),o.append("user-text",w.value),o.append("pdf-file",m.file),o.append("X",d.value),o.append("Y",s.value);try{const r=await R("add-text",{method:"post",body:o});I.value=window.URL.createObjectURL(r),h.value=!0}catch{g.value=!0}});return(o,r)=>{const D=T,N=z;return V(),U("div",null,[e("div",L,[x(D,{onPdfChanged:P})]),e("div",O,[e("div",G,[H,M,i(e("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=l=>u(w)?w.value=l:null),onInput:b,name:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[c,t(w)]]),e("div",null,[q,i(e("input",{type:"number","onUpdate:modelValue":r[1]||(r[1]=l=>u(d)?d.value=l:null),onInput:b,name:"X",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[c,t(d)]])]),e("div",null,[A,i(e("input",{type:"number","onUpdate:modelValue":r[2]||(r[2]=l=>u(s)?s.value=l:null),onInput:b,name:"Y",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[c,t(s)]])]),e("div",null,[J,i(e("input",{type:"number","onUpdate:modelValue":r[3]||(r[3]=l=>u(f)?f.value=l:null),onInput:b,name:"noPage",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[c,t(f)]])])]),e("div",null,[K,i(e("input",{type:"number",step:"any","onUpdate:modelValue":r[4]||(r[4]=l=>u(_)?_.value=l:null),onInput:b,name:"size",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[c,t(_)]]),Q,W,i(e("input",{type:"number",step:"any","onUpdate:modelValue":r[5]||(r[5]=l=>u(p)?p.value=l:null),onInput:b,name:"red",placeholder:"red (0-1)",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[c,t(p)]]),Z,i(e("input",{type:"number",step:"any","onUpdate:modelValue":r[6]||(r[6]=l=>u(y)?y.value=l:null),onInput:b,name:"green",placeholder:"green (0-1)",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[c,t(y)]]),ee,i(e("input",{type:"number",step:"any","onUpdate:modelValue":r[7]||(r[7]=l=>u(v)?v.value=l:null),onInput:b,name:"blue",placeholder:"blue (0-1)",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,544),[[c,t(v)]])]),e("div",re,[e("button",{onClick:r[8]||(r[8]=(...l)=>t($)&&t($)(...l)),class:"focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},"Submit"),t(h)?(V(),U("a",{key:0,href:t(I),download:"result.pdf",class:"focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},"Download",8,le)):j("",!0)])]),x(N,{activated:t(g),onOnClose:r[9]||(r[9]=l=>g.value=!1)},null,8,["activated"])])}}}),oe={class:"container flex flex-wrap items-center justify-between mx-auto"},de=B({__name:"addtext",setup(F){let n=a(),m=C(()=>{if(!!n.value)return new Blob([n.value],{type:"application/pdf"})});return E(n,g=>{console.log(`watched: ${g}`)}),(g,k)=>{const d=X,s=te,f=Y;return V(),U(S,null,[e("div",null,[x(d)]),e("div",null,[e("div",oe,[x(s,{file:t(n),"onUpdate:file":k[0]||(k[0]=p=>u(n)?n.value=p:n=p)},null,8,["file"]),x(f,{pdfBlob:t(m)},null,8,["pdfBlob"])])])],64)}}});export{de as default};
