

(function(global, $){

	// Funtion when called return a new object
	var Greetr = function(firstName, lastName, language){
		return new Greetr.init(firstName, lastName, language);
	}

    var supportedLangs = ['en','es'];

	var greetings = {
		'en' : 'Hello',
		'es' : 'Hola'
	}

	var formalGreetings = {
		'en' : 'Greetings',
		'es' : 'Saludos'
	}

    // prototype holds methods (to save memory space)
	Greetr.prototype = {

		fullName: function(){
			return this.firstName + ' ' + this.lastName;
		},

		validate: function(){
            // references the externally inaccessible 'supportedLangs' within the closure
			if(supportedLangs.indexOf(this.language) === -1){
				throw "Invalid language";
			}
		},

		greeting : function(){
			return greetings[this.language] + ' ' + this.firstName + '!';
		},

		formalGreeting : function(){
			return formalGreetings[this.language] + ' ' + this.fullName();
		},

		greet : function(formal){
			var msg;
			if(formal){
				msg = this.formalGreeting();
			}else{
				msg =  this.greeting();
			}

			console.log(msg);

			// 'this' refers to the calling object at execution time
            		// makes the method chainable
			return this;
		},

       		htmlGreet : function(selector, formal){
			//do some validations here. Check if jquery there.
			
			if (!$) {
                		throw 'jQuery not loaded';   
            		}
            
		        if (!selector) {
                		throw 'Missing jQuery selector';   
            		}

			var msg;
			if(formal){
				msg = this.formalGreeting();
			}else{
				msg =  this.greeting();
			}

			console.log(msg);

			$(selector).html(msg);
			return this;

		}

	};

        // the actual object is created here, allowing us to 'new' an object without calling 'new'
	Greetr.init = function(firstName, lastName, language){
		var self = this;
		self.firstName = firstName || 'Default';
		self.lastName = lastName || 'Default';
		self.language = language || 'en';
	}

    	// trick borrowed from jQuery so we don't have to use the 'new' keyword
	Greetr.init.prototype = Greetr.prototype;

	// attach our Greetr to the global object, and provide a shorthand '$G' for ease
	global.Greetr = global.G$ = Greetr;


}(window, jQuery));


