let count=0;

document.getElementById("add-btn").addEventListener("click", function(){
    const inputValue = document.getElementById("input-value").value;
  count++;
if(inputValue == ""){
    alert("Please enter a value"); 
}

else{ 
    const mainContainer = document.getElementById("content-container");
    const tableContainer = document.createElement("tr");

    tableContainer.innerHTML=`<th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td><button class="btn btn-danger delete-btn">Delete</button>
    <button class="btn btn-primary done-btn">Done</button></td>`;
    mainContainer.appendChild(tableContainer);

    document.getElementById("input-value").value="";

    const deleteBtn = document.getElementsByClassName("delete-btn");
    const doneBtn = document.getElementsByClassName("done-btn");
    const clearBtn = document.getElementsByClassName("clear-btn");

    for(const button of deleteBtn){
        button.addEventListener("click", function(e){
    e.target.parentNode.parentNode.style.display = "none";
        });
    }

    for(const button of doneBtn){
        button.addEventListener("click", function(e){
            e.target.parentNode.parentNode.style.textDecoration = "line-through";
        });
    }

    for(const button of clearBtn){
        button.addEventListener("click", function(e){
            // e.target.parentNode.style.display ="none";
            const tbody = document.getElementById('content-container')
            tbody.innerHTML = 'none';
        });

    }

}

});