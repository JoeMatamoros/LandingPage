document.addEventListener("DOMContentLoaded", function(e) {
    /*Esto es para que no se dispare el formulario*/
    document.getElementById("form1").addEventListener("submit", function(e) {
        e.preventDefault();
        e.stopPropagation();

    });
    document.getElementById("form2").addEventListener("submit", function(e) {
        e.preventDefault();
        e.stopPropagation();

    });

    document.getElementById("form3").addEventListener("submit",function(e){
        e.preventDefault();
        e.stopPropagation();
    });

    document.getElementById("form4").addEventListener("submit",function(e){
        e.preventDefault();
        e.stopPropagation();
    });

    document.getElementById("form5").addEventListener("submit",function(e){
    e.preventDefault();
    e.stopPropagation();
    })
    /*  */
    var btns = document.getElementsByTagName("button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("mouseenter", function(e) {
            micron.getEle("#" + e.target.id).interaction("bounce").duration(".45").timing("ease-out");
        });
        btns[i].addEventListener("mouseleave", function(e) {
            var classes = e.target.classList;
            var toRemove = [];
            for (var j = 0; j < classes.length; j++) {
                var classstr = classes[j];
                if ((/^mjs-.*$/).test(classstr)) {
                    toRemove.push(classstr);
                }
            }
            toRemove.map(function(cst) {
                e.target.classList.remove(cst);
            });
        });
    }
});
