
const container=document.querySelector('.container');

function setGrid(container){
    let num=prompt("Enter number of grids(less than 100): ");
    for(let i=0;i<num*num;i++)
    {
        const newDiv=document.createElement("div");
        newDiv.style.height=`400/${num}`
        container.append(newDiv);
    }
}

setGrid(container)

