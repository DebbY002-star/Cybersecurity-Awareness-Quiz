const questions = [
  {
    category: "Passwords",
    q: "Which of these is the strongest password?",
    options: [
      "password123",
      "Mypet$Name2010!",
      "07/07/2003",
      "qwerty"
    ],
    correct: 1,
    explain: "Strong passwords mix upper/lowercase letters, numbers, and symbols, and avoid personal info like birthdays or pet names alone."
  },
  {
    category: "Phishing",
    q: "You receive an email saying 'Your account will be suspended, click here to verify now.' What should you do?",
    options: [
      "Click the link immediately to avoid losing access",
      "Reply with your password to confirm your identity",
      "Check the sender's actual email address and avoid clicking suspicious links",
      "Forward it to five friends to warn them"
    ],
    correct: 2,
    explain: "Urgent, threatening emails asking you to click links or share credentials are classic phishing tactics. Always verify the sender first."
  },
  {
    category: "Malware",
    q: "What is the safest way to get new software or apps?",
    options: [
      "Download from any website that appears in search results",
      "Use official app stores or the vendor's verified website",
      "Download from links shared in random group chats",
      "Use pirated versions to save money"
    ],
    correct: 1,
    explain: "Official app stores and verified vendor sites screen for malware, unlike random downloads which can carry hidden viruses."
  },
  {
    category: "Social Engineering",
    q: "A caller claims to be from your bank's IT department and asks for your PIN to 'fix an issue.' What's the right response?",
    options: [
      "Give the PIN since they said it's urgent",
      "Hang up and call your bank directly using the number on your card",
      "Give a fake PIN to test them",
      "Ask them to call back later"
    ],
    correct: 1,
    explain: "Legitimate banks never ask for your PIN over the phone. Always verify by contacting the institution directly through official channels."
  },
  {
    category: "Wi-Fi Safety",
    q: "Which of these is the biggest risk when using free public Wi-Fi?",
    options: [
      "Slower internet speed",
      "Attackers intercepting your data on an unsecured network",
      "Higher data charges",
      "Your battery draining faster"
    ],
    correct: 1,
    explain: "Public Wi-Fi is often unencrypted, letting attackers intercept traffic. Avoid logging into sensitive accounts on it, or use a VPN."
  },
  {
    category: "Two-Factor Authentication",
    q: "Why is two-factor authentication (2FA) recommended?",
    options: [
      "It makes login slower on purpose",
      "It adds a second layer of proof beyond just a password",
      "It replaces the need for a password",
      "It is only useful for businesses, not individuals"
    ],
    correct: 1,
    explain: "2FA requires something you know (password) plus something you have (a code or device), making accounts much harder to breach."
  },
  {
    category: "Social Media",
    q: "What's a safe social media habit?",
    options: [
      "Posting your live location in real time",
      "Accepting every friend or follow request",
      "Reviewing privacy settings and limiting what strangers can see",
      "Sharing your full date of birth and address publicly"
    ],
    correct: 2,
    explain: "Limiting what strangers can access reduces the risk of identity theft, stalking, and targeted scams."
  },
  {
    category: "Malware",
    q: "You plug in a USB drive you found in the school car park. What's the safest action?",
    options: [
      "Plug it into your laptop to see what's on it",
      "Give it to IT/security staff without plugging it in",
      "Plug it into a friend's laptop instead",
      "Format it first, then use it"
    ],
    correct: 1,
    explain: "Unknown USB drives are a common way to spread malware. Never plug in devices of unknown origin; hand them to IT or security."
  },
  {
    category: "Passwords",
    q: "How often should you reuse the same password across multiple accounts?",
    options: [
      "It's fine as long as the password is strong",
      "Never — each account should have a unique password",
      "Only for accounts you don't care about",
      "Every account should share one password for convenience"
    ],
    correct: 1,
    explain: "Reusing passwords means one breach can expose all your accounts. A password manager makes unique passwords easy to manage."
  },
  {
    category: "Phishing",
    q: "Which sign most strongly suggests an email might be a phishing attempt?",
    options: [
      "It was sent during work hours",
      "It has a company logo",
      "It creates urgency and asks you to act immediately via a link",
      "It has a long subject line"
    ],
    correct: 2,
    explain: "Urgency plus a call-to-action link is the classic phishing pattern designed to make you act before thinking."
  },
  {
    category: "Data Protection",
    q: "Before disposing of an old phone or laptop, you should:",
    options: [
      "Just delete the visible files",
      "Sell it as-is to save time",
      "Fully wipe/factory reset the device and remove storage if possible",
      "Give it away with your accounts still logged in"
    ],
    correct: 2,
    explain: "A factory reset clears personal data properly. Simply deleting files often leaves them recoverable."
  },
  {
    category: "Software Updates",
    q: "Why should you install software and OS updates promptly?",
    options: [
      "Updates are only for adding new features",
      "Updates often patch security vulnerabilities attackers exploit",
      "Updates are optional and rarely matter",
      "Updates slow your device down permanently"
    ],
    correct: 1,
    explain: "Many updates fix known security holes. Delaying them leaves your device exposed to attacks that already have public fixes."
  },
  {
    category: "Social Engineering",
    q: "A 'friend' messages you urgently asking for money via an unusual payment method, and their account seems slightly different. This is likely:",
    options: [
      "A normal request you should fulfil quickly",
      "A possible compromised or fake account impersonating your friend",
      "Proof your friend is in trouble, no need to verify",
      "Something to ignore and never think about again"
    ],
    correct: 1,
    explain: "Compromised or cloned accounts often ask contacts for urgent money transfers. Verify through another channel before sending anything."
  },
  {
    category: "Browsing Safety",
    q: "What does the padlock icon and 'https' in a browser address bar indicate?",
    options: [
      "The website is guaranteed to be trustworthy",
      "The connection between your browser and the site is encrypted",
      "The site has no ads",
      "The site is owned by the government"
    ],
    correct: 1,
    explain: "HTTPS encrypts data in transit, but it doesn't guarantee the site itself is legitimate — scam sites can use HTTPS too."
  },
  {
    category: "Incident Response",
    q: "If you suspect your account has been hacked, your first step should be:",
    options: [
      "Wait a few days to see what happens",
      "Change your password immediately and enable 2FA",
      "Delete the account permanently right away",
      "Post publicly asking if anyone else was hacked"
    ],
    correct: 1,
    explain: "Acting fast to change your password and enable 2FA can lock out an attacker before further damage is done."
  }
];

let current = 0;
let score = 0;
let answered = false;
const answersLog = [];
let quizOrder = [];

// Fisher-Yates shuffle — returns a new shuffled array, leaves the original untouched
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Shuffles a question's options too, so the correct answer isn't always in the same position
function shuffleQuestionOptions(question) {
  const correctText = question.options[question.correct];
  const newOptions = shuffleArray(question.options);
  return {
    ...question,
    options: newOptions,
    correct: newOptions.indexOf(correctText)
  };
}

// Builds a freshly randomised question set (order + option order) for a new attempt
function buildQuizOrder() {
  return shuffleArray(questions).map(shuffleQuestionOptions);
}

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const retryBtn = document.getElementById('retry-btn');

const startScreen = document.getElementById('start');
const quizScreen = document.getElementById('quiz');
const resultsScreen = document.getElementById('results');

document.getElementById('meta-total').textContent = questions.length;

startBtn.addEventListener('click', () => {
  quizOrder = buildQuizOrder();
  startScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
});

retryBtn.addEventListener('click', () => {
  quizOrder = buildQuizOrder();
  current = 0;
  score = 0;
  answered = false;
  answersLog.length = 0;
  resultsScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  renderQuestion();
});

nextBtn.addEventListener('click', () => {
  current++;
  if (current < quizOrder.length) {
    renderQuestion();
  } else {
    renderResults();
  }
});

function renderQuestion(){
  answered = false;
  const item = quizOrder[current];
  document.getElementById('scan-fill').style.width = ((current) / quizOrder.length * 100) + '%';
  document.getElementById('q-counter').textContent =
    `QUESTION ${String(current+1).padStart(2,'0')} / ${quizOrder.length}`;
  document.getElementById('q-score').textContent = `SCORE ${score}`;
  document.getElementById('q-category').textContent = item.category.toUpperCase();
  document.getElementById('question-text').textContent = item.q;

  const optionsEl = document.getElementById('options');
  optionsEl.innerHTML = '';
  item.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = `<span class="tag mono">${String.fromCharCode(65+idx)}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(idx));
    optionsEl.appendChild(btn);
  });

  const feedback = document.getElementById('feedback');
  feedback.classList.remove('show');
  feedback.textContent = '';
  nextBtn.classList.add('hidden');
}

function selectAnswer(idx){
  if (answered) return;
  answered = true;
  const item = quizOrder[current];
  const options = document.querySelectorAll('.option');
  options.forEach(o => o.setAttribute('disabled', 'true'));

  const isCorrect = idx === item.correct;
  if (isCorrect) score++;
  answersLog.push({ category: item.category, correct: isCorrect });

  options[idx].classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) options[item.correct].classList.add('correct');

  const feedback = document.getElementById('feedback');
  feedback.innerHTML = `<b>${isCorrect ? 'Correct.' : 'Not quite.'}</b> ${item.explain}`;
  feedback.classList.add('show');

  document.getElementById('q-score').textContent = `SCORE ${score}`;
  document.getElementById('scan-fill').style.width = ((current+1) / quizOrder.length * 100) + '%';

  nextBtn.textContent = (current === quizOrder.length - 1) ? 'See Results →' : 'Next Question →';
  nextBtn.classList.remove('hidden');
}

function renderResults(){
  quizScreen.classList.add('hidden');
  resultsScreen.classList.remove('hidden');

  const total = quizOrder.length;
  const pct = Math.round((score / total) * 100);
  document.getElementById('final-score').textContent = `${score} / ${total}`;

  const tag = document.getElementById('verdict-tag');
  let verdictText, color;
  if (pct >= 80){
    verdictText = 'CLEARANCE: SECURE';
    color = 'var(--safe)';
  } else if (pct >= 50){
    verdictText = 'CLEARANCE: MODERATE RISK';
    color = 'var(--warn)';
  } else {
    verdictText = 'CLEARANCE: AT RISK';
    color = 'var(--danger)';
  }
  tag.textContent = verdictText;
  tag.style.color = color;
  tag.style.background = color === 'var(--safe)' ? 'rgba(0,217,163,0.12)'
    : color === 'var(--warn)' ? 'rgba(255,176,32,0.12)'
    : 'rgba(255,71,87,0.12)';
  tag.style.border = `1px solid ${color}`;

  // category breakdown
  const byCategory = {};
  answersLog.forEach(a => {
    if (!byCategory[a.category]) byCategory[a.category] = { correct: 0, total: 0 };
    byCategory[a.category].total++;
    if (a.correct) byCategory[a.category].correct++;
  });

  const breakdown = document.getElementById('breakdown');
  breakdown.innerHTML = '';
  Object.keys(byCategory).forEach(cat => {
    const d = byCategory[cat];
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `<span>${cat}</span><b>${d.correct} / ${d.total}</b>`;
    breakdown.appendChild(row);
  });
}
