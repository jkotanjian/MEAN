$(document).ready(function() {
    (function(global) {
        global.$Dojo = function $Dojo(id){
       
            this.element = document.getElementById(id);
            this.click = function(callback){
                this.element.addEventListener("click", callback);
            };

            this.hover = function(hoverIn, hoverOut){
                this.element.addEventListener("mouseover", hoverIn);
                this.element.addEventListener("mouseout", hoverOut);
            };
        return this;
        };
    })(window);

    $Dojo("ninja").click(function callback(element) { console.log("The button was clicked!") });
    $Dojo("ninja2").hover(function callback(element) { console.log("The button was hovered on!") });    
});