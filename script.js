// Y2K Queens Personality Quiz
const quizData = {
    questions: [
        {
            question: "What's your ideal Y2K outfit for a night out?",
            answers: [
                { text: "Pink velour tracksuit with rhinestones ✨", scores: { paris: 3, britney: 1, lindsay: 1 } },
                { text: "Low-rise jeans with a bedazzled top 💎", scores: { nicole: 3, bling: 2, gwen: 1 } },
                { text: "Plaid skirt with knee-high socks 🎀", scores: { britney: 3, lindsay: 2 } },
                { text: "Punk-inspired look with colorful streaks 🎸", scores: { gwen: 3, lindsay: 1 } }
            ]
        },
        {
            question: "What's your go-to Y2K accessory?",
            answers: [
                { text: "Tiny designer handbag (the smaller, the better!) 👜", scores: { paris: 3, bling: 2 } },
                { text: "Chunky plastic jewelry in bright colors 💫", scores: { gwen: 3, nicole: 1 } },
                { text: "Hair clips and butterfly accessories 🦋", scores: { britney: 3, lindsay: 2 } },
                { text: "Oversized hoop earrings ⭐", scores: { lindsay: 3, nicole: 2, bling: 1 } }
            ]
        },
        {
            question: "How do you take your selfies?",
            answers: [
                { text: "Duck face with heavy glitter eyeshadow ✨", scores: { paris: 3, bling: 1 } },
                { text: "Sweet smile with perfect lighting 😊", scores: { britney: 3, lindsay: 1 } },
                { text: "Edgy pose with bold makeup 🔥", scores: { gwen: 3, lindsay: 2 } },
                { text: "Casual but always looking flawless 💎", scores: { nicole: 3, paris: 1 } }
            ]
        },
        {
            question: "What's your dream Y2K career?",
            answers: [
                { text: "Reality TV star and socialite 📺", scores: { paris: 3, bling: 2 } },
                { text: "Pop princess and performer 🎤", scores: { britney: 3, lindsay: 1 } },
                { text: "Actress in teen movies 🎬", scores: { lindsay: 3, nicole: 1 } },
                { text: "Rock star with my own band 🎸", scores: { gwen: 3 } }
            ]
        },
        {
            question: "What's your Y2K phone essential?",
            answers: [
                { text: "Pink Motorola Razr with rhinestone case 💖", scores: { paris: 3, britney: 1 } },
                { text: "Whatever's trendy with lots of charms 📱", scores: { bling: 3, nicole: 2 } },
                { text: "Sidekick for texting and photos 📸", scores: { lindsay: 3, gwen: 1 } },
                { text: "Simple but stylish in bright colors 🌈", scores: { gwen: 2, nicole: 2, britney: 1 } }
            ]
        },
        {
            question: "How do you spend your weekend?",
            answers: [
                { text: "Shopping on Rodeo Drive and getting pampered 💅", scores: { paris: 3, bling: 2 } },
                { text: "Performing or working on creative projects 🎭", scores: { britney: 3, gwen: 2 } },
                { text: "Hanging with friends and being spontaneous 🎉", scores: { lindsay: 3, nicole: 2 } },
                { text: "Mixing high-end and thrift finds 🛍️", scores: { gwen: 3, nicole: 1 } }
            ]
        },
        {
            question: "What's your Y2K motto?",
            answers: [
                { text: "Life's too short to not sparkle! ✨", scores: { paris: 3, bling: 1 } },
                { text: "Stay strong and keep dreaming 💪", scores: { britney: 3, lindsay: 1 } },
                { text: "Live authentically and have fun 🌟", scores: { lindsay: 3, nicole: 2 } },
                { text: "Be original and express yourself 🎨", scores: { gwen: 3, nicole: 1 } }
            ]
        }
    ],
    
    results: {
        paris: {
            name: "Paris Hilton",
            icon: "👑",
            description: "You're the ultimate Y2K princess! Like Paris, you love luxury, sparkles, and being the center of attention. You're confident, glamorous, and know how to make everything look effortless. Your motto: 'That's hot!' ✨"
        },
        britney: {
            name: "Britney Spears",
            icon: "🎤",
            description: "You're a Y2K pop icon! Like Britney, you're talented, determined, and not afraid to take risks. You love performing and inspiring others. You're stronger than yesterday! 💪"
        },
        lindsay: {
            name: "Lindsay Lohan",
            icon: "💋",
            description: "You're the Y2K movie star! Like Lindsay, you're adventurous, spontaneous, and full of personality. You're not afraid to be yourself and live life to the fullest. So fetch! 🎬"
        },
        gwen: {
            name: "Gwen Stefani",
            icon: "🎸",
            description: "You're the Y2K rebel! Like Gwen, you're creative, original, and march to your own beat. You love mixing styles and expressing yourself through fashion and art. No doubt about it! 🌈"
        },
        nicole: {
            name: "Nicole Richie",
            icon: "💎",
            description: "You're the Y2K trendsetter! Like Nicole, you have impeccable style and know how to mix high and low fashion. You're effortlessly cool and always ahead of the curve. Simply iconic! ✨"
        },
        bling: {
            name: "Bling Ring Leader",
            icon: "💍",
            description: "You're obsessed with the Y2K celebrity lifestyle! You love luxury, glamour, and living like the stars. You're ambitious and determined to have the finer things in life. Totally iconic! 💎"
        }
    }
};

let currentQuestion = 0;
let scores = {
    paris: 0,
    britney: 0,
    lindsay: 0,
    gwen: 0,
    nicole: 0,
    bling: 0
};

function startQuiz() {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    currentQuestion = 0;
    scores = { paris: 0, britney: 0, lindsay: 0, gwen: 0, nicole: 0, bling: 0 };
    showQuestion();
}

function showQuestion() {
    const questionData = quizData.questions[currentQuestion];
    document.getElementById('question').textContent = questionData.question;
    
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    
    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(answerIndex) {
    const questionData = quizData.questions[currentQuestion];
    const selectedAnswer = questionData.answers[answerIndex];
    
    // Add scores for this answer
    for (const [celebrity, points] of Object.entries(selectedAnswer.scores)) {
        scores[celebrity] += points;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizData.questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-container').style.display = 'none';
    
    // Find the celebrity with the highest score
    let maxScore = 0;
    let resultCelebrity = 'paris'; // default
    
    for (const [celebrity, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultCelebrity = celebrity;
        }
    }
    
    const result = quizData.results[resultCelebrity];
    
    document.getElementById('result-content').innerHTML = `
        <div class="result-icon">${result.icon}</div>
        <div class="result-name">${result.name}</div>
        <div class="result-description">${result.description}</div>
    `;
    
    document.getElementById('quiz-result').style.display = 'block';
    
    // Add some sparkle effects
    createSparkles();
}

function restartQuiz() {
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('start-btn').style.display = 'block';
    currentQuestion = 0;
    scores = { paris: 0, britney: 0, lindsay: 0, gwen: 0, nicole: 0, bling: 0 };
}

function createSparkles() {
    // Add some extra Y2K sparkle effects when showing results
    const sparkleColors = ['#ff00ff', '#00ffff', '#ffff00', '#ff69b4', '#ffd700'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.fontSize = Math.random() * 20 + 20 + 'px';
            sparkle.style.color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = 'sparkleFloat 3s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 3000);
        }, i * 200);
    }
}

// Add CSS for sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) rotate(360deg) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// Add some extra Y2K interactions
document.addEventListener('DOMContentLoaded', function() {
    // Make quote cards extra interactive
    const quoteCards = document.querySelectorAll('.quote-card');
    quoteCards.forEach(card => {
        card.addEventListener('click', function() {
            // Create a burst of sparkles when clicking quotes
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            for (let i = 0; i < 5; i++) {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = ['✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 4)];
                sparkle.style.position = 'fixed';
                sparkle.style.left = centerX + (Math.random() - 0.5) * 100 + 'px';
                sparkle.style.top = centerY + (Math.random() - 0.5) * 100 + 'px';
                sparkle.style.fontSize = '20px';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.zIndex = '9999';
                sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
                
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                }, 2000);
            }
        });
    });
}); 