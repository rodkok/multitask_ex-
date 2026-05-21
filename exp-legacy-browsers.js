/************ 
 * Exp *
 ************/


// store info about the experiment session:
let expName = 'exp';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
flowScheduler.add(audio_texttRoutineBegin());
flowScheduler.add(audio_texttRoutineEachFrame());
flowScheduler.add(audio_texttRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(wait_audio_endRoutineBegin());
flowScheduler.add(wait_audio_endRoutineEachFrame());
flowScheduler.add(wait_audio_endRoutineEnd());
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'exp_stimuli_low.xlsx', 'path': 'exp_stimuli_low.xlsx'},
    {'name': 'arcticfit_pants.png', 'path': 'arcticfit_pants.png'},
    {'name': 'arctichunter_boots.png', 'path': 'arctichunter_boots.png'},
    {'name': 'arcticline_hat.png', 'path': 'arcticline_hat.png'},
    {'name': 'arcticsnow_boots.png', 'path': 'arcticsnow_boots.png'},
    {'name': 'arcticstorm_pants.png', 'path': 'arcticstorm_pants.png'},
    {'name': 'arctictouch_gloves.png', 'path': 'arctictouch_gloves.png'},
    {'name': 'arcticwear_jacket.png', 'path': 'arcticwear_jacket.png'},
    {'name': 'frostarctic_jacket.png', 'path': 'frostarctic_jacket.png'},
    {'name': 'frostline_jacket.png', 'path': 'frostline_jacket.png'},
    {'name': 'frostpeak_boots.png', 'path': 'frostpeak_boots.png'},
    {'name': 'frosttrail_pants.png', 'path': 'frosttrail_pants.png'},
    {'name': 'frostwear_pants.png', 'path': 'frostwear_pants.png'},
    {'name': 'frostwool_scarf.png', 'path': 'frostwool_scarf.png'},
    {'name': 'glacierloop_snood.png', 'path': 'glacierloop_snood.png'},
    {'name': 'glacierpro_jacket.png', 'path': 'glacierpro_jacket.png'},
    {'name': 'glaciertrek_boots.png', 'path': 'glaciertrek_boots.png'},
    {'name': 'glacierwalk_pants.png', 'path': 'glacierwalk_pants.png'},
    {'name': 'icetrail_jacket.png', 'path': 'icetrail_jacket.png'},
    {'name': 'nordgloves_gloves.png', 'path': 'nordgloves_gloves.png'},
    {'name': 'Nordway_boots.png', 'path': 'Nordway_boots.png'},
    {'name': 'northline_pants.png', 'path': 'northline_pants.png'},
    {'name': 'northwind_jacket.png', 'path': 'northwind_jacket.png'},
    {'name': 'polarfox_uggie.png', 'path': 'polarfox_uggie.png'},
    {'name': 'polarknit_gloves.png', 'path': 'polarknit_gloves.png'},
    {'name': 'polarmove_pants.png', 'path': 'polarmove_pants.png'},
    {'name': 'polarsnow_hat.png', 'path': 'polarsnow_hat.png'},
    {'name': 'polarstyle_jacket.png', 'path': 'polarstyle_jacket.png'},
    {'name': 'Siberia_boots.png', 'path': 'Siberia_boots.png'},
    {'name': 'snowmotion_pants.png', 'path': 'snowmotion_pants.png'},
    {'name': 'snowpeak_jacket.png', 'path': 'snowpeak_jacket.png'},
    {'name': 'snowranger_boots.png', 'path': 'snowranger_boots.png'},
    {'name': 'snowridge_jacket.png', 'path': 'snowridge_jacket.png'},
    {'name': 'snowstep_pants.png', 'path': 'snowstep_pants.png'},
    {'name': 'snowtube_snood.png', 'path': 'snowtube_snood.png'},
    {'name': 'taiga_boots.png', 'path': 'taiga_boots.png'},
    {'name': 'wintersoft_scarf.png', 'path': 'wintersoft_scarf.png'},
    {'name': 'winterstorm_jacket.png', 'path': 'winterstorm_jacket.png'},
    {'name': 'wintertrail_boots.png', 'path': 'wintertrail_boots.png'},
    {'name': 'wintertrek_pants.png', 'path': 'wintertrek_pants.png'},
    {'name': 'winterwarm_gloves.png', 'path': 'winterwarm_gloves.png'},
    {'name': 'arcticfit_pants1.png', 'path': 'arcticfit_pants1.png'},
    {'name': 'arctichunter_boots1.png', 'path': 'arctichunter_boots1.png'},
    {'name': 'arcticline_hat1.png', 'path': 'arcticline_hat1.png'},
    {'name': 'arcticsnow_boots1.png', 'path': 'arcticsnow_boots1.png'},
    {'name': 'arcticstorm_pants1.png', 'path': 'arcticstorm_pants1.png'},
    {'name': 'arctictouch_gloves1.png', 'path': 'arctictouch_gloves1.png'},
    {'name': 'arcticwear_jacket1.png', 'path': 'arcticwear_jacket1.png'},
    {'name': 'frostarctic_jacket1.png', 'path': 'frostarctic_jacket1.png'},
    {'name': 'frostline_jacket1.png', 'path': 'frostline_jacket1.png'},
    {'name': 'frostpeak_boots1.png', 'path': 'frostpeak_boots1.png'},
    {'name': 'frosttrail_pants1.png', 'path': 'frosttrail_pants1.png'},
    {'name': 'frostwear_pants1.png', 'path': 'frostwear_pants1.png'},
    {'name': 'frostwool_scarf1.png', 'path': 'frostwool_scarf1.png'},
    {'name': 'glacierloop_snood1.png', 'path': 'glacierloop_snood1.png'},
    {'name': 'glacierpro_jacket1.png', 'path': 'glacierpro_jacket1.png'},
    {'name': 'glaciertrek_boots1.png', 'path': 'glaciertrek_boots1.png'},
    {'name': 'glacierwalk_pants1.png', 'path': 'glacierwalk_pants1.png'},
    {'name': 'icetrail_jacket1.png', 'path': 'icetrail_jacket1.png'},
    {'name': 'nordgloves_gloves1.png', 'path': 'nordgloves_gloves1.png'},
    {'name': 'Nordway_boots1.png', 'path': 'Nordway_boots1.png'},
    {'name': 'northline_pants1.png', 'path': 'northline_pants1.png'},
    {'name': 'northwind_jacket1.png', 'path': 'northwind_jacket1.png'},
    {'name': 'polarfox_uggie1.png', 'path': 'polarfox_uggie1.png'},
    {'name': 'polarknit_gloves1.png', 'path': 'polarknit_gloves1.png'},
    {'name': 'polarmove_pants1.png', 'path': 'polarmove_pants1.png'},
    {'name': 'polarsnow_hat1.png', 'path': 'polarsnow_hat1.png'},
    {'name': 'polarstyle_jacket1.png', 'path': 'polarstyle_jacket1.png'},
    {'name': 'Siberia_boots1.png', 'path': 'Siberia_boots1.png'},
    {'name': 'snowmotion_pants1.png', 'path': 'snowmotion_pants1.png'},
    {'name': 'snowpeak_jacket1.png', 'path': 'snowpeak_jacket1.png'},
    {'name': 'snowranger_boots1.png', 'path': 'snowranger_boots1.png'},
    {'name': 'snowridge_jacket1.png', 'path': 'snowridge_jacket1.png'},
    {'name': 'snowstep_pants1.png', 'path': 'snowstep_pants1.png'},
    {'name': 'snowtube_snood1.png', 'path': 'snowtube_snood1.png'},
    {'name': 'taiga_boots1.png', 'path': 'taiga_boots1.png'},
    {'name': 'wintersoft_scarf1.png', 'path': 'wintersoft_scarf1.png'},
    {'name': 'winterstorm_jacket1.png', 'path': 'winterstorm_jacket1.png'},
    {'name': 'wintertrail_boots1.png', 'path': 'wintertrail_boots1.png'},
    {'name': 'wintertrek_pants1.png', 'path': 'wintertrek_pants1.png'},
    {'name': 'winterwarm_gloves1.png', 'path': 'winterwarm_gloves1.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'arcticfit_pants.png', 'path': 'arcticfit_pants.png'},
    {'name': 'arcticfit_pants1.png', 'path': 'arcticfit_pants1.png'},
    {'name': 'arctichunter_boots.png', 'path': 'arctichunter_boots.png'},
    {'name': 'arctichunter_boots1.png', 'path': 'arctichunter_boots1.png'},
    {'name': 'arcticline_hat.png', 'path': 'arcticline_hat.png'},
    {'name': 'arcticline_hat1.png', 'path': 'arcticline_hat1.png'},
    {'name': 'arcticsnow_boots.png', 'path': 'arcticsnow_boots.png'},
    {'name': 'arcticsnow_boots1.png', 'path': 'arcticsnow_boots1.png'},
    {'name': 'arcticstorm_pants.png', 'path': 'arcticstorm_pants.png'},
    {'name': 'arcticstorm_pants1.png', 'path': 'arcticstorm_pants1.png'},
    {'name': 'arctictouch_gloves.png', 'path': 'arctictouch_gloves.png'},
    {'name': 'arctictouch_gloves1.png', 'path': 'arctictouch_gloves1.png'},
    {'name': 'arcticwear_jacket.png', 'path': 'arcticwear_jacket.png'},
    {'name': 'arcticwear_jacket1.png', 'path': 'arcticwear_jacket1.png'},
    {'name': 'audio_exp.mp3', 'path': 'audio_exp.mp3'},
    {'name': 'exp_stimuli_low.xlsx', 'path': 'exp_stimuli_low.xlsx'},
    {'name': 'frostarctic_jacket.png', 'path': 'frostarctic_jacket.png'},
    {'name': 'frostarctic_jacket1.png', 'path': 'frostarctic_jacket1.png'},
    {'name': 'frostline_jacket.png', 'path': 'frostline_jacket.png'},
    {'name': 'frostline_jacket1.png', 'path': 'frostline_jacket1.png'},
    {'name': 'frostpeak_boots.png', 'path': 'frostpeak_boots.png'},
    {'name': 'frostpeak_boots1.png', 'path': 'frostpeak_boots1.png'},
    {'name': 'frosttrail_pants.png', 'path': 'frosttrail_pants.png'},
    {'name': 'frosttrail_pants1.png', 'path': 'frosttrail_pants1.png'},
    {'name': 'frostwear_pants.png', 'path': 'frostwear_pants.png'},
    {'name': 'frostwear_pants1.png', 'path': 'frostwear_pants1.png'},
    {'name': 'frostwool_scarf.png', 'path': 'frostwool_scarf.png'},
    {'name': 'frostwool_scarf1.png', 'path': 'frostwool_scarf1.png'},
    {'name': 'glacierloop_snood.png', 'path': 'glacierloop_snood.png'},
    {'name': 'glacierloop_snood1.png', 'path': 'glacierloop_snood1.png'},
    {'name': 'glacierpro_jacket.png', 'path': 'glacierpro_jacket.png'},
    {'name': 'glacierpro_jacket1.png', 'path': 'glacierpro_jacket1.png'},
    {'name': 'glaciertrek_boots.png', 'path': 'glaciertrek_boots.png'},
    {'name': 'glaciertrek_boots1.png', 'path': 'glaciertrek_boots1.png'},
    {'name': 'glacierwalk_pants.png', 'path': 'glacierwalk_pants.png'},
    {'name': 'glacierwalk_pants1.png', 'path': 'glacierwalk_pants1.png'},
    {'name': 'icetrail_jacket.png', 'path': 'icetrail_jacket.png'},
    {'name': 'icetrail_jacket1.png', 'path': 'icetrail_jacket1.png'},
    {'name': 'nordgloves_gloves.png', 'path': 'nordgloves_gloves.png'},
    {'name': 'nordgloves_gloves1.png', 'path': 'nordgloves_gloves1.png'},
    {'name': 'Nordway_boots.png', 'path': 'Nordway_boots.png'},
    {'name': 'Nordway_boots1.png', 'path': 'Nordway_boots1.png'},
    {'name': 'northline_pants.png', 'path': 'northline_pants.png'},
    {'name': 'northline_pants1.png', 'path': 'northline_pants1.png'},
    {'name': 'northwind_jacket.png', 'path': 'northwind_jacket.png'},
    {'name': 'northwind_jacket1.png', 'path': 'northwind_jacket1.png'},
    {'name': 'polarfox_uggie.png', 'path': 'polarfox_uggie.png'},
    {'name': 'polarfox_uggie1.png', 'path': 'polarfox_uggie1.png'},
    {'name': 'polarknit_gloves.png', 'path': 'polarknit_gloves.png'},
    {'name': 'polarknit_gloves1.png', 'path': 'polarknit_gloves1.png'},
    {'name': 'polarmove_pants.png', 'path': 'polarmove_pants.png'},
    {'name': 'polarmove_pants1.png', 'path': 'polarmove_pants1.png'},
    {'name': 'polarsnow_hat.png', 'path': 'polarsnow_hat.png'},
    {'name': 'polarsnow_hat1.png', 'path': 'polarsnow_hat1.png'},
    {'name': 'polarstyle_jacket.png', 'path': 'polarstyle_jacket.png'},
    {'name': 'polarstyle_jacket1.png', 'path': 'polarstyle_jacket1.png'},
    {'name': 'Siberia_boots.png', 'path': 'Siberia_boots.png'},
    {'name': 'Siberia_boots1.png', 'path': 'Siberia_boots1.png'},
    {'name': 'snowmotion_pants.png', 'path': 'snowmotion_pants.png'},
    {'name': 'snowmotion_pants1.png', 'path': 'snowmotion_pants1.png'},
    {'name': 'snowpeak_jacket.png', 'path': 'snowpeak_jacket.png'},
    {'name': 'snowpeak_jacket1.png', 'path': 'snowpeak_jacket1.png'},
    {'name': 'snowranger_boots.png', 'path': 'snowranger_boots.png'},
    {'name': 'snowranger_boots1.png', 'path': 'snowranger_boots1.png'},
    {'name': 'snowridge_jacket.png', 'path': 'snowridge_jacket.png'},
    {'name': 'snowridge_jacket1.png', 'path': 'snowridge_jacket1.png'},
    {'name': 'snowstep_pants.png', 'path': 'snowstep_pants.png'},
    {'name': 'snowstep_pants1.png', 'path': 'snowstep_pants1.png'},
    {'name': 'snowtube_snood.png', 'path': 'snowtube_snood.png'},
    {'name': 'snowtube_snood1.png', 'path': 'snowtube_snood1.png'},
    {'name': 'taiga_boots.png', 'path': 'taiga_boots.png'},
    {'name': 'taiga_boots1.png', 'path': 'taiga_boots1.png'},
    {'name': 'wintersoft_scarf.png', 'path': 'wintersoft_scarf.png'},
    {'name': 'wintersoft_scarf1.png', 'path': 'wintersoft_scarf1.png'},
    {'name': 'winterstorm_jacket.png', 'path': 'winterstorm_jacket.png'},
    {'name': 'winterstorm_jacket1.png', 'path': 'winterstorm_jacket1.png'},
    {'name': 'wintertrail_boots.png', 'path': 'wintertrail_boots.png'},
    {'name': 'wintertrail_boots1.png', 'path': 'wintertrail_boots1.png'},
    {'name': 'wintertrek_pants.png', 'path': 'wintertrek_pants.png'},
    {'name': 'wintertrek_pants1.png', 'path': 'wintertrek_pants1.png'},
    {'name': 'winterwarm_gloves.png', 'path': 'winterwarm_gloves.png'},
    {'name': 'winterwarm_gloves1.png', 'path': 'winterwarm_gloves1.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var instr_text;
var key_resp;
var audio_texttClock;
var audio_texttt;
var audio_duration;
var audio_started;
var audio_start_time;
var textClock;
var clue;
var trialClock;
var image;
var mouse;
var target;
var wait_audio_endClock;
var wait_text;
var thanksClock;
var thanks_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'В ходе эксперимента вам необходимо одновременно выполнять две задачи.Во время выполнения задания вы будете слушать аудиорассказ. Пожалуйста, слушайте его внимательно, так как после завершения эксперимента вам будут заданы вопросы по его содержанию. Одновременно на экране будут последовательно появляться страницы с товарами. Перед каждой страницей вам будет показано название товара, который необходимо найти. После появления страницы как можно быстрее найдите соответствующий товар и нажмите на него мышью. Если вы случайно нажали не на тот товар, продолжайте поиск нужного товара до окончания пробы. Пожалуйста, старайтесь выполнять обе задачи максимально внимательно.\nДля начала эксперимента нажмите клавишу «Пробел».\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 30/1080,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "audio_textt"
  audio_texttClock = new util.Clock();
  // Run 'Begin Experiment' code from code_3
  audio_texttt = new sound.Sound ({
      win: psychoJS.window,
      value: 'audio_exp.mp3',
      secs: -1,
      volume: 1.0,
      loops: 0
  });
  
  audio_duration = 635;
  audio_started = false;
  audio_start_time = null;
  // Initialize components for Routine "text"
  textClock = new util.Clock();
  clue = new visual.TextStim({
    win: psychoJS.window,
    name: 'clue',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 40/1080,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  psychoJS.window.mouseVisible = true;
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [(1920 / 1080), (1080 / 1080)],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  target = new visual.Rect ({
    win: psychoJS.window, name: 'target', 
    width: [(320 / 1080), (390 / 1080)][0], height: [(320 / 1080), (390 / 1080)][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('red'), 
    fillColor: new util.Color('red'), 
    colorSpace: 'rgb', 
    opacity: 0.0, 
    depth: -3, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "wait_audio_end"
  wait_audio_endClock = new util.Clock();
  wait_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'wait_text',
    text: 'Пожалуйста, дослушайте историю...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 50/1080,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Огромное спасибо за прохождение эксперимента!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 50/1080,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instrMaxDurationReached;
var _key_resp_allKeys;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_text);
    instrComponents.push(key_resp);
    
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var audio_texttMaxDurationReached;
var audio_texttMaxDuration;
var audio_texttComponents;
function audio_texttRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'audio_textt' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    audio_texttClock.reset();
    routineTimer.reset();
    audio_texttMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    if (!audio_started) {
        audio_texttt.play();
        audio_start_time = globalClock.getTime();
        audio_started = true;
    }
    continueRoutine = false
    psychoJS.experiment.addData('audio_textt.started', globalClock.getTime());
    audio_texttMaxDuration = null
    // keep track of which components have finished
    audio_texttComponents = [];
    
    audio_texttComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function audio_texttRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'audio_textt' ---
    // get current time
    t = audio_texttClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    audio_texttComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function audio_texttRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'audio_textt' ---
    audio_texttComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('audio_textt.stopped', globalClock.getTime());
    // the Routine "audio_textt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'exp_stimuli_low.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(textRoutineBegin(snapshot));
      trialsLoopScheduler.add(textRoutineEachFrame());
      trialsLoopScheduler.add(textRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var textMaxDurationReached;
var textMaxDuration;
var textComponents;
function textRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'text' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    textClock.reset(routineTimer.getTime());
    routineTimer.add(1.800000);
    textMaxDurationReached = false;
    // update component parameters for each repeat
    clue.setText(name);
    psychoJS.experiment.addData('text.started', globalClock.getTime());
    textMaxDuration = null
    // keep track of which components have finished
    textComponents = [];
    textComponents.push(clue);
    
    textComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function textRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'text' ---
    // get current time
    t = textClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *clue* updates
    if (t >= 0.0 && clue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clue.tStart = t;  // (not accounting for frame time here)
      clue.frameNStart = frameN;  // exact frame index
      
      clue.setAutoDraw(true);
    }
    
    
    // if clue is active this frame...
    if (clue.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.8 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (clue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      clue.tStop = t;  // not accounting for scr refresh
      clue.frameNStop = frameN;  // exact frame index
      // update status
      clue.status = PsychoJS.Status.FINISHED;
      clue.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    textComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function textRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'text' ---
    textComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('text.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (textMaxDurationReached) {
        textClock.add(textMaxDuration);
    } else {
        textClock.add(1.800000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialMaxDurationReached;
var gotValidClick;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    image.setImage(stimuli);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    target.setPos([(pos_x / 1080), (pos_y / 1080)]);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image);
    trialComponents.push(mouse);
    trialComponents.push(target);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    /* Syntax Error: Fix Python code */
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image.tStop = t;  // not accounting for scr refresh
      image.frameNStop = frameN;  // exact frame index
      // update status
      image.status = PsychoJS.Status.FINISHED;
      image.setAutoDraw(false);
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      mouse.tStop = t;  // not accounting for scr refresh
      mouse.frameNStop = frameN;  // exact frame index
      // update status
      mouse.status = PsychoJS.Status.FINISHED;
      mouse.status = PsychoJS.Status.FINISHED;
    }
    
    // if mouse is active this frame...
    if (mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval(target)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval(target)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouse.getPos();
            mouse.x.push(_mouseXYs[0]);
            mouse.y.push(_mouseXYs[1]);
            mouse.leftButton.push(_mouseButtons[0]);
            mouse.midButton.push(_mouseButtons[1]);
            mouse.rightButton.push(_mouseButtons[2]);
            mouse.time.push(mouse.mouseClock.getTime());
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *target* updates
    if (t >= 0.0 && target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target.tStart = t;  // (not accounting for frame time here)
      target.frameNStart = frameN;  // exact frame index
      
      target.setAutoDraw(true);
    }
    
    
    // if target is active this frame...
    if (target.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      target.tStop = t;  // not accounting for scr refresh
      target.frameNStop = frameN;  // exact frame index
      // update status
      target.status = PsychoJS.Status.FINISHED;
      target.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    if (routineForceEnded) {
        routineTimer.reset();} else if (trialMaxDurationReached) {
        trialClock.add(trialMaxDuration);
    } else {
        trialClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var wait_audio_endMaxDurationReached;
var wait_audio_endMaxDuration;
var wait_audio_endComponents;
function wait_audio_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wait_audio_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    wait_audio_endClock.reset();
    routineTimer.reset();
    wait_audio_endMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('wait_audio_end.started', globalClock.getTime());
    wait_audio_endMaxDuration = null
    // keep track of which components have finished
    wait_audio_endComponents = [];
    wait_audio_endComponents.push(wait_text);
    
    wait_audio_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function wait_audio_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wait_audio_end' ---
    // get current time
    t = wait_audio_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *wait_text* updates
    if (t >= 0.0 && wait_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wait_text.tStart = t;  // (not accounting for frame time here)
      wait_text.frameNStart = frameN;  // exact frame index
      
      wait_text.setAutoDraw(true);
    }
    
    
    // if wait_text is active this frame...
    if (wait_text.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_4
    if (audio_start_time !== null) {
        if (globalClock.getTime() - audio_start_time >= audio_duration) {
            continueRoutine = false;
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    wait_audio_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wait_audio_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wait_audio_end' ---
    wait_audio_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('wait_audio_end.stopped', globalClock.getTime());
    // the Routine "wait_audio_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thanksClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' +
    psychoJS._experiment._datetime + '.csv';
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
    return Object.values(it).toString()
    }).join('\n')
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
     method: 'POST',
     headers: {
     'Content-Type': 'application/json',
     Accept: '*/*',
     },
     body: JSON.stringify({
     experimentID: '3ous7DTS6Ro5',
     filename: filename,
     data: data,
     }),
    }).then(response => response.json()).then(data => {
        // Log response aud force experiment end
    console.log(data);
    quitPsychoJS();
    })
    
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanks_text);
    
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (t >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }
    
    
    // if thanks_text is active this frame...
    if (thanks_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (thanks_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      thanks_text.tStop = t;  // not accounting for scr refresh
      thanks_text.frameNStop = frameN;  // exact frame index
      // update status
      thanks_text.status = PsychoJS.Status.FINISHED;
      thanks_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (thanksMaxDurationReached) {
        thanksClock.add(thanksMaxDuration);
    } else {
        thanksClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
