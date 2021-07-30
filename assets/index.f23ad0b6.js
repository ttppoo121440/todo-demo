import{d as t,r as a,c as e,w as s,v as l,a as n,b as o,o as i,e as r,f as d,F as c,g as u,h as p,t as m,i as D,j as v,k as f,l as y}from"./vendor.c5167a6b.js";var b=t({name:"Form",props:{data:{type:Array,required:!0}},setup(t,e){const s=a("");return{data:s,addHandler:()=>{s.value.trim()&&(t.data.push({id:Date.now(),title:s.value,isDone:!1}),localStorage.setItem("todo",JSON.stringify(t.data)),s.value="")}}}});const g=n("button",{class:"btn",type:"submit"},"新增",-1);b.render=function(t,a,r,d,c,u){return i(),e("form",{class:"form",onSubmit:a[2]||(a[2]=o(((...a)=>t.addHandler&&t.addHandler(...a)),["prevent"]))},[s(n("input",{class:"input form-input","onUpdate:modelValue":a[1]||(a[1]=a=>t.data=a)},null,512),[[l,t.data]]),g],32)};var h=t({name:"ListItem",props:{data:{type:Array,required:!0},state:{type:String,required:!0}},setup(t){const e=a(""),s=a(0),l=()=>{e.value="",s.value=0},n=r((()=>t.data.filter((a=>"未完成"===t.state?!a.isDone:"已完成"===t.state?a.isDone:a))));return{isDoneHandler:a=>{a.isDone=!a.isDone,localStorage.setItem("todo",JSON.stringify(t.data))},cacheTitle:e,cacheId:s,delateData:a=>{const e=t.data.findIndex((t=>t.id===a));t.data.splice(e,1),localStorage.setItem("todo",JSON.stringify(t.data))},setEditData:(t,a)=>{e.value=a,s.value=t},editCancel:l,editData:()=>{if(!e.value)return;const a=t.data.findIndex((t=>t.id===s.value));t.data[a].title=e.value,localStorage.setItem("todo",JSON.stringify(t.data)),l()},filterData:n}}});h.render=function(t,a,o,r,D,v){return i(!0),e(c,null,d(t.filterData,((o,r)=>(i(),e("li",{class:"list-item",key:o.id},[t.cacheId===o.id?s((i(),e("input",{key:0,"onUpdate:modelValue":a[1]||(a[1]=a=>t.cacheTitle=a),onKeyup:[u((a=>t.editData(o)),["enter"]),a[2]||(a[2]=u(((...a)=>t.editCancel&&t.editCancel(...a)),["esc"]))],class:"form-control",type:"text"},null,40,["onKeyup"])),[[l,t.cacheTitle]]):(i(),e(c,{key:1},[s(n("input",{type:"checkbox","onUpdate:modelValue":t=>o.isDone=t,onClick:a=>t.isDoneHandler(o),id:o.id},null,8,["onUpdate:modelValue","onClick","id"]),[[p,o.isDone]]),n("label",{onDblclick:a=>t.setEditData(o.id,o.title),for:o.id,class:"list-text"},m(o.title),41,["onDblclick","for"])],64)),n("button",{class:"btn",onClick:a=>t.delateData(o.id)},"刪除",8,["onClick"])])))),128)};var k=t({name:"ListTotal",props:{data:{type:Array,required:!0}},setup:t=>({total:r((()=>t.data.length)),doneTotal:r((()=>t.data.filter((t=>t.isDone)).length))})});const S={class:"list-total"};k.render=function(t,a,s,l,n,o){return i(),e("div",S," 還有 "+m(t.total)+" 筆任務，已完成 "+m(t.doneTotal)+" 筆資料 ",1)};var I=t({name:"ListBottom",props:{data:{type:Array,required:!0},state:{type:String,required:!0}},setup:(t,a)=>({doneText:t=>{a.emit("update:state",t)},clearData:()=>{t.data.length=0,localStorage.removeItem("todo"),a.emit("update:state","全部")},btnGroop:D(["全部","未完成","已完成"])}),components:{ListTotal:k}});const T={class:"list-bottom"},C={key:0,class:"list-bottom-container"},L={class:"clearAll"};I.render=function(t,a,s,l,r,u){const p=f("ListTotal");return i(),e("div",T,[t.data.length?(i(),e("div",C,[n(p,{data:t.data},null,8,["data"]),n("div",L,[(i(!0),e(c,null,d(t.btnGroop,((a,s)=>(i(),e("a",{href:"#",class:["btn",{active:t.state===a}],onClick:o((e=>t.doneText(a)),["prevent"])},m(a),11,["onClick"])))),256)),n("a",{href:"#",class:"btn",onClick:a[1]||(a[1]=o(((...a)=>t.clearData&&t.clearData(...a)),["prevent"]))},"清除所有任務")])])):v("",!0)])};var x=t({name:"App",components:{Form:b,ListItem:h,ListBottom:I},setup(){const t=D(JSON.parse(localStorage.getItem("todo")||"[]"));return{state:a("全部"),listData:t}}});const q={class:"container"},A=n("h1",null,"Todo List",-1),H={class:"todo"},J={class:"list"};x.render=function(t,a,s,l,o,r){const d=f("Form"),c=f("ListItem"),u=f("ListBottom");return i(),e("section",q,[A,n("div",H,[n(d,{data:t.listData},null,8,["data"]),n("ul",J,[n(c,{data:t.listData,state:t.state},null,8,["data","state"])]),n(u,{data:t.listData,state:t.state,"onUpdate:state":a[1]||(a[1]=a=>t.state=a)},null,8,["data","state"])])])},y(x).mount("#app");