import{_ as v,t as a,v as s,x as t,O as b,P as u,Q as c,a3 as p}from"./CtAlveQp.js";const m={methods:{generateBubbleStyle(){const d=2+Math.random()*4,e=6+Math.random()*4,n=-5+Math.random()*110,o=2+Math.random()*2,i=-1*(2+Math.random()*2);return{"--size":`${d}rem`,"--distance":`${e}rem`,"--position":`${n}%`,"--time":`${o}s`,"--delay":`${i}s`}}}},f={class:"w-full flex item-centers"},_={class:"footer w-full"},y={class:"bubbles"},x={style:{position:"fixed",top:"100vh"}};function h(d,e,n,o,i,r){return a(),s("div",f,[e[2]||(e[2]=t("div",{class:"main"},null,-1)),t("div",_,[t("div",y,[(a(),s(b,null,u(120,l=>t("div",{class:"bubble",key:l,style:c(r.generateBubbleStyle())},null,4)),64))]),e[0]||(e[0]=p('<div class="content" data-v-24bd624e><div data-v-24bd624e><div data-v-24bd624e><b data-v-24bd624e>自媒体账号</b><span class="hover:text-[red] transition duration-300 ease-in-out delay-100ms cursor-pointer" data-v-24bd624e>小红书</span><span class="hover:text-[yellow] transition duration-300 ease-in-out delay-100ms cursor-pointer" data-v-24bd624e>微博</span><span class="hover:text-[#000] transition duration-300 ease-in-out delay-100ms cursor-pointer" data-v-24bd624e>抖音</span></div><div data-v-24bd624e><b data-v-24bd624e>地址</b><span data-v-24bd624e>南京市栖霞区XXXX</span></div><div data-v-24bd624e><b data-v-24bd624e>商务合作</b><span data-v-24bd624e>18933555555</span></div><div data-v-24bd624e><span data-v-24bd624e>捕捉瞬间的美好、定格幸福的回忆</span></div></div></div>',1))]),(a(),s("svg",x,e[1]||(e[1]=[t("defs",null,[t("filter",{id:"blob"},[t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),t("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"blob"})])],-1)])))])}const B=v(m,[["render",h],["__scopeId","data-v-24bd624e"]]);export{B as default};
