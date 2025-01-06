// margin ===========================================================

var remove_margin = document.getElementById('remove_margin');
var index_margin = document.querySelector('.index_margin');

remove_margin.addEventListener('click', function(){
    index_margin.remove();
});


// favourite ========================================================

let off = document.querySelectorAll('.off');

for (let i = 0; i < off.length; i++) {

    off[i].addEventListener('click', function() {

        if (off[i].src.includes('heartoff.png')) 
        {
            off[i].src = './assets/images/hearton.png';
        } 
        
        else {
            off[i].src = './assets/images/heartoff.png';
        }
    });
}

// collection ========================================================

var search = document.getElementById('search');
var container = document.querySelectorAll('.price');

search.addEventListener('keyup', function (event) {
    var entervalue = event.target.value.toUpperCase();

    container.forEach(function (price) {
        var clothlist = price.querySelectorAll('p');
        
        var matchFound = false; 

        clothlist.forEach(function (p) {
            if (p.textContent.toUpperCase().includes(entervalue)) {
                matchFound = true; 
            }
        });

        price.parentElement.style.display = matchFound ? 'block' : 'none';
    });
});


// collection - checkbox filter ========================================================


