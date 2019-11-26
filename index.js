const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        var speechText = '';
		
		 // Verifica que el dispositivo tenga soporte APL.
        if (!supportsAPL(handlerInput)) {
		  speechText = '¡Hola! en este juego conoceremos al más cerebrito , ¿te late fácil, difícil o redifícil?';
		  return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('¿Quién sabe más?', speechText)
            .reprompt('¿te late fácil, difícil o redifícil?')
            .getResponse();
        }
		
		speechText = '¡Hola! en este juego conoceremos al más cerebrito?,¿te late fácil, difícil o redifícil?';
		return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard('Quién sabe más', speechText)
            .reprompt('¿te late fácil, difícil o redifícil?')
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./welcome.json'),
                datasources: {}
            })
            .getResponse();
    }
};

const EasyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EasyIntent';
    },
    handle(handlerInput) {
        const speakOutput ='Haré  una pregunta, tendrás una pista visual , y  tendrás que decirme el titulo de la película o la canción , si te equivocas, échate un shot o pon un peso en la mesa ¿le entras? o ¿te repito las instrucciones?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿le entras? o ¿te repito las instrucciones?')
            .getResponse();
    }
};



const DifficultIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DifficultIntent';
    },
    handle(handlerInput) {
        const listDifficult = [
            'a ver si sí es cierto',
            'orale pues',
            'arre',
            'a ver si muy muy'
            ];
        const indiceAleatorio = Math.floor(Math.random() * listDifficult.length);
        const consejoAleatorio = listDifficult[indiceAleatorio];
        
        const speechOutput = consejoAleatorio;

    
        return handlerInput.responseBuilder
            .speak(`${speechOutput} Haré  una pregunta, tendrás una pista visual , y  tendrás que decirme el titulo de la película o la canción , si te equivocas, échate un shot o pon un peso en la mesa ¿le entras? o ¿te repito las instrucciones?`)
            .reprompt('¿le entras? o ¿te repito las instrucciones?')
            .getResponse();
            
    
    }
};

const SuperDifficultIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SuperDifficultIntent';
    },
    handle(handlerInput) {
        const listSuperDifficult = [
            '¿a poco si?',
            '¡ah! ¿muy valiente?',
            'Vamos a ver si tus chicharrones truena',
            'vamos a ver de que lado masca la iguana'
            ];
        const indiceAleatorio = Math.floor(Math.random() * listSuperDifficult.length);
        const consejoAleatorio = listSuperDifficult[indiceAleatorio];
        
        const speechOutput = consejoAleatorio;

    
        return handlerInput.responseBuilder
            .speak(`${speechOutput} Haré  una pregunta, tendrás una pista visual , y  tendrás que decirme el titulo de la película o la canción , si te equivocas, échate un shot o pon un peso en la mesa ¿le entras? o ¿te repito las instrucciones?`)
            .reprompt('¿le entras? o ¿te repito las instrucciones?')
            .getResponse();
            
    
    }
};

const EntroIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EntroIntent';
    },
    handle(handlerInput) {
        const speakOutput ='Película. un barco choca con un iceberg y se hunde ';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('un barco choca con un iceberg y se hunde ')
            .getResponse();
    }
};

const NoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NoIntent';
    },
    handle(handlerInput) {
        const listNo = [
            '¡uh!  qué aguado',
            'ay pa la otra',
            'para eso me gustabas',
            'hasta la vista beibi'
            ];
        const indiceAleatorio = Math.floor(Math.random() * listNo.length);
        const consejoAleatorio = listNo[indiceAleatorio];
        
        const speechOutput = consejoAleatorio;

    
        return handlerInput.responseBuilder
            .speak(`${speechOutput} `)
            .reprompt()
            .getResponse();
            
    
    }
};

const NoUnderstandHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NoUnderstandIntent';
    },
    handle(handlerInput) {
        const speakOutput ='Ahí va otra vez, Haré  una pregunta, tendrás una pista visual , y  tendrás que decirme el titulo de la película o la canción , si te equivocas, échate un shot o pon un peso en la mesa ¿le entras? o ¿te repito las instrucciones?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('¿le entras? o ¿te repito las instrucciones?')
            .getResponse();
    }
};

const titanicCorrectHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TitanicCorrectIntent';
    },
    handle(handlerInput) {
        const speakOutput ='Te salvaste del shot y ahorraste unos pesos. Esa esta muy facil,ahí te va otra';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt()
            .getResponse();
    }
};
const titanicSecondAttemptHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NoIdeaTitanicIntent';
    },
    handle(handlerInput) {
        const listClues = [
            'te doy otra pista,mientas te tomas un shot o sacas tu dinerito, una viejita avienta su collar al mar',
            'te doy otra pista,mientas te tomas un shot o sacas tu dinerito, el novio muere porque no le hicieron canchito en la puerta',
            'te doy otra pista,mientas te tomas un shot o sacas tu dinerito, los musicos no paran de tocar'
          
            ];
        const indiceAleatorio = Math.floor(Math.random() * listClues.length);
        const consejoAleatorio = listClues[indiceAleatorio];
        
        const speechOutput = consejoAleatorio;

    
        return handlerInput.responseBuilder
            .speak(`${speechOutput} ¿ya sabes? `)
            .reprompt('¡ya adivina!')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


// Comprueba si el dispositivo en uso soporta APL.
function supportsAPL(handlerInput) {
  const supportedInterfaces = handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
  const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
  return aplInterface !== null && aplInterface !== undefined;
}


exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        EasyIntentHandler,
        DifficultIntentHandler,
        SuperDifficultIntentHandler,
        EntroIntentHandler,
        NoIntentHandler ,
        NoUnderstandHandler,
        titanicCorrectHandler,
        titanicSecondAttemptHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
