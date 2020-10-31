var camerapick = {

	'beginner':{

		'vlogging':{

			'basic':[

				'WB11','WB2100','NIKOND750'

			],

			'intermediateTier': [

				'NIKOND750','NIKONP100','NIKONB600'


			],

			'highend': [

				'NIKONP100','EOSR','EOSREBEL'

			]

		},

		'travel': {


			'basic':[

				'NIKONB600','WB11','WB2100'

			],

			'intermediateTier': [


				'SONYA6400','SIGMASD','EOSREBEL'

			],

			'highend': [

				'EOSR5','EOSR','D5600'

			]


		},


		'movie':{


			'basic':[

				'WB2100','SIGMADP2',''

			],

			'intermediateTier': [


				'SONYNEX7','NIKONP100','NIKONB600'

			],

			'highend': [

				'SONYNEX7','SONYNEXF3','EOSR'

			]


		}



	},

	'intermediate':{

		'vlogging':{

			'basic':[

				'NIKONB600','NIKONP100','SIGMADP2'

			],

			'intermediateTier': [

				'SIGMASD','NIKOND750','NIKONP100'


			],

			'highend': [

				'SONYNEXF3','EOSR5','EOSREBEL'

			]

		},

		'travel': {


			'basic':[

				'NIKOND750','SIGMASD','WB2100'

			],

			'intermediateTier': [

				'SONYNEX7','SONYA6400','EOSR'


			],

			'highend': [

				'D5600','EOSR5','NIKOND6PRO'

			]


		},


		'movie':{


			'basic':[

				'NIKONB600','NIKOND750','SIGMASD'

			],

			'intermediateTier': [

				'NIKONP100','SONYNEX7','SONYNEXF3'


			],

			'highend': [

				'D5600','EOS5DMARK','SONYSLTA58'

			]


		}



	},

	'advanced':{

		'vlogging':{

			'basic':[

				'SONYA6400','SIGMASD','SONYNEX7'

			],

			'intermediateTier': [

				'SONYNEX7','EOSREBEL','EOSR5'


			],

			'highend': [

				'EOS5DMARK','NIKOND6PRO','SONYSLTA58'

			]

		},

		'travel': {


			'basic':[

				'SONYNEX7','NIKONP100','NIKONB600'

			],

			'intermediateTier': [


				'EOSREBEL','EOSR','D5600'

			],

			'highend': [

				'NIKOND6PRO','SONYSLTA58','EOS5DMARK'

			]


		},


		'movie':{


			'basic':[

				'EOSR','SONYA6400','SONYNEX7'

			],

			'intermediateTier': [

				'EOS5DMARK','EOSR5','D5600'


			],

			'highend': [

				'SONYA7C','SONYSLTA58','EOS5DMARK'

			]


		}


	}


}



window.onload = (event) => {

	self.parent.currentPage = "CAMERA";
	loadPageText();
	displayCamera();
	
	

}


loadPageText = function(){

	let h1 = document.getElementById('head1');
    let h2 = document.getElementById('head2');

    h1.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h1'];
    h2.innerHTML = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['h2'];

    let pay = document.getElementById('next1');
    let back = document.getElementById('back1');

    pay.innerText = self.parent.text[self.parent.languageSelected][self.parent.currentPage]['PAY'];
    back.innerText = self.parent.text[self.parent.languageSelected]['BACK'];




}



displayCamera = function() {

	let answers = self.parent.questionAnswer;
	let cameras = camerapick[answers[0]][answers[1]][answers[2]];
	
	for(i=0;i<3;i++){

		document.getElementById(cameras[i]).classList.remove('hidden');


	}

}



nextPage = function(){




}


pay = function(){

	

	
}