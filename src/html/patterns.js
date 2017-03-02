var Patterns = {
	// Patrones de creación
	patronesDeCreacion: {
		// Abstract Factory
		abstractFactory: {
			title: 'Abstract Factory',
			mision: 'Ofrece interfaz para crear familias de objetos relacionados o dependientes',
			uses: [
				'Tenemos un sistema a partir de varios productos relacionados',
				'En sistema de productos relacionados usados conjuntamente'
				'Queremos hacer bibliotecas de productos de los que solo daremos su interfaz.',
			],
			steps:[
				'Creamos una interfaz de ProductoAbstracto y generamos 2 familias de ProductoConcretos: Forma: Circulo, Cuadrado y Color: Rojo, Azul.',
				'Creamos una FábricaAbstracta con métodos abstractos para cada uno de nuestros productos concretos: abstract Color getColor(String color): abstract Forma getShapeAbstractProd(String shape).',
				'Clases FábricaConcreta para cada ProductoConcreto implementando métodos abstractos.',
				'Creamos Cliente con método getFactory(String choice) que devuelve la fábrica concreta adecuada.',
			],
		},

		// Builder
		builder: {
			title: 'Builder',
			mision: 'Separar la construcción del objeto de su representación para poder realizar diferentes representaciones de la construcción.',
			uses: [
				'Separar la creación de un objeto de las partes que lo crean',
				'Existen diferentes representaciones del objeto que está siendo creado',
			]
			steps:[
				'Creo un Producto que representa el objeto que vamos a construir(ej: Casa).',
				'Creamos el Constructor con la interfaz abstracta para construir el Producto (ej: ConstructorDeCasas). Tiene una referencia a producto.',
				'Creamos tantos ConstructorConcreto(s) como queramos implementando a Constructor (ej: CasaUnaPlanta, CasaDosPlantas).',
				'Creamos el Director con el método public void construct( Constructor hb) que implementa los pasos del ConstructorConcreto.',
			],
		},
		factoryMethod: {
			title: 'Factory Method',
			mision: 'Definir interfaz de creación de un objeto para que las subclases decidan qué clase instanciar. Se delega la creación de objetos en las subclases.',
			uses: [
				'No sabemos qué clase de objetos vamos a necesitar',
				'Una clase deja a sus subclases crear objetos'
				'Una subclase delega responsabilidades a una entre varias relacionadas y queremos definir cuál es',
				'',
			]
			steps:[
				'Creamos una interfaz de Producto y generamos familia de ProductoConcretos:',
				'Forma: Circulo, Cuadrado.',
				'Creamos una interfaz Creador (ej: FormaFactory) para Producto devolviendo Forma get_Producto(). Creamos los CreadorConcreto (ej: FormaFactoryCirculo, FormaFactoryCuadrado) para cada ProductoConcreto.',
				'Creamos Clases FábricaConcreta para cada ProductoConcreto implementando métodos abstractos.',
				'Creamos main que crea objetos diferentes de CreadoresContretos con FormaFactory.',
			],
		},

		// Prototype
		prototype: {
			title: 'Prototype',
			mision: 'Especificar tipos de objeto a través de un prototipo común',
			uses: [
				'Clases específicas en tiempo de ejecución',
				'Crear los tipos de objetos diferentes a través de la clonación en vez de crear instancias de cada clase',
			]
			steps:[
				'Declaramos interfaz Prototipo (ej: Shape) y declaramos método void draw(). Creamos PrototipoConcreto(s) implementando Prototipo(ej: Line, Square, Circle).',
				'Creamos Cliente main con Shape y creación de variables con PrototipoConcreto. Generamos método quer ejecute el prototipo concreto static void paint(Shape s). ',
			],
		},
	},
	patronesDeEstructura: {
		// 
		adapter: {
			title: 'Adapter',
			mision: 'Convertir una interfaz de una clase en otra compatible con la que el cliente espera.',
			uses: [
				'Adaptar la interfaz de una clase a ora a otra',
				'Adaptar el sistema a clases que no han sido previstas'
			]
			steps:[
				'Declaramos la interfaz Objetivo que especifica el dominio que usa el cliente(ej: MediaPlayer).',
				'Definimos Adaptable para la interfaz que necesita ser declarada (ej: AdvancedMediaPlayer) . Creamos adaptableConcretos (ej: VlcPlayer, Mp4Player).',
				'Creamos Adaptador.  Adapta la interfaz de Adaptable a la interfaz Objetivo. Implementa el Objetivo Tiene referencia a  Adaptable (ej: AdvancedMediaPlayer) e incluye el método que define el Objetivo para operar con la referencia a adaptable. Normalmente en el Constuctor de clase hace operaciones para adaptar la interfaz (ej: MediaAdapter(String audioType)).',
				'Cliente hace referencia a repasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar',
			],
		},
		// 
		bridge: {
			title: 'Bridge',
			mision: 'Desacoplar abstracción de su implementación de modo que puedan variar independiente',
			uses: [
				'Evitar en lace permanente entre abstracción e implementación',
				'Extender independientemente abstracción e implementación',
				'Los cambios en uno no afectan al otro. Cambiar uno no implica recompilar el código',
				'(C++) ocultar implementación de abstracción',
			]
			steps:[
				'Creamos el Implementador (ej: Questions) con la definición de las operaciones relacionadas.',
				'Creamos el ImplementadorConcreto(s) (ej: JavaQuestions, Cquestions)',
				'Creamos Abstracción (ej: QuestionManager) que mantiene referencia a Implementador e incluye métodos para ejecutar los métodos del implementador.',
				'Se puede extender la Abstracción con AbstracciónRefinada para alterar algún métoro (ej: QuestionFormat).',
				'Main mantiene referencia a  QuestionFormat y crea objetos  ImplementadorConcreto. Luego ejecuta métodos y cada uno va a su ImpConc. ',
			],
		},

		// 
		composite: {
			title: 'Composite',
			mision: 'Compone objetos en estructuras de árbol. Permite tratar de manera unicorme a objetos individuales y compuestos',
			uses: [
				'Representar jerarquías de objetos',
				'Se busca que los clientes obvien si el objeto es compuesto o no para su trato. Que sean tratados de forma uniforme.',
			]
			steps:[
				'Creo la Hoja (ej: Employee).',
				'Se declara el Componente para',
				'Creo el Compuesto (ej: Manager) mantiene referencias a sí mismo (por si el compuesto tiene otro compuesto al que pertence) y a un listado de tipo Hoja. Provee los métodos para agregar y obtener las hojas.',
			],
		
		},

		// 
		decorator: {
			title: 'Decorator',
			mision: 'Asigna responsbilidades adicionales a un objeto dinámicamente. Alternativa flexible a la herencia. También conocido como Wrapper',
			uses: [
				'Añadir objetos dinámicamente sin afectar a otros.',
				'Posibilidad de retirar/añadir responsabilildades',
				'Cuando no se puede usar herencia.',
			]
			steps:[
				'Generar interfaz Componente a decorar (ej: Factura) y creo ComponenteConcreto (ej: FacturaSimple)',
				'Crear Decorador  (ej: FacturaDecorator) que implementa Componente y mantiene referencia a Componente. El contructor recibe el Componente.',
				'Crear DecoradorConcreto  (ej: FacturaDecoratorPreciosDesglosados) que extiende el Decorador.',
				'El Cliente crea Compenentes y inicia con ComponenteConcreto y DecoradorConcreto. Llama desde cada uno a su método get (ej: getFactura()).',
			],
		},

		// Facade
		facade: {
			title: 'Facade',
			mision: 'Interfaz unificada para un conjunto de interfaces de un subsistema',
			uses: [
				'Simplificar la interfaz de un sistema complejo',
				'Multiples dependencias entre clases y clientes en una abstracción. Desacopla el subsistema promoviendo independencia de subsistemas',
				'Brindar punto de entrada a las capas de un subsistema. Podemos intercomunicar el sistema usando fachadas',
			]
			steps:[
				'Creamos las ClasesDeSistema (Interfaz y clases concretas. Ej: Animal y Animales con método alimentar())',
				'Creamos Fachada que mantiene referencias a las clases concretas del sistema e implemeta métodos a para ejecutar métodos de las clases del sistema desde la Fachada.',
				'Creamos Cliente que tiene referencia a Fachada y ejecuta métodos de Fachada.',
			],
		},

		// Flyweight
		flyweight: {
			title: 'Flyweight',
			mision: 'Comparte propidedades de objetos para permitir gran número de ellos de forma eficiente.',
			uses: [
				'Aplicaciones con gran número de objetos',
				'Reducir costes de almacenamiento de objetos',
				'Los objetos pueden tener componentes extrínsecos que permitan ser compartidos',
			]
			steps:[
				'Creamos la interfaz PesoLigero (ej: Shape) y creamos PesoLigeroConcreto (ej: Círculo).',
				'Creamos la FabricaDePesosLigeros que mantiene un Key, Value list de objetos PeroLigero. Implementa método static para en función de la Key generar un objeto nuevo o devolver uno existente.',
				'El Cliente crea a partir de una lista de valores diferentes de una propiedad del PesoLigero y crea objetosusando.',
			],
		},

		// Proxy
		proxy: {
			title: 'Proxy',
			mision: 'Proxy (Proxy) Crear objeto que regula el acceso a otro. Surrogate (Sustituto)',
			uses: [
				'Proxys remotos: representante local de objeto remoto.',
				'Proxys virtuales: generan objetos costosos guardando guardar información del sujeto.',
				'Proxys de protección: controla que el que accede al sujeto pueda hacerlo. Útil para establecer permisos de acceso.',
				'Referencia inteligente para hacer operaciones adicionarles al acceder al sujeto',
			]
			steps:[
				'Creamos el Sujeto (ej: Image) que define la interfaz común al SujetoReal y al Proxy',
				'Creamos SujetoReal (ej: RealImage).',

				'Creamos al Proxy (ej: ProxyImage). Mantiene las propiedades del SujetoReal además de una referencia a  SujetoReal. Define operaciones que ejecuta a través de SujetoReal.',
				'Creamos Cliente  que referencia a sujeto creando instancia de Proxy y actua a través de sus métodos.',
			],
		},


			
		},
		// Patrones de Comportamiento
		patronesDeComportamiento: {
			// Chain Of Resposability
			chainOfResposability: {
				title: 'Chain Of Resposability',
				mision: 'Dar a más de un objeto posibilidad de responder a una petición. Encadena los objetos receptores para pasar la petición a través',
				uses: [
					'Hay más de un objeto para manejar un petición y el manejador de determina automáticamente',
					'Se envía una petición a un objeto entre varios sin tener que especificarse',
					'La forma en la que se trata la petición se establece dinámicamente',
				]
				steps:[
					'Declara clase abstracta Manejador (ej PurchasePower). Tiene referencia a si misma para definir Succesor. Añade propiedad extra para manejar peticiones a la cadena. Define métodos setSuccessor() y el abstracto abstract public void processRequest(PurchaseRequest request);',
					'Hacer ManejadorConcreto implementando processRequest() (ej: ManagerPPower, DirectorPPower, VicePresidentPPower, PresidentPPower). Declara una propiedad para gestionar request (ej: ALLOWABLE).',
					'Genero clase para gestionar los PurchaseRequest.',
					'El Cliente inicia ManejadoresConcretos. Establece Sucesores entre los manejadores concretos. Desde eñ sucesor más bajo ejecuta processRequest().',
				],
			},

			// Command
			command: {
				title: 'Command',
				mision: 'Encapsular petición a objeto permitiendo a los clientes parametizar peticiones, hacer colas y registros de peticiones para poder deshacer operaciones',
				uses: [
					'Son un sustituto orientado a objetos para las peticiones callback.',
					'Transferir objetos para hacer peticiones a procesos diferentes',
					'Permitir deshacer',
					'Registrar cambios para recuperar caidas de sistema',
					'Estructurar un sistema mediante operaciones de alto nivel. Command modela esas operaciones. Facilita extender operaciones',
					'',
				]
				steps:[
					'Creamos Receptores (ej: Fan, Light).',
					'Creamos interfaz Orden implementando método execute() (ej: CommandInstruction)y OrdenesConcretas para cada receptor (ej: LightOnCommand, LightOffCommand, FanOnCommand, FanOffCommand ). Mantiene referencias a su Receptor y añade métodos para interactuar con el método del Receptor apropiado.',
					'Creamos el Invocador (ej: Switch) que tiene un constructor agrupando Mñetodos de  CommandInstruction y mmétodos para cada instrucción.',
					'El cliente trabaja con Receptor, Orden generando OrdenesConcretar a las que se les pasa el Receptor. Ahora a partir de las de antes crea el Invocador',
				],
			},

			// Interpreter
			interpreter: {
				title: 'Interpreter (volver a hacer con el de la uned, poco claroooo)',
				mision: 'Define la representación de la gramática de un lenguaje y el interprete de las sentencias del lenguaje',
				uses: [
					'No viene chicha...',
				]
				steps:[
					'Se declara interfaz para ExpresiónAbstracta (ej: InterpreterExpression)con método interpret();. Se seclaran ExpresiónTeminal y ExpresiónNoTerminal(s, ambas implementan a ExpresiónAbstracta ',
					'La  ExpresiónNoTerminal mantiene referencias a la/s ExpresiónAbstracta actualizadas a través de su constructor y las utiliza para resolver su propia implementación de interpret().',
					'El Cliente inicia'
				],
			},

			// Iterator
			iterator: {
				title: 'Iterator',
				mision: 'Acceso secuencial a los elementos de un objeto agregado escondiendo su representación interna. También conocido por Cursor',
				uses: [
					'Recorrer objetos agregados',
					'Proporcionar interfaz uniforme para recorrer estructuras agregadas (iteración polimórfica)',
				]
				steps:[
					'Definir interfaz Iterador con métodos boolean hasNext y Objetc next() (ej: Iterator);',
					'Definir Agregado con método public Iterator getIterator() (ej: Container); y AgregadoConcreto (ej: NameRepository). ',
					'Creamos IteradorConcreto como clase interna den AgragadoConcreto para que implemente el Iterador.',
					'El cliente Crea el AgregadorConcreto y inicia bucle con for (Iterator iter = namesRepository.getIterator(); iter.hasNext();) para coger el valor de cada iteración iter.next();',
				],
			},

			// Mediator
			mediator: {
				title: 'Mediator',
				mision: 'Define objeto que encapsula cómo interactúan objetos relacionados. Evita que los objetos de llamen explícitamente permitiendo variar la interacción',
				uses: [
					'Objetos se relacionan entre si de forma muy definida y a la vez compleja',
					'Es dificil reutilizar un objeto porque se refiere a otros muchos',
					'Comportamiento distribuido entre varias clases y necesitamos que se pueda adaptar utilizando pocas clases.',
				]
				steps:[
					'Creamos interfaz Mediador que define que define los métodos en los que intervienen los colegas. MediadorConcreto mantiene referencias a cada clase colega. A través de los parámetros del Constructor inicia todos los colegas e implementa los métodos del Mediador y su función sobre las referencias de ClasesColega.',
					'Creamos ClasesColega que mantienen una referencia a Mediador y añaden métodos para añadir el mediador concreto con setMediator (Mediator m). También incluyen un método doMediator() que invoca al método apropiado del MediadorConcreto.',
					'El Cliente inicia las ClasesColega. Se inicia un Mediador new MediadorConcreto pasando por el constructor las ClasesColega(ej). Para cada clase colega se invoca el método setMediator(Mediador m).',
				],
			},

			// Memento
			Memento: {
				title: 'Memento',
				mision: 'Externalizar el estado de un objeto respetando la encapsulación para poder volver a dicho estado.',
				uses: [
					'Necesitamos la instantánea de un objeto o una parte para poder recuperar',
					'Interfaz para romper la encapsulación de un objeto',
				]
				steps:[
					'Creamos clase Memento con la propiedad que guarde, el contructor donde se le pasa el valor de la propiedad que guarda y añadimos método getSavedState()',
					'Creamos/Tenemos Creador una clase que guarda Mementos. Contiene la propiedad guardable y métodos para guardar y recuperar el memento.',
					'Podemos tener Conserje que guarda estados del memento en una List. Incluye métodos para add y get.',
					'El Cliente opera solo con Caretaker y Originator.',
				],
			},

			// Observer
			Observer: {
				title: 'Observer',
				mision: 'Definir dependencia entre objetos para que cuando uno cambie se cambien todos los que dependen de él. También conocido por Dependents y Publish-Subscribe',
				uses: [
					'Abstracción con dos aspectos y uno dependede del otro. Permite modificar estos aspectos por separado.',
					'Cuando un cambio en un objeto debe cambiar otros y no sabemos cuáles.',
					'Cuando no queremos que los objetos relacionados estén acoplados',
				]
				steps:[
					'Creamos interfaz Observador que define método update(Observer). Creamos ObservadorConcreto que implementa Observador.',
					'Creamos interfaz Sujeto que añade métodos add/remove Observer (Observer o). Creamos SujetoConcreto que implementa Sujeto. Tiene una propiedad List<Observer> donde guarda los Observer y el método notifyObservers() que itera sobre la lista ejecutando el método Observer.update(). Otros métodos del SujetoConcreto pueden llamar a notifyObservers().'
				],
			},

			// State
			state: {
				title: 'State',
				mision: 'Permitir que un objeto modifique su comportamiento cada vez que cambie su estado interno (parece que la clase cambia). También conocido por Objects for States',
				uses: [
					'Cambiar objeto en tiempo de ejecución en función del estado.',
					'Permite tratar el estado como si fuera un objeto real',
				]
				steps:[
					'Creamos interfaz Estado definiendo métodos(Contexto c). Creamos EstadoConcreto que implementa operaciones relacionadas con Contexto (Ej: StartState, StopState.',
					'Creamos Contexto que mantiene una instancia de Estado y métodos para get/set estado.',
					'El Cliente opera con Contexto y con State, generando EstadosConcretos en ejecución.',
				],
			},

			// Strategy
			strategy: {
				title: 'Strategy',
				mision: 'Define familias de algorítmos aplicados a una situación. Los encapsula y los hace intercambiables en función del cliente que los use.',
				uses: [
					'Muchas clases relacionadas difieren en su comportamiento. Permite configurar para una clase un comportamiento entre varios.',
					'Se necesitan variantes de un algoritmo.',
					'Un algoritmo usa datos que el cliente no debe conocer. Strategy evita exponer estructuras complejas dependientes del algoritmo',
					'Con una clase que define muchos comportamientos representados con estructuras condicionales',
				]
				steps:[
					'Crear interfaz Estrategia que define un método con los argumentos del algoritmo. ',
					'Implemntar EstrategiaConcreta(s) (ej: OperationAdd, OperationSubtract, OperationMultiply, OperationDivide)',
					'Creamos Contexto que mantiene referencia a estrategia y su constructor define la EstrategiaConcreta. Añade un método execute(con los argumentos de Estrategia) y ejecuta el método a traves de la EstrategiaConcreta.',
					'El Cliente opera con el Contexto. Pasando a su constructor Objetos EstrategiaConcreta y ejecutándolos con el método del Contexto.',
				],
			},

			// Template Method 
			templateMethod: {
				title: 'Template Method',
				mision: 'Define el esqueleto de un algoritmo delegando en subclases redefinir ciertos pasos del algoritmo',
				uses: [
					'Implementar un algoritmo que no cambia y dejar que sean las subclases las que cambien',
					'Comportamiento repetido de varias subclases debería factorizarse. En refactorización se emplean los Template Method para añadir operaciones.',
					'Controlar extensión de las subclases para permitir extensiones solo en dichos puntos',
				]
				steps:[
					'Definimos ClaseAbstracta e implementación en ClaseConcreta(s).',
				],
			},

			// Visitor
			visitor: {
				title: 'Visitor',
				mision: 'Representa una operación sobre los elementos de un estructura de objetos. Permite definir operaciones sin cambiar las clases de los elementos en los que interviene.',
				uses: [
					'Tenemos diferentes interfaces sobre las que realizar operaciones que dependen de cada clase concreta',
					'Necesitamos realizar operaciones distintas no relacionadas y no queremos incluir dichas operacioens.',
					'Cuando las clases que definen la estructura cambian con poca frecuencia.',
					'',
				]
				steps:[
					'Creamos interfaz Elemento con método accept(Visitor). Crear ElementoConcreto(s) y Ejecutar VisitorARgumento.visit() (ej: This, That, TheOther)',
					'Creamos Visitor con métodos visit(ElementoConcreto e) para cada elementoConcreto. Implementamos VisitantesConcretos ejecutanto el método del ElementoConcreto adecuado.',
					'El Cliente opera con Elemento = new ElementoConcretoXX(). Se pasa VisitadorConcreto al método accept de Elemento → Elemento.accept(VisitadorConcreto)',
				],
			},
		},
	}	
};