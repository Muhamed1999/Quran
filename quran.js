// function search(){
// let btnseatch = document.querySelector('.search-inbut').ariaValueMax.toUpperCase;
// let section = document.querySelector('.sec');
// let caard = document.querySelectorAll('.caard');
// let name = document.querySelectorAll('.namein');

// for( let i = 0; i<name.length; i++) {
// if(name[i].innerHTML.toUperCase.indexOf(btnseatch) >= 0 ){
//     caard[i].computedStyleMap.display =  "";
//             } else{
//                 caard[i].computedStyleMap.display =  "none";

//             }
//         }
// }



        // كود البحث عن المنتجات بالعربية
        function searchProducts() {
            // الحصول على قيمة مربع البحث
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            // جميع البطاقات
            const cards = document.querySelectorAll('.caard');

            // عرض وإخفاء البطاقات بناءً على نتائج البحث
            cards.forEach(card => {
                const productName = card.querySelector('.namein').textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    card.style.display = "block"; // إظهار البطاقة إذا كان المنتج يتطابق مع البحث
                } else {
                    card.style.display = "none"; // إخفاء البطاقة إذا لم يتطابق مع البحث
                }
            });
        }