Array.prototype.getRandom=function(){return this[Math.floor(Math.random()*this.length)]},JSON.toEncoded=function(t){let n="";for(let e in t)n+=`${e}=${t[e]}&&`;return n};const jsonstr=function(t){return JSON.stringify(t)},vector2=function(t=0,n=0){return{x:t,y:n}},forIn=function(t,n){for(let e=0;e<t;e++)n&&n(e)},getRad=function(t){return t*Math.PI/180},vector2Dir=function(t,n){return Math.atan2(n.x-t.x,n.y-t.y)},transformV=function(t,n){return vector2(n.x-t.x,n.y-t.y)},getMagnitude=function(t){return Math.hypot(t.x,t.y)},random=function(t,n=0){return Math.floor(Math.random()*t)+n},find=function(t){return document.querySelector(t)},findall=function(t){return document.querySelectorAll(t)},flex={components:[]},makeElement=function(t,n={}){return Object.assign(n,{find(t){return this.querySelector(t)},findall(t){return this.querySelectorAll(t)},addChild(t){this.appendChild(t),flex.components.push(t),t.onstyling&&t.onstyling(),t.onadded&&t.onadded()},show(t="block"){"none"!==this.style.display&&""!==this.style.display||(this.style.display=t)},hide(){"none"===this.style.display&&""===this.style.display||(this.style.display="none")},saveRemove(t){const n=this.find(t);n&&n.remove()},clear(){this.innerHTML=""}}),Object.assign(document.createElement(t),n)};document.body.addChild=function(t){this.appendChild(t),t.onstyling&&t.onstyling(),t.onadded&&t.onadded()},window.onresize=function(t){flex.components.forEach(n=>{n.onscreenChange&&n.onscreenChange(t)})};const cOn={x:new XMLHttpRequest,init(){this.x.someSettings=[],this.x.getJSONResponse=(()=>JSON.parse(this.x.responseText))},post(t){this.init(),Object.assign(this.x,t),this.x.open("POST",t.url),this.x.someSettings.length>0&&this.x.someSettings.forEach(t=>{this.x[t[0]](t[1],[t[2]])}),this.x.send(t.data)},get(t){this.init(),Object.assign(this.x,t),this.x.open("GET",t.url),this.x.send()}},uploadFile=function(t="readAsArrayBuffer",n,e=1e3,i,o,s={}){const r=new FileReader;r.onload=function(){const t=this.result;let r=0,l=!1;const a=function(){let d=r,c=d+e;c>t.byteLength&&(c-=c-t.byteLength,l=!0);let u=t.slice(d,c);cOn.post({url:"/upload",someSettings:[["setRequestHeader","content-type","application/octet-stream"],["setRequestHeader","filedata",JSON.stringify(Object.assign({fname:n.name},s))]],data:u,onload(t){r+=u.byteLength,i(r),l?o(t):a()}})};a()},r[t](n)},readFile=function(t,n,e){const i=new FileReader;i[n](t),i.onloadend=function(){e(this.result)}},showElement=function(t,n="flex"){t.style.display=n},hideElement=function(t){t.style.display="none"},getTime=function(){return(new Date).getTime()},OBJevaluate=function(t){const n={};for(let e in t)t[e]&&(n[e]=t[e]);return n},imgErrHandler=function(){console.log(this)},is_null=function(t){return 0===t.length},openLoading=function(t,n){return makeElement("div",{id:"loadingDiv",style:"\n\t\t\tposition:absolute;\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t\twidth:100%;\n\t\t\theight:100%;\n\t\t\tbackground:rgb(0,0,0,0.5);\n\t\t\tdisplay:flex;\n\t\t\talign-items:center;\n\t\t\tjustify-content:center;\n\t\t",innerHTML:`\n\t\t\t<div\n\t\t\tstyle="\n\t\t\t\tbackground:white;\n\t\t\t\tpadding:10px;\n\t\t\t"\n\t\t\t>\n\t\t\t\t<span>${t}</span>\n\t\t\t</div>\n\t\t`,onadded(){n&&n(this)}})};