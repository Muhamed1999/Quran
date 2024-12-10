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








//         // استدعاء العناصر
// const toggleButton = document.getElementById('toggleMode');
// const body = document.body;

// // التحقق من التفضيل المحفوظ
// const currentMode = localStorage.getItem('theme');
// if (currentMode === 'dark') {
//     body.classList.add('dark-mode');
//     toggleButton.textContent = 'وضع الفاتح';
//     toggleButton.classList.add('light-mode');
// }

// // تبديل الوضع عند الضغط على الزر
// toggleButton.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     const isDarkMode = body.classList.contains('dark-mode');

//     // تحديث النص والمظهر للزر
//     if (isDarkMode) {
//         toggleButton.textContent = 'وضع الفاتح';
//         toggleButton.classList.add('light-mode');
//         localStorage.setItem('theme', 'dark'); // حفظ التفضيل
//     } else {
//         toggleButton.textContent = 'وضع المظلم';
//         toggleButton.classList.remove('light-mode');
//         localStorage.setItem('theme', 'light'); // حفظ التفضيل
//     }
// });


