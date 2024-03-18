function search(){
let btnseatch = document.querySelector('.search-inbut').ariaValueMax.toUpperCase;
let section = document.querySelector('.sec');
let caard = document.querySelectorAll('.caard');
let name = document.querySelectorAll('.namein');

for( let i = 0; i<name.length; i++) {
if(name[i].innerHTML.toUperCase.indexOf(btnseatch) >= 0 ){
    caard[i].computedStyleMap.display =  "";
            } else{
                caard[i].computedStyleMap.display =  "none";

            }
        }
}