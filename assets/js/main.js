!function(w,d){"use strict";d.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]').forEach(e=>e.setAttribute('onclick','location.hash=this.id'));i=d.getElementById('inner');if(i!==null){var p=d.head.querySelector('link[rel=prev]'),q=d.head.querySelector('link[rel=next]'),n=null,a=null,u=null,i=null,r=null,l=null;d.addEventListener("touchstart",w=>{l=w.target,r=Date.now(),n=w.touches[0].clientX,a=w.touches[0].clientY,u=0,i=0},!1),d.addEventListener("touchmove",w=>{if(!n||!a)return;var d=w.touches[0].clientX,r=w.touches[0].clientY;u=n-d,i=a-r},!1),d.addEventListener("touchend",w=>{if(l!==w.target)return;var v=w.changedTouches||w.touches||[],xs=parseInt(n,10),xe=parseInt((v[0]||{}).clientX||-1,10),ys=parseInt(a,10),ye=parseInt((v[0]||{}).clientY||-1,10),p=Date.now()-r;
Math.abs(u)>Math.abs(i)?Math.abs(u)>10&&p<500&&(u>0?!function(){console.log("1");if(e!=null){location.href=e.href}}():!function(){console.log("2");if(q!=null){console.log(q,q!=null,q.href);location.href=q.href}}()):Math.abs(i)>10&&p<500&&(i>0?!function(){console.log("3");}():!function(){console.log("4");if(ys<80){location=location.origin}}());n=null,a=null,r=null},!1);}}(window,document)
