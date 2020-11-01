



window.onload = (event) => { 

	self.parent.currentPage = 'CASH';
	loadPageText();
	self.parent.pageQueue.pop('cash.html')


}






loadPageText = function(){

	
	let h1 = document.getElementById('head1');
    let h2 = document.getElementById('head2');
    let simulationText = document.getElementById('justasimulation');
    let pay = document.getElementById('next1'); 

    h1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h1'];
    h2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h2'] + " US$ "+self.parent.remainingBalance;
	simulationText.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['simulation'];
	pay.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['pay'];




}


validityCheck = function() {

	let input = document.getElementById('cashinput');
	//let content = parseFloat()

	
	if(isNaN(input.value)) {
		alert(`${self.parent.text[self.parent.languageSelected][self.parent.currentPage]['invalidamount']}`);

	input.value = '0.00';
	return false;

	}

	return true;

};


nextPage = function() {

	if(validityCheck()) {

		let input = document.getElementById('cashinput');

		self.parent.remainingBalance = self.parent.remainingBalance - parseFloat(input.value);

		if(self.parent.remainingBalance>0 && self.parent.pageQueue.length == 0){



			console.log(`

				user enterd amount that is less than balance and had only selcted cash as MOP.

				`);

			reviseBalance();



		}
		else if (self.parent.remainingBalance>0 && self.parent.pageQueue.length>0) {

			console.log(`

				user enterd amount that is less than balance and had selected multiple ways of payment

				`)

		}

		else {

				iframe = self.parent.document.getElementById('childrenScreens');

    			iframe.src = './Screens/feedback.html';



		}

	}

}


reviseBalance = function() {


	let h2 = document.getElementById('head2');
	h2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h2'] + " US$ "+self.parent.remainingBalance;


}