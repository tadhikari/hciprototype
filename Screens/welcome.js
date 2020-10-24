


window.onload = (event) => {
    
        currentLanguageTag = document.getElementsByClassName('languageType')[0];
        currentLanguageTag.classList.add('selectedLanguage');
        currentPage = "WELCOME";
        loadPageText();

        console.log(languageSelected);
        console.log(currentPage);

        console.log(self.text)

    
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
