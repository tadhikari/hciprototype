submit = function(){

	alert(`


        ${self.parent.text[self.parent.languageSelected]['THANKS']}
        
    `);


	iframe = self.parent.document.getElementById('childrenScreens');

    iframe.src = './Screens/welcome.html'

};


