---
---

document.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]').forEach (e) ->
  e.setAttribute 'onclick', 'location.hash=this.id'
