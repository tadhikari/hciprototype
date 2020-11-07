



window.onload = (event) => { 

	self.parent.currentPage = 'CASH';
	loadPageText();
	self.parent.pageQueue.splice(0,1);
	

}






loadPageText = function(){

	
	let h1 = document.getElementById('head1');
    let h2 = document.getElementById('head2');
    let simulationText = document.getElementById('justasimulation');
    let pay = document.getElementById('next1'); 
    let insertCash = document.getElementById('insertcashtext'); 

    h1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h1'];
    h2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h2'] + " US$ "+self.parent.remainingBalance;
	simulationText.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['simulation'];
	pay.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['pay'];
	insertCash.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['insert'];



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


	console.log(self.parent.pageQueue);

	if(validityCheck()) {

		let input = document.getElementById('cashinput');

		self.parent.remainingBalance = self.parent.remainingBalance - parseFloat(input.value);
		console.log(self.parent.remainingBalance)

		if(self.parent.remainingBalance>0 && self.parent.pageQueue.length == 0){



			console.log(`

				user enterd amount that is less than balance and had only selcted cash as MOP.

				`);

			reviseBalance();



		}
		else if (self.parent.remainingBalance>0 && self.parent.pageQueue.length>0) {

			console.log(`

				user enterd amount that is less than balance and had selected multiple ways of payment

				`);

			// console.log()

			iframe = self.parent.document.getElementById('childrenScreens');

    		iframe.src = './Screens/'+self.parent.pageQueue[0];


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