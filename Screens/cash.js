



window.onload = (event) => { 

	self.parent.currentPage = 'CASH';
	loadPageText();


}






loadPageText = function(){

	
	let h1 = document.getElementById('head1');
    let h2 = document.getElementById('head2');
    let simulationTextasda = document.getElementById('justasimulation');
    let pay = document.getElementById('next1'); 

    h1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h1'];
    h2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h2'] + " US$ "+self.parent.remainingBalance;
	simulationText.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['simulation'];
	pay.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['pay'];




}


validityCheck = function() {

	let input = document.getElementById('cashinput');
	let content = parseFloat(input.value)

	
	if(isNaN(content)) {
		alert(`${self.parent.text[self.parent.languageSelected][self.parent.currentPage]['invalidamount']}`);

	input.value = '0.00';
	return false;

	}

	return true;

};


nextPage = function() {

	if(validityCheck()) {

		// if(){

		// }
		// else {
			
		// }



	}

}