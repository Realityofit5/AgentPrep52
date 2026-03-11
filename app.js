// ============================================================
// APP.JS — AgentPrep 52  (formerly RealLaw 52)
// Firebase Auth + Cloud Sync + Stripe Tiers + Streak Tracking
// ============================================================

'use strict';

const ANTHROPIC_MODEL = 'claude-sonnet-4-6';

// ─── TIER DEFINITIONS ────────────────────────────────────────
const TIERS = {
  free: {
    id: 'free', label: 'Free', price: 0,
    freeStates: ['WA', 'CA', 'TX', 'FL', 'NY'],
    maxLessonsPerModule: 2, maxQuizQuestions: 10,
    aiTutor: false, examSimulator: false, progressAnalytics: false, allStates: false,
  },
  premium: {
    id: 'premium', label: 'Premium', price: 14.99,
    freeStates: null, maxLessonsPerModule: null, maxQuizQuestions: null,
    aiTutor: true, examSimulator: false, progressAnalytics: true, allStates: true,
  },
  ai_premium: {
    id: 'ai_premium', label: 'AI Premium', price: 24.99,
    freeStates: null, maxLessonsPerModule: null, maxQuizQuestions: null,
    aiTutor: true, examSimulator: true, progressAnalytics: true, allStates: true,
    advancedAI: true, voiceTutor: true, customExams: true,
  }
};

// ─── CURRICULUM REGISTRY ─────────────────────────────────────
// ─── i18n TRANSLATIONS ───────────────────────────────────────
const I18N = {
  en: {
    // Nav
    nav_study: 'Study', nav_dashboard: 'Dashboard', nav_curriculum: 'Curriculum',
    nav_ai_tutor: 'AI Tutor', nav_track: 'Track', nav_broker: 'Broker Exam',
    nav_mlo: 'MLO License', nav_practical: 'Practical Skills', nav_reference: 'Reference',
    nav_states: '52-State Matrix', nav_compare: 'Compare States', nav_tools: 'Tools',
    nav_progress: 'Progress', nav_roadmap: '12-Week Roadmap', nav_settings: 'Settings',
    nav_upgrade: 'Upgrade Plan', nav_exam: 'Exam Simulator',
    // Sidebar footer
    quick_quiz: '⚡ Quick Quiz', theme_toggle: '☀️ Theme',
    // Dashboard
    dash_welcome: 'Welcome back', dash_state: 'Study State',
    dash_streak: 'Day Streak', dash_modules: 'Modules Passed',
    dash_completion: 'Completion', dash_next: 'Up Next',
    dash_upgrade_title: '⭐ Upgrade to Premium',
    dash_upgrade_sub: 'Unlock all 52 states, unlimited quizzes, AI Tutor',
    // Quiz
    quiz_submit: 'Submit Quiz', quiz_answer_all: 'Answer All Questions',
    quiz_remaining: 'remaining', quiz_view_results: 'View Results →',
    // Results
    results_passed: '🎉 Passed!', results_failed: 'Keep Practicing',
    results_score: 'Score', results_back: '← Back to Lesson',
    results_retake: 'Retake Quiz', results_progress: 'View Progress',
    // Chat
    chat_title: 'AgentPrep AI Tutor', chat_advanced: 'Advanced',
    chat_clear: 'Clear', chat_placeholder: 'Ask about licensing, state laws, exam prep…',
    chat_welcome_title: 'Your AI Tutor is Ready',
    chat_send: '→', chat_you: 'You', chat_ai: 'AI Tutor',
    chat_voice_on: '🔊 Voice On', chat_voice_off: '🔇 Voice Off',
    // Upgrade
    upgrade_title: 'Choose Your Plan', upgrade_sub: 'Start free. Upgrade when you\'re ready.',
    upgrade_current: 'Current Plan', upgrade_popular: 'Most Popular',
    upgrade_get_premium: 'Get Premium →', upgrade_get_ai: 'Get AI Premium →',
    upgrade_continue_free: 'Continue Free', upgrade_cancel: 'Cancel anytime · Secure payment via Stripe',
    // Exam Simulator
    exam_title: 'Mock Exam Simulator', exam_sub: 'AI-generated 150-question timed exam',
    exam_start: 'Start Exam', exam_generating: 'Generating your exam…',
    exam_time_left: 'Time Left', exam_question: 'Question',
    exam_submit_exam: 'Submit Exam', exam_score_report: 'Score Report',
    exam_passed_msg: 'Exam Passed! You\'re ready for test day.',
    exam_failed_msg: 'Keep studying — you\'ll get there.',
    exam_retake: 'Retake Exam', exam_back_dash: 'Back to Dashboard',
    exam_locked: 'Exam Simulator is an AI Premium exclusive feature.',
    // Custom Exam Builder
    custom_title: 'Custom Practice Exam Builder',
    custom_sub: 'Build a focused quiz on your weak spots',
    custom_topic: 'Topic / Focus Area', custom_questions: 'Number of Questions',
    custom_build: 'Build My Exam', custom_building: 'Building your custom exam…',
    // Settings
    settings_title: 'Settings', settings_sub: 'Configure your profile and account.',
    settings_profile: 'Study Profile', settings_name: 'Your Name',
    settings_exam_date: 'Target Exam Date', settings_goal: 'Daily Study Goal (modules/day)',
    settings_state: 'Study State', settings_theme: 'Theme',
    settings_language: 'Language', settings_save: 'Save Profile',
    settings_signout: 'Sign Out', settings_account: 'Account',
    settings_plan: 'Plan', settings_local: 'Local mode',
    settings_data: 'Data Management', settings_export: 'Export Progress',
    settings_import: 'Import Progress', settings_reset: 'Reset All Data',
    settings_resources: 'Official Resources',
    settings_dark: '🌙 Dark', settings_light: '☀️ Light',
    settings_lang_en: '🇺🇸 English', settings_lang_es: '🇪🇸 Español',
    // Progress
    progress_title: 'Progress', progress_passed: 'Modules Passed',
    progress_streak: 'Day Streak', progress_completion: 'Completion',
    progress_weak: '⚠️ Topics Needing Review', progress_export: 'Export Progress JSON',
    progress_import: 'Import Progress', progress_reset: 'Reset All',
    // General
    upgrade_btn: 'Upgrade →', locked: '🔒',
    free_badge: 'Free · Upgrade ↗', module_of: 'of',
    passed: 'passed', avg: 'avg', try_label: 'try',
    back_tracks: '← Tracks', back_modules: '← Back',
    toast_profile_saved: 'Profile saved', toast_tier_set: 'Tier set to',
    toast_progress_imported: 'Progress imported', toast_invalid_file: 'Invalid file',
    toast_progress_reset: 'Progress reset',
    // Legal nav labels
    nav_terms: 'Terms of Service', nav_privacy: 'Privacy Policy', nav_refund: 'Refund Policy',
    nav_legal: 'Legal',
    // Legal page shared
    legal_last_updated: 'Last updated: March 2026',
    legal_contact_email: 'Questions? Contact us at: support@agentprep52.com',
    legal_back: '← Back to Settings',
    // Terms
    terms_title: 'Terms of Service',
    terms_subtitle: 'Please read these terms carefully before using AgentPrep 52.',
    // Privacy
    privacy_title: 'Privacy Policy',
    privacy_subtitle: 'Your privacy matters. Here is exactly what we collect and why.',
    // Refund
    refund_title: 'Refund Policy',
    refund_subtitle: 'We want you to feel confident before subscribing.',
    // PWA banner
    pwa_title: 'Install AgentPrep 52 on your phone',
    pwa_sub: 'Works offline · No app store needed · Free to install',
    pwa_install_btn: 'Install',
  },
  es: {
    // Nav
    nav_study: 'Estudio', nav_dashboard: 'Panel', nav_curriculum: 'Currículo',
    nav_ai_tutor: 'Tutor IA', nav_track: 'Pista', nav_broker: 'Examen de Agente',
    nav_mlo: 'Licencia MLO', nav_practical: 'Habilidades Prácticas', nav_reference: 'Referencia',
    nav_states: 'Matriz 52 Estados', nav_compare: 'Comparar Estados', nav_tools: 'Herramientas',
    nav_progress: 'Progreso', nav_roadmap: 'Plan 12 Semanas', nav_settings: 'Configuración',
    nav_upgrade: 'Mejorar Plan', nav_exam: 'Simulador de Examen',
    // Sidebar footer
    quick_quiz: '⚡ Quiz Rápido', theme_toggle: '☀️ Tema',
    // Dashboard
    dash_welcome: 'Bienvenido de nuevo', dash_state: 'Estado de Estudio',
    dash_streak: 'Racha de Días', dash_modules: 'Módulos Aprobados',
    dash_completion: 'Completado', dash_next: 'Lo Siguiente',
    dash_upgrade_title: '⭐ Mejorar a Premium',
    dash_upgrade_sub: 'Desbloquea los 52 estados, quizzes ilimitados, Tutor IA',
    // Quiz
    quiz_submit: 'Enviar Quiz', quiz_answer_all: 'Responde Todas las Preguntas',
    quiz_remaining: 'restantes', quiz_view_results: 'Ver Resultados →',
    // Results
    results_passed: '🎉 ¡Aprobado!', results_failed: 'Sigue Practicando',
    results_score: 'Puntuación', results_back: '← Volver a la Lección',
    results_retake: 'Repetir Quiz', results_progress: 'Ver Progreso',
    // Chat
    chat_title: 'Tutor IA AgentPrep', chat_advanced: 'Avanzado',
    chat_clear: 'Limpiar', chat_placeholder: 'Pregunta sobre licencias, leyes estatales, preparación…',
    chat_welcome_title: 'Tu Tutor IA Está Listo',
    chat_send: '→', chat_you: 'Tú', chat_ai: 'Tutor IA',
    chat_voice_on: '🔊 Voz Activada', chat_voice_off: '🔇 Voz Desactivada',
    // Upgrade
    upgrade_title: 'Elige Tu Plan', upgrade_sub: 'Empieza gratis. Mejora cuando estés listo.',
    upgrade_current: 'Plan Actual', upgrade_popular: 'Más Popular',
    upgrade_get_premium: 'Obtener Premium →', upgrade_get_ai: 'Obtener IA Premium →',
    upgrade_continue_free: 'Continuar Gratis', upgrade_cancel: 'Cancela cuando quieras · Pago seguro por Stripe',
    // Exam Simulator
    exam_title: 'Simulador de Examen Real', exam_sub: 'Examen cronometrado de 150 preguntas generado por IA',
    exam_start: 'Iniciar Examen', exam_generating: 'Generando tu examen…',
    exam_time_left: 'Tiempo Restante', exam_question: 'Pregunta',
    exam_submit_exam: 'Enviar Examen', exam_score_report: 'Reporte de Puntuación',
    exam_passed_msg: '¡Examen Aprobado! Estás listo para el día del examen.',
    exam_failed_msg: 'Sigue estudiando — lo lograrás.',
    exam_retake: 'Repetir Examen', exam_back_dash: 'Volver al Panel',
    exam_locked: 'El Simulador de Examen es una función exclusiva de IA Premium.',
    // Custom Exam Builder
    custom_title: 'Constructor de Examen Personalizado',
    custom_sub: 'Crea un quiz enfocado en tus puntos débiles',
    custom_topic: 'Tema / Área de Enfoque', custom_questions: 'Número de Preguntas',
    custom_build: 'Crear Mi Examen', custom_building: 'Creando tu examen personalizado…',
    // Settings
    settings_title: 'Configuración', settings_sub: 'Configura tu perfil y cuenta.',
    settings_profile: 'Perfil de Estudio', settings_name: 'Tu Nombre',
    settings_exam_date: 'Fecha Objetivo del Examen', settings_goal: 'Meta Diaria (módulos/día)',
    settings_state: 'Estado de Estudio', settings_theme: 'Tema',
    settings_language: 'Idioma', settings_save: 'Guardar Perfil',
    settings_signout: 'Cerrar Sesión', settings_account: 'Cuenta',
    settings_plan: 'Plan', settings_local: 'Modo local',
    settings_data: 'Gestión de Datos', settings_export: 'Exportar Progreso',
    settings_import: 'Importar Progreso', settings_reset: 'Restablecer Todo',
    settings_resources: 'Recursos Oficiales',
    settings_dark: '🌙 Oscuro', settings_light: '☀️ Claro',
    settings_lang_en: '🇺🇸 English', settings_lang_es: '🇪🇸 Español',
    // Progress
    progress_title: 'Progreso', progress_passed: 'Módulos Aprobados',
    progress_streak: 'Racha de Días', progress_completion: 'Completado',
    progress_weak: '⚠️ Temas que Necesitan Revisión', progress_export: 'Exportar Progreso JSON',
    progress_import: 'Importar Progreso', progress_reset: 'Restablecer Todo',
    // General
    upgrade_btn: 'Mejorar →', locked: '🔒',
    free_badge: 'Gratis · Mejorar ↗', module_of: 'de',
    passed: 'aprobados', avg: 'prom', try_label: 'intento',
    back_tracks: '← Pistas', back_modules: '← Volver',
    toast_profile_saved: 'Perfil guardado', toast_tier_set: 'Nivel establecido a',
    toast_progress_imported: 'Progreso importado', toast_invalid_file: 'Archivo inválido',
    toast_progress_reset: 'Progreso restablecido',
    // Legal nav labels
    nav_terms: 'Términos de Servicio', nav_privacy: 'Política de Privacidad', nav_refund: 'Política de Reembolso',
    nav_legal: 'Legal',
    // Legal page shared
    legal_last_updated: 'Última actualización: Marzo 2026',
    legal_contact_email: '¿Preguntas? Contáctanos: support@agentprep52.com',
    legal_back: '← Volver a Configuración',
    // Terms
    terms_title: 'Términos de Servicio',
    terms_subtitle: 'Por favor lee estos términos con cuidado antes de usar AgentPrep 52.',
    // Privacy
    privacy_title: 'Política de Privacidad',
    privacy_subtitle: 'Tu privacidad importa. Aquí te decimos exactamente qué recopilamos y por qué.',
    // Refund
    refund_title: 'Política de Reembolso',
    refund_subtitle: 'Queremos que te sientas seguro antes de suscribirte.',
    // PWA banner
    pwa_title: 'Instala AgentPrep 52 en tu celular',
    pwa_sub: 'Funciona sin internet · Sin tienda de apps · Gratis instalar',
    pwa_install_btn: 'Instalar',
  }
};
function t(key) { return (I18N[APP.language]||I18N.en)[key] || (I18N.en[key]) || key; }
function setLanguage(lang) {
  APP.language = lang;
  saveState();
  applyLanguageToNav();
  render();
  // Trigger full-page browser translation for content not covered by i18n keys
  if (typeof triggerGoogleTranslate === 'function') {
    triggerGoogleTranslate(lang);
    // Hide the Google translate top banner so it doesn't shift the layout
    setTimeout(function(){ if (typeof hideGoogleBar === 'function') hideGoogleBar(); }, 800);
  }
  showToast(lang === 'es' ? 'Idioma: Español' : 'Language: English', 'success');
}
function applyLanguageToNav() {
  const nav = document.querySelector('.sidebar-nav');
  if (!nav) return;
  const map = {
    'dashboard': t('nav_dashboard'), 'tracks': t('nav_curriculum'),
    'chat': t('nav_ai_tutor'), 'states': t('nav_states'),
    'compare': t('nav_compare'), 'progress': t('nav_progress'),
    'roadmap': t('nav_roadmap'), 'setup': t('nav_settings'),
    'upgrade': t('nav_upgrade'), 'exam': t('nav_exam'),
  };
  nav.querySelectorAll('.nav-item[data-view]').forEach(el => {
    const view = el.dataset.view;
    if (map[view]) {
      const icon = el.querySelector('.nav-icon');
      el.textContent = map[view];
      if (icon) el.prepend(icon);
    }
  });
  // Section labels
  const labels = nav.querySelectorAll('.nav-section-label');
  const sectionKeys = ['nav_study','nav_track','nav_reference','nav_tools'];
  labels.forEach((el,i) => { if(sectionKeys[i]) el.textContent = t(sectionKeys[i]); });
  // Legal labels
  const termsEl   = document.getElementById('nav-terms-label');
  const privacyEl = document.getElementById('nav-privacy-label');
  const refundEl  = document.getElementById('nav-refund-label');
  if (termsEl)   termsEl.textContent   = t('nav_terms');
  if (privacyEl) privacyEl.textContent = t('nav_privacy');
  if (refundEl)  refundEl.textContent  = t('nav_refund');
  // PWA banner text
  const pwaTitle = document.getElementById('pwa-banner-title');
  const pwaSub   = document.getElementById('pwa-banner-sub');
  const pwaBtn   = document.getElementById('pwa-install-btn');
  if (pwaTitle) pwaTitle.textContent = t('pwa_title');
  if (pwaSub)   pwaSub.textContent   = t('pwa_sub');
  if (pwaBtn)   pwaBtn.textContent   = t('pwa_install_btn');
  // Sidebar footer buttons
  const qq = document.querySelector('.sf-btn');
  if (qq) qq.textContent = t('quick_quiz');
}

const CURRICULUM_REGISTRY = {
  AL:()=>typeof CURRICULUM_AL!=='undefined'?CURRICULUM_AL:null,AK:()=>typeof CURRICULUM_AK!=='undefined'?CURRICULUM_AK:null,
  AZ:()=>typeof CURRICULUM_AZ!=='undefined'?CURRICULUM_AZ:null,AR:()=>typeof CURRICULUM_AR!=='undefined'?CURRICULUM_AR:null,
  CA:()=>typeof CURRICULUM_CA!=='undefined'?CURRICULUM_CA:null,CO:()=>typeof CURRICULUM_CO!=='undefined'?CURRICULUM_CO:null,
  CT:()=>typeof CURRICULUM_CT!=='undefined'?CURRICULUM_CT:null,DE:()=>typeof CURRICULUM_DE!=='undefined'?CURRICULUM_DE:null,
  FL:()=>typeof CURRICULUM_FL!=='undefined'?CURRICULUM_FL:null,GA:()=>typeof CURRICULUM_GA!=='undefined'?CURRICULUM_GA:null,
  HI:()=>typeof CURRICULUM_HI!=='undefined'?CURRICULUM_HI:null,ID:()=>typeof CURRICULUM_ID!=='undefined'?CURRICULUM_ID:null,
  IL:()=>typeof CURRICULUM_IL!=='undefined'?CURRICULUM_IL:null,IN:()=>typeof CURRICULUM_IN!=='undefined'?CURRICULUM_IN:null,
  IA:()=>typeof CURRICULUM_IA!=='undefined'?CURRICULUM_IA:null,KS:()=>typeof CURRICULUM_KS!=='undefined'?CURRICULUM_KS:null,
  KY:()=>typeof CURRICULUM_KY!=='undefined'?CURRICULUM_KY:null,LA:()=>typeof CURRICULUM_LA!=='undefined'?CURRICULUM_LA:null,
  ME:()=>typeof CURRICULUM_ME!=='undefined'?CURRICULUM_ME:null,MD:()=>typeof CURRICULUM_MD!=='undefined'?CURRICULUM_MD:null,
  MA:()=>typeof CURRICULUM_MA!=='undefined'?CURRICULUM_MA:null,MI:()=>typeof CURRICULUM_MI!=='undefined'?CURRICULUM_MI:null,
  MN:()=>typeof CURRICULUM_MN!=='undefined'?CURRICULUM_MN:null,MS:()=>typeof CURRICULUM_MS!=='undefined'?CURRICULUM_MS:null,
  MO:()=>typeof CURRICULUM_MO!=='undefined'?CURRICULUM_MO:null,MT:()=>typeof CURRICULUM_MT!=='undefined'?CURRICULUM_MT:null,
  NE:()=>typeof CURRICULUM_NE!=='undefined'?CURRICULUM_NE:null,NV:()=>typeof CURRICULUM_NV!=='undefined'?CURRICULUM_NV:null,
  NH:()=>typeof CURRICULUM_NH!=='undefined'?CURRICULUM_NH:null,NJ:()=>typeof CURRICULUM_NJ!=='undefined'?CURRICULUM_NJ:null,
  NM:()=>typeof CURRICULUM_NM!=='undefined'?CURRICULUM_NM:null,NY:()=>typeof CURRICULUM_NY!=='undefined'?CURRICULUM_NY:null,
  NC:()=>typeof CURRICULUM_NC!=='undefined'?CURRICULUM_NC:null,ND:()=>typeof CURRICULUM_ND!=='undefined'?CURRICULUM_ND:null,
  OH:()=>typeof CURRICULUM_OH!=='undefined'?CURRICULUM_OH:null,OK:()=>typeof CURRICULUM_OK!=='undefined'?CURRICULUM_OK:null,
  OR:()=>typeof CURRICULUM_OR!=='undefined'?CURRICULUM_OR:null,PA:()=>typeof CURRICULUM_PA!=='undefined'?CURRICULUM_PA:null,
  RI:()=>typeof CURRICULUM_RI!=='undefined'?CURRICULUM_RI:null,SC:()=>typeof CURRICULUM_SC!=='undefined'?CURRICULUM_SC:null,
  SD:()=>typeof CURRICULUM_SD!=='undefined'?CURRICULUM_SD:null,TN:()=>typeof CURRICULUM_TN!=='undefined'?CURRICULUM_TN:null,
  TX:()=>typeof CURRICULUM_TX!=='undefined'?CURRICULUM_TX:null,UT:()=>typeof CURRICULUM_UT!=='undefined'?CURRICULUM_UT:null,
  VT:()=>typeof CURRICULUM_VT!=='undefined'?CURRICULUM_VT:null,VA:()=>typeof CURRICULUM_VA!=='undefined'?CURRICULUM_VA:null,
  WA:()=>typeof CURRICULUM_WA!=='undefined'?CURRICULUM_WA:null,WV:()=>typeof CURRICULUM_WV!=='undefined'?CURRICULUM_WV:null,
  WI:()=>typeof CURRICULUM_WI!=='undefined'?CURRICULUM_WI:null,WY:()=>typeof CURRICULUM_WY!=='undefined'?CURRICULUM_WY:null,
  DC:()=>typeof CURRICULUM_DC!=='undefined'?CURRICULUM_DC:null,PR:()=>typeof CURRICULUM_PR!=='undefined'?CURRICULUM_PR:null,
};

const DEFAULT_STUDY_PLAN = [
  { weeks:"1-2", focus:"Licensing process and requirements for your state" },
  { weeks:"3-4", focus:"Property law, ownership types, and legal descriptions" },
  { weeks:"5-6", focus:"Contracts, agency, and disclosure requirements" },
  { weeks:"7-8", focus:"Federal mortgage law: RESPA, TILA, ECOA, SAFE Act" },
  { weeks:"9-10", focus:"State-specific law deep dive + remediation" },
  { weeks:"11-12", focus:"Exam readiness: schedule exam, full mock exams" }
];

const DEFAULT_RESOURCES = [
  { label:"ARELLO State Licensing Info", url:"https://www.arello.org/", category:"broker" },
  { label:"NMLS State Requirements", url:"https://mortgage.nationwidelicensingsystem.org/", category:"mlo" },
  { label:"PSI Exam Scheduling", url:"https://candidate.psiexams.com/", category:"broker" },
  { label:"Pearson VUE Exam Scheduling", url:"https://home.pearsonvue.com/", category:"broker" },
  { label:"CFPB RESPA Section 8", url:"https://www.consumerfinance.gov/rules-policy/regulations/1024/14/", category:"practical" }
];

// ─── FIREBASE STATE ───────────────────────────────────────────
let _fbAuth=null, _fbDb=null, _fbUser=null, _fbReady=false;

// ─── APP STATE ────────────────────────────────────────────────
let APP = {
  profile:{ name:'', targetExam:'', setupDone:false },
  studyState:'WA', activeTrack:null, activeModule:null,
  activeView:'dashboard', quizState:null, chatHistory:[],
  progress:{}, refState:null, refCat:'licensing',
  compareStates:[], theme:'dark', _prefill:null,
  tier:'free', streak:0, lastStudyDate:null, totalStudyDays:0,
  dailyGoal:3, todayModules:0, bookmarks:[], weakTopics:[],
  language:'en', examState:null, voiceEnabled:false,
};

// ─── TIER HELPERS ─────────────────────────────────────────────
function getTier()     { return TIERS[APP.tier]||TIERS.free; }
function isPremium()   { return APP.tier==='premium'||APP.tier==='ai_premium'; }
function isAIPremium() { return APP.tier==='ai_premium'; }
function canAccessState(code) { const t=getTier(); return t.allStates||(t.freeStates||[]).includes(code); }
function canUseAI()    { return getTier().aiTutor; }

// ─── FIREBASE INIT ────────────────────────────────────────────
function initFirebase() {
  if (!window.FIREBASE_CONFIG || FIREBASE_CONFIG.apiKey==='PASTE_YOUR_apiKey_HERE') {
    console.warn('Firebase not configured — running in local mode'); _fbReady=false; return;
  }
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
    _fbAuth=firebase.auth(); _fbDb=firebase.firestore(); _fbReady=true;
    _fbAuth.onAuthStateChanged(async(user)=>{
      _fbUser=user;
      if(user){ await loadCloudProgress(user.uid); APP.profile.name=APP.profile.name||user.displayName||''; render(); updateStreakCheck(); }
      else render();
    });
  } catch(e){ console.warn('Firebase init failed:',e.message); _fbReady=false; }
}

async function saveState() {
  try { localStorage.setItem(`agentprep52_${APP.studyState}_v1`,JSON.stringify(APP)); } catch(e){}
  if(_fbReady&&_fbUser){
    try {
      await _fbDb.collection('users').doc(_fbUser.uid).set({
        profile:APP.profile, studyState:APP.studyState, progress:APP.progress,
        theme:APP.theme, tier:APP.tier, streak:APP.streak,
        lastStudyDate:APP.lastStudyDate, totalStudyDays:APP.totalStudyDays,
        dailyGoal:APP.dailyGoal, todayModules:APP.todayModules,
        bookmarks:APP.bookmarks, weakTopics:APP.weakTopics,
        compareStates:APP.compareStates,
        updatedAt:firebase.firestore.FieldValue.serverTimestamp()
      },{ merge:true });
    } catch(e){ console.warn('Cloud sync failed:',e.message); }
  }
}

function loadState() {
  try {
    const raw=localStorage.getItem(`agentprep52_${APP.studyState}_v1`);
    if(raw){ const saved=JSON.parse(raw); APP={...APP,...saved}; }
  } catch(e){}
}

async function loadCloudProgress(uid) {
  if(!_fbReady||!_fbDb) return;
  try {
    const doc=await _fbDb.collection('users').doc(uid).get();
    if(doc.exists){ const data=doc.data(); APP={...APP,...data}; localStorage.setItem(`agentprep52_${APP.studyState}_v1`,JSON.stringify(APP)); }
  } catch(e){ console.warn('Cloud load failed:',e.message); }
}

// ─── AUTH ─────────────────────────────────────────────────────
async function signUpEmail(email,password,name) {
  if(!_fbReady){ showToast('Firebase not configured yet','error'); return false; }
  try {
    const cred=await _fbAuth.createUserWithEmailAndPassword(email,password);
    await cred.user.updateProfile({displayName:name});
    APP.profile.name=name; await saveState();
    showToast('Account created! Welcome to AgentPrep 52 🎉','success'); return true;
  } catch(e){ showToast(e.message,'error'); return false; }
}

async function signInEmail(email,password) {
  if(!_fbReady){
    APP.profile.setupDone=true; saveState(); render();
    showToast('Signed in locally (no Firebase)','info'); return true;
  }
  try { await _fbAuth.signInWithEmailAndPassword(email,password); showToast('Welcome back! Progress synced ☁️','success'); return true; }
  catch(e){ showToast(e.message,'error'); return false; }
}

async function signInGoogle() {
  if(!_fbReady){ showToast('Firebase not configured yet','error'); return; }
  try { await _fbAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); }
  catch(e){ showToast(e.message,'error'); }
}

async function signOut() {
  if(_fbReady&&_fbAuth) await _fbAuth.signOut();
  _fbUser=null; APP.profile.setupDone=false; saveState();
  navigate('dashboard'); showToast('Signed out','info');
}

function isLoggedIn() { return !!_fbUser||APP.profile.setupDone; }

// ─── STREAK ───────────────────────────────────────────────────
function updateStreakCheck() {
  if(!APP.lastStudyDate) return;
  const today=new Date().toDateString();
  const diffDays=Math.floor((new Date(today)-new Date(APP.lastStudyDate))/(1000*60*60*24));
  if(diffDays>1){ APP.streak=0; saveState(); }
}

function recordStudyActivity() {
  const today=new Date().toDateString();
  if(APP.lastStudyDate!==today){
    const yesterday=new Date(Date.now()-86400000).toDateString();
    APP.streak=APP.lastStudyDate===yesterday?APP.streak+1:1;
    APP.lastStudyDate=today; APP.todayModules=0; APP.totalStudyDays+=1;
  }
  APP.todayModules+=1; saveState();
}

// ─── PAYWALL ──────────────────────────────────────────────────
function showPaywall(reason) {
  const overlay=document.createElement('div');
  overlay.className='paywall-overlay';
  overlay.innerHTML=`
    <div class="paywall-modal">
      <button class="paywall-close" onclick="closePaywall()">✕</button>
      <div class="paywall-icon">⭐</div>
      <h2>Upgrade to Continue</h2>
      <p>${reason}</p>
      <div class="paywall-tiers">
        <div class="paywall-tier featured">
          <div class="tier-badge">⭐ Premium</div>
          <div class="tier-price">$14.99<span>/mo</span></div>
          <div class="tier-desc">All 52 states · Unlimited quizzes · AI Tutor · Analytics</div>
          <button class="btn-primary" onclick="goToPremium()">Get Premium →</button>
        </div>
        <div class="paywall-tier">
          <div class="tier-badge">🤖 AI Premium</div>
          <div class="tier-price">$24.99<span>/mo</span></div>
          <div class="tier-desc">Everything + Advanced AI · Custom exams · Voice tutor</div>
          <button class="btn-secondary" onclick="goToAIPremium()">Get AI Premium →</button>
        </div>
      </div>
      <button class="btn-ghost" style="margin-top:12px;width:100%" onclick="closePaywall()">Continue on Free Plan</button>
    </div>`;
  document.body.appendChild(overlay);
  setTimeout(()=>overlay.classList.add('open'),10);
}

function closePaywall() {
  const el=document.querySelector('.paywall-overlay');
  if(el){ el.classList.remove('open'); setTimeout(()=>el.remove(),300); }
}

function goToPremium() {
  if(window.STRIPE_CONFIG&&STRIPE_CONFIG.premiumMonthlyLink&&STRIPE_CONFIG.premiumMonthlyLink!=='PASTE_YOUR_PREMIUM_14.99_PAYMENT_LINK_HERE') {
    // Append success return URL so app knows to upgrade tier on return
    const returnUrl = encodeURIComponent(window.location.origin + window.location.pathname + '?tier=premium&paid=1');
    window.open(STRIPE_CONFIG.premiumMonthlyLink + '?success_url=' + returnUrl, '_blank');
  } else showToast('Add your Stripe payment link in firebase-config.js','error');
  closePaywall();
}

function goToAIPremium() {
  if(window.STRIPE_CONFIG&&STRIPE_CONFIG.aiPremiumMonthlyLink&&STRIPE_CONFIG.aiPremiumMonthlyLink!=='PASTE_YOUR_AI_PREMIUM_24.99_PAYMENT_LINK_HERE') {
    const returnUrl = encodeURIComponent(window.location.origin + window.location.pathname + '?tier=ai_premium&paid=1');
    window.open(STRIPE_CONFIG.aiPremiumMonthlyLink + '?success_url=' + returnUrl, '_blank');
  } else showToast('Add your Stripe payment link in firebase-config.js','error');
  closePaywall();
}

// ─── CORE HELPERS ─────────────────────────────────────────────
function getStorageKey() { return `agentprep52_${APP.studyState||'WA'}_v1`; }

function getCurriculum() {
  const getter=CURRICULUM_REGISTRY[APP.studyState];
  if(getter){ const c=getter(); if(c) return c; }
  const wag=CURRICULUM_REGISTRY['WA']; if(wag) return wag(); return null;
}

function getStateLabel(code) { const s=(typeof STATES_DATA!=='undefined')?STATES_DATA[code]:null; return s?s.name:code; }

function setStudyState(code) {
  if(!canAccessState(code)){ showPaywall(`${getStateLabel(code)} is only available on Premium. Upgrade to access all 52 states.`); return; }
  saveState(); APP.studyState=code; APP.activeView='dashboard'; APP.activeTrack=null;
  APP.activeModule=null; APP.quizState=null; APP.chatHistory=[]; APP.progress={};
  loadState(); APP.studyState=code; saveState(); render();
  showToast(`Switched to ${getStateLabel(code)} study mode`,'success');
}

function applyTheme(theme) {
  APP.theme=theme;
  document.documentElement.setAttribute('data-theme',theme==='light'?'light':'');
  const btn=document.getElementById('theme-toggle');
  if(btn) btn.textContent=theme==='light'?'🌙':'☀️';
}

function toggleTheme() { applyTheme(APP.theme==='dark'?'light':'dark'); saveState(); }

function navigate(view,opts={}) {
  APP.activeView=view;
  if(opts.track) APP.activeTrack=opts.track;
  if(opts.module) APP.activeModule=opts.module;
  document.querySelectorAll('.nav-item[data-view]').forEach(el=>{
    const v=el.dataset.view;
    el.classList.toggle('active',v===view||(view==='modules'&&v==='tracks')||(view==='lesson'&&v==='tracks')||
      (view==='quiz'&&v==='tracks')||(view==='results'&&v==='tracks')||(view==='state'&&v==='states')||(view==='compare'&&v==='compare'));
  });
  render();
}

// ─── RENDER ROUTER ────────────────────────────────────────────
function render() {
  const main=document.getElementById('main-content');
  if(!main) return;
  if(!isLoggedIn()){ renderAuth(main); return; }
  const CURRICULUM=getCurriculum();
  if(!CURRICULUM){
    main.innerHTML=`<div style="padding:60px;text-align:center;color:var(--text-2)"><div style="font-size:2.5rem;margin-bottom:16px">⚠️</div><h2 style="font-family:var(--font-d);font-weight:400">Curriculum not loaded</h2><p>The ${getStateLabel(APP.studyState)} curriculum file is missing.</p></div>`;
    return;
  }
  switch(APP.activeView){
    case 'dashboard': renderDashboard(main,CURRICULUM); break;
    case 'tracks':    renderTracks(main,CURRICULUM);    break;
    case 'modules':   renderModules(main,CURRICULUM);   break;
    case 'lesson':    renderLesson(main,CURRICULUM);    break;
    case 'quiz':      renderQuiz(main,CURRICULUM);      break;
    case 'results':   renderResults(main,CURRICULUM);   break;
    case 'chat':      renderChat(main);                 break;
    case 'progress':  renderProgress(main,CURRICULUM);  break;
    case 'roadmap':   renderRoadmap(main,CURRICULUM);   break;
    case 'states':    renderStates(main);               break;
    case 'state':     renderStateDetail(main);          break;
    case 'compare':   renderCompare(main);              break;
    case 'setup':     renderSetup(main,CURRICULUM);     break;
    case 'upgrade':   renderUpgrade(main);              break;
    case 'exam':      renderExamSimulator(main);        break;
    case 'custom':    renderCustomExamBuilder(main);    break;
    case 'terms':     renderTerms(main);                break;
    case 'privacy':   renderPrivacy(main);              break;
    case 'refund':    renderRefund(main);               break;
    default:          renderDashboard(main,CURRICULUM);
  }
}

// ─── AUTH VIEW ────────────────────────────────────────────────
function renderAuth(container) {
  container.innerHTML=`
  <div id="auth-screen">
    <div class="auth-bg"></div>
    <div class="auth-card">
      <div class="auth-logo"><div class="auth-logo-mark">A</div><div class="auth-logo-text">AgentPrep <span>52</span></div></div>
      <h2 class="auth-heading">Pass your real estate exam.</h2>
      <p class="auth-sub">All 52 U.S. jurisdictions · AI Tutor · 1,900+ practice questions</p>
      <div class="auth-tabs">
        <button class="auth-tab active" id="tab-signin" onclick="switchAuthTab('signin')">Sign In</button>
        <button class="auth-tab" id="tab-signup" onclick="switchAuthTab('signup')">Create Account</button>
      </div>
      <div id="auth-signin">
        <div class="form-group"><label>Email</label><input type="email" id="auth-email" class="form-input" placeholder="you@email.com"></div>
        <div class="form-group"><label>Password</label><input type="password" id="auth-password" class="form-input" placeholder="••••••••" onkeydown="if(event.key==='Enter')handleSignIn()"></div>
        <button class="btn-primary" style="width:100%;margin-bottom:12px" onclick="handleSignIn()">Sign In</button>
        ${_fbReady?`<div class="auth-or"><span>or</span></div><button class="btn-secondary" style="width:100%" onclick="signInGoogle()">G &nbsp; Continue with Google</button>`:''}
      </div>
      <div id="auth-signup" style="display:none">
        <div class="form-group"><label>Full Name</label><input type="text" id="auth-name" class="form-input" placeholder="Your Name"></div>
        <div class="form-group"><label>Email</label><input type="email" id="auth-email-up" class="form-input" placeholder="you@email.com"></div>
        <div class="form-group"><label>Password</label><input type="password" id="auth-password-up" class="form-input" placeholder="Min 6 characters" onkeydown="if(event.key==='Enter')handleSignUp()"></div>
        <button class="btn-primary" style="width:100%;margin-bottom:12px" onclick="handleSignUp()">Create Free Account</button>
        ${_fbReady?`<div class="auth-or"><span>or</span></div><button class="btn-secondary" style="width:100%" onclick="signInGoogle()">G &nbsp; Continue with Google</button>`:''}
      </div>
      ${!_fbReady?`<div class="auth-or"><span>or</span></div><button class="btn-ghost" style="width:100%" onclick="skipAuth()">Continue without account (local only)</button>`:''}
      <p class="auth-disclaimer">Free: 5 states · 10 questions/quiz &nbsp;|&nbsp; Premium $14.99/mo &nbsp;|&nbsp; AI Premium $24.99/mo</p>
    </div>
  </div>`;
}

function switchAuthTab(tab) {
  document.getElementById('auth-signin').style.display=tab==='signin'?'block':'none';
  document.getElementById('auth-signup').style.display=tab==='signup'?'block':'none';
  document.getElementById('tab-signin').classList.toggle('active',tab==='signin');
  document.getElementById('tab-signup').classList.toggle('active',tab==='signup');
}

async function handleSignIn() {
  const email=document.getElementById('auth-email')?.value.trim();
  const password=document.getElementById('auth-password')?.value;
  if(!email||!password){ showToast('Enter email and password','error'); return; }
  await signInEmail(email,password);
}

async function handleSignUp() {
  const name=document.getElementById('auth-name')?.value.trim();
  const email=document.getElementById('auth-email-up')?.value.trim();
  const password=document.getElementById('auth-password-up')?.value;
  if(!name||!email||!password){ showToast('Fill in all fields','error'); return; }
  if(password.length<6){ showToast('Password must be 6+ characters','error'); return; }
  await signUpEmail(email,password,name);
}

function skipAuth() { APP.profile.setupDone=true; APP.profile.name='Student'; saveState(); render(); }

// ─── STUDY HELPERS ────────────────────────────────────────────
function getProgress(moduleId) {
  if(!APP.progress[moduleId]) APP.progress[moduleId]={status:'new',bestScore:0,attempts:[],lastSeen:null};
  return APP.progress[moduleId];
}

function getStats(CURRICULUM) {
  const C=CURRICULUM||getCurriculum();
  if(!C) return{total:0,passed:0,totalAttempts:0,trackStats:{}};
  const allMods=getAllModules(C);
  const total=allMods.length;
  const passed=allMods.filter(m=>getProgress(m.id).status==='passed').length;
  const totalAttempts=Object.values(APP.progress).reduce((s,p)=>s+p.attempts.length,0);
  const trackStats={};
  Object.keys(C.tracks).forEach(tid=>{
    const mods=C.tracks[tid].modules;
    const scores=mods.map(m=>getProgress(m.id).bestScore).filter(s=>s>0);
    trackStats[tid]={total:mods.length,passed:mods.filter(m=>getProgress(m.id).status==='passed').length,avgScore:scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):0};
  });
  APP.weakTopics=allMods.filter(m=>getProgress(m.id).bestScore>0&&getProgress(m.id).bestScore<70).map(m=>m.id);
  return{total,passed,totalAttempts,trackStats};
}

function getAllModules(CURRICULUM) { const C=CURRICULUM||getCurriculum(); if(!C) return[]; return Object.values(C.tracks).flatMap(t=>t.modules); }
function getModuleById(id) { return getAllModules().find(m=>m.id===id); }
function getModuleTrack(moduleId) { const C=getCurriculum(); if(!C) return null; return Object.values(C.tracks).find(t=>t.modules.some(m=>m.id===moduleId)); }

// ─── QUIZ ENGINE ──────────────────────────────────────────────
function startQuiz(module) {
  let questions=[...module.quiz];
  if(!isPremium()&&TIERS.free.maxQuizQuestions) questions=questions.slice(0,TIERS.free.maxQuizQuestions);
  APP.quizState={moduleId:module.id,questions:shuffle(questions),answers:{},submitted:false,startTime:Date.now()};
  navigate('quiz',{module:module.id});
}

function submitQuiz() {
  const qs=APP.quizState; if(!qs) return;
  qs.submitted=true; qs.timeTaken=Math.round((Date.now()-qs.startTime)/1000);
  const correct=qs.questions.filter((q,i)=>qs.answers[i]===q.answer).length;
  const score=Math.round((correct/qs.questions.length)*100);
  const module=getModuleById(qs.moduleId);
  const passing=module?(module.passingScore||75):75;
  const passed=score>=passing;
  const prog=getProgress(qs.moduleId);
  prog.attempts.push({ts:new Date().toISOString(),score,correct,total:qs.questions.length});
  prog.bestScore=Math.max(prog.bestScore,score);
  prog.status=passed?'passed':'in_progress';
  prog.lastSeen=new Date().toISOString();
  qs.result={score,correct,total:qs.questions.length,passed,passing};
  recordStudyActivity(); saveState(); navigate('results');
}

function selectAnswer(qi,ci) {
  if(APP.quizState&&!APP.quizState.submitted){
    APP.quizState.answers[qi]=ci;
    renderQuiz(document.getElementById('main-content'));
    const next=APP.quizState.questions.findIndex((_,i)=>APP.quizState.answers[i]===undefined);
    if(next!==-1) setTimeout(()=>{ const el=document.getElementById(`q${next}`); if(el) el.scrollIntoView({behavior:'smooth',block:'center'}); },150);
  }
}

function shuffle(arr) { for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }
function openModule(id)  { const t=getModuleTrack(id); APP.activeTrack=t?t.id:APP.activeTrack; openLesson(id); }
function openLesson(id)  {
  // Enforce state access — free users cannot open lessons from locked states
  if(!canAccessState(APP.studyState)){ showPaywall(`${getStateLabel(APP.studyState)} is only available on Premium. Upgrade to access all 52 states.`); return; }
  APP.activeModule=id; const p=getProgress(id); if(p.status==='new') p.status='in_progress'; p.lastSeen=new Date().toISOString(); saveState(); navigate('lesson',{module:id});
}
function openQuiz(id)    {
  // Enforce state access before starting quiz
  if(!canAccessState(APP.studyState)){ showPaywall(`${getStateLabel(APP.studyState)} is only available on Premium.`); return; }
  const m=getModuleById(id); if(!m||!m.quiz||!m.quiz.length) return; APP.activeModule=id; startQuiz(m);
}
function retakeQuiz(id)  { openQuiz(id); }

function startRandomQuiz() {
  const all=getAllModules().filter(m=>m.quiz&&m.quiz.length>0);
  if(!all.length){ showToast('No quiz modules available','error'); return; }
  const pool=all.filter(m=>getProgress(m.id).status!=='passed');
  const src=pool.length?pool:all;
  const mod=src[Math.floor(Math.random()*src.length)];
  APP.activeTrack=getModuleTrack(mod.id)?.id; APP.activeModule=mod.id; startQuiz(mod);
}

function toggleBookmark(moduleId) {
  if(!Array.isArray(APP.bookmarks)) APP.bookmarks=[];
  const idx=APP.bookmarks.indexOf(moduleId);
  if(idx>-1){ APP.bookmarks.splice(idx,1); showToast('Bookmark removed','info'); }
  else{ APP.bookmarks.push(moduleId); showToast('Bookmarked ⭐','success'); }
  saveState();
}
function isBookmarked(moduleId) { return Array.isArray(APP.bookmarks) && APP.bookmarks.includes(moduleId); }

// ─── AI TUTOR ─────────────────────────────────────────────────
function buildTutorKnowledge() {
  const C=getCurriculum(); if(!C) return '';
  let kb='';
  Object.values(C.tracks).forEach(track=>{ kb+=`\n\n=== ${track.label} ===\n`; track.modules.forEach(mod=>{ kb+=`\nModule: ${mod.title}\nObjective: ${mod.objective}\n`; if(mod.content) mod.content.forEach(c=>{ kb+=`\n[${c.heading}]\n${c.body}\n`; }); }); });
  return kb;
}

async function sendChatMessage(userMessage) {
  if(!canUseAI()){ showPaywall('AI Tutor is a Premium feature. Upgrade to get unlimited AI tutoring.'); return; }
  if(!userMessage.trim()) return;
  APP.chatHistory.push({role:'user',content:userMessage,ts:Date.now()});
  renderChat(document.getElementById('main-content'));

  const C=getCurriculum(); const contextModule=APP.activeModule?getModuleById(APP.activeModule):null;
  const stats=getStats(C); const stateLabel=getStateLabel(APP.studyState);
  let stateRef='';
  if(typeof STATES_DATA!=='undefined'&&STATES_DATA[APP.studyState]){
    const s=STATES_DATA[APP.studyState];
    stateRef=`\n\n${stateLabel} Reference Data:\n`+Object.entries(s.licensing||{}).map(([k,v])=>`${k}: ${v}`).join('\n');
  }
  const tierNote=isAIPremium()?
    'This learner has AI Premium. Give advanced, deeply detailed explanations. Use analogies, memory mnemonics, and real-world scenarios. After answering, proactively offer to generate custom practice questions on the topic. Break down complex legal concepts step-by-step. Point out common exam traps and trick question patterns.':
    'Give clear, focused explanations. Be concise but complete.';
  const langNote = APP.language==='es' ? 'IMPORTANT: Respond entirely in Spanish (español). All explanations, questions, and feedback must be in Spanish.' : '';
  const systemPrompt=`You are a real estate and mortgage licensing tutor specializing in ${stateLabel} state laws and the national PSI/Pearson exam content. You are professional, encouraging, and deeply knowledgeable.\n\nLearner: ${APP.profile.name||'Student'}, target exam: ${APP.profile.targetExam||'TBD'}, study state: ${stateLabel}.\nProgress: ${stats.passed} modules passed out of ${stats.total} total.\n${contextModule?`Currently studying: ${contextModule.title}`:''}\n${tierNote}\n${langNote}\n\nCurriculum Knowledge:\n${buildTutorKnowledge()}\n${stateRef}\n\nBehavior rules:\n1. Be concise but thorough.\n2. Always connect answers to the exam context.\n3. When quizzing, create original questions.\n4. Cite relevant laws where applicable.\n5. Never provide legal advice.\n6. Keep responses scannable — use short paragraphs and bullets.\n7. Respond in plain text (use **bold** and bullets but no # headers).\n${APP.language==='es'?'8. Always respond in Spanish.':''}`;


  const chatHist=Array.isArray(APP.chatHistory)?APP.chatHistory:[];
  const messages=chatHist.filter(m=>m.role==='user'||m.role==='assistant').slice(-12).map(m=>({role:m.role,content:m.content}));

  try {
    const apiUrl=(window.ANTHROPIC_CONFIG&&ANTHROPIC_CONFIG.proxyUrl)?ANTHROPIC_CONFIG.proxyUrl:'https://api.anthropic.com/v1/messages';
    const headers={'Content-Type':'application/json'};
    if(!ANTHROPIC_CONFIG?.proxyUrl&&window.ANTHROPIC_CONFIG?.apiKey&&ANTHROPIC_CONFIG.apiKey!=='PASTE_YOUR_ANTHROPIC_API_KEY_HERE'){
      headers['x-api-key']=ANTHROPIC_CONFIG.apiKey;
      headers['anthropic-version']='2023-06-01';
      headers['anthropic-dangerous-direct-browser-access']='true';
    }
    const response=await fetch(apiUrl,{method:'POST',headers,body:JSON.stringify({model:ANTHROPIC_MODEL,max_tokens:1000,system:systemPrompt,messages})});
    const data=await response.json();
    if(data.error) throw new Error(data.error.message);
    const reply=data.content?.map(b=>b.text||'').join('')||'No response received.';
    APP.chatHistory.push({role:'assistant',content:reply,ts:Date.now()});
    if(APP.voiceEnabled && isAIPremium() && window.speechSynthesis) {
      const utter = new SpeechSynthesisUtterance(reply.replace(/\*\*/g,'').replace(/•/g,'').substring(0,600));
      utter.lang = APP.language==='es' ? 'es-US' : 'en-US';
      utter.rate = 0.95;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    }
  } catch(err){
    APP.chatHistory.push({role:'assistant',content:`⚠️ AI Tutor unavailable: ${err.message}. Check your API key in firebase-config.js.`,ts:Date.now()});
  }
  saveState(); renderChat(document.getElementById('main-content'));
}

// ─── DASHBOARD ────────────────────────────────────────────────
function renderDashboard(container,CURRICULUM) {
  const C=CURRICULUM||getCurriculum();
  const stats=getStats(C); const allMods=getAllModules(C);
  const nextMods=allMods.filter(m=>getProgress(m.id).status!=='passed').sort((a,b)=>(a.order||0)-(b.order||0)).slice(0,3);
  const completion=stats.total>0?Math.round((stats.passed/stats.total)*100):0;
  const stateLabel=getStateLabel(APP.studyState);
  const brokerTrack=C.tracks.broker;
  const feeRows=(brokerTrack.fees||[]).map(f=>`<div class="fee-row"><span>${f.item}</span><strong>${f.amount}</strong></div>`).join('');
  const streakEmoji=APP.streak>=7?'🔥':APP.streak>=3?'⚡':'📅';
  const dailyPct=Math.min(100,Math.round((APP.todayModules/APP.dailyGoal)*100));
  const weakTopics=Array.isArray(APP.weakTopics)?APP.weakTopics:[];
  const weakAlert=weakTopics.length>0?`<div class="weak-topics-alert" onclick="navigate('progress')">⚠️ ${weakTopics.length} topic${weakTopics.length>1?'s':''} need review — click to see them</div>`:'';

  container.innerHTML=`
  <div class="dashboard">
    <div class="dash-header">
      <div>
        <h1 class="dash-greeting">Good day${APP.profile.name?', '+APP.profile.name.split(' ')[0]:''}.</h1>
        <p class="dash-sub">
          <span class="study-state-badge" onclick="openStateModal('study')">${APP.studyState} ▾</span>
          ${stateLabel} · AgentPrep 52
          ${!isPremium()?`<span class="free-badge" onclick="navigate('upgrade')">Free · Upgrade ↗</span>`:`<span class="premium-badge">⭐ ${getTier().label}</span>`}
        </p>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="btn-ghost btn-sm" id="theme-toggle" onclick="toggleTheme()">${APP.theme==='light'?'🌙':'☀️'}</button>
        <button class="btn-ghost" onclick="navigate('setup')">⚙ Profile</button>
      </div>
    </div>
    ${weakAlert}
    <div class="streak-bar">
      <div class="streak-item"><span class="streak-icon">${streakEmoji}</span><span class="streak-num">${APP.streak}</span><span class="streak-label">Day Streak</span></div>
      <div class="streak-divider"></div>
      <div class="streak-item"><span class="streak-icon">🎯</span><span class="streak-num">${APP.todayModules}/${APP.dailyGoal}</span><span class="streak-label">Today's Goal</span></div>
      <div class="streak-progress-wrap"><div class="streak-progress-bar"><div class="streak-progress-fill" style="width:${dailyPct}%"></div></div><span class="streak-pct">${dailyPct}%</span></div>
      <div class="streak-divider"></div>
      <div class="streak-item"><span class="streak-icon">📆</span><span class="streak-num">${APP.totalStudyDays}</span><span class="streak-label">Total Days</span></div>
    </div>
    <div class="stats-row">
      <div class="stat-card"><div class="stat-num">${stats.passed}</div><div class="stat-label">Modules Passed</div></div>
      <div class="stat-card"><div class="stat-num">${stats.total}</div><div class="stat-label">Total Modules</div></div>
      <div class="stat-card"><div class="stat-num">${stats.totalAttempts}</div><div class="stat-label">Quiz Attempts</div></div>
      <div class="stat-card accent"><div class="stat-num">${completion}%</div><div class="stat-label">Completion</div></div>
    </div>
    <div class="track-overview-row">
      ${Object.entries(C.tracks).map(([tid,track])=>{
        const ts=stats.trackStats[tid]||{passed:0,total:0,avgScore:0};
        const pct=ts.total>0?Math.round((ts.passed/ts.total)*100):0;
        return`<div class="track-card" onclick="navigate('modules',{track:'${tid}'})"><div class="track-card-icon">${track.icon}</div><div class="track-card-title">${track.label}</div><div class="track-card-desc">${track.description}</div><div class="track-progress-bar"><div class="track-progress-fill" style="width:${pct}%;background:${track.color}"></div></div><div class="track-progress-text">${ts.passed}/${ts.total} passed · avg ${ts.avgScore}%</div></div>`;
      }).join('')}
    </div>
    <div class="dash-two-col">
      <div class="dash-section">
        <div class="section-title">▸ Continue Studying</div>
        ${nextMods.length===0?'<p class="muted" style="padding:8px 0">All modules complete! 🎉</p>':
          nextMods.map(m=>{ const p=getProgress(m.id); return`<div class="module-row" onclick="openModule('${m.id}')"><span class="module-row-icon">${m.icon}</span><div class="module-row-body"><div class="module-row-title">${m.title}</div><div class="module-row-meta">${getModuleTrack(m.id)?.label||''} · Week ${m.week} · <span class="status-${p.status}">${p.status.replace('_',' ')}</span></div></div>${isBookmarked(m.id)?'<span style="color:var(--gold)">⭐</span>':''}<span class="module-row-arrow">→</span></div>`; }).join('')}
      </div>
      <div class="dash-section">
        <div class="section-title">▸ Quick Actions</div>
        <div class="quick-actions">
          <button class="qa-btn" onclick="${canUseAI()?"navigate('chat')":`showPaywall('AI Tutor requires Premium')`}"><span class="qa-icon">🤖</span><span>AI Tutor${!canUseAI()?' 🔒':''}</span></button>
          <button class="qa-btn" onclick="startRandomQuiz()"><span class="qa-icon">⚡</span><span>Random Quiz</span></button>
          <button class="qa-btn" onclick="navigate('states')"><span class="qa-icon">🗺</span><span>52 States</span></button>
          <button class="qa-btn" onclick="openStateModal('study')"><span class="qa-icon">📍</span><span>Change State</span></button>
        </div>
        ${!isPremium()?`<div class="upgrade-nudge" onclick="navigate('upgrade')"><div style="font-weight:600;margin-bottom:4px">⭐ Upgrade to Premium</div><div style="font-size:0.85rem;color:var(--text-2)">Unlock all 52 states, unlimited quizzes, AI Tutor</div><div style="color:var(--gold);font-weight:600;margin-top:6px">$14.99/month →</div></div>`:`<div class="fee-summary"><h4 style="margin-bottom:8px">Minimum Fees — ${stateLabel}</h4>${feeRows}</div>`}
      </div>
    </div>
  </div>`;
}

// ─── UPGRADE PAGE ─────────────────────────────────────────────
function renderUpgrade(container) {
  container.innerHTML=`
  <div class="upgrade-view">
    <h2>${t('upgrade_title')}</h2>
    <p class="view-sub">${t('upgrade_sub')}</p>
    <div class="pricing-grid">
      <div class="pricing-card ${APP.tier==='free'?'current':''}">
        <div class="pricing-tier-name">${APP.language==='es'?'Gratis':'Free'}</div>
        <div class="pricing-price">$0<span>/mo</span></div>
        <div class="pricing-features">
          <div class="pf-item">✓ ${APP.language==='es'?'5 estados (CA, TX, FL, NY, WA)':'5 states (CA, TX, FL, NY, WA)'}</div>
          <div class="pf-item">✓ ${APP.language==='es'?'10 preguntas por quiz':'10 practice questions per quiz'}</div>
          <div class="pf-item">✓ ${APP.language==='es'?'Seguimiento de progreso básico':'Basic progress tracking'}</div>
          <div class="pf-item muted">✗ ${APP.language==='es'?'Tutor IA':'AI Tutor'}</div>
          <div class="pf-item muted">✗ ${APP.language==='es'?'Simulador de examen':'Exam simulator'}</div>
          <div class="pf-item muted">✗ ${APP.language==='es'?'Los 52 estados':'All 52 states'}</div>
        </div>
        ${APP.tier==='free'?`<div class="current-plan-badge">${t('upgrade_current')}</div>`:`<button class="btn-ghost" style="width:100%" onclick="navigate('dashboard')">${t('upgrade_continue_free')}</button>`}
      </div>
      <div class="pricing-card featured ${APP.tier==='premium'?'current':''}">
        <div class="pricing-popular">${t('upgrade_popular')}</div>
        <div class="pricing-tier-name">⭐ Premium</div>
        <div class="pricing-price">$14.99<span>/mo</span></div>
        <div class="pricing-features">
          <div class="pf-item">✓ ${APP.language==='es'?'Los 52 estados + DC + Puerto Rico':'All 52 states + DC + Puerto Rico'}</div>
          <div class="pf-item">✓ ${APP.language==='es'?'Quizzes ilimitados':'Unlimited quizzes'}</div>
          <div class="pf-item">✓ ${APP.language==='es'?'Tutor IA':'AI Tutor'}</div>
          <div class="pf-item">✓ ${APP.language==='es'?'Análisis de progreso':'Progress analytics'}</div>
          <div class="pf-item">✓ ${APP.language==='es'?'Sincronización en la nube':'Cloud sync (any device)'}</div>
          <div class="pf-item muted">✗ ${APP.language==='es'?'Simulador de examen (IA Premium)':'Exam simulator (AI Premium only)'}</div>
        </div>
        ${APP.tier==='premium'?`<div class="current-plan-badge">${t('upgrade_current')}</div>`:`<button class="btn-primary" style="width:100%" onclick="goToPremium()">${t('upgrade_get_premium')}</button>`}
      </div>
      <div class="pricing-card ${APP.tier==='ai_premium'?'current':''}">
        <div class="pricing-tier-name">🤖 AI Premium</div>
        <div class="pricing-price">$24.99<span>/mo</span></div>
        <div class="pricing-features">
          <div class="pf-item">✓ ${APP.language==='es'?'Todo en Premium':'Everything in Premium'}</div>
          <div class="pf-item">✓ ${APP.language==='es'?'Explicaciones IA avanzadas':'Advanced AI explanations'}</div>
          <div class="pf-item">✓ ${APP.language==='es'?'Simulador de examen (150 preguntas)':'Exam simulator (150 questions)'}</div>
          <div class="pf-item">✓ ${APP.language==='es'?'Constructor de examen personalizado':'Custom practice exam builder'}</div>
          <div class="pf-item">✓ ${APP.language==='es'?'Tutor de voz (IA lee respuestas)':'Voice tutor (AI reads answers aloud)'}</div>
          <div class="pf-item">✓ ${APP.language==='es'?'Soporte en inglés y español':'English & Spanish support'}</div>
        </div>
        ${APP.tier==='ai_premium'?`<div class="current-plan-badge">${t('upgrade_current')}</div>`:`<button class="btn-secondary" style="width:100%" onclick="goToAIPremium()">${t('upgrade_get_ai')}</button>`}
      </div>
    </div>
    <p style="text-align:center;color:var(--text-3);font-size:0.85rem;margin-top:24px">${t('upgrade_cancel')}</p>
    <div style="text-align:center;margin-top:16px">
      <p style="color:var(--text-3);font-size:0.8rem">${APP.language==='es'?'¿Probando? Establece tu nivel:':'Testing? Manually set your tier:'}</p>
      <div style="display:flex;gap:8px;justify-content:center;margin-top:6px;flex-wrap:wrap">
        <button class="btn-ghost btn-sm" onclick="setTierManual('free')">${APP.language==='es'?'Probar Gratis':'Test Free'}</button>
        <button class="btn-ghost btn-sm" onclick="setTierManual('premium')">${APP.language==='es'?'Probar Premium':'Test Premium'}</button>
        <button class="btn-ghost btn-sm" onclick="setTierManual('ai_premium')">${APP.language==='es'?'Probar IA Premium':'Test AI Premium'}</button>
      </div>
    </div>
  </div>`;
}

function setTierManual(tier) { APP.tier=tier; saveState(); showToast(`${t('toast_tier_set')} ${TIERS[tier].label} (test mode)`,'success'); navigate('dashboard'); }

// ─── TRACKS ───────────────────────────────────────────────────
function renderTracks(container,CURRICULUM) {
  const C=CURRICULUM||getCurriculum();
  container.innerHTML=`
  <div class="tracks-view">
    <h2>Licensing Tracks — ${getStateLabel(APP.studyState)}</h2>
    <p class="view-sub">Choose a track to view its modules, requirements, and exam structure.</p>
    <div class="track-grid">
      ${Object.entries(C.tracks).map(([tid,track])=>{
        const ts=getStats(C).trackStats[tid]||{total:0,passed:0,avgScore:0};
        return`<div class="track-big-card" onclick="navigate('modules',{track:'${tid}'})" style="--track-color:${track.color}"><div class="track-big-icon">${track.icon}</div><h3>${track.label}</h3><p>${track.description}</p><div class="track-big-stats"><span>${ts.total} modules</span><span>${ts.passed} passed</span>${ts.avgScore>0?`<span>Avg ${ts.avgScore}%</span>`:''}</div><div class="track-big-bar"><div style="width:${ts.total>0?Math.round((ts.passed/ts.total)*100):0}%;background:${track.color};height:100%;border-radius:4px;transition:.6s"></div></div></div>`;
      }).join('')}
    </div>
  </div>`;
}

// ─── MODULES ──────────────────────────────────────────────────
function renderModules(container,CURRICULUM) {
  const C=CURRICULUM||getCurriculum();
  const track=APP.activeTrack?C.tracks[APP.activeTrack]:null;
  if(!track){ renderTracks(container,C); return; }
  container.innerHTML=`
  <div class="modules-view">
    <div class="view-header">
      <button class="btn-back" onclick="navigate('tracks')">← Tracks</button>
      <div class="view-title-block"><span class="view-icon">${track.icon}</span><div><h2>${track.label}</h2><p class="view-sub">${track.description}</p></div></div>
    </div>
    <div class="requirements-panel">
      <h4>Requirements &amp; Fees</h4>
      <div class="req-two-col">
        <div>${(track.requirements||[]).map(r=>`<div class="req-item">✓ ${r}</div>`).join('')}</div>
        <div>${(track.fees||[]).map(f=>`<div class="fee-item"><span>${f.item}</span><strong style="color:${track.color}">${f.amount}</strong>${f.note?`<small>${f.note}</small>`:''}</div>`).join('')}</div>
      </div>
    </div>
    <div class="module-grid">
      ${track.modules.map(m=>{
        const prog=getProgress(m.id); const bookmarked=isBookmarked(m.id);
        return`<div class="module-card status-card-${prog.status}">
          <div class="module-card-top"><span class="module-icon">${m.icon}</span><div style="display:flex;gap:8px;align-items:center"><div class="module-status-badge ${prog.status}">${prog.status==='passed'?'✓ Passed':prog.status==='in_progress'?'◑ In Progress':'○ New'}</div><button class="bookmark-btn ${bookmarked?'active':''}" onclick="event.stopPropagation();toggleBookmark('${m.id}')">${bookmarked?'⭐':'☆'}</button></div></div>
          <div class="module-card-title">${m.title}</div>
          <div class="module-card-obj">${m.objective}</div>
          <div class="module-card-meta"><span>Week ${m.week}</span><span>Pass: ${m.passingScore}%</span>${prog.bestScore>0?`<span class="best-score" style="color:${track.color}">Best: ${prog.bestScore}%</span>`:''}${APP.weakTopics.includes(m.id)?'<span style="color:var(--red)">⚠ Review</span>':''}</div>
          <div class="module-card-actions"><button class="btn-lesson" onclick="openLesson('${m.id}')">Open Lesson</button><button class="btn-quiz ${!m.quiz||!m.quiz.length?'disabled':''}" onclick="${m.quiz&&m.quiz.length?`openQuiz('${m.id}')`:''}"> ${m.quiz&&m.quiz.length?(isPremium()?`Quiz (${m.quiz.length}Q)`:`Quiz (${m.quiz.length>10?'10':m.quiz.length}Q)${m.quiz.length>10?' 🔒':''}`):'No Quiz'}</button></div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

// ─── LESSON ───────────────────────────────────────────────────
function renderLesson(container,CURRICULUM) {
  const C=CURRICULUM||getCurriculum();
  const module=APP.activeModule?getModuleById(APP.activeModule):null;
  if(!module){ navigate('tracks'); return; }
  const track=getModuleTrack(module.id); const prog=getProgress(module.id);
  if(prog.status==='new'){ prog.status='in_progress'; saveState(); }
  const allMods=track?track.modules:[];
  const idx=allMods.findIndex(m=>m.id===module.id);
  const prev=idx>0?allMods[idx-1]:null; const next=idx<allMods.length-1?allMods[idx+1]:null;
  const color=track?track.color:'var(--gold)';
  let content=module.content||[]; let lockedContent=false;
  if(!isPremium()&&TIERS.free.maxLessonsPerModule&&content.length>TIERS.free.maxLessonsPerModule){
    lockedContent=true; content=content.slice(0,TIERS.free.maxLessonsPerModule);
  }
  container.innerHTML=`
  <div class="lesson-view">
    <div class="lesson-header">
      <button class="btn-back" onclick="navigate('modules',{track:'${track?track.id:''}'})">← ${track?track.label:'Back'}</button>
      <div class="lesson-nav-btns">
        ${prev?`<button class="btn-ghost" onclick="openLesson('${prev.id}')">← Prev</button>`:''}
        ${next?`<button class="btn-ghost" onclick="openLesson('${next.id}')">Next →</button>`:''}
        <button class="bookmark-btn ${isBookmarked(module.id)?'active':''}" onclick="toggleBookmark('${module.id}')">${isBookmarked(module.id)?'⭐':'☆'}</button>
      </div>
    </div>
    <div class="lesson-hero" style="--track-color:${color}">
      <span class="lesson-hero-icon">${module.icon}</span>
      <div><div class="lesson-week">Week ${module.week}</div><h1>${module.title}</h1><p class="lesson-objective">${module.objective}</p></div>
    </div>
    <div class="lesson-body">
      ${content.map((s,i)=>`<div class="lesson-section" style="animation-delay:${i*0.07}s"><div class="lesson-section-title" style="color:${color}">${s.heading}</div><div class="lesson-section-body">${formatBody(s.body)}</div></div>`).join('')}
      ${lockedContent?`<div class="content-locked-banner" onclick="navigate('upgrade')">🔒 ${(module.content.length-TIERS.free.maxLessonsPerModule)} more sections locked · Upgrade to Premium to unlock all content</div>`:''}
    </div>
    <div class="lesson-footer">
      ${module.quiz&&module.quiz.length?`<button class="btn-primary" style="background:${color}" onclick="openQuiz('${module.id}')">Take Quiz (${!isPremium()&&module.quiz.length>10?'10':module.quiz.length}Q) →</button>`:'<span class="muted">No quiz for this module</span>'}
      <button class="btn-ghost" onclick="sendMessage('Help me understand: ${module.title.replace(/'/g,"\\'")}')">Ask AI Tutor${!canUseAI()?' 🔒':''}</button>
    </div>
    <div class="legal-disclaimer">⚠️ <strong>Educational use only.</strong> This content is for exam preparation and does not constitute legal advice. Real estate laws change — always verify current requirements with your state's official licensing board before making licensing decisions. <span class="disclaimer-link" onclick="navigate('terms')">Terms</span> · <span class="disclaimer-link" onclick="navigate('privacy')">Privacy</span></div>
  </div>`;
}

function formatBody(text) {
  if(!text) return '';
  return text.split('\n').map(line=>{
    if(line.startsWith('•')) return`<div class="body-bullet">${line.substring(1).trim()}</div>`;
    if(line.match(/^\d+\./)) return`<div class="body-numbered">${line}</div>`;
    if(line==='') return'<div class="body-spacer"></div>';
    return`<p>${line}</p>`;
  }).join('');
}

// ─── QUIZ ─────────────────────────────────────────────────────
function renderQuiz(container,CURRICULUM) {
  const qs=APP.quizState; if(!qs){ navigate('tracks'); return; }
  if(!container) container=document.getElementById('main-content');
  const module=getModuleById(qs.moduleId); const track=getModuleTrack(qs.moduleId);
  const answered=Object.keys(qs.answers).length; const total=qs.questions.length;
  const color=track?track.color:'var(--gold)';
  container.innerHTML=`
  <div class="quiz-view">
    <div class="quiz-header">
      <button class="btn-back" onclick="navigate('lesson',{module:'${qs.moduleId}'})">← Lesson</button>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(answered/total)*100}%;background:${color}"></div></div>
      <span class="quiz-counter">${answered}/${total}</span>
    </div>
    <div class="quiz-title-block">
      <h2>${module?module.icon+' '+module.title:'Quiz'}</h2>
      <p class="quiz-pass-note">Passing score: ${module?module.passingScore:75}%${!isPremium()&&module?.quiz?.length>10?' · Free tier: 10 questions':''}</p>
    </div>
    <div class="questions-list">
      ${qs.questions.map((q,qi)=>{
        const ua=qs.answers[qi]; const correct=ua!==undefined&&ua===q.answer;
        return`<div class="question-card ${qs.submitted?(correct?'correct':'incorrect'):''}" id="q${qi}">
          <div class="q-number">Q${qi+1} of ${total}</div>
          <div class="q-prompt">${q.prompt}</div>
          <div class="q-choices">
            ${q.choices.map((choice,ci)=>{
              let cls='choice';
              if(qs.submitted){ if(ci===q.answer) cls+=' correct-answer'; else if(ci===ua&&!correct) cls+=' wrong-answer'; }
              else if(ci===ua) cls+=' selected';
              return`<div class="${cls}" onclick="${qs.submitted?'':` selectAnswer(${qi},${ci})`}"><span class="choice-letter">${'ABCD'[ci]}</span><span class="choice-text">${choice}</span></div>`;
            }).join('')}
          </div>
          ${qs.submitted?`<div class="q-explanation ${correct?'exp-correct':'exp-incorrect'}"><strong>${correct?'✓ Correct':'✗ Incorrect'}</strong> — ${q.explanation}</div>`:''}
        </div>`;
      }).join('')}
    </div>
    ${!qs.submitted?`<div class="quiz-submit-area"><button class="btn-primary btn-lg" onclick="submitQuiz()" ${answered<total?'disabled':''}>${answered<total?`Answer All Questions (${total-answered} remaining)`:'Submit Quiz →'}</button></div>`:`<div class="quiz-submitted-nav"><button class="btn-primary" onclick="navigate('results')">View Results →</button></div>`}
  </div>`;
}

// ─── RESULTS ──────────────────────────────────────────────────
function renderResults(container,CURRICULUM) {
  const qs=APP.quizState; if(!qs||!qs.result){ navigate('dashboard'); return; }
  if(!container) container=document.getElementById('main-content');
  const{score,correct,total,passed,passing}=qs.result;
  const module=getModuleById(qs.moduleId); const track=getModuleTrack(qs.moduleId);
  const mins=Math.floor((qs.timeTaken||0)/60); const secs=(qs.timeTaken||0)%60;
  container.innerHTML=`
  <div class="results-view">
    <div class="results-hero ${passed?'pass':'fail'}">
      <div class="results-score-ring">
        <div style="font-family:var(--font-d);font-size:2rem;position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column">
          <span style="color:${passed?'var(--green)':'var(--red)'}">${score}%</span>
          <span style="font-size:0.65rem;color:var(--text-3);letter-spacing:0.1em">${passed?'PASSED':'FAILED'}</span>
        </div>
        <svg class="ring-svg" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="var(--bg-4)" stroke-width="8"/>
          <circle cx="60" cy="60" r="52" fill="none" stroke="${passed?'var(--green)':'var(--red)'}" stroke-width="8" stroke-dasharray="${2*Math.PI*52}" stroke-dashoffset="${2*Math.PI*52*(1-score/100)}" stroke-linecap="round" style="transition:stroke-dashoffset 1s ease"/>
        </svg>
      </div>
      <div class="results-summary">
        <h2>${module?module.icon+' '+module.title:'Quiz Results'}</h2>
        <div class="results-meta"><span>${correct}/${total} correct</span><span>Pass: ${passing}%</span><span>Time: ${mins}m ${secs}s</span>${APP.streak>1?`<span>🔥 ${APP.streak} day streak</span>`:''}</div>
        <div class="results-msg">${passed?'🎉 Excellent work! Module marked as passed.':` 📚 Keep going! You need ${passing-score}% more to pass.`}</div>
      </div>
    </div>
    <div class="results-actions">
      <button class="btn-primary" onclick="navigate('lesson',{module:'${qs.moduleId}'})">← Back to Lesson</button>
      <button class="btn-secondary" onclick="retakeQuiz('${qs.moduleId}')">Retake Quiz</button>
      <button class="btn-ghost" onclick="navigate('progress')">View Progress</button>
      ${canUseAI()?`<button class="btn-ghost" onclick="sendMessage('I just scored ${score}% on ${module?.title}. Help me review what I got wrong.')">Ask AI Tutor</button>`:''}
    </div>
    <div class="results-review">
      <div class="section-title">▸ Question Review</div>
      ${qs.questions.map((q,qi)=>{ const ua=qs.answers[qi]; const cor=ua===q.answer; return`<div class="review-item ${cor?'rev-correct':'rev-incorrect'}"><div class="rev-header"><span class="rev-num">Q${qi+1}</span><span class="rev-status">${cor?'✓':'✗'}</span></div><div class="rev-prompt">${q.prompt}</div><div class="rev-answer">${!cor?`<div class="rev-wrong">Your answer: ${q.choices[ua]??'—'}</div>`:''}<div class="rev-correct-ans">Correct: ${q.choices[q.answer]}</div></div><div class="rev-explanation">${q.explanation}</div></div>`; }).join('')}
    </div>
    <div class="legal-disclaimer">⚠️ <strong>Educational use only.</strong> Quiz questions are AI-generated for practice. They may not reflect the exact wording of official exam questions. Always study official state materials. <span class="disclaimer-link" onclick="navigate('terms')">Terms</span> · <span class="disclaimer-link" onclick="navigate('refund')">Refund Policy</span></div>
  </div>`;
}

// ─── CHAT ─────────────────────────────────────────────────────
function renderChat(container) {
  if(!container) container=document.getElementById('main-content');
  if(!canUseAI()){
    container.innerHTML=`<div style="padding:60px;text-align:center"><div style="font-size:3rem;margin-bottom:16px">🤖</div><h2 style="font-family:var(--font-d);font-weight:400;margin-bottom:8px">AI Tutor — Premium Feature</h2><p style="color:var(--text-2);margin-bottom:24px">Upgrade to Premium to get unlimited AI tutoring powered by Claude.</p><button class="btn-primary" onclick="navigate('upgrade')">Upgrade to Premium — $14.99/mo →</button></div>`;
    return;
  }
  const stateLabel=getStateLabel(APP.studyState);
  const starters = APP.language==='es' ?
    [`Explica las reglas de agencia dual en ${stateLabel}`,'Hazme un quiz sobre violaciones de RESPA Sección 8','Explica el proceso de divulgación TRID',`¿Cuáles son las leyes inmobiliarias únicas de ${stateLabel}?`,`Compara los requisitos de ${APP.studyState} y TX`] :
    [`Explain dual agency rules in ${stateLabel}`,'Quiz me on RESPA Section 8 violations','Walk me through the TRID disclosure timeline',`What are the unique real estate laws in ${stateLabel}?`,`Compare ${APP.studyState} and TX licensing requirements`];
  container.innerHTML=`
  <div class="chat-view">
    <div class="chat-header">
      <div class="chat-header-info"><div class="tutor-avatar">AI</div><div><h3>${t('chat_title')}${isAIPremium()?' 🤖 '+t('chat_advanced'):''}</h3><p class="chat-sub">${stateLabel} Broker · MLO · 52-State Reference</p></div></div>
      <div style="display:flex;gap:8px;align-items:center">
        ${isAIPremium()?`<button class="btn-ghost btn-sm" id="voice-btn" onclick="toggleVoice()">${APP.voiceEnabled?t('chat_voice_on'):t('chat_voice_off')}</button>`:''}
        <button class="btn-ghost btn-sm" onclick="clearChat()">${t('chat_clear')}</button>
      </div>
    </div>
    <div class="chat-messages" id="chat-messages">
      ${(()=>{const _ch=Array.isArray(APP.chatHistory)?APP.chatHistory:[]; if(_ch.length===0) return `<div class="chat-welcome"><div class="welcome-icon">🎓</div><h3>${t('chat_welcome_title')}</h3><p>${APP.language==='es'?`Pregúntame sobre licencias de ${stateLabel}, requisitos MLO o las leyes de cualquier estado.`:`Ask me anything about ${stateLabel} licensing, MLO requirements, or any state's real estate laws.`}</p><div class="chat-starters">${starters.map(s=>`<button class="chat-starter" onclick="sendMessage('${s.replace(/'/g,"\\'")}') ">${s}</button>`).join('')}</div></div>`; return _ch.map(msg=>`<div class="chat-msg ${msg.role}"><div class="msg-avatar">${msg.role==='user'?'👤':'AI'}</div><div class="msg-bubble"><div class="msg-content">${formatChatMsg(msg.content)}</div><div class="msg-time">${msg.role==='user'?t('chat_you'):t('chat_ai')} · ${new Date(msg.ts).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</div></div></div>`).join(''); })()}
      ${(()=>{const _ch2=Array.isArray(APP.chatHistory)?APP.chatHistory:[]; return (_ch2.length>0&&_ch2[_ch2.length-1].role==='user')?`<div class="chat-msg assistant"><div class="msg-avatar">AI</div><div class="msg-bubble"><div class="msg-content"><div class="typing-indicator"><span></span><span></span><span></span></div></div></div></div>`:''; })()}
    </div>
    <div class="chat-input-area">
      <textarea id="chat-input" class="chat-textarea" rows="2" placeholder="${t('chat_placeholder')}" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();handleSendClick()}"></textarea>
      <button class="btn-send" onclick="handleSendClick()">${t('chat_send')}</button>
    </div>
  </div>`;
  setTimeout(()=>{ const msgs=document.getElementById('chat-messages'); if(msgs) msgs.scrollTop=msgs.scrollHeight; if(APP._prefill){ const inp=document.getElementById('chat-input'); if(inp) inp.value=APP._prefill; APP._prefill=null; } },40);
}

function formatChatMsg(text) { return escHtml(text).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\n• /g,'<br>• ').replace(/\n/g,'<br>'); }
function handleSendClick() { const inp=document.getElementById('chat-input'); if(!inp) return; const msg=inp.value.trim(); if(!msg) return; inp.value=''; sendMessage(msg); }
function sendMessage(msg) { if(APP.activeView!=='chat') navigate('chat'); sendChatMessage(msg); }
function toggleVoice() {
  APP.voiceEnabled = !APP.voiceEnabled;
  if (!APP.voiceEnabled && window.speechSynthesis) window.speechSynthesis.cancel();
  saveState();
  const btn = document.getElementById('voice-btn');
  if (btn) btn.textContent = APP.voiceEnabled ? t('chat_voice_on') : t('chat_voice_off');
  showToast(APP.voiceEnabled ? (APP.language==='es'?'Voz activada':'Voice enabled') : (APP.language==='es'?'Voz desactivada':'Voice disabled'), 'info');
}

// ─── EXAM SIMULATOR ──────────────────────────────────────────
function renderExamSimulator(container) {
  if (!isAIPremium()) {
    container.innerHTML=`<div style="padding:60px;text-align:center"><div style="font-size:3rem;margin-bottom:16px">📝</div><h2 style="font-family:var(--font-d);font-weight:400;margin-bottom:8px">${t('exam_title')}</h2><p style="color:var(--text-2);margin-bottom:24px">${t('exam_locked')}</p><button class="btn-primary" onclick="navigate('upgrade')">${t('upgrade_btn')}</button></div>`;
    return;
  }
  const es = APP.examState;
  if (!es || es.phase === 'start') {
    renderExamStart(container);
  } else if (es.phase === 'loading') {
    renderExamLoading(container);
  } else if (es.phase === 'active') {
    renderExamActive(container);
  } else if (es.phase === 'done') {
    renderExamResults(container);
  }
}

function renderExamStart(container) {
  const stateLabel = getStateLabel(APP.studyState);
  container.innerHTML=`
  <div style="padding:40px;max-width:640px;margin:0 auto">
    <div style="text-align:center;margin-bottom:32px">
      <div style="font-size:3rem;margin-bottom:12px">📝</div>
      <h2 style="font-family:var(--font-d);font-weight:400;margin-bottom:8px">${t('exam_title')}</h2>
      <p style="color:var(--text-2)">${t('exam_sub')}</p>
    </div>
    <div style="background:var(--surface-2);border-radius:12px;padding:24px;margin-bottom:24px">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;text-align:center">
        <div><div style="font-size:1.8rem;font-weight:700;color:var(--gold)">150</div><div style="font-size:0.8rem;color:var(--text-2)">${APP.language==='es'?'Preguntas':'Questions'}</div></div>
        <div><div style="font-size:1.8rem;font-weight:700;color:var(--gold)">3.5h</div><div style="font-size:0.8rem;color:var(--text-2)">${APP.language==='es'?'Tiempo Límite':'Time Limit'}</div></div>
        <div><div style="font-size:1.8rem;font-weight:700;color:var(--gold)">75%</div><div style="font-size:0.8rem;color:var(--text-2)">${APP.language==='es'?'Para Aprobar':'To Pass'}</div></div>
      </div>
    </div>
    <div style="background:var(--surface-2);border-radius:12px;padding:20px;margin-bottom:24px">
      <div style="font-weight:600;margin-bottom:12px">${APP.language==='es'?'Estado y Tipo de Examen':'Exam State & Type'}</div>
      <div style="font-size:0.9rem;color:var(--text-2)">${APP.language==='es'?'Estado actual:':'Current state:'} <strong style="color:var(--text-1)">${stateLabel}</strong></div>
      <div style="font-size:0.85rem;color:var(--text-3);margin-top:8px">${APP.language==='es'?'Las preguntas cubrirán: ley de propiedad, contratos, agencia, ley federal y leyes específicas de '+stateLabel+'.':'Questions will cover: property law, contracts, agency, federal law, and '+stateLabel+'-specific rules.'}</div>
    </div>
    <div style="display:flex;gap:12px;justify-content:center">
      <button class="btn-primary btn-lg" onclick="startExamSimulator()">${t('exam_start')}</button>
      <button class="btn-ghost" onclick="navigate('dashboard')">${APP.language==='es'?'Cancelar':'Cancel'}</button>
    </div>
  </div>`;
}

function renderExamLoading(container) {
  container.innerHTML=`
  <div style="padding:60px;text-align:center">
    <div style="font-size:3rem;margin-bottom:16px">⏳</div>
    <h3 style="font-family:var(--font-d);font-weight:400;margin-bottom:8px">${t('exam_generating')}</h3>
    <p style="color:var(--text-2);margin-bottom:24px">${APP.language==='es'?'Esto toma 20-30 segundos. La IA está creando 150 preguntas únicas para '+getStateLabel(APP.studyState)+'.':'This takes 20-30 seconds. AI is creating 150 unique questions for '+getStateLabel(APP.studyState)+'.'}</p>
    <div class="typing-indicator" style="justify-content:center"><span></span><span></span><span></span></div>
  </div>`;
}

function renderExamActive(container) {
  const es = APP.examState;
  if (!es || !es.questions) return;
  const current = es.currentQ || 0;
  const q = es.questions[current];
  const elapsed = Math.floor((Date.now() - es.startTime) / 1000);
  const totalSec = 3.5 * 3600;
  const remaining = Math.max(0, totalSec - elapsed);
  const hh = Math.floor(remaining/3600);
  const mm = Math.floor((remaining%3600)/60);
  const ss = remaining % 60;
  const timeStr = `${hh}:${String(mm).padStart(2,'0')}:${String(ss).padStart(2,'0')}`;
  const answered = Object.keys(es.answers||{}).length;
  const pct = Math.round((current/es.questions.length)*100);
  const userAnswer = es.answers?.[current];

  container.innerHTML=`
  <div style="display:flex;flex-direction:column;height:100vh;max-height:100vh;overflow:hidden">
    <div style="background:var(--surface-2);padding:12px 20px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border);flex-shrink:0">
      <div style="font-weight:600;font-size:0.9rem">${t('exam_title')}</div>
      <div style="display:flex;gap:20px;align-items:center">
        <div style="font-size:0.85rem;color:var(--text-2)">${t('exam_question')} <strong>${current+1}</strong>/${es.questions.length}</div>
        <div style="font-size:0.85rem;color:${remaining<600?'var(--red)':'var(--gold)'}">⏱ ${timeStr}</div>
        <div style="font-size:0.85rem;color:var(--text-2)">${answered} ${APP.language==='es'?'respondidas':'answered'}</div>
      </div>
    </div>
    <div style="height:3px;background:var(--surface-3);flex-shrink:0"><div style="height:100%;background:var(--gold);width:${pct}%;transition:.3s"></div></div>
    <div style="flex:1;overflow-y:auto;padding:24px 20px;max-width:720px;margin:0 auto;width:100%">
      <div style="background:var(--surface-2);border-radius:12px;padding:24px;margin-bottom:20px">
        <div style="font-size:0.75rem;color:var(--text-3);margin-bottom:8px;text-transform:uppercase;letter-spacing:.05em">${q.category||''}</div>
        <p style="font-size:1rem;line-height:1.6;font-weight:500">${escHtml(q.question)}</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${q.options.map((opt,i)=>`
          <button onclick="selectExamAnswer(${current},${i})" style="text-align:left;padding:14px 18px;border-radius:10px;border:2px solid ${userAnswer===i?'var(--gold)':'var(--border)'};background:${userAnswer===i?'rgba(201,168,76,0.12)':'var(--surface-2)'};cursor:pointer;color:var(--text-1);font-size:0.95rem;line-height:1.5;transition:.15s">
            <span style="font-weight:700;margin-right:10px;color:var(--gold)">${String.fromCharCode(65+i)}.</span>${escHtml(opt)}
          </button>`).join('')}
      </div>
    </div>
    <div style="background:var(--surface-2);padding:12px 20px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-shrink:0">
      <button class="btn-ghost" onclick="navExamQuestion(-1)" ${current===0?'disabled':''}>← ${APP.language==='es'?'Anterior':'Prev'}</button>
      <div style="display:flex;gap:10px">
        ${current===es.questions.length-1?`<button class="btn-primary" onclick="submitExam()">${t('exam_submit_exam')}</button>`:`<button class="btn-primary" onclick="navExamQuestion(1)">${APP.language==='es'?'Siguiente':'Next'} →</button>`}
      </div>
      <button class="btn-ghost" onclick="navExamQuestion(1)" ${current===es.questions.length-1?'disabled':''}>→</button>
    </div>
  </div>`;

  // Auto-advance timer
  if (!es._timerActive) {
    es._timerActive = true;
    es._timerId = setInterval(() => {
      const elapsed2 = Math.floor((Date.now() - APP.examState.startTime) / 1000);
      if (elapsed2 >= totalSec) {
        clearInterval(APP.examState._timerId);
        submitExam();
      } else if (APP.activeView === 'exam') {
        renderExamActive(document.getElementById('main-content'));
      }
    }, 5000);
  }
}

function renderExamResults(container) {
  const es = APP.examState;
  if (!es) return;
  const total = es.questions.length;
  const correct = es.questions.filter((q,i) => es.answers[i] === q.correct).length;
  const score = Math.round((correct/total)*100);
  const passed = score >= 75;
  const timeTaken = es.endTime ? Math.round((es.endTime - es.startTime)/60000) : 0;

  // Category breakdown
  const cats = {};
  es.questions.forEach((q,i) => {
    const cat = q.category || 'General';
    if (!cats[cat]) cats[cat] = {total:0, correct:0};
    cats[cat].total++;
    if (es.answers[i] === q.correct) cats[cat].correct++;
  });

  container.innerHTML=`
  <div style="padding:32px 20px;max-width:720px;margin:0 auto">
    <div style="text-align:center;margin-bottom:32px">
      <div style="font-size:4rem;margin-bottom:8px">${passed?'🎉':'📚'}</div>
      <h2 style="font-family:var(--font-d);font-weight:400;margin-bottom:4px">${t('exam_score_report')}</h2>
      <p style="color:${passed?'var(--green)':'var(--red)'};font-weight:600;font-size:1.1rem">${passed?t('exam_passed_msg'):t('exam_failed_msg')}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:28px">
      <div style="background:var(--surface-2);border-radius:12px;padding:20px;text-align:center">
        <div style="font-size:2.5rem;font-weight:700;color:${passed?'var(--green)':'var(--red)'}">${score}%</div>
        <div style="font-size:0.8rem;color:var(--text-2)">${APP.language==='es'?'Puntuación':'Score'}</div>
      </div>
      <div style="background:var(--surface-2);border-radius:12px;padding:20px;text-align:center">
        <div style="font-size:2.5rem;font-weight:700;color:var(--gold)">${correct}/${total}</div>
        <div style="font-size:0.8rem;color:var(--text-2)">${APP.language==='es'?'Correctas':'Correct'}</div>
      </div>
      <div style="background:var(--surface-2);border-radius:12px;padding:20px;text-align:center">
        <div style="font-size:2.5rem;font-weight:700;color:var(--text-1)">${timeTaken}m</div>
        <div style="font-size:0.8rem;color:var(--text-2)">${APP.language==='es'?'Tiempo':'Time'}</div>
      </div>
    </div>
    <div style="background:var(--surface-2);border-radius:12px;padding:20px;margin-bottom:24px">
      <div style="font-weight:600;margin-bottom:16px">${APP.language==='es'?'Rendimiento por Categoría':'Performance by Category'}</div>
      ${Object.entries(cats).map(([cat,s])=>{
        const pct2=Math.round((s.correct/s.total)*100);
        return `<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:4px;font-size:0.85rem"><span>${cat}</span><span style="color:${pct2>=75?'var(--green)':'var(--red)'}">${pct2}% (${s.correct}/${s.total})</span></div><div style="height:6px;background:var(--surface-3);border-radius:3px"><div style="height:100%;width:${pct2}%;background:${pct2>=75?'var(--green)':'var(--red)'};border-radius:3px;transition:.6s"></div></div></div>`;
      }).join('')}
    </div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
      <button class="btn-primary" onclick="APP.examState={phase:'start'};navigate('exam')">${t('exam_retake')}</button>
      <button class="btn-secondary" onclick="navigate('chat')">${APP.language==='es'?'Revisar con Tutor IA':'Review with AI Tutor'}</button>
      <button class="btn-ghost" onclick="navigate('dashboard')">${t('exam_back_dash')}</button>
    </div>
  </div>`;
}

async function startExamSimulator() {
  // Kill any running timer from a previous exam session
  if (APP.examState && APP.examState._timerId) clearInterval(APP.examState._timerId);
  APP.examState = { phase: 'loading', questions: [], answers: {}, currentQ: 0, startTime: null, _timerActive: false, _timerId: null };
  saveState();
  renderExamSimulator(document.getElementById('main-content'));

  const stateLabel = getStateLabel(APP.studyState);
  const langInstr = APP.language==='es' ? 'Generate all questions and answers in Spanish.' : '';
  const prompt = `You are generating a realistic 150-question real estate licensing mock exam for ${stateLabel}.

${langInstr}

Generate EXACTLY 25 questions for each of these 6 categories:
1. Property Law & Ownership
2. Contracts & Agency
3. Federal Law (RESPA, TILA, ECOA, FHA, SAFE Act)
4. ${stateLabel} State-Specific Laws
5. Finance & Mortgages
6. Appraisal, Math & Calculations

Rules:
- Each question must have exactly 4 answer options (A,B,C,D)
- Vary difficulty: 40% easy, 40% medium, 20% hard
- Include realistic exam-style distractors
- The correct answer index must be 0, 1, 2, or 3 (zero-indexed)

Respond ONLY with valid JSON, no markdown, no explanation:
{"questions":[{"question":"...","options":["A text","B text","C text","D text"],"correct":0,"category":"Property Law & Ownership"},...]}`

  try {
    const apiUrl = (window.ANTHROPIC_CONFIG&&ANTHROPIC_CONFIG.proxyUrl) ? ANTHROPIC_CONFIG.proxyUrl : 'https://api.anthropic.com/v1/messages';
    const headers = {'Content-Type':'application/json'};
    if (!ANTHROPIC_CONFIG?.proxyUrl && window.ANTHROPIC_CONFIG?.apiKey && ANTHROPIC_CONFIG.apiKey!=='PASTE_YOUR_ANTHROPIC_API_KEY_HERE') {
      headers['x-api-key'] = ANTHROPIC_CONFIG.apiKey;
      headers['anthropic-version'] = '2023-06-01';
      headers['anthropic-dangerous-direct-browser-access'] = 'true';
    }
    const resp = await fetch(apiUrl, {method:'POST', headers, body: JSON.stringify({model:ANTHROPIC_MODEL, max_tokens:8000, messages:[{role:'user',content:prompt}]})});
    const data = await resp.json();
    if (data.error) throw new Error(data.error.message);
    const raw = data.content?.map(b=>b.text||'').join('') || '';
    const clean = raw.replace(/```json|```/g,'').trim();
    const parsed = JSON.parse(clean);
    APP.examState = { phase:'active', questions: parsed.questions, answers:{}, currentQ:0, startTime:Date.now(), _timerActive:false };
    saveState();
    renderExamSimulator(document.getElementById('main-content'));
  } catch(err) {
    APP.examState = { phase:'start' };
    showToast((APP.language==='es'?'Error al generar el examen: ':'Failed to generate exam: ')+err.message, 'error');
    renderExamSimulator(document.getElementById('main-content'));
  }
}

function selectExamAnswer(qIndex, answerIndex) {
  if (!APP.examState || APP.examState.phase !== 'active') return;
  if (!APP.examState.answers) APP.examState.answers = {};
  APP.examState.answers[qIndex] = answerIndex;
  saveState();
  renderExamActive(document.getElementById('main-content'));
}

function navExamQuestion(dir) {
  if (!APP.examState) return;
  const next = (APP.examState.currentQ||0) + dir;
  if (next < 0 || next >= APP.examState.questions.length) return;
  APP.examState.currentQ = next;
  saveState();
  renderExamActive(document.getElementById('main-content'));
}

function submitExam() {
  if (!APP.examState) return;
  if (APP.examState._timerId) clearInterval(APP.examState._timerId);
  APP.examState.phase = 'done';
  APP.examState.endTime = Date.now();
  APP.examState._timerActive = false;
  saveState();
  renderExamResults(document.getElementById('main-content'));
}

// ─── CUSTOM EXAM BUILDER ─────────────────────────────────────
function renderCustomExamBuilder(container) {
  if (!isAIPremium()) {
    container.innerHTML=`<div style="padding:60px;text-align:center"><div style="font-size:3rem;margin-bottom:16px">🛠</div><h2 style="font-family:var(--font-d);font-weight:400;margin-bottom:8px">${t('custom_title')}</h2><p style="color:var(--text-2);margin-bottom:24px">${APP.language==='es'?'El constructor de exámenes personalizados es exclusivo de IA Premium.':'Custom Exam Builder is an AI Premium exclusive feature.'}</p><button class="btn-primary" onclick="navigate('upgrade')">${t('upgrade_btn')}</button></div>`;
    return;
  }
  const stateLabel = getStateLabel(APP.studyState);
  const weakSuggestions = APP.weakTopics.map(id=>{ const m=getModuleById(id); return m?m.title:''; }).filter(Boolean);
  container.innerHTML=`
  <div style="padding:32px 20px;max-width:600px;margin:0 auto">
    <div style="text-align:center;margin-bottom:28px">
      <div style="font-size:2.5rem;margin-bottom:8px">🛠</div>
      <h2 style="font-family:var(--font-d);font-weight:400;margin-bottom:4px">${t('custom_title')}</h2>
      <p style="color:var(--text-2)">${t('custom_sub')}</p>
    </div>
    ${weakSuggestions.length>0?`<div style="background:rgba(201,168,76,0.1);border:1px solid var(--gold);border-radius:10px;padding:14px;margin-bottom:20px"><div style="font-size:0.85rem;font-weight:600;margin-bottom:8px;color:var(--gold)">⚠️ ${APP.language==='es'?'Temas Débiles Detectados':'Weak Topics Detected'}</div><div style="display:flex;flex-wrap:wrap;gap:6px">${weakSuggestions.map(s=>`<button class="btn-ghost btn-sm" onclick="document.getElementById('custom-topic').value='${escHtml(s)}'">${escHtml(s)}</button>`).join('')}</div></div>`:''}
    <div style="background:var(--surface-2);border-radius:12px;padding:24px">
      <div class="form-group" style="margin-bottom:20px">
        <label style="display:block;margin-bottom:8px;font-weight:500">${t('custom_topic')}</label>
        <input type="text" id="custom-topic" class="form-input" placeholder="${APP.language==='es'?'ej. Ley de Agencia, RESPA, Contratos…':'e.g. Agency Law, RESPA, Contracts…'}" style="width:100%">
      </div>
      <div class="form-group" style="margin-bottom:24px">
        <label style="display:block;margin-bottom:8px;font-weight:500">${t('custom_questions')}</label>
        <select id="custom-count" class="form-input">
          <option value="10">10 ${APP.language==='es'?'preguntas':'questions'}</option>
          <option value="20" selected>20 ${APP.language==='es'?'preguntas':'questions'}</option>
          <option value="30">30 ${APP.language==='es'?'preguntas':'questions'}</option>
          <option value="50">50 ${APP.language==='es'?'preguntas':'questions'}</option>
        </select>
      </div>
      <button class="btn-primary" style="width:100%" onclick="buildCustomExam()">${t('custom_build')}</button>
    </div>
    <div id="custom-result" style="margin-top:24px"></div>
  </div>`;
}

async function buildCustomExam() {
  const topic = document.getElementById('custom-topic')?.value?.trim();
  const count = parseInt(document.getElementById('custom-count')?.value || '20');
  const resultDiv = document.getElementById('custom-result');
  if (!topic) { showToast(APP.language==='es'?'Ingresa un tema':'Enter a topic','error'); return; }
  if (!resultDiv) return;

  resultDiv.innerHTML=`<div style="text-align:center;padding:20px"><div class="typing-indicator" style="justify-content:center"><span></span><span></span><span></span></div><p style="margin-top:12px;color:var(--text-2)">${t('custom_building')}</p></div>`;

  const stateLabel = getStateLabel(APP.studyState);
  const langInstr = APP.language==='es' ? 'All questions and answers must be in Spanish.' : '';
  const prompt = `Generate exactly ${count} real estate exam practice questions focused on: "${topic}" for ${stateLabel} licensing exam.
${langInstr}
Each question must have 4 options and one correct answer (0-indexed).
Include a brief explanation for the correct answer.
Respond ONLY with valid JSON:
{"questions":[{"question":"...","options":["...","...","...","..."],"correct":0,"explanation":"..."}]}`;

  try {
    const apiUrl = (window.ANTHROPIC_CONFIG&&ANTHROPIC_CONFIG.proxyUrl) ? ANTHROPIC_CONFIG.proxyUrl : 'https://api.anthropic.com/v1/messages';
    const headers = {'Content-Type':'application/json'};
    if (!ANTHROPIC_CONFIG?.proxyUrl && window.ANTHROPIC_CONFIG?.apiKey && ANTHROPIC_CONFIG.apiKey!=='PASTE_YOUR_ANTHROPIC_API_KEY_HERE') {
      headers['x-api-key'] = ANTHROPIC_CONFIG.apiKey;
      headers['anthropic-version'] = '2023-06-01';
      headers['anthropic-dangerous-direct-browser-access'] = 'true';
    }
    const resp = await fetch(apiUrl, {method:'POST', headers, body: JSON.stringify({model:ANTHROPIC_MODEL, max_tokens:4000, messages:[{role:'user',content:prompt}]})});
    const data = await resp.json();
    if (data.error) throw new Error(data.error.message);
    const raw = data.content?.map(b=>b.text||'').join('') || '';
    const parsed = JSON.parse(raw.replace(/```json|```/g,'').trim());

    // Launch as quiz
    APP.quizState = {
      moduleId: 'custom_'+Date.now(),
      questions: parsed.questions.map((q,i)=>({
        id:'cq'+i, text:q.question,
        options:q.options.map((o,j)=>({id:'o'+j,text:o})),
        correct:'o'+q.correct,
        explanation:q.explanation||''
      })),
      answers:{}, submitted:false, result:null,
      isCustom:true, customTopic:topic
    };
    navigate('quiz');
  } catch(err) {
    if(resultDiv) resultDiv.innerHTML=`<div style="color:var(--red);padding:16px;text-align:center">⚠️ ${escHtml(err.message)}</div>`;
  }
}


// ─── PROGRESS ─────────────────────────────────────────────────
function renderProgress(container,CURRICULUM) {
  const C=CURRICULUM||getCurriculum(); const stats=getStats(C);
  container.innerHTML=`
  <div class="progress-view">
    <h2>Progress — ${getStateLabel(APP.studyState)}</h2>
    <div class="progress-summary-cards">
      <div class="pscard"><div class="pscard-val">${stats.passed}/${stats.total}</div><div class="pscard-label">Modules Passed</div></div>
      <div class="pscard"><div class="pscard-val">${APP.streak} 🔥</div><div class="pscard-label">Day Streak</div></div>
      <div class="pscard"><div class="pscard-val">${stats.total>0?Math.round((stats.passed/stats.total)*100):0}%</div><div class="pscard-label">Completion</div></div>
    </div>
    ${APP.weakTopics.length>0?`<div class="weak-topics-section"><div class="section-title" style="margin-bottom:12px">⚠️ Topics Needing Review</div>${APP.weakTopics.map(id=>{ const m=getModuleById(id); const p=getProgress(id); return m?`<div class="module-row" onclick="openLesson('${id}')"><span class="module-row-icon">${m.icon}</span><div class="module-row-body"><div class="module-row-title">${m.title}</div><div class="module-row-meta">Best score: <span style="color:var(--red)">${p.bestScore}%</span> · ${p.attempts.length} attempt${p.attempts.length!==1?'s':''}</div></div><span class="module-row-arrow" style="color:var(--red)">Review →</span></div>`:''; }).join('')}</div>`:''}
    ${Object.entries(C.tracks).map(([tid,track])=>{
      const ts=stats.trackStats[tid]||{passed:0,total:0};
      return`<div class="progress-track-section"><div class="pts-header" style="border-color:${track.color}"><span>${track.icon} ${track.label}</span><span style="color:${track.color}">${ts.passed}/${ts.total} passed</span></div><div class="pts-modules">${track.modules.map(m=>{ const prog=getProgress(m.id); return`<div class="ptm-row" onclick="openLesson('${m.id}')"><span class="ptm-status ${prog.status}"></span><span class="ptm-title">${m.icon} ${m.title}</span><span class="ptm-score ${prog.bestScore>=m.passingScore?'pass':prog.bestScore>0?'fail':''}">${prog.bestScore>0?prog.bestScore+'%':'—'}</span><span class="ptm-attempts">${prog.attempts.length} try</span><span class="ptm-last">${prog.lastSeen?new Date(prog.lastSeen).toLocaleDateString():'—'}</span></div>`; }).join('')}</div></div>`;
    }).join('')}
    <div class="progress-actions">
      <button class="btn-secondary" onclick="exportProgress()">Export Progress JSON</button>
      <label class="btn-secondary" style="cursor:pointer">Import Progress<input type="file" accept=".json" onchange="importProgress(event)" style="display:none"></label>
      <button class="btn-danger" onclick="resetProgress()">Reset All</button>
    </div>
  </div>`;
}

// ─── ROADMAP ──────────────────────────────────────────────────
function renderRoadmap(container,CURRICULUM) {
  const C=CURRICULUM||getCurriculum(); const studyPlan=(C&&C.studyPlan)?C.studyPlan:DEFAULT_STUDY_PLAN;
  container.innerHTML=`
  <div class="roadmap-view">
    <h2>12-Week Study Roadmap</h2>
    <p class="view-sub">${getStateLabel(APP.studyState)} Broker + MLO dual-track plan. ~15 hours/week.</p>
    <div class="roadmap-timeline">
      ${studyPlan.map((week,i)=>`<div class="roadmap-item"><div class="roadmap-week-label">Week ${week.weeks}</div><div class="roadmap-connector"><div class="roadmap-dot"></div>${i<studyPlan.length-1?'<div class="roadmap-line"></div>':''}</div><div class="roadmap-content"><div class="roadmap-focus">${week.focus}</div></div></div>`).join('')}
    </div>
    <div class="money-map">
      <h3>The Income Stack</h3>
      <p class="view-sub">Phase roadmap from zero to full licensure and beyond.</p>
      <div class="money-phases">
        ${[{phase:'Phase 1',time:'0–30 Days',title:'Enter the Industry',items:['Apply for TC / leasing assistant roles','Start Broker curriculum for free','Research your state notary requirements']},{phase:'Phase 2',time:'1–8 Weeks',title:'Get Broker License',items:['Complete state-required pre-license education','Pass national + state exams','Fingerprint, apply, join a brokerage']},{phase:'Phase 3',time:'2–5 Months',title:'Add MLO License',items:['Complete NMLS-approved pre-license hours','Pass SAFE MLO + apply to state regulator','Build first-time buyer + investor pipeline']},{phase:'Phase 4',time:'6–12 Months',title:'Build Recurring Income',items:['Property management under broker firm','Transaction coordination business','Assumable loan specialization']}].map(p=>`<div class="phase-card"><div class="phase-tag">${p.phase}</div><div class="phase-time">${p.time}</div><h4>${p.title}</h4>${p.items.map(it=>`<div class="phase-item">→ ${it}</div>`).join('')}</div>`).join('')}
      </div>
    </div>
  </div>`;
}

// ─── STATES ───────────────────────────────────────────────────
const STATE_ORDER=['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC','PR'];
const CAT_CONFIG={licensing:{icon:'🎓',label:'Licensing & Requirements'},contracts:{icon:'📄',label:'Contract & Disclosure Laws'},landlord_tenant:{icon:'🏠',label:'Landlord-Tenant Laws'},property_tax:{icon:'🏛',label:'Property Tax Laws'}};
let _stateFilter='all';

function renderStates(container) {
  container.innerHTML=`
  <div class="states-view">
    <h2>52-State Law Matrix</h2>
    <p class="view-sub">All 50 states + DC + Puerto Rico · Licensing · Contracts · Landlord-Tenant · Property Tax</p>
    <div class="ref-search-bar"><span class="ref-search-icon">🔍</span><input type="text" id="state-search" placeholder="Search states by name or code…" oninput="filterStates(this.value)"></div>
    <div class="filter-row">
      <button class="filter-chip active" onclick="applyFilter(this,'all')">All States</button>
      <button class="filter-chip" onclick="applyFilter(this,'caveat')">Caveat Emptor</button>
      <button class="filter-chip" onclick="applyFilter(this,'norent')">No Rent Control</button>
      <button class="filter-chip" onclick="applyFilter(this,'fullrec')">Full Reciprocity</button>
      <button class="filter-chip" id="compare-chip" onclick="applyFilter(this,'compare')">In Compare (${APP.compareStates.length})</button>
    </div>
    <div class="states-grid" id="states-grid">${buildStateCards()}</div>
  </div>`;
}

function buildStateCards(filter='all',query='') {
  return STATE_ORDER.map(code=>{
    const s=STATES_DATA?.[code]; if(!s) return '';
    if(filter==='caveat'&&!(s.contracts?.['Legal Doctrine']||'').toUpperCase().includes('CAVEAT EMPTOR')) return '';
    if(filter==='norent'){ const rc=(s.landlord_tenant?.['Rent Control']||'').toUpperCase(); if(!rc.includes('NONE')&&!rc.includes('NO STATE')&&!rc.includes('NO STATEWIDE')) return ''; }
    if(filter==='fullrec'){ const rec=(s.licensing?.['Reciprocity']||'').toLowerCase(); if(!rec.includes('full reciprocity')&&!rec.includes('all states')&&!rec.includes('all u.s.')) return ''; }
    if(filter==='compare'&&!APP.compareStates.includes(code)) return '';
    if(query&&!code.toLowerCase().includes(query.toLowerCase())&&!s.name.toLowerCase().includes(query.toLowerCase())) return '';
    const inCompare=APP.compareStates.includes(code); const isStudy=code===APP.studyState; const isLocked=!canAccessState(code);
    return`<div class="state-card ${inCompare?'in-compare':''} ${isStudy?'is-study':''} ${isLocked?'locked':''}" data-code="${code}" onclick="${isLocked?`showPaywall('${s.name} requires Premium.')`:`openStateDetail('${code}')`}"><div class="compare-tick" onclick="event.stopPropagation();toggleCompare('${code}')">✓</div><div class="state-code">${code}</div><div class="state-name">${s.name}</div>${isStudy?'<div class="state-study-badge">📚 Studying</div>':''}${isLocked?'<div class="state-locked-badge">🔒</div>':''}<div class="state-dots">${['licensing','contracts','landlord_tenant','property_tax'].map(cat=>`<div class="state-dot" style="background:${Object.keys(s[cat]||{}).length>2?'var(--green)':'var(--bg-5)'}" title="${CAT_CONFIG[cat].label}"></div>`).join('')}</div></div>`;
  }).join('');
}

function applyFilter(btn,filter) {
  _stateFilter=filter; document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active')); btn.classList.add('active');
  const compareChip=document.getElementById('compare-chip'); if(compareChip) compareChip.textContent=`In Compare (${APP.compareStates.length})`;
  document.getElementById('states-grid').innerHTML=buildStateCards(filter,document.getElementById('state-search')?.value||'');
}
function filterStates(query) { document.getElementById('states-grid').innerHTML=buildStateCards(_stateFilter,query); }
function openStateDetail(code) { APP.refState=code; APP.refCat='licensing'; navigate('state'); }

function renderStateDetail(container) {
  const code=APP.refState; const s=code?STATES_DATA?.[code]:null; if(!s){ navigate('states'); return; }
  container.innerHTML=`
  <div class="state-detail">
    <div class="state-detail-hero">
      <div class="detail-badge">${code}</div>
      <div class="detail-info"><h2>${s.name}</h2><div class="detail-meta">Real Estate Law Matrix · All 4 categories · Updated 2026</div></div>
      <div class="detail-actions">
        <button class="btn-ghost" onclick="toggleCompare('${code}');navigate('state')">${APP.compareStates.includes(code)?'✓ In Compare':'⚖ Add to Compare'}</button>
        <button class="btn-ghost" onclick="sendMessage('Tell me about ${escHtml(s.name)} real estate law')">Ask AI Tutor</button>
        <button class="btn-primary" onclick="setStudyState('${code}')">📚 Study ${code}</button>
      </div>
    </div>
    <div class="disclaimer-strip"><span>⚠️</span><span>General legal <strong>information</strong> only — not legal advice. Verify with official sources.</span></div>
    <div class="cat-tabs">${Object.entries(CAT_CONFIG).map(([cat,conf])=>`<button class="cat-tab ${cat===APP.refCat?'active':''}" onclick="switchCat('${cat}')">${conf.icon} ${conf.label}</button>`).join('')}</div>
    <div id="cat-content">${buildCatContent(s,APP.refCat)}</div>
    <div class="download-strip"><div class="download-strip-icon">📥</div><div class="download-strip-text"><h3>Download ${s.name} Guide</h3><p>All 4 categories with source citations</p></div><div class="download-strip-actions"><button class="btn-ghost" onclick="window.print()">🖨 Print</button><button class="btn-primary" onclick="downloadStateGuide('${code}')">⬇ Download</button></div></div>
  </div>`;
}

function switchCat(cat) {
  APP.refCat=cat;
  document.querySelectorAll('.cat-tab').forEach(t=>t.classList.toggle('active',t.textContent.trim().startsWith(CAT_CONFIG[cat].icon)));
  document.getElementById('cat-content').innerHTML=buildCatContent(STATES_DATA?.[APP.refState],cat);
}

function buildCatContent(s,cat) {
  const data=s?.[cat]||{}; const entries=Object.entries(data);
  if(!entries.length) return`<div style="padding:32px;text-align:center;color:var(--text-3)">No data for this category.</div>`;
  return`<div class="data-fields">${entries.map(([field,value])=>{
    let tagHtml='';
    if(field==='Legal Doctrine'&&value.toUpperCase().includes('CAVEAT EMPTOR')) tagHtml='<span class="field-tag tag-warn">⚠ CAVEAT EMPTOR</span>';
    if(field==='Rent Control'&&(value.toUpperCase().startsWith('NONE')||value.toUpperCase().startsWith('NO')||value.toUpperCase().includes('STATEWIDE'))) tagHtml='<span class="field-tag tag-good">✓ NONE</span>';
    if(field==='Reciprocity'&&(value.toLowerCase().includes('full reciprocity')||value.toLowerCase().includes('all states'))) tagHtml='<span class="field-tag tag-gold">↔ FULL</span>';
    return`<div class="data-field"><div class="field-row"><div class="field-label">${escHtml(field)}</div><div class="field-value">${tagHtml}${escHtml(value).replace(/ \| /g,' <span style="color:var(--text-3)">·</span> ')}</div></div></div>`;
  }).join('')}</div>`;
}

function downloadStateGuide(code) {
  const s=STATES_DATA?.[code]; if(!s) return;
  let txt=`${s.name} Real Estate Law Guide — AgentPrep 52\nGenerated: ${new Date().toLocaleDateString()}\n\n`;
  Object.entries(CAT_CONFIG).forEach(([cat,conf])=>{ txt+=`\n${'='.repeat(50)}\n${conf.label}\n${'='.repeat(50)}\n`; Object.entries(s[cat]||{}).forEach(([k,v])=>{ txt+=`\n${k}:\n${v}\n`; }); });
  const blob=new Blob([txt],{type:'text/plain'}); const a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download=`${code}-real-estate-guide.txt`; a.click(); URL.revokeObjectURL(a.href);
}

// ─── COMPARE ──────────────────────────────────────────────────
function toggleCompare(code) {
  const idx=APP.compareStates.indexOf(code);
  if(idx>-1){ APP.compareStates.splice(idx,1); showToast(`${STATES_DATA?.[code]?.name||code} removed`,'info'); }
  else{ if(APP.compareStates.length>=3){ showToast('Max 3 states','error'); return; } APP.compareStates.push(code); showToast(`${STATES_DATA?.[code]?.name||code} added`,'success'); }
  saveState(); const chip=document.getElementById('compare-chip'); if(chip) chip.textContent=`In Compare (${APP.compareStates.length})`;
}

function renderCompare(container) {
  container.innerHTML=`
  <div class="compare-view">
    <h2>Compare States</h2><p class="view-sub">Select up to 3 states to compare side-by-side.</p>
    <div class="compare-slots">
      ${APP.compareStates.map(code=>`<div class="compare-slot" onclick="openStateModal('compare')"><div class="slot-code">${code}</div><div class="slot-name">${STATES_DATA?.[code]?.name||''}</div><button class="slot-remove" onclick="event.stopPropagation();toggleCompare('${code}');navigate('compare')">✕</button></div>`).join('')}
      ${APP.compareStates.length<3?`<button class="add-slot" onclick="openStateModal('compare')">+ Add State</button>`:''}
    </div>
    ${APP.compareStates.length<2?`<div style="padding:48px;text-align:center;color:var(--text-3)">Select at least 2 states to compare.</div>`:
      Object.entries(CAT_CONFIG).map(([cat,conf])=>`<div style="margin-bottom:32px"><div class="section-title" style="margin-bottom:12px">${conf.icon} ${conf.label}</div><div class="compare-table-wrap"><table class="compare-table"><thead><tr><th>Field</th>${APP.compareStates.map(c=>`<th>${c} — ${STATES_DATA?.[c]?.name||c}</th>`).join('')}</tr></thead><tbody>${buildCompareRows(cat)}</tbody></table></div></div>`).join('')}
  </div>`;
}

function buildCompareRows(cat) {
  const allKeys=new Set(); APP.compareStates.forEach(code=>Object.keys(STATES_DATA?.[code]?.[cat]||{}).forEach(k=>allKeys.add(k)));
  return[...allKeys].map(key=>`<tr><td>${escHtml(key)}</td>${APP.compareStates.map(code=>`<td>${escHtml(STATES_DATA?.[code]?.[cat]?.[key]||'—')}</td>`).join('')}</tr>`).join('');
}

// ─── LEGAL PAGES ──────────────────────────────────────────────
function legalShell(title, subtitle, bodyHtml) {
  return `
  <div class="legal-view">
    <button class="btn-back" onclick="navigate('setup')">${t('legal_back')}</button>
    <div class="legal-header">
      <h2>${title}</h2>
      <p class="view-sub">${subtitle}</p>
      <p class="legal-meta">${t('legal_last_updated')}</p>
    </div>
    <div class="legal-body">${bodyHtml}</div>
    <div class="legal-contact-block">
      <p>${t('legal_contact_email')}</p>
    </div>
  </div>`;
}

function renderTerms(container) {
  if (!container) container = document.getElementById('main-content');
  const isEs = APP.language === 'es';
  container.innerHTML = legalShell(
    t('terms_title'), t('terms_subtitle'),
    isEs ? `
      <h3>1. Aceptación de los Términos</h3>
      <p>Al acceder o usar AgentPrep 52 ("el Servicio"), aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo, no uses el servicio.</p>
      <h3>2. Descripción del Servicio</h3>
      <p>AgentPrep 52 es una plataforma educativa de preparación para exámenes de licencias inmobiliarias y MLO en los 52 estados y territorios de EE.UU. El contenido es generado y curado con fines educativos únicamente.</p>
      <h3>3. Uso Educativo — Sin Asesoría Legal</h3>
      <p><strong>Todo el contenido de AgentPrep 52 es para preparación de exámenes únicamente. No constituye asesoría legal, financiera o inmobiliaria profesional.</strong> Las leyes de bienes raíces cambian con frecuencia. Siempre verifica los requisitos actuales con la junta oficial de licencias de tu estado antes de tomar decisiones de licenciamiento.</p>
      <h3>4. Cuentas de Usuario</h3>
      <p>Eres responsable de mantener la confidencialidad de tus credenciales de cuenta. Notifícanos inmediatamente sobre cualquier uso no autorizado de tu cuenta.</p>
      <h3>5. Suscripciones y Pagos</h3>
      <p>Las suscripciones premium se facturan mensualmente a través de Stripe. Puedes cancelar en cualquier momento desde tu cuenta. Ver nuestra Política de Reembolso para detalles.</p>
      <h3>6. Propiedad Intelectual</h3>
      <p>Todo el contenido, incluyendo texto del currículo, preguntas de práctica y código de software, es propiedad de AgentPrep 52 o está licenciado para su uso. No puedes reproducir, distribuir o crear trabajos derivados sin permiso escrito.</p>
      <h3>7. Limitación de Responsabilidad</h3>
      <p>AgentPrep 52 no garantiza que aprobarás tu examen de licencia. El servicio se proporciona "tal como está". En la medida máxima permitida por la ley, AgentPrep 52 no será responsable por daños indirectos, incidentales o consecuentes.</p>
      <h3>8. Cambios a los Términos</h3>
      <p>Podemos actualizar estos términos periódicamente. El uso continuado del servicio después de los cambios constituye aceptación de los nuevos términos.</p>
      <h3>9. Ley Aplicable</h3>
      <p>Estos términos se rigen por las leyes del Estado de Washington, EE.UU., sin considerar conflictos de disposiciones legales.</p>
    ` : `
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using AgentPrep 52 ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.</p>
      <h3>2. Description of Service</h3>
      <p>AgentPrep 52 is an educational exam preparation platform for real estate and MLO licensing across all 52 U.S. states and territories. Content is curated and generated for educational purposes only.</p>
      <h3>3. Educational Use — Not Legal Advice</h3>
      <p><strong>All content on AgentPrep 52 is for exam preparation purposes only. It does not constitute legal, financial, or professional real estate advice.</strong> Real estate laws change frequently. Always verify current requirements with your state's official licensing board before making any licensing decisions.</p>
      <h3>4. User Accounts</h3>
      <p>You are responsible for maintaining the confidentiality of your account credentials. Notify us immediately of any unauthorized use of your account.</p>
      <h3>5. Subscriptions and Payments</h3>
      <p>Premium subscriptions are billed monthly through Stripe. You may cancel at any time from your account settings. See our Refund Policy for full details.</p>
      <h3>6. Intellectual Property</h3>
      <p>All content, including curriculum text, practice questions, and software code, is owned by or licensed to AgentPrep 52. You may not reproduce, distribute, or create derivative works without written permission.</p>
      <h3>7. Limitation of Liability</h3>
      <p>AgentPrep 52 does not guarantee that you will pass your licensing exam. The service is provided "as is." To the maximum extent permitted by law, AgentPrep 52 shall not be liable for indirect, incidental, or consequential damages.</p>
      <h3>8. Changes to Terms</h3>
      <p>We may update these terms periodically. Continued use of the service after changes constitutes acceptance of the new terms.</p>
      <h3>9. Governing Law</h3>
      <p>These terms are governed by the laws of the State of Washington, USA, without regard to conflict of law provisions.</p>
    `
  );
}

function renderPrivacy(container) {
  if (!container) container = document.getElementById('main-content');
  const isEs = APP.language === 'es';
  container.innerHTML = legalShell(
    t('privacy_title'), t('privacy_subtitle'),
    isEs ? `
      <h3>1. Qué Información Recopilamos</h3>
      <p><strong>Información de cuenta:</strong> Nombre, dirección de correo electrónico y contraseña cuando te registras a través de Firebase Authentication.</p>
      <p><strong>Datos de progreso:</strong> Tus módulos completados, puntuaciones de quiz, racha de estudio y estado de estudio seleccionado. Esto se almacena en Firebase Firestore y localmente en tu dispositivo.</p>
      <p><strong>Datos de pago:</strong> AgentPrep 52 <strong>no almacena</strong> información de tarjetas de crédito. Los pagos son procesados directamente por Stripe. Consulta la Política de Privacidad de Stripe en stripe.com/privacy.</p>
      <p><strong>Conversaciones con IA:</strong> Los mensajes que envías al Tutor IA se procesan por la API de Anthropic (Claude). No almacenamos permanentemente el historial de chat en nuestros servidores — solo en tu dispositivo para la sesión actual.</p>
      <h3>2. Cómo Usamos tu Información</h3>
      <p>Usamos tu información para: sincronizar tu progreso entre dispositivos, personalizar el contenido del Tutor IA a tu estado y perfil, procesar pagos de suscripción, y mejorar el servicio.</p>
      <h3>3. Compartir Información</h3>
      <p>No vendemos ni alquilamos tu información personal. Compartimos datos únicamente con proveedores de servicios necesarios: Firebase (Google) para auth y base de datos, Stripe para pagos, Anthropic para el Tutor IA.</p>
      <h3>4. Retención de Datos</h3>
      <p>Tu progreso y datos de perfil se conservan mientras tengas una cuenta. Puedes exportar o eliminar tus datos en cualquier momento desde Configuración → Gestión de Datos.</p>
      <h3>5. Tus Derechos</h3>
      <p>Tienes derecho a acceder, corregir o eliminar tus datos personales. Para solicitudes de datos, contáctanos en support@agentprep52.com.</p>
      <h3>6. Seguridad</h3>
      <p>Usamos Firebase Authentication y HTTPS para proteger tus datos. Ningún sistema es 100% seguro, pero tomamos precauciones razonables.</p>
      <h3>7. Menores de Edad</h3>
      <p>AgentPrep 52 está diseñado para adultos que buscan licencias inmobiliarias profesionales. No recopilamos conscientemente información de personas menores de 18 años.</p>
    ` : `
      <h3>1. What Information We Collect</h3>
      <p><strong>Account information:</strong> Your name, email address, and password when you sign up via Firebase Authentication.</p>
      <p><strong>Study progress data:</strong> Your completed modules, quiz scores, study streak, and selected study state. This is stored in Firebase Firestore and locally on your device.</p>
      <p><strong>Payment data:</strong> AgentPrep 52 does <strong>not</strong> store credit card information. Payments are processed directly by Stripe. See Stripe's Privacy Policy at stripe.com/privacy.</p>
      <p><strong>AI Tutor conversations:</strong> Messages you send to the AI Tutor are processed by Anthropic's API (Claude). We do not permanently store chat history on our servers — only on your device for the current session.</p>
      <h3>2. How We Use Your Information</h3>
      <p>We use your information to: sync your progress across devices, personalize AI Tutor content to your state and profile, process subscription payments, and improve the service.</p>
      <h3>3. Sharing Information</h3>
      <p>We do not sell or rent your personal information. We share data only with necessary service providers: Firebase (Google) for auth and database, Stripe for payments, and Anthropic for the AI Tutor.</p>
      <h3>4. Data Retention</h3>
      <p>Your progress and profile data are retained while you have an account. You can export or delete your data at any time from Settings → Data Management.</p>
      <h3>5. Your Rights</h3>
      <p>You have the right to access, correct, or delete your personal data. For data requests, contact us at support@agentprep52.com.</p>
      <h3>6. Security</h3>
      <p>We use Firebase Authentication and HTTPS to protect your data. No system is 100% secure, but we take reasonable precautions.</p>
      <h3>7. Minors</h3>
      <p>AgentPrep 52 is designed for adults pursuing professional real estate licenses. We do not knowingly collect information from persons under 18.</p>
    `
  );
}

function renderRefund(container) {
  if (!container) container = document.getElementById('main-content');
  const isEs = APP.language === 'es';
  container.innerHTML = legalShell(
    t('refund_title'), t('refund_subtitle'),
    isEs ? `
      <h3>Nuestra Promesa</h3>
      <p>Queremos que estés completamente satisfecho con AgentPrep 52. Si no estás satisfecho, estamos aquí para ayudarte.</p>
      <h3>Período de Reembolso</h3>
      <p><strong>Reembolso completo dentro de 7 días</strong> de tu primera compra de suscripción si no estás satisfecho por cualquier razón. Simplemente contáctanos dentro de los 7 días de tu pago inicial.</p>
      <h3>Cómo Solicitar un Reembolso</h3>
      <p>Envía un correo a <strong>support@agentprep52.com</strong> desde la dirección de correo de tu cuenta con el asunto "Solicitud de Reembolso". Procesaremos tu reembolso dentro de 5–7 días hábiles.</p>
      <h3>Cancelación de Suscripción</h3>
      <p>Puedes cancelar tu suscripción en cualquier momento desde Configuración → Cuenta. La cancelación surte efecto al final del período de facturación actual. No se emiten reembolsos prorrateados por tiempo no utilizado después del período de 7 días.</p>
      <h3>Excepciones</h3>
      <p>No se ofrecen reembolsos por: cuentas que hayan completado más del 50% de los módulos disponibles en el primer mes, solicitudes realizadas después de 7 días del pago inicial, o meses de renovación subsecuentes (solo el primer mes es elegible).</p>
      <h3>Problemas Técnicos</h3>
      <p>Si experimentas problemas técnicos que impiden usar el servicio, contáctanos inmediatamente. Haremos todo lo posible para resolver el problema o ofrecer un crédito o reembolso según corresponda.</p>
    ` : `
      <h3>Our Promise</h3>
      <p>We want you to feel completely confident about AgentPrep 52. If you're not satisfied, we're here to help.</p>
      <h3>Refund Window</h3>
      <p><strong>Full refund within 7 days</strong> of your first subscription purchase if you are not satisfied for any reason. Simply contact us within 7 days of your initial payment.</p>
      <h3>How to Request a Refund</h3>
      <p>Email <strong>support@agentprep52.com</strong> from your account email address with the subject line "Refund Request." We will process your refund within 5–7 business days.</p>
      <h3>Subscription Cancellation</h3>
      <p>You can cancel your subscription at any time from Settings → Account. Cancellation takes effect at the end of the current billing period. Prorated refunds are not issued for unused time after the 7-day window.</p>
      <h3>Exceptions</h3>
      <p>Refunds are not available for: accounts that have completed more than 50% of available modules in the first month, requests made after 7 days from initial payment, or subsequent renewal months (only the first billing month is eligible).</p>
      <h3>Technical Issues</h3>
      <p>If you experience technical problems that prevent you from using the service, contact us immediately. We will do our best to resolve the issue or offer a credit or refund as appropriate.</p>
    `
  );
}

// ─── PWA INSTALL PROMPT ────────────────────────────────────────
let _pwaInstallEvent = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  _pwaInstallEvent = e;
  const banner = document.getElementById('pwa-install-banner');
  if (banner && !localStorage.getItem('pwa-dismissed')) {
    banner.style.display = 'flex';
  }
});
window.addEventListener('appinstalled', () => {
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.style.display = 'none';
  _pwaInstallEvent = null;
});
function triggerPWAInstall() {
  if (_pwaInstallEvent) {
    _pwaInstallEvent.prompt();
    _pwaInstallEvent.userChoice.then(() => { _pwaInstallEvent = null; });
  }
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.style.display = 'none';
}
function dismissPWABanner() {
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.style.display = 'none';
  try { localStorage.setItem('pwa-dismissed', '1'); } catch(e) {}
}

// ─── SETUP ────────────────────────────────────────────────────
function renderSetup(container,CURRICULUM) {
  const C=CURRICULUM||getCurriculum(); const resources=(C&&C.resources)?C.resources:DEFAULT_RESOURCES;
  container.innerHTML=`
  <div class="setup-view">
    <h2>Settings</h2><p class="view-sub">Configure your profile and account.</p>
    <div class="setup-form">
      <h3 style="margin-bottom:16px;font-family:var(--font-d);font-weight:400">Study Profile</h3>
      <div class="form-group"><label>Your Name</label><input type="text" id="setup-name" value="${escHtml(APP.profile.name)}" placeholder="Enter your name" class="form-input"></div>
      <div class="form-group"><label>Target Exam Date</label><input type="date" id="setup-exam" value="${APP.profile.targetExam}" class="form-input"></div>
      <div class="form-group"><label>Daily Study Goal (modules/day)</label><select id="setup-goal" class="form-input">${[1,2,3,5,7,10].map(n=>`<option value="${n}" ${APP.dailyGoal===n?'selected':''}>${n} module${n>1?'s':''}</option>`).join('')}</select></div>
      <div class="form-group"><label>Study State</label><div style="display:flex;gap:10px;align-items:center"><div class="study-state-badge" style="font-size:1rem;padding:10px 16px;cursor:pointer" onclick="openStateModal('study')">${APP.studyState} — ${getStateLabel(APP.studyState)} ▾</div></div></div>
      <div class="form-group"><label>${t('settings_theme')}</label><div style="display:flex;gap:8px"><button class="btn-secondary ${APP.theme==='dark'?'active':''}" onclick="applyTheme('dark');saveState()">${t('settings_dark')}</button><button class="btn-secondary ${APP.theme==='light'?'active':''}" onclick="applyTheme('light');saveState()">${t('settings_light')}</button></div></div>
      <div class="form-group"><label>${t('settings_language')}</label><div style="display:flex;gap:8px"><button class="btn-secondary ${APP.language==='en'?'active':''}" onclick="setLanguage('en')">${t('settings_lang_en')}</button><button class="btn-secondary ${APP.language==='es'?'active':''}" onclick="setLanguage('es')">${t('settings_lang_es')}</button></div></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn-primary" onclick="saveProfile()">${t('settings_save')}</button>${isLoggedIn()&&_fbReady?`<button class="btn-ghost" onclick="signOut()">${t('settings_signout')}</button>`:''}</div>
    </div>
    <div class="setup-form" style="margin-top:20px">
      <h3 style="margin-bottom:8px;font-family:var(--font-d);font-weight:400">Account</h3>
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <div><div style="font-size:0.85rem;color:var(--text-2)">Plan: <strong style="color:var(--gold)">${getTier().label}</strong></div>${_fbUser?`<div style="font-size:0.85rem;color:var(--text-3);margin-top:2px">${_fbUser.email}</div>`:'<div style="font-size:0.85rem;color:var(--text-3)">Local mode</div>'}</div>
        ${!isPremium()?`<button class="btn-primary" onclick="navigate('upgrade')">Upgrade →</button>`:''}
      </div>
    </div>
    <div class="setup-data" style="margin-top:20px">
      <h3 style="margin-bottom:16px;font-family:var(--font-d);font-weight:400">Data Management</h3>
      <div class="setup-actions"><button class="btn-secondary" onclick="exportProgress()">Export Progress</button><label class="btn-secondary" style="cursor:pointer">Import Progress<input type="file" accept=".json" onchange="importProgress(event)" style="display:none"></label><button class="btn-danger" onclick="resetProgress()">Reset All Data</button></div>
    </div>
    <div class="resources-section" style="margin-top:20px">
      <h3 style="margin-bottom:12px;font-family:var(--font-d);font-weight:400">Official Resources — ${getStateLabel(APP.studyState)}</h3>
      <div class="resource-grid">${resources.map(r=>`<a href="${r.url}" target="_blank" rel="noopener" class="resource-link"><span class="resource-label">${r.label}</span><span class="resource-arrow">↗</span></a>`).join('')}</div>
    </div>
  </div>`;
}

function saveProfile() {
  APP.profile.name=document.getElementById('setup-name')?.value||'';
  APP.profile.targetExam=document.getElementById('setup-exam')?.value||'';
  APP.profile.setupDone=true;
  APP.dailyGoal=parseInt(document.getElementById('setup-goal')?.value)||3;
  saveState(); navigate('dashboard'); showToast(t('toast_profile_saved'),'success');
}

// ─── MODAL ────────────────────────────────────────────────────
let _modalMode='study';
function openStateModal(mode='study') {
  _modalMode=mode;
  document.getElementById('modal-title-text').textContent=mode==='study'?'Select Study State':'Add State to Compare';
  document.getElementById('modal-search').value=''; buildModalGrid('');
  document.getElementById('state-modal').classList.add('open');
}
function closeStateModal() { document.getElementById('state-modal').classList.remove('open'); }
function buildModalGrid(query='') {
  const grid=document.getElementById('modal-grid'); if(!grid) return;
  grid.innerHTML=STATE_ORDER.filter(code=>{ if(!query) return true; const s=STATES_DATA?.[code]; return code.toLowerCase().includes(query.toLowerCase())||(s?.name||'').toLowerCase().includes(query.toLowerCase()); }).map(code=>{ const s=STATES_DATA?.[code]; const locked=!canAccessState(code); return`<div class="modal-item ${locked?'locked':''}" onclick="modalSelectState('${code}')"><div class="modal-item-code">${code}${locked?' 🔒':''}</div><div class="modal-item-name">${s?.name||code}</div></div>`; }).join('');
}
function filterModalStates(query) { buildModalGrid(query); }
function modalSelectState(code) { closeStateModal(); if(_modalMode==='study') setStudyState(code); else{ toggleCompare(code); navigate('compare'); } }

// ─── HELPERS ──────────────────────────────────────────────────
function escHtml(str) { return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function showToast(msg,type='info') {
  const toast=document.getElementById('toast'); const icon=document.getElementById('toast-icon'); const text=document.getElementById('toast-msg');
  if(!toast) return; icon.textContent=type==='success'?'✓':type==='error'?'✗':'ℹ'; text.textContent=msg;
  toast.className=`toast show toast-${type}`; setTimeout(()=>toast.classList.remove('show'),3000);
}
function exportProgress() {
  const data={studyState:APP.studyState,profile:APP.profile,progress:APP.progress,streak:APP.streak,tier:APP.tier};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`agentprep52-progress-${APP.studyState}-${new Date().toISOString().split('T')[0]}.json`; a.click(); URL.revokeObjectURL(a.href);
}
function importProgress(event) {
  const file=event.target.files?.[0]; if(!file) return;
  const reader=new FileReader(); reader.onload=(e)=>{ try{ const data=JSON.parse(e.target.result); if(data.progress) APP.progress=data.progress; if(data.profile) APP.profile=data.profile; if(data.streak) APP.streak=data.streak; saveState(); render(); showToast('Progress imported','success'); } catch{ showToast('Invalid file','error'); } }; reader.readAsText(file);
}
function resetProgress() { if(!confirm('Reset ALL progress? This cannot be undone.')) return; APP.progress={}; saveState(); render(); showToast('Progress reset','info'); }

// ─── INIT ─────────────────────────────────────────────────────
function init() {
  loadState(); applyTheme(APP.theme||'dark'); applyLanguageToNav();

  // ── POST-PAYMENT TIER UPGRADE ──────────────────────────────────
  // Stripe redirects back to ?tier=premium&paid=1 after successful payment.
  // We read that here, upgrade the tier, save it to Firebase, then clean the URL.
  const urlParams = new URLSearchParams(window.location.search);
  const paidTier  = urlParams.get('tier');
  const paid      = urlParams.get('paid');
  if(paid === '1' && (paidTier === 'premium' || paidTier === 'ai_premium')) {
    APP.tier = paidTier;
    saveState(); // saves to localStorage + Firebase if logged in
    // Clean URL so refresh doesn't re-trigger
    try { window.history.replaceState({}, document.title, window.location.pathname); } catch(e){}
    // Show confirmation after a short delay (Firebase may still be loading)
    setTimeout(()=>{
      showToast(paidTier === 'ai_premium' ? '🎉 AI Premium unlocked! Welcome.' : '🎉 Premium unlocked! All 52 states now available.', 'success');
    }, 1200);
  }

  // ── OPTION B: PRE-TRANSLATED ES CURRICULUM LOADER ─────────────
  // Tries to load XX_curriculum_es.js files when language is Spanish.
  // If the file doesn't exist (404), Option A (MutationObserver GT) handles it automatically.
  // To generate ES files: run the translation script (Option B) — until then this is a no-op.
  if(APP.language === 'es') {
    const state = APP.studyState || 'WA';
    const esFile = `${state}_curriculum_es.js`;
    const existing = document.querySelector(`script[src="${esFile}"]`);
    if(!existing) {
      const s = document.createElement('script');
      s.src = esFile;
      s.onerror = ()=>{}; // Silent fail — Option A (GT MutationObserver) takes over
      document.head.appendChild(s);
    }
  }

  document.querySelectorAll('.nav-item[data-view]').forEach(el=>{
    el.addEventListener('click',()=>{ const view=el.dataset.view; const track=el.dataset.track; if(track) navigate('modules',{track}); else navigate(view); });
  });
  if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
  initFirebase();
  if(!_fbReady||isLoggedIn()) render();
}

document.addEventListener('DOMContentLoaded',init);
