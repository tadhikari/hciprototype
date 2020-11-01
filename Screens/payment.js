

isMethodOfPaymentSelected = false;

window.onload = (event) => {


	self.parent.currentPage = 'PAYMENTSELECTION';
	loadPageText();
     loadCamera();
     	

}


loadPageText = function() {

	let h1 = document.getElementById('head1');
     let h2 = document.getElementById('head2');
     let next = document.getElementById('next1');
     let back = document.getElementById('back1');
     let paymentTypeText = document.getElementById('paymenttype');
     let cash = document.getElementById('cash');
     let card = document.getElementById('card');
     

     h1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h1'];
     h2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h2'];
     next.innerText = self.parent.text[self.parent.languageSelected]['NEXT'];
     back.innerText = self.parent.text[self.parent.languageSelected]['BACK'];
     paymentTypeText.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['MOP'];
     cash.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['CASH'];
     card.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['CARD'];





}


loadCamera = function() {

    let image = document.getElementById('cameraimage');
    let cameraname = document.getElementById('cameraName');
    let cameraPrice = document.getElementById('cameraPrice');
    image.src = '../images/'+self.parent.cameraSelection['Logo'];
    cameraname.innerHTML = self.parent.cameraSelection['Camera'];
    cameraPrice.innerHTML = 'US$ '+self.parent.cameraSelection['Price'];



}

mopSelect = function(){

     let checkboxes = document.querySelectorAll('input[name="mop"]');
     let nextBtn = document.getElementById('next1');
     console.log(checkboxes[0].checked);
     
     if(checkboxes[0].checked || checkboxes[1].checked){

          nextBtn.disabled = false;
     }

     else {
         nextBtn.disabled = true; 
     }




}
