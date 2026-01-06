(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"trabalho 2_atlas_1", frames: [[0,0,590,590],[0,592,500,500]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.brickbackground = function() {
	this.initialize(img.brickbackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4716,3053);


(lib.questionmarks = function() {
	this.initialize(ss["trabalho 2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.trophy = function() {
	this.initialize(ss["trabalho 2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.timerContainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AtbkDIa3AAIAAIHI63AAg");
	this.shape.setTransform(86,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9966FF").s().p("AtbEEIAAoHIa3AAIAAIHg");
	this.shape_1.setTransform(86,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timerContainer, new cjs.Rectangle(-1,-1,174,54), null);


(lib.Res_Container = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Eg09gmvMBp7AAAMAAABNfMhp7AAAg");
	this.shape.setTransform(337.95,282.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,0,204,0.749)").s().p("Eg09AmwMAAAhNfMBp7AAAMAAABNfg");
	this.shape_1.setTransform(337.95,282.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Res_Container, new cjs.Rectangle(-2,34,680,498), null);


(lib.NameContainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A9/E2IAArtMA7/AAAIAANvMg7/AAA");
	this.shape.setTransform(192,43.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC00FF").s().p("A9/G4IAAiCIAArtMA7/AAAIAANvg");
	this.shape_1.setTransform(192,43.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NameContainer, new cjs.Rectangle(-1,-1,386,90), null);


(lib.LBbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AxLkSMAiXAAAIAAIlMgiXAAAg");
	this.shape.setTransform(110,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9966FF").s().p("AxLETIAAolMAiXAAAIAAIlg");
	this.shape_1.setTransform(110,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LBbtn, new cjs.Rectangle(-1,-1,222,57), null);


(lib.btnStart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Play Quiz", "35px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 41;
	this.text.lineWidth = 200;
	this.text.parent = this;
	this.text.setTransform(32.05,10.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AzEkmMAmJAAAIAAJNMgmJAAAg");
	this.shape.setTransform(122.05,29.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993399").s().p("AzEEnIAApNMAmIAAAIAAJNg");
	this.shape_1.setTransform(122.05,29.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btnStart, new cjs.Rectangle(-1,-1,246.1,61), null);


(lib.btnD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bldMAu3AAAIAAK7Mgu3AAAg");
	this.shape.setTransform(150,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9966FF").s().p("A3bFeIAAq7MAu3AAAIAAK7g");
	this.shape_1.setTransform(150,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btnD, new cjs.Rectangle(-1,-1,302,72), null);


(lib.btnC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Axaj5MAi1AAAIAAHzMgi1AAAg");
	this.shape.setTransform(111.5,24.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9966FF").s().p("AxaD6IAAnzMAi1AAAIAAHzg");
	this.shape_1.setTransform(111.5,24.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btnC, new cjs.Rectangle(-1,-1,225,52), null);


(lib.btnB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Axaj5MAi1AAAIAAHzMgi1AAAg");
	this.shape.setTransform(111.5,24.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9966FF").s().p("AxaD6IAAnzMAi1AAAIAAHzg");
	this.shape_1.setTransform(111.5,24.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btnB, new cjs.Rectangle(-1,-1,225,52), null);


(lib.btnA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Axaj5MAi1AAAIAAHzMgi1AAAg");
	this.shape.setTransform(111.5,24.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9966FF").s().p("AxaD6IAAnzMAi1AAAIAAHzg");
	this.shape_1.setTransform(111.5,24.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btnA, new cjs.Rectangle(-1,-1,225,52), null);


(lib.backMenubtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Atlj+IbLAAIAAH9I7LAAg");
	this.shape.setTransform(87,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,102,255,0.749)").s().p("AtlD/IAAn9IbLAAIAAH9g");
	this.shape_1.setTransform(87,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backMenubtn, new cjs.Rectangle(-1,-1,176,53), null);


(lib.AnswerContainer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Eg44gOVMBxxAAAIAAcqMhxxAAAg");
	this.shape.setTransform(954.175,-69.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,0,153,0.498)").s().p("Eg44AOWIAA8qMBxxAAAIAAcqg");
	this.shape_1.setTransform(954.175,-69.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AnswerContainer, new cjs.Rectangle(589.1,-161.9,730.1999999999999,185.5), null);


// stage content:
(lib.trabalho2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {menu:0,quiz:29,result:59,leaderboard:70};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,29,59,70];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		const root = this;
		console.log("MENU root =", root);
		
		// ===============================
		// ⚙️ CONFIG
		// ===============================
		const MIN_CHARS = 4;
		const MAX_CHARS = 15;
		const PLACEHOLDER = "Insert your Name!!";
		
		// ===============================
		// 🔊 REGISTO DE SOM
		// ===============================
		createjs.Sound.registerSound("sounds/quiz_menu.mp3", "quiz_menu");
		
		// ===============================
		// 🧠 ESTADO
		// ===============================
		let playerName = "";
		
		// ===============================
		// 🔗 REFERÊNCIAS
		// ===============================
		const nameTxt  = root.txtName;
		const startBtn = root.btnStart;
		const lbBtn    = root.LBbtn;
		
		// ===============================
		// 🔊 MÚSICA DO MENU (GESTÃO CORRETA)
		// ===============================
		
		// parar qualquer música anterior
		if (root.bgMusic) {
		  root.bgMusic.stop();
		  root.bgMusic = null;
		}
		
		// iniciar música do menu
		root.bgMusic = createjs.Sound.play("quiz_menu", {
		  loop: -1,
		  volume: 1
		});
		
		// ===============================
		// 🎨 VISUAL BOTÃO
		// ===============================
		function disableButton() {
		  startBtn.mouseEnabled = false;
		  startBtn.alpha = 0.4;
		}
		
		function enableButton() {
		  startBtn.mouseEnabled = true;
		  startBtn.alpha = 1;
		}
		
		// ===============================
		// 🚀 INIT
		// ===============================
		nameTxt.text = PLACEHOLDER;
		disableButton();
		
		// ===============================
		// ⌨️ INPUT TECLADO
		// ===============================
		window.addEventListener("keydown", handleKey);
		
		function handleKey(e) {
		  // Backspace
		  if (e.key === "Backspace") {
		    playerName = playerName.slice(0, -1);
		  }
		  // Letras, números e espaço
		  else if (/^[a-zA-Z0-9 ]$/.test(e.key)) {
		    if (playerName.length < MAX_CHARS) {
		      playerName += e.key;
		    }
		  }
		
		  updateText();
		  validateName();
		}
		
		// ===============================
		// 📝 UPDATE TEXTO
		// ===============================
		function updateText() {
		  nameTxt.text = playerName.length > 0 ? playerName : PLACEHOLDER;
		}
		
		// ===============================
		// ✅ VALIDAÇÃO
		// ===============================
		function validateName() {
		  if (playerName.length >= MIN_CHARS && playerName.length <= MAX_CHARS) {
		    enableButton();
		  } else {
		    disableButton();
		  }
		}
		
		// ===============================
		// ▶️ BOTÃO PLAY (MENU → QUIZ)
		// ===============================
		startBtn.cursor = "pointer";
		startBtn.on("click", () => {
		  if (playerName.length >= MIN_CHARS) {
		    root.playerName = playerName;
		
		    // parar música do menu
		    if (root.bgMusic) {
		      root.bgMusic.stop();
		      root.bgMusic = null;
		    }
		
		    root.gotoAndStop("quiz");
		  }
		});
		
		// ===============================
		// 🏆 BOTÃO LEADERBOARD (MENU → LEADERBOARD)
		// ===============================
		lbBtn.cursor = "pointer";
		lbBtn.on("click", () => {
		  if (root.bgMusic) {
		    root.bgMusic.stop();
		    root.bgMusic = null;
		  }
		
		  root.gotoAndStop("leaderboard");
		});
	}
	this.frame_29 = function() {
		this.stop();
		const root = this;
		console.log("root =", root);
		
		// ===============================
		// 🎨 CORES
		// ===============================
		const COLOR_NORMAL   = 0x9B6BFF;
		const COLOR_SELECTED = 0xFF9800;
		const COLOR_CORRECT  = 0x4CAF50;
		const COLOR_WRONG    = 0xF44336;
		
		// ===============================
		// 🔊 SONS – REGISTO
		// ===============================
		createjs.Sound.registerSound("sounds/button_click.mp3", "button_click");
		createjs.Sound.registerSound("sounds/correct_answer.mp3", "correct_answer");
		createjs.Sound.registerSound("sounds/wrong_answer.mp3", "wrong_answer");
		
		let userAnswers = [];
		let questionStartTime = 0;
		
		// ===============================
		// 🎵 MÚSICA DE FUNDO
		// ===============================
		let bgMusic = createjs.Sound.play("quiz_menu", {
		  loop: -1,
		  volume: 0.4
		});
		
		// ===============================
		// ❓ PERGUNTAS
		// ===============================
		const questions = [
		  {
		    q: "O que significa HTML?",
		    a: [
		      "Hyper Text Markup Language",
		      "High Text Machine Language",
		      "Hyperlinks Text Module",
		      "Home Tool Markup Language"
		    ],
		    correct: 0
		  },
		  {
		    q: "Qual destas linguagens é usada para interatividade na web?",
		    a: ["HTML", "CSS", "JavaScript", "SQL"],
		    correct: 2
		  },
		  {
		    q: "O Adobe Animate HTML5 exporta animações usando:",
		    a: ["Flash Player", "Unity", "CreateJS", "React"],
		    correct: 2
		  },
		  {
		    q: "Qual destes é um formato multimédia?",
		    a: ["TXT", "MP3", "CSV", "XML"],
		    correct: 1
		  },
		  {
		    q: "Qual é a principal função do CSS?",
		    a: [
		      "Criar lógica",
		      "Criar bases de dados",
		      "Estilizar conteúdo",
		      "Executar scripts"
		    ],
		    correct: 2
		  },
		  {
		    q: "O que é multimédia?",
		    a: [
		      "Texto apenas",
		      "Imagem apenas",
		      "Som apenas",
		      "Combinação de vários meios"
		    ],
		    correct: 3
		  },
		  {
		    q: "Qual destes dispositivos é de entrada?",
		    a: ["Monitor", "Colunas", "Rato", "Projetor"],
		    correct: 2
		  },
		  {
		    q: "Qual tecnologia permite guardar dados num servidor?",
		    a: ["HTML", "PHP", "CSS", "Canvas"],
		    correct: 1
		  },
		  {
		    q: "O que significa UI?",
		    a: [
		      "User Interaction",
		      "User Interface",
		      "Universal Input",
		      "Unified Internet"
		    ],
		    correct: 1
		  },
		  {
		    q: "Qual destes é um exemplo de aplicação multimédia interativa?",
		    a: [
		      "Documento PDF",
		      "Imagem JPEG",
		      "Jogo educativo",
		      "Texto simples"
		    ],
		    correct: 2
		  }
		];
		
		// ===============================
		// 📊 ESTADO
		// ===============================
		let current = 0;
		let score = 0;
		let selectedIndex = null;
		let locked = false;
		
		// ===============================
		// ⏱️ TIMER
		// ===============================
		let timeLeft = 15;
		let timerInterval = null;
		
		// ===============================
		// 🔘 BOTÕES
		// ===============================
		const buttons = [
		  root.btnA,
		  root.btnB,
		  root.btnC,
		  root.btnD
		];
		
		// ===============================
		// 🎨 FUNÇÕES VISUAIS
		// ===============================
		function setButtonColor(btn, color) {
		  btn.filters = [
		    new createjs.ColorFilter(
		      ((color >> 16) & 255) / 255,
		      ((color >> 8) & 255) / 255,
		      (color & 255) / 255,
		      1
		    )
		  ];
		  btn.cache(0, 0, btn.nominalBounds.width, btn.nominalBounds.height);
		}
		
		function resetButtons() {
		  buttons.forEach(btn => setButtonColor(btn, COLOR_NORMAL));
		  selectedIndex = null;
		}
		
		// ===============================
		// ⏱️ TIMER
		// ===============================
		function formatTime(seconds) {
		  const m = Math.floor(seconds / 60);
		  const s = seconds % 60;
		
		  return (
		    String(m).padStart(2, "0") +
		    ":" +
		    String(s).padStart(2, "0")
		  );
		}
		
		function startTimer() {
		  clearInterval(timerInterval);
		  timeLeft = 15;
		  root.text.text = formatTime(timeLeft);
		
		  timerInterval = setInterval(() => {
		    timeLeft--;
		    root.text.text = formatTime(timeLeft);
		
		    if (timeLeft <= 0) {
		      clearInterval(timerInterval);
		      autoFail();
		    }
		  }, 1000);
		}
		// ===============================
		// 📋 QUIZ
		// ===============================
		function loadQuestion() {
		  const q = questions[current];
		
		  root.txtQuestion.text = q.q;
		  root.txtA.text = q.a[0];
		  root.text_1.text = q.a[1];
		  root.txtC.text = q.a[2];
		  root.txtName.text = q.a[3];
		
		  resetButtons();
		  startTimer();
		  questionStartTime = Date.now();
		}
		
		function autoFail() {
		  if (locked) return;
		  locked = true;
		
		  const correct = questions[current].correct;
		  setButtonColor(buttons[correct], COLOR_CORRECT);
		
		  setTimeout(() => {
		    locked = false;
		    nextQuestion();
		  }, 900);
		}
		
		function validateAnswer(index) {
		    if (locked) return;
		    
		    locked = true;
		    clearInterval(timerInterval);
		    const correct = questions[current].correct;
			const timeSpentMs = Date.now() - questionStartTime;
			
			userAnswers[current] = {
		    selectedIndex: index,
		    isCorrect: index === correct,
			timeMs: timeSpentMs
		  };
		    
		    // Stop background music if it exists
		    if (bgMusic) {
		        bgMusic.stop();
		    }
		    
		    if (index === correct) {
		        setButtonColor(buttons[index], COLOR_CORRECT);
		        createjs.Sound.play("correct_answer", { volume: 1 });
		        score++;
		    } else {
		        setButtonColor(buttons[index], COLOR_WRONG);
		        setButtonColor(buttons[correct], COLOR_CORRECT);
		        createjs.Sound.play("wrong_answer", { volume: 1 });
		    }
		    
		    setTimeout(() => {
		        locked = false;
		        // Resume background music
		        bgMusic = createjs.Sound.play("quiz_menu", { 
		            loop: -1, 
		            volume: 0.4 
		        });
		        nextQuestion();
		    }, 900);
		}
		
		function nextQuestion() {
		  clearInterval(timerInterval);
		  resetButtons();
		
		  current++;
		  selectedIndex = null;
		
		  if (current < questions.length) {
		    loadQuestion();
		  } else {
		  saveGameData();
		
		  root.score = score;
		  root.totalQuestions = questions.length;
		  if (bgMusic) {
		        bgMusic.stop();
		    }
		  root.gotoAndStop("result");
			  
		}
		}
		
		function answer(index) {
		  if (locked) return;
		
		  createjs.Sound.play("button_click", {volume:1});
		
		  if (selectedIndex !== index) {
		    resetButtons();
		    setButtonColor(buttons[index], COLOR_SELECTED);
		    selectedIndex = index;
		    return;
		  }
		
		  validateAnswer(index);
		}
		function saveGameData() {
		  const data = {
		    player: root.playerName,
		    score: score,
		    totalQuestions: questions.length,
		    answeredQuestions: current,
		    timestamp: new Date().toISOString(),
		     results: questions.map((q, i) => {
		      const answer = userAnswers[i];
		
		      return {
		        question: q.q,
		        correctIndex: q.correct,
		        selectedIndex: answer ? answer.selectedIndex : null,
				timeMs: answer ? answer.timeMs : null,
		        isCorrect: answer ? answer.isCorrect : false,
		        answered: answer !== undefined
		      };
		    })
		  };
		
		  fetch("save.js", {
		    method: "POST",
		    headers: {
		      "Content-Type": "application/json"
		    },
		    body: JSON.stringify(data)
		  })
		  .then(res => res.text())
		  .then(response => console.log("SAVE:", response))
		  .catch(err => console.error("SAVE ERROR:", err));
		}
		
		
		// ===============================
		// 🖱️ EVENTOS
		// ===============================
		root.btnA.on("click", () => answer(0));
		root.btnB.on("click", () => answer(1));
		root.btnC.on("click", () => answer(2));
		root.btnD.on("click", () => answer(3));
		
		// ===============================
		// ▶️ START
		// ===============================
		loadQuestion();
	}
	this.frame_59 = function() {
		this.stop();
		const root = this;
		
		const playerName = root.playerName || "Jogador";
		const score = root.score || 0;
		const total = root.totalQuestions || 10;
		createjs.Sound.registerSound("sounds/good_result.mp3", "good_result");
		createjs.Sound.registerSound("sounds/bad_result.mp3", "bad_result");
		
		// ---------------- MENSAGEM ----------------
		let message = "";
		
		if (score >= 7) {
		  message =
		    "Parabéns, " + playerName + " 💪\n\n" +
		    "Fizeste " + score + " pontos em " + total + ".\n" +
		    "Excelente trabalho!";
			createjs.Sound.play("good_result", {volume:1});
		}
		else if (score >= 5) {
		  message =
		    "Nada mal, " + playerName + " 🙂\n\n" +
		    "Fizeste " + score + " pontos em " + total + ".\n" +
		    "Podes melhorar, continua!";
		}
		else {
		  message =
		    "Força, " + playerName + " 💥\n\n" +
		    "Fizeste " + score + " pontos em " + total + ".\n" +
		    "Revê a matéria e tenta novamente.";
			createjs.Sound.play("bad_result", {volume:1});
		}
		// ---------------- OUTPUT ----------------
		root.txtB.text = message;
		root.txtB.font = "24px Arial";
		root.txtB.textAlign = "center";
		
		
		// ===============================
		// 🔄 RESET DO JOGO
		// ===============================
		function resetGame() {
		  root.score = 0;
		  root.playerName = null;
		  root.current = 0;
		  root.selectedIndex = null;
		  root.locked = false;
		
		  if (root.userAnswers) {
		    root.userAnswers.length = 0;
		  }
		
		  if (root.timerInterval) {
		    clearInterval(root.timerInterval);
		  }
		
		  if (root.bgMusic) {
		    root.bgMusic.stop();
		    root.bgMusic = null;
		  }
		}
		
		// ===============================
		// 🔘 BOTÃO: BACK TO MENU
		// ===============================
		root.backMenubtn.cursor = "pointer";
		root.backMenubtn.on("click", () => {
		  resetGame();
		  root.gotoAndStop("menu"); // 🔁 muda para número se não usares label
		});
		
		// ===============================
		// 🔘 BOTÃO: LEADERBOARD
		// ===============================
		root.LBbtn.cursor = "pointer";
		root.LBbtn.on("click", () => {
		  root.gotoAndStop("leaderboard");
		});
	}
	this.frame_70 = function() {
		this.stop();
		const root = this;
		
		root.txtName.text = "A carregar leaderboard...";
		
		// ===============================
		// 📊 CARREGAR LEADERBOARD
		// ===============================
		fetch("leaderboard.js")
		  .then(res => res.json())
		  .then(data => {
		    if (!data.length) {
		      root.txtName.text = "Sem resultados ainda.";
		      return;
		    }
		
		    let output = "";
		    let rank = 1;
		
		    data.forEach(entry => {
		      output +=
		        rank + ". " +
		        entry.player +
		        " ".repeat(30 - entry.player.length) +
		        entry.score +
		        "\n";
		      rank++;
		    });
		
		    root.txtName.text = output;
		  })
		  .catch(err => {
		    console.error(err);
		    root.txtName.text = "Erro a carregar leaderboard.";
		  });
		
		// ===============================
		// 🔘 VOLTAR AO MENU
		// ===============================
		root.backMenubtn.cursor = "pointer";
		root.backMenubtn.on("click", () => {
		  root.gotoAndStop("menu");
		});
		
		root.LBbtn.cursor = "pointer";
		root.LBbtn.on("click", () => {
		  root.gotoAndStop("leaderboard");
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(11).call(this.frame_70).wait(10));

	// Layer_1
	this.text = new cjs.Text("Leaderboard", "25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 148;
	this.text.parent = this;
	this.text.setTransform(319.95,197.7);

	this.LBbtn = new lib.LBbtn();
	this.LBbtn.name = "LBbtn";
	this.LBbtn.setTransform(396,212,0.7455,0.9636,0,0,0,110,27.5);

	this.instance = new lib.questionmarks();
	this.instance.setTransform(583.65,55.2,0.6747,0.7069,12.9408);

	this.txtName = new cjs.Text("Insert your Name!!", "30px 'Arial'", "#FFFFFF");
	this.txtName.name = "txtName";
	this.txtName.lineHeight = 36;
	this.txtName.lineWidth = 321;
	this.txtName.parent = this;
	this.txtName.setTransform(260,311.25);

	this.instance_1 = new lib.NameContainer();
	this.instance_1.setTransform(400,335.1,1,1,0,0,0,192,44);

	this.btnStart = new lib.btnStart();
	this.btnStart.name = "btnStart";
	this.btnStart.setTransform(399.95,502.4,1,1,0,0,0,122,29.4);

	this.text_1 = new cjs.Text("LearnIT - A quiz to learn!!", "60px 'Jokerman'", "#9966FF");
	this.text_1.lineHeight = 93;
	this.text_1.lineWidth = 784;
	this.text_1.parent = this;
	this.text_1.setTransform(8.05,52.75);

	this.instance_2 = new lib.brickbackground();
	this.instance_2.setTransform(-4,-15,0.179,0.203);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgxDAUQMAAAg0WMBiHAAAMAAAAkaEAxEARmIAAOhMhiHAAAIAAhPA9NOyIAAiC");
	this.shape.setTransform(407,283.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgxDAgHIAAhPMAvgAAAIAAqoMgvgAAAMAAAg0WMBiHAAAMAAAAkaIzOAAIAAjdIl8AAIAAhEMg21AAAIAAEhImGAAIAANSIGGAAIAACCMA7/AAAIAAiCIUAAAIAAOhg");
	this.shape_1.setTransform(407,283.425);

	this.instance_3 = new lib.questionmarks();
	this.instance_3.setTransform(738.55,330.95,0.1393,0.1454,12.9392);

	this.instance_4 = new lib.questionmarks();
	this.instance_4.setTransform(613.55,517.95,0.1393,0.1454,12.9392);

	this.instance_5 = new lib.questionmarks();
	this.instance_5.setTransform(544.55,222,0.1393,0.1454,12.9392);

	this.instance_6 = new lib.questionmarks();
	this.instance_6.setTransform(46.55,525.95,0.1393,0.1454,12.9392);

	this.instance_7 = new lib.questionmarks();
	this.instance_7.setTransform(-23.4,285,0.1393,0.1454,12.9392);

	this.instance_8 = new lib.questionmarks();
	this.instance_8.setTransform(740.5,98.05,0.1393,0.1454,12.9392);

	this.instance_9 = new lib.timerContainer();
	this.instance_9.setTransform(369,287.05,1,1,0,0,0,86,26);

	this.btnD = new lib.btnD();
	this.btnD.name = "btnD";
	this.btnD.setTransform(539.4,490.2,1,1,0,0,0,150,35);

	this.txtC = new cjs.Text("Option C", "25px 'Arial'", "#FFFFFF");
	this.txtC.name = "txtC";
	this.txtC.lineHeight = 30;
	this.txtC.lineWidth = 283;
	this.txtC.parent = this;
	this.txtC.setTransform(37.95,465.65);

	this.txtA = new cjs.Text("Option A", "25px 'Arial'", "#FFFFFF");
	this.txtA.name = "txtA";
	this.txtA.lineHeight = 30;
	this.txtA.lineWidth = 284;
	this.txtA.parent = this;
	this.txtA.setTransform(44,374.85);

	this.btnB = new lib.btnB();
	this.btnB.name = "btnB";
	this.btnB.setTransform(539.4,400,1.3453,1.4014,0,0,0,111.5,25);

	this.btnC = new lib.btnC();
	this.btnC.name = "btnC";
	this.btnC.setTransform(185.95,490.25,1.3453,1.4014,0,0,0,111.5,25);

	this.btnA = new lib.btnA();
	this.btnA.name = "btnA";
	this.btnA.setTransform(185.95,400,1.3453,1.4014,0,0,0,111.5,25);

	this.txtQuestion = new cjs.Text("QUESTION HERE!!", "30px 'Arial'", "#FFFFFF");
	this.txtQuestion.name = "txtQuestion";
	this.txtQuestion.lineHeight = 36;
	this.txtQuestion.lineWidth = 648;
	this.txtQuestion.parent = this;
	this.txtQuestion.setTransform(11.4295,129.35,1.0776,1);

	this.instance_10 = new lib.AnswerContainer();
	this.instance_10.setTransform(-213.55,313.1,0.9853,0.734,0,0,0,363.9,92.1);

	this.instance_11 = new lib.AnswerContainer();
	this.instance_11.setTransform(-213.55,681.35,0.9853,1.4503,0,0,0,363.9,92);

	this.text_2 = new cjs.Text("LearnIT - A quiz to learn!!", "60px 'Jokerman'", "#9966FF");
	this.text_2.lineHeight = 93;
	this.text_2.lineWidth = 881;
	this.text_2.parent = this;
	this.text_2.setTransform(6.05,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("ATnmPIHqAAIAAMfMg2hAAAIAAgyAKPEsIAAAyMglfAAAIAAgy");
	this.shape_2.setTransform(210.475,404.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("A/qsrIAABvEA/QAK5IAABzEg/PgJEIAAAS");
	this.shape_3.setTransform(852.45,333.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(50,50,50,0.498)").s().p("Ag4A5IAAhxIBxAAIAABxg");
	this.shape_4.setTransform(1251.5,408.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A3bAyIAAgyIAAgxMAu3AAAIAAAxIpXAAIAAAyg");
	this.shape_5.setTransform(185.95,434.975);

	this.backMenubtn = new lib.backMenubtn();
	this.backMenubtn.name = "backMenubtn";
	this.backMenubtn.setTransform(506.2,190.7,0.9765,1.0784,0,0,0,87.2,25.6);

	this.instance_12 = new lib.Res_Container();
	this.instance_12.setTransform(416.85,308.05,0.6242,0.7703,0,0,0,339,248);

	this.instance_13 = new lib.trophy();
	this.instance_13.setTransform(630.5,25.4,0.4766,0.4842,16.2497);

	this.instance_14 = new lib.LBbtn();
	this.instance_14.setTransform(439.05,141.55,1.4,1,0,0,0,110,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2,p:{x:-4,y:-15}},{t:this.text_1,p:{x:8.05,y:52.75,text:"LearnIT - A quiz to learn!!",font:"60px 'Jokerman'",color:"#9966FF",lineHeight:92.75,lineWidth:784}},{t:this.btnStart},{t:this.instance_1},{t:this.txtName,p:{x:260,y:311.25,text:"Insert your Name!!",font:"30px 'Arial'",lineHeight:35.5,lineWidth:321}},{t:this.instance,p:{scaleX:0.6747,scaleY:0.7069,rotation:12.9408,x:583.65,y:55.2}},{t:this.LBbtn,p:{x:396,y:212}},{t:this.text,p:{x:319.95,y:197.7,text:"Leaderboard",lineWidth:148,font:"25px 'Arial'",lineHeight:29.95}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_2,p:{x:0,y:0}},{t:this.text_2},{t:this.instance_11},{t:this.instance_10},{t:this.txtQuestion},{t:this.btnA},{t:this.btnC},{t:this.btnB},{t:this.txtA},{t:this.txtC,p:{scaleX:1,scaleY:1,x:37.95,y:465.65,text:"Option C",font:"25px 'Arial'",color:"#FFFFFF",lineHeight:29.95,lineWidth:283}},{t:this.text_1,p:{x:396.8,y:374.85,text:"Option B",font:"25px 'Arial'",color:"#FFFFFF",lineHeight:29.95,lineWidth:291}},{t:this.btnD},{t:this.txtName,p:{x:400,y:467.35,text:"Option D",font:"25px 'Arial'",lineHeight:29.95,lineWidth:281}},{t:this.instance_9},{t:this.text,p:{x:339,y:271.25,text:"00:15",lineWidth:75,font:"25px 'Arial'",lineHeight:29.95}},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance,p:{scaleX:0.1393,scaleY:0.1454,rotation:12.9392,x:-34.4,y:72}}]},29).to({state:[{t:this.instance_2,p:{x:1,y:1}},{t:this.instance_12,p:{regX:339,scaleX:0.6242,scaleY:0.7703,x:416.85,y:308.05}},{t:this.txtC,p:{scaleX:0.9548,scaleY:1.064,x:93.1415,y:10.4,text:"LearnIT - A quiz to learn!!",font:"50px 'Jokerman'",color:"#9966FF",lineHeight:77.6,lineWidth:668}},{t:this.text_1,p:{x:320,y:260.05,text:"Result",font:"25px 'Arial'",color:"#FFFFFF",lineHeight:29.95,lineWidth:483}},{t:this.LBbtn,p:{x:295.05,y:189.55}},{t:this.txtName,p:{x:219,y:175.25,text:"Leaderboard",font:"25px 'Arial'",lineHeight:29.95,lineWidth:148}},{t:this.backMenubtn,p:{x:506.2,y:190.7}},{t:this.text,p:{x:427,y:176.4,text:"Back to Menu",lineWidth:156,font:"25px 'Arial'",lineHeight:29.95}}]},30).to({state:[{t:this.instance_2,p:{x:1,y:1}},{t:this.instance_12,p:{regX:339.1,scaleX:0.9035,scaleY:1.0531,x:409.9,y:323}},{t:this.txtC,p:{scaleX:0.9548,scaleY:1.064,x:93.1415,y:10.4,text:"LearnIT - A quiz to learn!!",font:"50px 'Jokerman'",color:"#9966FF",lineHeight:77.6,lineWidth:668}},{t:this.instance_14},{t:this.text_1,p:{x:371,y:125.25,text:"Leaderboard",font:"25px 'Arial'",color:"#FFFFFF",lineHeight:29.95,lineWidth:148}},{t:this.txtName,p:{x:182,y:186.4,text:" \nScores",font:"25px 'Arial'",lineHeight:29.95,lineWidth:410}},{t:this.instance,p:{scaleX:0.2698,scaleY:0.3041,rotation:12.9414,x:727.55,y:417.75}},{t:this.instance_13},{t:this.backMenubtn,p:{x:193.2,y:141.1}},{t:this.text,p:{x:126,y:124.95,text:"Back to Menu",lineWidth:129,font:"20px 'Arial'",lineHeight:24.35}}]},11).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(346.4,285,911.9,380);
// library properties:
lib.properties = {
	id: 'BD37892DDD21624BA5CF5F1E8AC3AF4E',
	width: 800,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/brickbackground.jpg", id:"brickbackground"},
		{src:"images/trabalho 2_atlas_1.png", id:"trabalho 2_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BD37892DDD21624BA5CF5F1E8AC3AF4E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;