


var languageSelected = null;

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
            self.parent.currentLanguageTag = currentLanguageTag;
        }
        else {
            currentLanguageTag = self.parent.currentLanguageTag;
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
        //next.innerHTML = text[languageSelected][currentPage]['h2'];
        


}

changeLanguageSelectionOnScreen = function(placement){
    //document.getElementsByClassName('');
    currentLanguageTag.classList.remove('selectedLanguage');
    let languages = document.getElementsByClassName('languageType');
    currentLanguageTag = languages[placement];
    currentLanguageTag.classList.add('selectedLanguage');

};


changeLanguage = function(language,placement){
    languageSelected = language;
    //console.log(this);
    changeLanguageSelectionOnScreen(placement);
    loadPageText();
}