

	var q1Answered = false;
	var q2Answered = false;
	var q3Answered = false;

window.onload = (event) => {


	self.parent.currentPage = 'QUESTION';
	self.parent.questionAnswer = []; //resetting previously answered questions
	loadPageText();
	

}


loadPageText = function() {

        let h1 = document.getElementById('head1');
        let h2 = document.getElementById('head2');
        let next = document.getElementById('next1');
        let back = document.getElementById('back1');

        let qstn1 =  document.getElementById('qstn1');
        let qstn2 =  document.getElementById('qstn2');
        let qstn3 =  document.getElementById('qstn3');
        
        //question 1 option 1
        let q1o1 = document.getElementById('beglevel');
        let q1o2 = document.getElementById('intlevel');
        let q1o3 = document.getElementById('advlevel');

        let q2o1 = document.getElementById('vlogpurpose');
        let q2o2 = document.getElementById('travelpurpose');
        let q2o3 = document.getElementById('moviepurpose');

        let q3o1 = document.getElementById('bigtier');
        let q3o2 = document.getElementById('inttier');
        let q3o3 = document.getElementById('hightier');


        h1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h1'];
        h2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h2'];
        next.innerText = self.parent.text[self.parent.languageSelected]['NEXT'];
        back.innerText = self.parent.text[self.parent.languageSelected]['BACK'];
        qstn1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET1']['QSTN'];
        qstn2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET2']['QSTN'];
        qstn3.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET3']['QSTN'];


        q1o1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET1']['Q1'];
        q1o2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET1']['Q2'];
        q1o3.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET1']['Q3'];


        q2o1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET2']['Q1'];
        q2o2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET2']['Q2'];
        q2o3.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET2']['Q3'];


        q3o1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET3']['Q1'];
        q3o2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET3']['Q2'];
        q3o3.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['SET3']['Q3'];


}		


nextPage = function() {

    let q1Answer = null;
    let questionOne = document.querySelectorAll('input[name="q1"]');
    console.log(questionOne + "hello");
    for(let i=0;i<questionOne.length;i++){

        if(questionOne[i].checked){
            q1Answer = questionOne[i].id;
        }

    }



    q2Answer = null;
    questionTwo = document.querySelectorAll('input[name="q2"]');


    for(let i=0;i<questionTwo.length;i++){

        if(questionTwo[i].checked){
            q2Answer = questionTwo[i].id;
        }

    }

    

    q3Answer = null;
    questionThree = document.querySelectorAll('input[name="q3"]');


    for(let i=0;i<questionThree.length;i++){

        if(questionThree[i].checked){
            q3Answer = questionThree[i].id;
        }

    }



    self.parent.questionAnswer = [q1Answer,q2Answer,q3Answer];
    //console.log(self.parent.questionAnswer)

	iframe = self.parent.document.getElementById('childrenScreens');

    iframe.src = './Screens/cameras.html'

}



previousPage = function(){

	iframe = self.parent.document.getElementById('childrenScreens');

    iframe.src = './Screens/welcome.html'


}

toggleButtonStatus = function() {

	if(q1Answered && q2Answered && q3Answered){
		let next = document.getElementById('next1');
 	   next.disabled = false;
    
	}
 	   
}

q1Click = function() {
	if(!q1Answered){
		q1Answered = true;
	}
	toggleButtonStatus();
}

q2Click = function() {
	if(!q2Answered){
		q2Answered = true;
	}
	toggleButtonStatus();
}

q3Click = function() {
	if(!q3Answered){
		q3Answered = true;
	}
	toggleButtonStatus();
}