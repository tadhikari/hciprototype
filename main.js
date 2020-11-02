
// class level variables

self.languageSelected = null;
self.currentLanguageTag = null;
self.currentPage = null;
self.cameraSelection = null;
self.questionAnswer = null;
self.pageQueue = null;
self.remainingBalance = 0;

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
        },

        'PAYMENTSELECTION':{

           'h1':'Please pick your desired method of payment',
           'h2':'You have selcted the following camera:',
           'MOP':'You may select a single payment method or multiple',
           'CASH':'Cash',
           'CARD':'Credit/ Debit Card'

        },

        'CASH': {

            'h1':'Cash Payment',
            'h2':'Remaining Balance:',
            'insert':'Please insert the cash amount in the text box',
            'simulation':'(Just a simulation)',
            'pay':'Pay',
            'invalidamount':'Please enter a valid amount!'

        },


        'FEEDBACK':{

            'h1':'Payment was sucessful, thank you for shopping with us!',
            'h2':'Please rate your shopping experience.',
            'camera':'The camera with reciept',
            'change':'and your change of: ',
            'dispense':'is being dispensed',
            'rate':'Please rate:',
            'submit':'Submit'

        },


       'CARD': {

            'h1':'Card Payment',
            'h2':'Remaining Balance:', 
            'pin':'Please swipe your card and enter 4 digit pin',
            'simulation':'(Drag the pointer to simulate card swipe)',
            'pay':'Pay',
            'fourzero':'Pin cannot be 4 zeros',
            'lessthanfour':'Pin cannot be less than 4 digits',
            'invalidPin':'Invalid pin number',
            'invalidLength':'Pin has to be 4 digits long',
            'cardswipe':'Please swipe your card properly'


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


        },

       'PAYMENTSELECTION':{

            'h1':'Elija el método de pago que desee',
            'h2':'Ha seleccionado la siguiente cámara:',
            'MOP':'Puede seleccionar un método de pago único o varios',
            'CASH':'Efectivo',
            'CARD':'Tarjeta de crédito / débito'

        },

       'CASH': {

            'h1':'Pago en efectivo',
            'h2':'Balance restante:',
            'insert':'Please insert the cash amount in the text box',
            'simulation':'(Solo una simulación)',
            'pay':'Pagar',
            'invalidamount':'Ingrese una cantidad válida!'

        },

       'FEEDBACK':{

            'h1':'El pago fue exitoso, ¡gracias por comprar con nosotros!',
            'h2':'Califique su experiencia de compra.',
            'camera':'La cámara con recibo ',
            'change':'y tu cambio de: ',
            'dispense':'Está siendo dispensado',
            'rate':'Por favor, valora:',
            'submit':'Enviar'

        },

        'CARD': {

            'h1':'Pago con tarjeta',
            'h2':'Balance restante:', 
            'pin':'Deslice su tarjeta e ingrese un PIN de 4 dígitos',
            'simulation':'(Arrastre el puntero para simular el deslizamiento de la tarjeta)',
            'pay':'Pagar',
            'fourzero':'El pin no puede tener 4 ceros',
            'lessthanfour':'El PIN no puede tener menos de 4 dígitos',
            'invalidPin':'Número de PIN no válido',
            'invalidLength':'El PIN debe tener 4 dígitos',
            'cardswipe':'Pase su tarjeta correctamente'


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

        },

       'PAYMENTSELECTION':{

            'h1':'Пожалуйста, выберите желаемый способ оплаты',
            'h2':'Вы выбрали следующую камеру:',
            'MOP':'Вы можете выбрать один способ оплаты или несколько',
            'CASH':'Наличные',
            'CARD':'Кредитная / дебетовая карта'

        },

       'CASH': {

            'h1':'Наличный расчет',
            'h2':'Остаток средств:',
            'insert':'Пожалуйста, введите сумму наличных в текстовое поле',
            'simulation':'Просто симуляция',
            'pay':'Платить',
            'invalidamount':'Пожалуйста, введите действительную сумму!'

        },

        'FEEDBACK':{


            'h1':'Оплата прошла успешно, спасибо за покупки у нас!',
            'h2':'Пожалуйста, оцените свой опыт покупок.',
            'camera':'Камера с рецептом ',
            'change':'и ваше изменение: ',
            'dispense':'раздается',
            'rate':'Пожалуйста, оцените:',
            'submit':'отправить'

        },

        'CARD': {

            'h1':'Оплата картой',
            'h2':'Остаток средств: ', 
            'pin':'Проведите по карте и введите 4-значный PIN-код.',
            'simulation':'(Перетащите указатель, чтобы имитировать считывание карты)',
            'pay':'Платить',
            'fourzero':'Пин не может состоять из 4 нулей',
            'lessthanfour':'Пин-код не может быть меньше 4 цифр',
            'invalidPin':'Неверный пин-код',
            'invalidLength':'PIN-код должен состоять из 4 цифр.',
            'cardswipe':'Пожалуйста, проведите карту правильно'


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

