

//self.parent.
var sliderValue = 0;

var slider = document.getElementById("cardswipe");
var input = document.getElementById("pinInput");
var pay = document.getElementById("next1");
var cardSwiped = false;
var pinAdded = false;


window.onload = (event) => {

	self.parent.currentPage = 'CARD';

	loadPageText();


}



loadPageText = function(){


	let h1 = document.getElementById('head1');
    let h2 = document.getElementById('head2');
    let simulationText = document.getElementById('justasimulation');
    let pay = document.getElementById('next1'); 
    let card = document.getElementById('insertcashtext');

    h1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h1'];
    h2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h2'] + " US$ "+self.parent.remainingBalance;
	simulationText.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['simulation'];
	pay.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['pay'];
	card.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['pin'];

}



nextPage = function() {

	
	if(!cardSwiped){
		alert(`${self.parent.text[self.parent.languageSelected][self.parent.currentPage]['cardswipe']}`);
	}

	if(cardSwiped && pinAdded()) {

		self.parent.remainingBalance = 0;
			iframe = self.parent.document.getElementById('childrenScreens');

    	iframe.src = './Screens/feedback.html';



	}


	else {





	}


}

document.getElementById('next1').addEventListener('click',nextPage);

slider.oninput = function() {
  sliderValue = this.value;
  sliderCheck();

}


sliderCheck = function() {

	if(sliderValue>8){

		cardSwiped = true;

	}
	else {
		cardSwiped = false;
	}

}

pinAdded = function() {

	

	if(input.value === '0000'){

		alert(` ${self.parent.text[self.parent.languageSelected][self.parent.currentPage]['fourzero']} `);
		return false;

	}

	else if(input.value.length < 4 && !isNaN(input.value)){

		alert(`${self.parent.text[self.parent.languageSelected][self.parent.currentPage]['lessthanfour']}`); // pin should be 4 digit long
		return false;
	}

	else if(isNaN(input.value)){
		alert(`${self.parent.text[self.parent.languageSelected][self.parent.currentPage]['invalidPin']}`);
		input.value = '0000'
		return false;
	}
	else if(isNaN(input.value) == false && input.value.length==4) {
		return true;
	}

	else {
		alert(`${self.parent.text[self.parent.languageSelected][self.parent.currentPage]['error']}`);
		return false;
	}

}




