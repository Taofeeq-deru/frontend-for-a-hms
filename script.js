var navDrop = document.getElementById("mydropbt");
        var theContent = document.getElementById("maindrop")
        navDrop.addEventListener("click", thisFunction); 
        function thisFunction() { 
            document.getElementById("mydrop").classList.toggle("showdrop");
            theContent.classList.add("opacity-style");
            navDrop.style.opacity = 0;
        }
        window.addEventListener("click", function(e) { 
            if (!e.target.matches(".dropbt")) {
                var drop = document.getElementsByClassName("drop-content");
                var b;
                for (b = 0; b < drop.length; b++) {
                    var openDrop = drop[b];
                    if (openDrop.classList.contains('showdrop')) {
                        openDrop.classList.remove('showdrop');
                    }
                    theContent.classList.remove("opacity-style");
                    navDrop.style.transition = "opacity 0.6s ease";
                    navDrop.style.opacity = 1;
                }
            }
        })
        