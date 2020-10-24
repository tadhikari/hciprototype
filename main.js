
// class level variables

self.languageSelected = null;
self.currentLanguageTag = null;

self.text = {

    'ENGLISH':{
        'HELP':`Thank you for using this vending machine.
        If you have any questions or concerns,
        please contact our technical support team at
        888-888-8888 or smartvending@email.com`,

        'HOME':`Are you sure you want to return to the Home Screen?
        If you are half way in the payment process, the money will be refunded to you.`,
        
        'WELCOME':{'h1':'Welcome To The Smart Vending Machine',
                   'h2':'Please choose the language of your choice to proceed','NEXT':'Next'},
        'QUESTION':{},
        'PAYMENT':{}
    },
    'SPANISH':{

         'HELP':`Gracias por utilizar esta máquina expendedora.
        Si tiene alguna pregunta o inquietud,
        póngase en contacto con nuestro equipo de soporte técnico en
        888-888-8888 o smartvending@email.com`,

        'HOME':`¿Está seguro de que desea volver a la pantalla de inicio?
        Si se encuentra a la mitad del proceso de pago, se le reembolsará el dinero.`,
        
        'WELCOME':{'h1':`Bienvenido a la máquina expendedora inteligente`,
                   'h2':`Elija el idioma de su elección para continuar`,
                   'NEXT':'Próxima',},
        'QUESTION':{},
        'PAYMENT':{}

    },
    'RUSSIAN':{


         'HELP':`Спасибо за использование этого торгового автомата.
        Если у вас есть вопросы или проблемы,
        свяжитесь с нашей службой технической поддержки по адресу
        888-888-8888 или smartvending@email.com`,

        'HOME':`Вы уверены, что хотите вернуться на главный экран?
        Если вы на полпути в процессе оплаты, деньги будут вам возвращены.`,
        
        'WELCOME':{'h1':`Добро пожаловать в умный торговый автомат`,
                   'h2':`Пожалуйста, выберите желаемый язык, чтобы продолжить`,
                   'NEXT':'следующий',},
        'QUESTION':{
            'SET1': {
                'Q1':'',
                'Q2':'',
                'Q3':''
            },
            'SET2': {
                'Q1':'',
                'Q2':'',
                'Q3':''
            },
            'SET3': {
                'Q1':'',
                'Q2':'',
                'Q3':''
            },

        },
        'PAYMENT':{}


    }

};

// isAlreadyInitialized(){
//     if
// }

helpbox = function() {

    console.log(self.languageSelected);

    alert(`
        ${self.text[self.languageSelected]['HELP']}
        
    `);
}

displayToggle = function(tag){
    tag.classList.toggle("hide");
}




goBackToHome = function() {

    





}

