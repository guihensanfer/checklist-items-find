function BuscarItemPorTermoBusca(objetoCheckList, termoBusca, buscarTambemNaLabel) {
    var checkListEmp = objetoCheckList;
    var checkListEmpItems = checkListEmp.getElementsByTagName("input");
    var checkListEmpItemsCount = checkListEmpItems.length;
    
    if (!checkListEmpItems || checkListEmpItemsCount == 0)
        return false;

    for (var x = 0; x < checkListEmpItemsCount; x++) {
        if (termoBusca) {
            if (checkListEmpItems[x].value.toUpperCase().includes(termoBusca.toUpperCase())) {                        
                // Comparação resultou em true
                checkListEmpItems[x].parentElement.style.display = "block";
            }
            else {
                if (buscarTambemNaLabel && buscarTambemNaLabel == true) {
                    // Procura a Label que contem a descrição do item
                    var objLabel = checkListEmpItems[x].parentElement.getElementsByTagName("label");

                    if (objLabel && objLabel.length > 0) {
                        if (objLabel[0].innerText.toUpperCase().includes(termoBusca.toUpperCase())) {
                            // Comparação resultou em true
                            objLabel[0].parentElement.style.display = "block";
                        }
                        else {
                            // Comparação resultou em false
                            objLabel[0].parentElement.style.display = "none";
                        }
                    }
                }
                else {
                    // Comparação resultou em false
                    checkListEmpItems[x].parentElement.style.display = "none";
                }
            }
        }
        else {
            // Termo de busca vázio                    
            checkListEmpItems[x].parentElement.style.display = "block";
        }
    }

    return true;
}