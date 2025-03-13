//const input = document.querySelector('favchap');
const input = document.getElementById('favchap');
const button = document.querySelector('.submit');
const output = document.getElementById('list');


/*const scriptureList = document.createElement('li');
const deleteButton = document.createElement('button');
scriptureList.textContent = input.value;
deleteButton.textContent = '❌';
scriptureList.appendChild(deleteButton);
output.appendChild(scriptureList);*/
/*deleteButton.onclick = function() {
  scriptureList.remove();
};*/


button.addEventListener('click', function() {
    if (input.value !== '') {
        const scriptureList = document.createElement('li');
        const deleteButton = document.createElement('button');
        scriptureList.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.onclick = function() {
            scriptureList.remove();
        };
        
        scriptureList.appendChild(deleteButton);
        output.appendChild(scriptureList);
        input.value = '';
        input.focus();
        
       
    }
    else {
        alert('Please enter a scripture');
    }
});





