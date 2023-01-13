/* https://raw.githubusercontent.com/john-doherty/swiped-events/master/dist/swiped-events.min.js */
!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),a},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;l=t.target,r=Date.now(),n=t.touches[0].clientX,a=t.touches[0].clientY,u=0,i=0},!1),e.addEventListener("touchmove",function(t){if(!n||!a)return;var e=t.touches[0].clientX,r=t.touches[0].clientY;u=n-e,i=a-r},!1),e.addEventListener("touchend",function(t){if(l!==t.target)return;var s=parseInt(o(l,"data-swipe-threshold","20"),10),c=o(l,"data-swipe-unit","px"),d=parseInt(o(l,"data-swipe-timeout","500"),10),p=Date.now()-r,h="",v=t.changedTouches||t.touches||[];"vh"===c&&(s=Math.round(s/100*e.documentElement.clientHeight));"vw"===c&&(s=Math.round(s/100*e.documentElement.clientWidth));Math.abs(u)>Math.abs(i)?Math.abs(u)>s&&p<d&&(h=u>0?"swiped-left":"swiped-right"):Math.abs(i)>s&&p<d&&(h=i>0?"swiped-up":"swiped-down");if(""!==h){var b={dir:h.replace(/swiped-/,""),touchType:(v[0]||{}).touchType||"direct",xStart:parseInt(n,10),xEnd:parseInt((v[0]||{}).clientX||-1,10),yStart:parseInt(a,10),yEnd:parseInt((v[0]||{}).clientY||-1,10)};l.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),l.dispatchEvent(new CustomEvent(h,{bubbles:!0,cancelable:!0,detail:b}))}n=null,a=null,r=null},!1);var n=null,a=null,u=null,i=null,r=null,l=null;function o(t,n,a){for(;t&&t!==e.documentElement;){var u=t.getAttribute(n);if(u)return u;t=t.parentNode}return a}}(window,document);

document.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]').forEach(e=>e.setAttribute('onclick','location.hash=this.id'))
i=document.getElementById('inner')

if(i!==null){
  l=document.getElementById('left-button')
  r=document.getElementById('right-button')
  
  i.addEventListener('swiped-down',e=>{
    console.log(e.detail.xStart)
    if(e.detail.xStart<100) {
      location="https://seminararbeit.github.io"
    }
  })
  
  if(l!=null){
    i.addEventListener('swiped-left',_=>{location.href=l.href})
  }
  if(r!=null){
    i.addEventListener('swiped-right',_=>{location.href=r.href})
  }
}
