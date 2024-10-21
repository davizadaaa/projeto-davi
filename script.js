 document. addEventListener ('DOMContentLoaded, function() {
    const items = document.querySelectorAll('.item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicators li');
    const numberDisplay = document.querySelector('number');
    let currentIndex = 0;
    
        function showItem(index) {
            items.forEach(item => item.classList.remove('active'));
            indicators.forEach(indicators => indicator.classList.remove('active'));
            
            items[index].classList.add('active');
            indicators[index].classList.add('active');
            numberDisplay.textContent = (index + 1) % items.length;
        }   
    
        function nextItem () {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        }

        function prevItem() {
            currentIndex(currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
        }

        nextBtn.addEventListener('click', nextItem),
        prevBtn.addEventListener('click', prevItem);
    
        //Iniciakizar
        showItem(currentIndex);
});
    
    
    
    
    










































    
