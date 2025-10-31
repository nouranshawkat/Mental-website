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
    { title: 'Understanding Depression', category: 'Depression', excerpt: 'Depression is more than sadness. Learn the signs and coping strategies.', icon: '🧠', link: 'https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007', image: 'https://eudaimonic.co.uk/wp-content/uploads/2020/04/Therapy-Unlimited-Depression.jpg' },
    { title: 'Managing Anxiety Disorders', category: 'Anxiety', excerpt: 'Explore proven techniques to manage anxiety and panic attacks.', icon: '💙', link: 'https://www.medicalnewstoday.com/articles/323454', image: 'https://peninsulahealthcenter.com/wp-content/uploads/2023/09/shutterstock_1970640311-scaled.jpg' },
    { title: 'Bipolar Disorder Explained', category: 'Bipolar', excerpt: 'A comprehensive guide to understanding mood episodes and treatment.', icon: '🌙', link: 'https://en.wikipedia.org/wiki/Bipolar_disorder', image: 'https://4.bp.blogspot.com/-4PZF1lj6_pM/VDtcYDe4WCI/AAAAAAAAAZA/QXT56R50CZ0/s1600/34980b84dae10c2b4e30e80436dc9b25.jpg' },
    { title: 'PTSD Recovery Guide', category: 'PTSD', excerpt: 'Healing from trauma with evidence-based therapeutic approaches.', icon: '🕊️', link: 'https://neurolaunch.com/ptsd-recovery-stages/', image: 'https://therapymantra.co/wp-content/uploads/2022/04/ptsd.jpg' },
    { title: 'OCD Management Tips', category: 'OCD', excerpt: 'Understanding intrusive thoughts and breaking the cycle.', icon: '✨', link: 'https://www.treatmyocd.com/blog/6-best-strategies-to-combat-obsessive-compulsive-disorder', image: 'https://media.istockphoto.com/id/694068988/photo/obsessive-compulsive-disorder.webp?a=1&b=1&s=612x612&w=0&k=20&c=I5eq0QWRcXJZyEQL6ZGrq2_U0ndjt7YK1vO5blvJYcA=' },
    { title: 'ADHD in Adults', category: 'ADHD', excerpt: 'Recognizing ADHD symptoms and strategies for daily life.', icon: '⚡', link: 'https://www.healthline.com/health/adhd/adult-adhd', image: 'https://images.onlymyhealth.com/imported/images/2024/October/23_Oct_2024/mn-ADHD-adults.jpg' }
];

// Doctors Data
const doctors = [
    { name: 'Dr. Sarah Ahmed', specialty: 'Psychiatrist', country: 'Egypt', city: 'Cairo', rating: '4.8', experience: '12 years', avatar: '👩‍⚕️' },
    { name: 'Dr. James Wilson', specialty: 'Psychologist', country: 'USA', city: 'New York', rating: '4.9', experience: '10 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Fatima Hassan', specialty: 'Clinical Psychologist', country: 'Egypt', city: 'Alexandria', rating: '4.7', experience: '8 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Ahmed Karim', specialty: 'Psychiatrist', country: 'Egypt', city: 'Cairo', rating: '4.6', experience: '15 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Emily Brown', specialty: 'Psychologist', country: 'USA', city: 'New York', rating: '4.8', experience: '9 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Marcus Jones', specialty: 'Counselor', country: 'UK', city: 'London', rating: '4.7', experience: '7 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Leila Mostafa', specialty: 'Clinical Psychologist', country: 'Egypt', city: 'Giza', rating: '4.9', experience: '11 years', avatar: '👩‍⚕️' },
    { name: 'Dr. David Chen', specialty: 'Psychiatrist', country: 'USA', city: 'Los Angeles', rating: '4.8', experience: '13 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Sophia Garcia', specialty: 'Psychologist', country: 'USA', city: 'Miami', rating: '4.7', experience: '10 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Noor Al-Rashid', specialty: 'Counselor', country: 'UAE', city: 'Dubai', rating: '4.8', experience: '9 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Oliver Thompson', specialty: 'Psychiatrist', country: 'UK', city: 'Manchester', rating: '4.6', experience: '14 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Amara Okafor', specialty: 'Clinical Psychologist', country: 'UK', city: 'London', rating: '4.9', experience: '8 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Hassan El-Sayed', specialty: 'Psychologist', country: 'Egypt', city: 'Cairo', rating: '4.7', experience: '11 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Rachel Morrison', specialty: 'Counselor', country: 'USA', city: 'Chicago', rating: '4.8', experience: '7 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Khalid Al-Mansoori', specialty: 'Psychiatrist', country: 'UAE', city: 'Abu Dhabi', rating: '4.7', experience: '12 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Isabella Romano', specialty: 'Psychologist', country: 'UK', city: 'Liverpool', rating: '4.8', experience: '9 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Youssef Mansour', specialty: 'Clinical Psychologist', country: 'Egypt', city: 'Alexandria', rating: '4.6', experience: '10 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Anna Williams', specialty: 'Psychiatrist', country: 'USA', city: 'Boston', rating: '4.9', experience: '11 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Mohamed Ibrahim', specialty: 'Counselor', country: 'Egypt', city: 'Cairo', rating: '4.7', experience: '8 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Sarah Richardson', specialty: 'Psychologist', country: 'UK', city: 'Birmingham', rating: '4.8', experience: '10 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Amir Al-Hakim', specialty: 'Psychiatrist', country: 'UAE', city: 'Sharjah', rating: '4.6', experience: '13 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Jessica Turner', specialty: 'Clinical Psychologist', country: 'USA', city: 'Seattle', rating: '4.8', experience: '9 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Tarek Eldin', specialty: 'Counselor', country: 'Egypt', city: 'Giza', rating: '4.8', experience: '7 years', avatar: '👨‍⚕️' },
    { name: 'Dr. Nicole Dubois', specialty: 'Psychiatrist', country: 'UK', city: 'Leeds', rating: '4.7', experience: '12 years', avatar: '👩‍⚕️' },
    { name: 'Dr. Rashid Al-Kaabi', specialty: 'Psychologist', country: 'UAE', city: 'Dubai', rating: '4.9', experience: '11 years', avatar: '👨‍⚕️' }
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
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(pageName).classList.add('active');
    currentPage = pageName;

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

    closeMobileMenu();
    
    // Initialize page content when navigating
    if (pageName === 'articles') {
        renderCategoryFilters();
        filterArticles(null);
    } else if (pageName === 'doctors') {
        renderDoctors(doctors);
    }

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

// ========== ARTICLES PAGE ==========

function renderCategoryFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = 'category-btn active';
    allBtn.textContent = 'All';
    allBtn.onclick = () => filterArticles(null);
    categoryFilter.appendChild(allBtn);

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
        
        const header = document.createElement('div');
        header.className = 'article-header';
        header.style.backgroundImage = `url(${article.image})`;
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
        card.appendChild(header);

        const body = document.createElement('div');
        body.className = 'article-body';
        
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'article-category';
        categoryDiv.textContent = article.category;
        body.appendChild(categoryDiv);

        const titleDiv = document.createElement('div');
        titleDiv.className = 'article-title';
        titleDiv.textContent = article.title;
        body.appendChild(titleDiv);

        const excerptDiv = document.createElement('div');
        excerptDiv.className = 'article-excerpt';
        excerptDiv.textContent = article.excerpt;
        body.appendChild(excerptDiv);

        const readMore = document.createElement('div');
        readMore.className = 'read-more';
        const link = document.createElement('a');
        link.href = article.link;
        link.target = '_blank';
        link.textContent = 'Read More →';
        readMore.appendChild(link);
        body.appendChild(readMore);

        card.appendChild(body);
        articlesGrid.appendChild(card);
    });

    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if ((!category && btn.textContent === 'All') || (btn.textContent === category)) {
            btn.classList.add('active');
        }
    });
}

// ========== DOCTORS PAGE ==========

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
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.textContent = 'No doctors found matching your criteria.';
        doctorsContainer.appendChild(emptyState);
        return;
    }

    doctorsList.forEach(doctor => {
        const card = document.createElement('div');
        card.className = 'doctor-card';

        const avatar = document.createElement('div');
        avatar.className = 'doctor-avatar';
        avatar.textContent = doctor.avatar;
        card.appendChild(avatar);

        const info = document.createElement('div');
        info.className = 'doctor-info';

        const name = document.createElement('div');
        name.className = 'doctor-name';
        name.textContent = doctor.name;
        info.appendChild(name);

        const specialty = document.createElement('div');
        specialty.className = 'doctor-specialty';
        specialty.textContent = doctor.specialty;
        info.appendChild(specialty);

        const details = document.createElement('div');
        details.className = 'doctor-details';
        details.innerHTML = `
            <span>📍 ${doctor.city}, ${doctor.country}</span>
            <span>⏱️ ${doctor.experience}</span>
            <span class="doctor-rating">⭐ ${doctor.rating}</span>
        `;
        info.appendChild(details);

        card.appendChild(info);

        const actions = document.createElement('div');
        actions.className = 'doctor-actions';

        const callBtn = document.createElement('button');
        callBtn.className = 'action-btn';
        callBtn.textContent = '📞 Call';
        callBtn.onclick = () => contactDoctor(doctor.name, 'call');
        actions.appendChild(callBtn);

        const messageBtn = document.createElement('button');
        messageBtn.className = 'action-btn';
        messageBtn.textContent = '💬 Message';
        messageBtn.onclick = () => contactDoctor(doctor.name, 'message');
        actions.appendChild(messageBtn);

        const saveBtn = document.createElement('button');
        saveBtn.className = 'action-btn';
        saveBtn.textContent = '❤️ Save';
        saveBtn.onclick = () => saveDoctor(doctor.name);
        actions.appendChild(saveBtn);

        card.appendChild(actions);
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

    const userMsg = document.createElement('div');
    userMsg.className = 'message user-message';
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);

    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

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

    for (let keyword in botResponses) {
        if (lowerMessage.includes(keyword)) {
            return botResponses[keyword];
        }
    }

    return 'Thank you for sharing. Remember, seeking help is a sign of strength, not weakness. Would you like to explore our resources or find a professional?';
}

// ========== FLASHCARD PAGE ==========

function shuffleCards() {
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
    
    cards.forEach((card, index) => {
        if (index !== position) {
            card.style.opacity = '0.3';
            card.style.transform = 'translateY(20px) scale(0.8)';
            card.style.pointerEvents = 'none';
        }
    });
    
    selectedCard.classList.add('selected');
    selectedCard.style.transform = 'scale(1.2) rotateY(360deg)';
    
    setTimeout(() => {
        showRevealedMessage(position);
        updateStreak();
    }, 800);
}

function showRevealedMessage(cardIndex) {
    const messageContainer = document.getElementById('messageContainer');
    const selectedMessage = window.selectedCards[cardIndex];

    const revealedMsg = document.createElement('div');
    revealedMsg.className = 'revealed-message';

    const title = document.createElement('h3');
    title.textContent = '✨ Your Daily Motivation ✨';
    revealedMsg.appendChild(title);

    const text = document.createElement('p');
    text.textContent = `"${selectedMessage}"`;
    revealedMsg.appendChild(text);

    messageContainer.appendChild(revealedMsg);

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
        return;
    } else if (lastPlayed === yesterdayStr) {
        currentStreak += 1;
    } else if (lastPlayed !== yesterdayStr && lastPlayed !== null) {
        currentStreak = 1;
    } else {
        currentStreak = 1;
    }
    
    localStorage.setItem('motivationStreak', currentStreak.toString());
    localStorage.setItem('lastMotivationDate', today);
    
    const streakElement = document.getElementById('streakCount');
    if (streakElement) {
        streakElement.textContent = currentStreak;
    }
    
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

// ========== CONSULTATION FORM ==========

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

// ========== INITIALIZE ON LOAD ==========

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    shuffleCards();
    addCardHoverEffects();
});