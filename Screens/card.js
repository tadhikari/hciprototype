

//self.parent.
var sliderValue = 0;
var self.parent.currentPage = 'CARD';
var slider = document.getElementById("cardswipe");
var input = document.getElementById("pinInput");
var pay = document.getElementById("next1");
var cardSwiped = false;
var pinAdded = false;



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

	else if(input.value.length < 4){

		alert(`${self.parent.text[self.parent.languageSelected][self.parent.currentPage]['lessthanfour']}`); // pin should be 4 digit long
		return false;
	}

	else if(isNaN(input.value)){
		alert(`not num`);
		input.value = '0000'
		return false;
	}
	else if(isNaN(input.value) == false && input.value.length==4) {
		return true;
	}

	else {
		alert(`generic error`);
		return false;
	}

}





nextPage = function() {

	
	if(!cardSwiped){
		alert(`card swiped`);
	}

	if(cardSwiped && pinAdded()) {

	}


	else {





	}


}


