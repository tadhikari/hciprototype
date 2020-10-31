
// class level variables

self.languageSelected = null;
self.currentLanguageTag = null;
self.currentPage = null;
self.cameraSelection = null;
self.questionAnswer = null;

self.text = {

    'ENGLISH':{
        'HELP':`Thank you for using this vending machine.
        If you have any questions or concerns,
        please contact our technical support team at
        888-888-8888 or smartvending@email.com`,

        'HOME':`Are you sure you want to return to the Home Screen?
        If you are half way in the payment process, the money will be refunded to you.`,

        'NEXT':'Next',
        'BACK':'Back',

        
        'WELCOME':{'h1':'Welcome To The Smart Vending Machine',
                   'h2':'Please choose the language of your choice to proceed',
          
               },
        'QUESTION':{
            'h1':`Please answer the following questions`,
            'h2':`Based on your response, the system will determine best camera picks for you`,
            'SET1': {
                'QSTN':'Select user level of proficiency',
                'Q1':'Beginner',
                'Q2':'Intermediate',
                'Q3':'Advanced'
            },
            'SET2': {
                'QSTN':'Select the purpose of the camera',
                'Q1':'Vlogging',
                'Q2':'Travel',
                'Q3':'Movie Making'
            },
            'SET3': {
                'QSTN':'Select the Tier of the camera',
                'Q1':'Basic',
                'Q2':'Intermediate',
                'Q3':'High-End'
            },

        },
        'CAMERA':{

            'h1':`Please select a camera`,
            'h2':`These camera have been selected based on your answers`,
            'PAY':`Continue to Payment`,
            'BACK':`Back`



    }
    },
    'SPANISH':{

         'HELP':`Gracias por utilizar esta máquina expendedora.
        Si tiene alguna pregunta o inquietud,
        póngase en contacto con nuestro equipo de soporte técnico en
        888-888-8888 o smartvending@email.com`,

        'NEXT':'Próxima',

        'BACK':'Atrás',

        'HOME':`¿Está seguro de que desea volver a la pantalla de inicio?
        Si se encuentra a la mitad del proceso de pago, se le reembolsará el dinero.`,
        
        'WELCOME':{'h1':`Bienvenido a la máquina expendedora inteligente`,
                   'h2':`Elija el idioma de su elección para continuar`,
                   },
        'QUESTION':{
            'h1':`Por favor, conteste a las siguientes preguntas`,
            'h2':`Según su respuesta, el sistema determinará las mejores opciones de cámara para usted`,
            'SET1': {
                'QSTN':'Seleccione su nivel de competencia',
                'Q1':'Principiante',
                'Q2':'Intermedia',
                'Q3':'Avanzada'
            },
            'SET2': {
                'QSTN':'Seleccione el propósito de la cámara',
                'Q1':'Vlogging',
                'Q2':'Viajar',
                'Q3':'Hacer peliculas'
            },
            'SET3': {
                'QSTN':'Seleccione el nivel de la cámara',
                'Q1':'Básica',
                'Q2':'Intermedia',
                'Q3':'Gama alta'
            },

        },
        'CAMERA':{

            'h1':`Seleccione una cámara`,
            'h2':`Estas cámaras se han seleccionado en función de sus respuestas`,
            'PAY':`Continuar con el pago`,


        }

    },
    'RUSSIAN':{


         'HELP':`Спасибо за использование этого торгового автомата.
        Если у вас есть вопросы или проблемы,
        свяжитесь с нашей службой технической поддержки по адресу
        888-888-8888 или smartvending@email.com`,

        'HOME':`Вы уверены, что хотите вернуться на главный экран?
        Если вы на полпути в процессе оплаты, деньги будут вам возвращены.`,

        'NEXT':'следующий',
        'BACK':'Назад',
        
        'WELCOME':{'h1':`Добро пожаловать в умный торговый автомат`,
                   'h2':`Пожалуйста, выберите желаемый язык, чтобы продолжить`,
                   },

        'QUESTION':{
            'h1':`Пожалуйста, ответьте на следующие вопросы`,
            'h2':`На основе вашего ответа система определит для вас лучшую камеру.`,
            'SET1': {
                'QSTN':'Выберите свой уровень владения',
                'Q1':'начинающий',
                'Q2':'Промежуточный',
                'Q3':'Продвинутый'
            },
            'SET2': {
                'QSTN':'Выберите цель камеры',
                'Q1':'Видеоблог',
                'Q2':'Путешествовать',
                'Q3':'Съемки фильмов'
            },
            'SET3': {
                'QSTN':'Выберите уровень камеры',
                'Q1':'Базовый',
                'Q2':'Промежуточный',
                'Q3':'Лучшее качество'
            },

        },
        'CAMERA':{

            'h1':`Пожалуйста, выберите камеру`,
            'h2':`Эти камеры были выбраны на основе ваших ответов`,
            'PAY':`Продолжить оплату`,

        }


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

