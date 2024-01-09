
const container=document.querySelector('.container');

function setGrid(container){
    let num=prompt("Enter number of grids(less than 100): ");
    for(let i=0;i<num*num;i++)
    {
        let newDiv = document.createElement("div");
        newDiv.style.height=`calc(600px/${num})`;
        newDiv.style.width=`calc(600px/${num})`;
        newDiv.style.backgroundColor = 'red';
        container.append(newDiv);
    }
}

setGrid(container)

