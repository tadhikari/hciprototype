
// class level variables
var languageSelected = null;
var currentPage = null;
var currentLanguageTag = null;
var welcome, parent = null;

self.text = {

    'ENGLISH':{
        'HELP':`Thank you for using this vending machine.
        If you have any questions or concerns,
        please contact our technical support team at
        888-888-8888 or smartvending@email.com`,

        'HOME':`Are you sure you want to return to the Home Screen?
        If you are half way in the payment process, the money will be refunded to you.`,
        'NEXT':'Next',
        'WELCOME':{'h1':'Welcome To The Smart Vending Machine',
                   'h2':'Please choose the language of your choice to proceed'},
        'QUESTION':{},
        'PAYMENT':{}
    },
    'SPANISH':{

    },
    'RUSSIAN':{

    }

};

// isAlreadyInitialized(){
//     if
// }

window.onload = (event) => {
    
    
   self.languageSelected = 'ENGLISH';
    //primaryInitilization

    
    
};

languageBoxSelection = function(tag) {
    
};


init = function(){

    
    primaryInitilization = true;    
    

}


changeLanguage = function(language,placement){
    languageSelected = language;
    //console.log(this);
    changeLanguageSelectionOnScreen(placement);
    loadPageText();
}




loadPageText = function() {

        if(currentPage == 'WELCOME'){

            
            let h1 = self.document.getElementById('head1');
            let h2 = self.document.getElementById('head2');
            let next = self.document.getElementById('next');

            console.log(h1.innerHTML);
            console.log(self.pageName);
            h1.innerHTML = text[languageSelected][currentPage]['h1'];
            h2.innerHTML = text[languageSelected][currentPage]['h2'];
            //next.innerHTML = text[languageSelected][currentPage]['h2'];
            
        }



}







helpbox = function() {
    alert(`
        ${text[languageSelected]['HELP']}
        
    `);
}

displayToggle = function(tag){
    tag.classList.toggle("hide");
}




goBackToHome = function() {

    





}

