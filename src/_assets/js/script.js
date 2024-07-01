import "/assets/js/vendor/mermaid.min.js";
import { scrollSpy } from "/assets/js/vendor/scrollspy.js";

document.addEventListener("DOMContentLoaded", function(t) {

    
    
    // function getPreferredColorScheme() {
    //     if (window.matchMedia) {
    //         if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    //             return 'dark';
    //         } else {
    //             return 'light';
    //         }
    //     }
    //     return 'light';
    // }
    
    const themeSwitch = document.getElementById("themeSwitch");//.getElementsByTagName("input")[0];
    if (themeSwitch !== null) {
        const themeSwitchControl = themeSwitch.getElementsByTagName("input")[0];
        function updateThemeToggler(event) {
            // got user prefs set
            const storageTheme = localStorage.getItem("theme");
            // console.log(event, storageTheme);
            if (storageTheme === null ) {
                if(event.matches) {
                    // themeSwitch.classList.add("swap-active")
                    // themeSwitch.checked = false;
                    themeSwitchControl.value = "light";
                    document.documentElement.setAttribute("data-theme", "dark")
                } else {
                    // themeSwitch.classList.remove("swap-active")
                    themeSwitchControl.value = "dark"
                    document.documentElement.setAttribute("data-theme", "light")
                } 
            } else {
                if(storageTheme === "dark") {
                    // themeSwitch.classList.add("swap-active")
                    themeSwitchControl.value = "light";
                }
                else {
                    themeSwitch.classList.remove("swap-active")
                    themeSwitchControl.value = "dark"
                }
                document.documentElement.setAttribute("data-theme", storageTheme)
            }
            // console.log("Changed prefs: ", themeSwitch.value, themeSwitch.checked, themeSwitch.classList.value)
        };
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeToggler);
        
        updateThemeToggler(window.matchMedia('(prefers-color-scheme: dark)'));
        // const storageTheme = localStorage.getItem("theme");
        //     // console.log(storageTheme)
        //     if (storageTheme !== null ){ 
    //         // document.documentElement.setAttribute("data-theme", storageTheme)
    //         // themeSwitch.checked = storageTheme === "dark" ? true : false;
    //     } else {
    //         if (window.matchMedia) {
    //             console.log(window.matchMedia)

    //             if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    //                 // document.documentElement.setAttribute("data-theme", "dark")
    //                 // themeSwitch.checked = true;
    //             } else {
    //                 // document.documentElement.setAttribute("data-theme", "light")
    //                 // themeSwitch.checked = false;
    //             }
    //         }
    //     }
        themeSwitch.addEventListener("click", function() {
            // console.log("Click!",
            //     localStorage.getItem("theme"),
            //     themeSwitchControl.checked,
            //     document.documentElement.getAttribute("data-theme")
            // );
            localStorage.setItem("theme", 
            themeSwitchControl.checked ? 
                    document.documentElement.getAttribute("data-theme") === 'dark' ? "light" : "dark" 
                    : document.documentElement.getAttribute("data-theme") === 'dark' ? "dark" : "light" 
            );
            // document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
            // console.log("Clack!", localStorage.getItem("theme"));
        });
        
    //     // [...document.querySelectorAll("[data-set-theme]")].forEach(e=>{
    //     //     e.addEventListener("click", function() {
    //     //         document.documentElement.setAttribute("data-theme", this.getAttribute("data-set-theme")),
    //     //         localStorage.setItem("theme", document.documentElement.getAttribute("data-theme")),
    //     //         [...document.querySelectorAll("[data-set-theme]")].forEach(a=>{
    //     //             a.classList.remove(a.getAttribute("data-act-class"))
    //     //         }),
    //     //         e.getAttribute("data-act-class") && e.classList.add(e.getAttribute("data-act-class"))
    //     //     })
    //     // });
        
    }
    // https://github.com/mermaid-js/mermaid
    // mermaid.initialize({startOnLoad: true});

    // https://github.com/kimyvgy/simple-scrollspy
    scrollSpy('#page-nav', {
        sectionSelector: 'div#content>main>div.prose section',  // Query selector to your sections
        targetSelector: 'nav ul li.nav-item a.nav-link', // Query selector to your elements that will be added `active` class
        activeClass: "active",
        hrefAttribute: "href",
        //onActive: function (e,t) { console.log(e,t) },
        offset: 150                 // Menu item will active before scroll to a matched section 100px
    });


});
