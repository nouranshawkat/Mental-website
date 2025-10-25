// ========== GLOBAL VARIABLES ==========
let currentPage = 'home';
let currentCardIndex = 0;
let isFlipped = false;
let selectedCategory = null;
let gameActive = true;
let selectedCardIndex = null;
let selectedCards = [];

// ========== DATA ==========

// Articles Data
const articles = [
    { title: 'Understanding Depression', category: 'Depression', excerpt: 'Depression is more than sadness. Learn the signs and coping strategies.', icon: '🧠' },
    { title: 'Managing Anxiety Disorders', category: 'Anxiety', excerpt: 'Explore proven techniques to manage anxiety and panic attacks.', icon: '💙' },
    { title: 'Bipolar Disorder Explained', category: 'Bipolar', excerpt: 'A comprehensive guide to understanding mood episodes and treatment.', icon: '🌙' },
    { title: 'PTSD Recovery Guide', category: 'PTSD', excerpt: 'Healing from trauma with evidence-based therapeutic approaches.', icon: '🕊️' },
    { title: 'OCD Management Tips', category: 'OCD', excerpt: 'Understanding intrusive thoughts and breaking the cycle.', icon: '✨' },
    { title: 'ADHD in Adults', category: 'ADHD', excerpt: 'Recognizing ADHD symptoms and strategies for daily life.', icon: '⚡' }
];

// Doctors Data
const doctors = [
    { name: 'Dr. Sarah Ahmed', specialty: 'Psychiatrist', country: 'Egypt', city: 'Cairo', rating: '4.8', experience: '12 years', avatar: '👩‍⚕️' },
    { name: 'Dr. James Wilson', specialty: 'Psychologist', country: 'USA', city: 'New York', rating: '4.9', experience: '10 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Fatima Hassan', specialty: 'Clinical Psychologist', country: 'Egypt', city: 'Alexandria', rating: '4.7', experience: '8 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Ahmed Karim', specialty: 'Psychiatrist', country: 'Egypt', city: 'Cairo', rating: '4.6', experience: '15 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Emily Brown', specialty: 'Psychologist', country: 'USA', city: 'New York', rating: '4.8', experience: '9 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Marcus Jones', specialty: 'Counselor', country: 'UK', city: 'London', rating: '4.7', experience: '7 years', avatar: '👨‍⚕️' }
];

// Motivation Cards Data
const motivationCards = [
    "You are stronger than you think, and braver than you feel.",
    "This moment will pass, and you will be okay.",
    "Your mental health matters just as much as your physical health.",
    "It's okay to not be okay sometimes. Healing takes time.",
    "Healing is not linear, and that's perfectly fine.",
    "You deserve kindness, especially from yourself.",
    "Small steps lead to big changes. Keep moving forward.",
    "Your story is not over yet. There are beautiful chapters ahead.",
    "Progress, not perfection. Every step counts.",
    "You are not alone in this journey. Support is always available.",
    "Be gentle with yourself today. You're doing the best you can.",
    "This too shall pass. Storms don't last forever.",
    "Every day is a fresh start and a new opportunity to grow.",
    "Your feelings are valid, and it's okay to feel them fully.",
    "You've survived 100% of your worst days. That's an amazing track record.",
    "Recovery is possible and worth fighting for. You are worth it.",
    "You matter more than you know. Your presence makes a difference.",
    "Tomorrow is a new opportunity to create positive change.",
    "Your courage to keep going inspires others, even when you don't see it.",
    "Self-care isn't selfish. It's necessary for your wellbeing.",
    "You have the power to rewrite your story, one day at a time.",
    "Asking for help is a sign of strength, not weakness.",
    "You are worthy of love, happiness, and all good things in life.",
    "Every breath you take is a victory. Keep breathing, keep fighting."
];

// Chatbot Bot Responses
const botResponses = {
    'anxiety': 'I understand anxiety can be overwhelming. Would you like to learn about anxiety management techniques?',
    'depression': 'Depression is a serious condition. Please consider reaching out to a mental health professional. Would you like me to help you find a doctor?',
    'help': 'I\'m here to help! You can explore articles, find doctors, or talk to me about how you\'re feeling.',
    'sad': 'I hear you. It\'s important to acknowledge your feelings. Would you like some coping strategies?',
    'stress': 'Stress is common. Let\'s talk about what\'s causing it and find ways to manage it.',
    'hello': 'Hi there! 👋 How can I support you today?',
    'hi': 'Hello! I\'m here to listen. What\'s on your mind?',
    'thanks': 'You\'re welcome! I\'m always here if you need support.',
    'suicide': 'If you\'re having thoughts of suicide, please reach out to emergency services or a crisis hotline immediately. You are not alone.',
    'crisis': 'If you\'re in crisis, please contact emergency services or a crisis helpline immediately.'
};

// ========== NAVIGATION FUNCTIONS ==========

function navigateTo(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    document.getElementById(pageName).classList.add('active');
    currentPage = pageName;

    // Update navigation buttons
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));
    
    const navButtonMap = {
        'home': 0,
        'articles': 1,
        'doctors': 2,
        'chatbot': 3,
        'flashcard': 4
    };

    if (navButtonMap[pageName] !== undefined) {
        navBtns[navButtonMap[pageName]].classList.add('active');
    }

    // Close mobile menu
    closeMobileMenu();

    // Initialize page content
    if (pageName === 'home') {
        initHome();
    } else if (pageName === 'articles') {
        initArticles();
    } else if (pageName === 'doctors') {
        initDoctors();
    } else if (pageName === 'chatbot') {
        initChatbot();
    } else if (pageName === 'flashcard') {
        initFlashcard();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');
}

// ========== HOME PAGE ==========

function initHome() {
    const homePage = document.getElementById('home');
    
    homePage.innerHTML = `
        <div class="hero">
            <div class="hero-icon">🧠</div>
            <h1>Welcome to MentIQ</h1>
            <p>Raising awareness isn't just about speaking out — it's about helping someone find light in their darkest moment</p>
            <div class="hero-buttons">
                <button class="btn btn-primary" onclick="navigateTo('articles')">Explore Articles</button>
                <button class="btn btn-secondary" onclick="navigateTo('doctors')">Find a Doctor</button>
            </div>
        </div>

        <div class="features">
            <div class="feature-card">
                <div class="icon">📚</div>
                <h3>Learn</h3>
                <p>Educational articles on mental health conditions</p>
            </div>
            <div class="feature-card">
                <div class="icon">👨‍⚕️</div>
                <h3>Connect</h3>
                <p>Find qualified mental health professionals</p>
            </div>
            <div class="feature-card">
                <div class="icon">🤖</div>
                <h3>Support</h3>
                <p>AI chatbot for initial guidance and support</p>
            </div>
            <div class="feature-card">
                <div class="icon">✨</div>
                <h3>Motivate</h3>
                <p>Daily motivation and positive affirmations</p>
            </div>
        </div>
        
        <!-- Contact Section -->
        <div class="contact-section">
            <h2 class="section-title">Book Online Consultation</h2>
            <p class="section-subtitle">Connect with a mental health specialist for personalized support</p>
            <div class="contact-container">
                <div class="contact-form-card">
                    <form class="contact-form" onsubmit="submitConsultation(event)">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Full Name</label>
                                <input type="text" id="contactName" required>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" id="contactEmail" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="tel" id="contactPhone" required>
                            </div>
                            <div class="form-group">
                                <label>Preferred Date</label>
                                <input type="date" id="consultationDate" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Consultation Type</label>
                            <select id="consultationType" required>
                                <option value="">Select consultation type</option>
                                <option value="anxiety">Anxiety & Stress</option>
                                <option value="depression">Depression</option>
                                <option value="therapy">General Therapy</option>
                                <option value="couples">Couples Counseling</option>
                                <option value="family">Family Therapy</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Message (Optional)</label>
                            <textarea id="consultationMessage" rows="4" placeholder="Tell us about your concerns or what you'd like to discuss..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary contact-btn">📅 Book Consultation</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

// ========== ARTICLES PAGE ==========

function initArticles() {
    const articlesPage = document.getElementById('articles');
    
    articlesPage.innerHTML = `
        <h2 class="page-title">Mental Health Articles</h2>
        <div class="category-filter" id="categoryFilter"></div>
        <div class="articles-grid" id="articlesGrid"></div>
    `;

    renderCategoryFilters();
    filterArticles(null);
}

function renderCategoryFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.innerHTML = '';

    // Add "All" button
    const allBtn = document.createElement('button');
    allBtn.className = 'category-btn active';
    allBtn.textContent = 'All';
    allBtn.onclick = () => filterArticles(null);
    categoryFilter.appendChild(allBtn);

    // Add category buttons
    const categories = [...new Set(articles.map(a => a.category))];
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.textContent = category;
        btn.onclick = () => filterArticles(category);
        categoryFilter.appendChild(btn);
    });
}

function filterArticles(category) {
    selectedCategory = category;
    const filtered = category ? articles.filter(a => a.category === category) : articles;
    
    const articlesGrid = document.getElementById('articlesGrid');
    articlesGrid.innerHTML = '';

    filtered.forEach(article => {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.innerHTML = `
            <div class="article-header">${article.icon}</div>
            <div class="article-body">
                <div class="article-category">${article.category}</div>
                <div class="article-title">${article.title}</div>
                <div class="article-excerpt">${article.excerpt}</div>
                <div class="read-more">Read More →</div>
            </div>
        `;
        articlesGrid.appendChild(card);
    });

    // Update category button states
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if ((!category && btn.textContent === 'All') || (btn.textContent === category)) {
            btn.classList.add('active');
        }
    });
}

// ========== DOCTORS PAGE ==========

function initDoctors() {
    const doctorsPage = document.getElementById('doctors');
    
    doctorsPage.innerHTML = `
        <h2 class="page-title">Find a Mental Health Professional</h2>
        <div class="filters-section">
            <div class="filter-group">
                <div>
                    <label>Country</label>
                    <select id="countryFilter" onchange="applyDoctorFilters()">
                        <option value="">All Countries</option>
                        <option value="Egypt">Egypt</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="UAE">UAE</option>
                    </select>
                </div>
                <div>
                    <label>City</label>
                    <select id="cityFilter" onchange="applyDoctorFilters()">
                        <option value="">All Cities</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="New York">New York</option>
                        <option value="London">London</option>
                    </select>
                </div>
                <div>
                    <label>Specialty</label>
                    <select id="specialtyFilter" onchange="applyDoctorFilters()">
                        <option value="">All Specialties</option>
                        <option value="Psychiatrist">Psychiatrist</option>
                        <option value="Psychologist">Psychologist</option>
                        <option value="Clinical Psychologist">Clinical Psychologist</option>
                        <option value="Counselor">Counselor</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="doctors-list" id="doctorsList"></div>
    `;

    renderDoctors(doctors);
}

function applyDoctorFilters() {
    const country = document.getElementById('countryFilter').value;
    const city = document.getElementById('cityFilter').value;
    const specialty = document.getElementById('specialtyFilter').value;

    const filtered = doctors.filter(doctor => {
        return (!country || doctor.country === country) &&
               (!city || doctor.city === city) &&
               (!specialty || doctor.specialty === specialty);
    });

    renderDoctors(filtered);
}

function renderDoctors(doctorsList) {
    const doctorsContainer = document.getElementById('doctorsList');
    doctorsContainer.innerHTML = '';

    if (doctorsList.length === 0) {
        doctorsContainer.innerHTML = '<div class="empty-state">No doctors found matching your criteria.</div>';
        return;
    }

    doctorsList.forEach(doctor => {
        const card = document.createElement('div');
        card.className = 'doctor-card';
        card.innerHTML = `
            <div class="doctor-avatar">${doctor.avatar}</div>
            <div class="doctor-info">
                <div class="doctor-name">${doctor.name}</div>
                <div class="doctor-specialty">${doctor.specialty}</div>
                <div class="doctor-details">
                    <span>📍 ${doctor.city}, ${doctor.country}</span>
                    <span>⏱️ ${doctor.experience}</span>
                    <span class="doctor-rating">⭐ ${doctor.rating}</span>
                </div>
            </div>
            <div class="doctor-actions">
                <button class="action-btn" onclick="contactDoctor('${doctor.name}', 'call')">📞 Call</button>
                <button class="action-btn" onclick="contactDoctor('${doctor.name}', 'message')">💬 Message</button>
                <button class="action-btn" onclick="saveDoctor('${doctor.name}')">❤️ Save</button>
            </div>
        `;
        doctorsContainer.appendChild(card);
    });
}

function contactDoctor(doctorName, type) {
    const action = type === 'call' ? 'Calling' : 'Messaging';
    alert(`${action} Dr. ${doctorName}...`);
}

function saveDoctor(doctorName) {
    alert(`Saved Dr. ${doctorName} to your favorites!`);
}

// ========== CHATBOT PAGE ==========

function initChatbot() {
    const chatbotPage = document.getElementById('chatbot');
    
    chatbotPage.innerHTML = `
        <h2 class="page-title">Mental Health Support Chatbot</h2>
        <div class="chat-container">
            <div class="chat-header">💬 MentIQ Assistant</div>
            <div class="chat-messages" id="chatMessages">
                <div class="message bot-message">
                    Hello! 👋 I'm here to listen and support you. Please share what's on your mind.
                </div>
            </div>
            <div class="chat-input-area">
                <input type="text" id="chatInput" placeholder="Type your message..." onkeypress="handleChatKeypress(event)">
                <button class="send-btn" onclick="sendChatMessage()">Send</button>
            </div>
        </div>
    `;
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();

    if (message === '') return;

    const chatMessages = document.getElementById('chatMessages');

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user-message';
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);

    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Add bot response after delay
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'message bot-message';
        botMsg.textContent = getBotResponse(message);
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Check for keywords
    for (let keyword in botResponses) {
        if (lowerMessage.includes(keyword)) {
            return botResponses[keyword];
        }
    }

    // Default response
    return 'Thank you for sharing. Remember, seeking help is a sign of strength, not weakness. Would you like to explore our resources or find a professional?';
}

// ========== FLASHCARD PAGE ==========

function initFlashcard() {
    const flashcardPage = document.getElementById('flashcard');
    
    flashcardPage.innerHTML = `
        <h2 class="page-title">Daily Motivation Challenge</h2>
        <div class="flashcard-container">
            <div class="streak-counter">🔥 Streak: <span id="streakCount">${getStreak()}</span> days</div>
            <p class="game-title">Choose a card to reveal your daily motivation message</p>
            <div class="cards-wrapper" id="cardsWrapper">
                <div class="flashcard left" onclick="selectCard(0)">✨</div>
                <div class="flashcard center" onclick="selectCard(1)">💫</div>
                <div class="flashcard right" onclick="selectCard(2)">⭐</div>
            </div>
            <div id="messageContainer"></div>
            <div class="game-buttons" id="gameButtons" style="display: none;">
                <button class="card-btn card-btn-primary" onclick="resetGame()">🎲 Play Again</button>
                <button class="card-btn card-btn-secondary" onclick="saveSelectedCard()">💾 Save Message</button>
            </div>
        </div>
    `;

    shuffleCards();
    addCardHoverEffects();
}

function shuffleCards() {
    // Shuffle motivation cards and select 3 random ones
    const shuffled = [...motivationCards].sort(() => 0.5 - Math.random());
    window.selectedCards = shuffled.slice(0, 3);
    window.gameActive = true;
    window.selectedCardIndex = null;
}

function addCardHoverEffects() {
    const cards = document.querySelectorAll('.flashcard');
    
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            if (window.gameActive) {
                card.style.transform = getCardTransform(index, true);
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (window.gameActive && !card.classList.contains('selected')) {
                card.style.transform = getCardTransform(index, false);
            }
        });
    });
}

function getCardTransform(index, isHover) {
    const baseTransforms = {
        0: isHover ? 'translateY(-15px) rotateY(-10deg) scale(1.05)' : 'rotateY(-15deg)',
        1: isHover ? 'translateY(-15px) scale(1.15)' : 'scale(1.1)',
        2: isHover ? 'translateY(-15px) rotateY(10deg) scale(1.05)' : 'rotateY(15deg)'
    };
    return baseTransforms[index];
}

function selectCard(position) {
    if (!window.gameActive) return;

    window.gameActive = false;
    window.selectedCardIndex = position;

    const cards = document.querySelectorAll('.flashcard');
    const selectedCard = cards[position];
    
    // Animate non-selected cards away
    cards.forEach((card, index) => {
        if (index !== position) {
            card.style.opacity = '0.3';
            card.style.transform = 'translateY(20px) scale(0.8)';
            card.style.pointerEvents = 'none';
        }
    });
    
    // Animate selected card
    selectedCard.classList.add('selected');
    selectedCard.style.transform = 'scale(1.2) rotateY(360deg)';
    
    // Show message after animation
    setTimeout(() => {
        showRevealedMessage(position);
        updateStreak();
    }, 800);
}

function showRevealedMessage(cardIndex) {
    const messageContainer = document.getElementById('messageContainer');
    const selectedMessage = window.selectedCards[cardIndex];

    messageContainer.innerHTML = `
        <div class="revealed-message">
            <h3>✨ Your Daily Motivation ✨</h3>
            <p>"${selectedMessage}"</p>
        </div>
    `;

    // Show game buttons with delay
    setTimeout(() => {
        document.getElementById('gameButtons').style.display = 'flex';
    }, 300);
}

function resetGame() {
    window.selectedCardIndex = null;
    window.gameActive = true;
    
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = '';
    
    document.getElementById('gameButtons').style.display = 'none';

    const cards = document.querySelectorAll('.flashcard');
    const cardIcons = ['✨', '💫', '⭐'];
    
    cards.forEach((card, index) => {
        card.classList.remove('selected');
        card.textContent = cardIcons[index];
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
        card.style.transform = getCardTransform(index, false);
    });

    shuffleCards();
    addCardHoverEffects();
}

function saveSelectedCard() {
    if (window.selectedCardIndex !== null) {
        const message = window.selectedCards[window.selectedCardIndex];
        const savedMessages = JSON.parse(localStorage.getItem('savedMotivations') || '[]');
        
        if (!savedMessages.includes(message)) {
            savedMessages.push(message);
            localStorage.setItem('savedMotivations', JSON.stringify(savedMessages));
            alert(`💾 Message saved successfully!\n\n"${message}"\n\nYou now have ${savedMessages.length} saved messages.`);
        } else {
            alert('📝 This message is already in your saved collection!');
        }
    }
}

function getStreak() {
    const lastPlayed = localStorage.getItem('lastMotivationDate');
    const today = new Date().toDateString();
    const streak = parseInt(localStorage.getItem('motivationStreak') || '0');
    
    if (lastPlayed === today) {
        return streak;
    }
    
    return streak;
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastPlayed = localStorage.getItem('lastMotivationDate');
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    let currentStreak = parseInt(localStorage.getItem('motivationStreak') || '0');
    
    if (lastPlayed === today) {
        // Already played today, don't update streak
        return;
    } else if (lastPlayed === yesterdayStr) {
        // Played yesterday, increment streak
        currentStreak += 1;
    } else if (lastPlayed !== yesterdayStr && lastPlayed !== null) {
        // Missed a day, reset streak
        currentStreak = 1;
    } else {
        // First time playing
        currentStreak = 1;
    }
    
    localStorage.setItem('motivationStreak', currentStreak.toString());
    localStorage.setItem('lastMotivationDate', today);
    
    document.getElementById('streakCount').textContent = currentStreak;
    
    // Show streak celebration for milestones
    if (currentStreak > 1 && currentStreak % 5 === 0) {
        setTimeout(() => {
            alert(`🎉 Amazing! You've reached a ${currentStreak}-day streak! Keep it up!`);
        }, 1000);
    }
}

// ========== DARK MODE TOGGLE ==========

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-mode');
    
    const isDarkMode = body.classList.contains('dark-mode');
    const icon = isDarkMode ? '☀️' : '🌙';
    
    if (themeToggle) themeToggle.textContent = icon;
    
    localStorage.setItem('darkMode', isDarkMode);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('darkMode');
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = '☀️';
    }
}

// ========== INITIALIZE ON LOAD ==========

function submitConsultation(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const date = document.getElementById('consultationDate').value;
    const type = document.getElementById('consultationType').value;
    const message = document.getElementById('consultationMessage').value;
    
    const consultation = {
        id: Date.now().toString(),
        name: name,
        email: email,
        phone: phone,
        date: date,
        type: type,
        message: message,
        status: 'pending',
        submittedAt: new Date().toISOString()
    };
    
    const consultations = JSON.parse(localStorage.getItem('consultations') || '[]');
    consultations.push(consultation);
    localStorage.setItem('consultations', JSON.stringify(consultations));
    
    alert('🎉 Consultation request submitted successfully!\n\nWe will contact you within 24 hours to confirm your appointment.');
    
    event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    navigateTo('home');
});