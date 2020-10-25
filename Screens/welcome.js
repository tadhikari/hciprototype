


var languageSelected = null;
var currentLanguageTag = null;
var currentPage = null;

window.onload = (event) => {
    
        
        
        currentPage = "WELCOME";

        if(self.parent.languageSelected==null){
            languageSelected = "ENGLISH";
            self.parent.languageSelected = languageSelected;
        }
        else {
            languageSelected = self.parent.languageSelected;
        }
        
        if(self.parent.currentLanguageTag == null) {
            currentLanguageTag = document.getElementsByClassName('languageType')[0];
            currentLanguageTag.classList.add('selectedLanguage');
            self.parent.currentLanguageTag = currentLanguageTag.id;
        }
        else {
            console.log('I here')
            currentLanguageTag = document.getElementById(self.parent.currentLanguageTag);
            currentLanguageTag.classList.add('selectedLanguage');
        }

        loadPageText();
        console.log(languageSelected);
    
};


loadPageText = function() {

        let h1 = document.getElementById('head1');
        let h2 = document.getElementById('head2');
        let next = document.getElementById('next');

        
        h1.innerHTML = self.parent.text[languageSelected][currentPage]['h1'];
        h2.innerHTML = self.parent.text[languageSelected][currentPage]['h2'];
        next.innerText = self.parent.text[languageSelected]['NEXT'];
        


}

changeLanguageSelectionOnScreen = function(placement){
    currentLanguageTag.classList.remove('selectedLanguage');
    let languages = document.getElementsByClassName('languageType');
    currentLanguageTag = languages[placement];
    self.parent.currentLanguageTag = currentLanguageTag.id;
    currentLanguageTag.classList.add('selectedLanguage');
};


changeLanguage = function(language,placement){
    languageSelected = language;
    self.parent.languageSelected = languageSelected;
    changeLanguageSelectionOnScreen(placement);
    loadPageText();
}

changePage = function(nextPage){


    iframe = self.parent.document.getElementById('childrenScreens');

    iframe.src = './Screens/Questions.html'


}

