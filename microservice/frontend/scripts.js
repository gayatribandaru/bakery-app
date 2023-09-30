const base_url = 'http://127.0.0.1:8007';

 function getNames() {
     fetch(base_url+'/get_names')
        .then(response => response.json())
        .then(names => {
            let list = document.getElementById('namesList');
            console.log(list);
            list.innerHTML = ''; // Clear existing names
            names.forEach(name => {
                let item = document.createElement('li');
                item.textContent = name[1];
                item.dataset.id = name[0];

                let btns = document.createElement('div');
            
                let updateBtn = document.createElement('button');
                updateBtn.textContent = "Update";
                updateBtn.onclick = function() { updateName(name[0]); };
            
                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = "Delete";
                deleteBtn.onclick = function() { deleteName(name[0]); };
                
                item.appendChild(updateBtn);
                item.appendChild(deleteBtn);
                list.appendChild(item);
            });
            
        });
        
}

async function updateName(id) {
    let newName = prompt("Enter the new name:");
    if (newName) {
        await fetch(base_url+'/update_name', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, name: newName })
        })
        .then(() => {
            getNames(); // Refresh the list
        });
    }
}

async function deleteName(id) {
    await fetch(base_url+'/delete_name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id })
    })
    .then(() => {
        getNames(); // Refresh the list
    });
}

async function addName() {
    const name = document.getElementById('name').value;
    console.log(name);
    if (name) {
       await fetch(base_url+'/add_name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        })
        .then(response => response.json())
            .then(data => {
                console.log(data);
            if (data.success) {
                getNames(); // Refresh the list
            } else {
                alert('Failed to add name.');
            }
        });
    }
}


