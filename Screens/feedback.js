
window.onload = () => {

	self.parent.currentPage = 'FEEDBACK';
	loadPageText();




}

submit = function(){

	alert(`


        ${self.parent.text[self.parent.languageSelected][self.parent.currentPage]['redirect']}
        
    `);


	iframe = self.parent.document.getElementById('childrenScreens');

    iframe.src = './Screens/welcome.html'

};

loadPageText = function() {

	console.log("hello")

	let refund = Math.abs(self.parent.remainingBalance);
	let refund_sentence = '';

	if(refund>0){
		refund_sentence = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['change'] +"US$ "+refund+" ";
	}

	let final_sentence = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['camera'] + refund_sentence + self.parent.text[self.parent.languageSelected][self.parent.currentPage]['dispense']

	let h1 = document.getElementById('head1');
    let h2 = document.getElementById('change');
    let h3 = document.getElementById('head2');
    let legend = document.getElementById('legend');
    let submit = document.getElementById('feedbacksubmit');

    h1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h1'];
    h2.innerHTML = final_sentence;
    h3.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h2'];
    legend.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['rate'];
    submit.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['submit'];
}




