const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;
    return tdElement;
};



export const renderTableRow = (product,) => {
    
    const tableRow = document.createElement('tr');
    const columnOne = makeTd(product.name);
    const columnTwo = makeTd(product.timesSelected);
    const columnThree = makeTd(product.quantity);
    

    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    



    return tableRow;
};