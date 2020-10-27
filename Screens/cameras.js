var camerapick = {

	'beginner':{

		'vlogging':{

			'basic':[



			],

			'intermediateTier': [




			],

			'highend': [



			]

		},

		'travel': {


			'basic':[



			],

			'intermediateTier': [




			],

			'highend': [



			]


		},


		'movie':{


			'basic':[



			],

			'intermediateTier': [




			],

			'highend': [



			]


		}



	},

	'intermediate':{

		'vlogging':{

			'basic':[



			],

			'intermediateTier': [




			],

			'highend': [



			]

		},

		'travel': {


			'basic':[



			],

			'intermediateTier': [




			],

			'highend': [



			]


		},


		'movie':{


			'basic':[



			],

			'intermediateTier': [




			],

			'highend': [



			]


		}



	},

	'advanced':{

		'vlogging':{

			'basic':[



			],

			'intermediateTier': [




			],

			'highend': [



			]

		},

		'travel': {


			'basic':[



			],

			'intermediateTier': [




			],

			'highend': [



			]


		},


		'movie':{


			'basic':[



			],

			'intermediateTier': [




			],

			'highend': [



			]


		}


	}


}



displayCamera = function() {

	let answers = self.parent.questionAnswer;
	let cameras = camerapick[answers[0]][answers[1]][answers[2]];
	
	for(i=0;i<3;i++){

		document.getElementById(cameras[i]).classList.remove('hidden');


	}

}



back = function(){




}


pay = function(){

	

	
}