# hciprototype
This is the public repository for our hci prototype

this project is live here: https://tadhikari.github.io/hciprototype/


# Running application on you local
Install nodejs from : https://nodejs.org/en/

after node installation has completed

type this on command prompt and wait till browser-sync installation sucessfully completes

##npm install -g browser-sync

after that just run the runserver.bat file on the repository to run the localserver. 


@Micheal
in a JS file create an object like this:
selectedCamera = {'Camera':'Canon Rebel','Price': 500, 'Image':'demo.jpg'}; // for now you can use any image for testing
use this as a dummy object to create the payment screen.
imagine this was the camera that was selected by the user and was being passed on from the previous screen.
When I complete the camera selection screen, a similar object will be passed to the payment screen.

The payment method should accept a single method of payment or multiple (cash and card);

If uses chooses multiple wasy of payment
cash comes in first and the remaining is paid via card.
(may be we can have error messages in this screen?)

Please think of various scenarious where errors might show up.

Thanks.

