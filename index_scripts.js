// Wait for site to load
window.addEventListener('load', function () {





    // Draggable elements
    function dragElement(e){var t=0,n=0,o=0,d=0;function l(l){(l=l||window.event).preventDefault(),t=o-l.clientX,n=d-l.clientY,o=l.clientX,d=l.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function m(){document.onmouseup=null,document.onmousemove=null,document.getElementById("window_IDTITLE").classList.remove("Dragged_State"),document.getElementById("window_tab_IDTITLE").classList.remove("Dragged_State")}document.getElementById("window_tab_IDTITLE").onmousedown=function(e){(e=e||window.event).preventDefault(),o=e.clientX,d=e.clientY,document.onmouseup=m,document.getElementById("window_IDTITLE").classList.add("Dragged_State"),document.getElementById("window_tab_IDTITLE").classList.add("Dragged_State"),document.onmousemove=l}}dragElement(document.getElementById("window_IDTITLE"));
    function dragElement2(e){var t=0,n=0,o=0,d=0;function l(l){(l=l||window.event).preventDefault(),t=o-l.clientX,n=d-l.clientY,o=l.clientX,d=l.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function m(){document.onmouseup=null,document.onmousemove=null,document.getElementById("window_IDSUBTITLE").classList.remove("Dragged_State"),document.getElementById("window_tab_IDSUBTITLE").classList.remove("Dragged_State")}document.getElementById("window_tab_IDSUBTITLE").onmousedown=function(e){(e=e||window.event).preventDefault(),o=e.clientX,d=e.clientY,document.onmouseup=m,document.getElementById("window_IDSUBTITLE").classList.add("Dragged_State"),document.getElementById("window_tab_IDSUBTITLE").classList.add("Dragged_State"),document.onmousemove=l}}dragElement2(document.getElementById("window_IDSUBTITLE"));
    function dragElement3(e){var t=0,n=0,o=0,d=0;function l(l){(l=l||window.event).preventDefault(),t=o-l.clientX,n=d-l.clientY,o=l.clientX,d=l.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function m(){document.onmouseup=null,document.onmousemove=null,document.getElementById("window_IDOVERVIEW").classList.remove("Dragged_State"),document.getElementById("window_tab_IDOVERVIEW").classList.remove("Dragged_State")}document.getElementById("window_tab_IDOVERVIEW").onmousedown=function(e){(e=e||window.event).preventDefault(),o=e.clientX,d=e.clientY,document.onmouseup=m,document.getElementById("window_IDOVERVIEW").classList.add("Dragged_State"),document.getElementById("window_tab_IDOVERVIEW").classList.add("Dragged_State"),document.onmousemove=l}}dragElement3(document.getElementById("window_IDOVERVIEW"));
    function dragElement4(e){var t=0,n=0,o=0,d=0;function l(l){(l=l||window.event).preventDefault(),t=o-l.clientX,n=d-l.clientY,o=l.clientX,d=l.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function m(){document.onmouseup=null,document.onmousemove=null,document.getElementById("window_IDROOMIMG").classList.remove("Dragged_State"),document.getElementById("window_tab_IDROOMIMG").classList.remove("Dragged_State")}document.getElementById("window_tab_IDROOMIMG").onmousedown=function(e){(e=e||window.event).preventDefault(),o=e.clientX,d=e.clientY,document.onmouseup=m,document.getElementById("window_IDROOMIMG").classList.add("Dragged_State"),document.getElementById("window_tab_IDROOMIMG").classList.add("Dragged_State"),document.onmousemove=l}}dragElement4(document.getElementById("window_IDROOMIMG"));

})