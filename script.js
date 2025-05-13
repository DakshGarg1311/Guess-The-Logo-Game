        // Game state
        const gameState = {
            currentLevelIndex: 0,
            score: 0,
            hintsUsed: 0,
            answered: false,
            totalLevels: 50,
            inputMode: 'text' // 'text' or 'options'
        };
        
        // Logo database with HTML/CSS logos, options, and difficulty levels
        const logos = [
            // Easy Logos (1-10)
            {
                name: "Google",
                html: `<div class="logo google-logo"><span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span></div>`,
                options: ["Google", "Microsoft", "Apple", "Yahoo"],
                hint: "This company is known for its search engine.",
                difficulty: "easy"
            },
            {
                name: "Facebook",
                html: `<div class="logo facebook-logo">f</div>`,
                options: ["Instagram", "Twitter", "Facebook", "LinkedIn"],
                hint: "This social media platform was founded by Mark Zuckerberg.",
                difficulty: "easy"
            },
            {
                name: "Apple",
                html: `<div class="logo apple-logo"><span>`,
                 options: ["Apple", "Samsung", "Sony", "LG"],
                hint: "This company is known for iPhones and MacBooks.",
                difficulty: "easy"
            },
            {
                name: "Nike",
                html: `<div class="logo nike-logo"></div>`,
                options: ["Adidas", "Puma", "Nike", "Reebok"],
                hint: "Just Do It is their famous slogan.",
                difficulty: "easy"
            },
            {
                name: "Twitter",
                html: `<div class="logo twitter-logo">𝕏</div>`,
                options: ["Twitter", "Instagram", "Pinterest", "Snapchat"],
                hint: "Formerly known by a bird logo, now represented by 'X'.",
                difficulty: "easy"
            },
            {
                name: "Netflix",
                html: `<div class="logo netflix-logo">N</div>`,
                options: ["Hulu", "Amazon Prime", "Netflix", "Disney+"],
                hint: "A popular streaming service known for original content.",
                difficulty: "easy"
            },
            {
                name: "Coca-Cola",
                html: `<div class="logo cocacola-logo">Coca-Cola</div>`,
                options: ["Pepsi", "Coca-Cola", "Sprite", "Fanta"],
                hint: "A famous red-labeled soda brand.",
                difficulty: "easy"
            },
            {
                name: "McDonald's",
                html: `<div class="logo mcdonalds-logo"></div>`,
                options: ["Burger King", "KFC", "McDonald's", "Wendy's"],
                hint: "Known for their golden arches logo.",
                difficulty: "easy"
            },
            {
                name: "Amazon",
                html: `<div class="logo amazon-logo">amazon</div>`,
                options: ["eBay", "Amazon", "Walmart", "Alibaba"],
                hint: "The largest online retailer, started as an online bookstore.",
                difficulty: "easy"
            },
            {
                name: "Microsoft",
                html: `<div class="logo microsoft-logo"><div></div><div></div><div></div><div></div></div>`,
                options: ["Apple", "Google", "Microsoft", "Intel"],
                hint: "This company makes Windows operating system.",
                difficulty: "easy"
            },
            
            // Medium Logos (11-30)
            {
                name: "Spotify",
                html: `<div class="logo spotify-logo"></div>`,
                options: ["Pandora", "Spotify", "Apple Music", "Tidal"],
                hint: "A green music streaming service.",
                difficulty: "medium"
            },
            {
                name: "Tesla",
                html: `<div class="logo tesla-logo"></div>`,
                options: ["Ford", "Toyota", "Tesla", "Honda"],
                hint: "An electric vehicle company founded by Elon Musk.",
                difficulty: "medium"
            },
            {
                name: "Starbucks",
                html: `<div class="logo starbucks-logo"></div>`,
                options: ["Dunkin'", "Starbucks", "Costa Coffee", "Tim Hortons"],
                hint: "A coffee chain with a green mermaid logo.",
                difficulty: "medium"
            },
            {
                name: "Instagram",
                html: `<div class="logo instagram-logo"></div>`,
                options: ["Instagram", "TikTok", "Snapchat", "Pinterest"],
                hint: "A photo-sharing social media platform owned by Meta.",
                difficulty: "medium"
            },
            {
                name: "BMW",
                html: `<div class="logo bmw-logo"></div>`,
                options: ["Mercedes", "Audi", "BMW", "Volkswagen"],
                hint: "A German luxury car manufacturer with blue and white logo.",
                difficulty: "medium"
            },
            {
                name: "Adidas",
                html: `<div class="logo adidas-logo"></div>`,
                options: ["Nike", "Puma", "Adidas", "Under Armour"],
                hint: "A sportswear brand known for its three stripes.",
                difficulty: "medium"
            },
            {
                name: "Disney",
                html: `<div class="logo disney-logo">Disney</div>`,
                options: ["Warner Bros", "Disney", "Universal", "Paramount"],
                hint: "The entertainment company famous for Mickey Mouse.",
                difficulty: "medium"
            },
            {
                name: "Pepsi",
                html: `<div class="logo pepsi-logo"></div>`,
                options: ["Pepsi", "Coca-Cola", "Dr Pepper", "Mountain Dew"],
                hint: "A blue, red, and white cola brand.",
                difficulty: "medium"
            },
            {
                name: "Target",
                html: `<div class="logo target-logo"></div>`,
                options: ["Walmart", "Target", "Best Buy", "Costco"],
                hint: "A retail store with a red bullseye logo.",
                difficulty: "medium"
            },
            {
                name: "Mastercard",
                html: `<div class="logo mastercard-logo"></div>`,
                options: ["Visa", "Mastercard", "American Express", "Discover"],
                hint: "A payment service with overlapping red and yellow circles.",
                difficulty: "medium"
            },
            {
                name: "Intel",
                html: `<div class="logo intel-logo">intel</div>`,
                options: ["AMD", "Nvidia", "Intel", "Qualcomm"],
                hint: "A computer processor manufacturer with a blue logo.",
                difficulty: "medium"
            },
            {
                name: "Snapchat",
                html: `<div class="logo snapchat-logo"></div>`,
                options: ["TikTok", "Snapchat", "Instagram", "WhatsApp"],
                hint: "A messaging app with a ghost logo and disappearing messages.",
                difficulty: "medium"
            },
            {
                name: "Mercedes",
                html: `<div class="logo mercedes-logo"></div>`,
                options: ["BMW", "Audi", "Mercedes", "Lexus"],
                hint: "A German luxury car brand with a three-pointed star logo.",
                difficulty: "medium"
            },
            {
                name: "Visa",
                html: `<div class="logo visa-logo">VISA</div>`,
                options: ["Mastercard", "Visa", "PayPal", "American Express"],
                hint: "A payment card with a blue and gold logo.",
                difficulty: "medium"
            },
            {
                name: "Burger King",
                html: `<div class="logo burgerking-logo">BK</div>`,
                options: ["McDonald's", "Burger King", "Wendy's", "KFC"],
                hint: "A fast food chain with a burger between two bun halves in their logo.",
                difficulty: "medium"
            },
            {
                name: "Toyota",
                html: `<div class="logo toyota-logo"></div>`,
                options: ["Honda", "Toyota", "Nissan", "Ford"],
                hint: "A Japanese car manufacturer with overlapping oval logos.",
                difficulty: "medium"
            },
            {
                name: "Walmart",
                html: `<div class="logo walmart-logo">Walmart</div>`,
                options: ["Target", "Costco", "Walmart", "Best Buy"],
                hint: "A retail giant with a blue and yellow sunburst logo.",
                difficulty: "medium"
            },
            {
                name: "Subway",
                html: `<div class="logo subway-logo">SUBWAY</div>`,
                options: ["Quiznos", "Subway", "Jimmy John's", "Jersey Mike's"],
                hint: "A sandwich chain with green and yellow logo.",
                difficulty: "medium"
            },
            {
                name: "Audi",
                html: `<div class="logo audi-logo"></div>`,
                options: ["BMW", "Mercedes", "Audi", "Volkswagen"],
                hint: "A German car manufacturer with four rings in their logo.",
                difficulty: "medium"
            },
            {
                name: "KFC",
                html: `<div class="logo kfc-logo">KFC</div>`,
                options: ["Popeyes", "KFC", "Chick-fil-A", "Church's Chicken"],
                hint: "A fried chicken chain with a logo featuring a man with a beard and glasses.",
                difficulty: "medium"
            },
            
            // Hard Logos (31-50)
            {
                name: "FedEx",
                html: `<div class="logo fedex-logo">FedEx</div>`,
                options: ["UPS", "FedEx", "DHL", "USPS"],
                hint: "A shipping company with an arrow hidden in their logo.",
                difficulty: "hard"
            },
            {
                name: "IKEA",
                html: `<div class="logo ikea-logo">IKEA</div>`,
                options: ["IKEA", "Wayfair", "Crate & Barrel", "Ashley Furniture"],
                hint: "A Swedish furniture retailer with blue and yellow colors.",
                difficulty: "hard"
            },
            {
                name: "Puma",
                html: `<div class="logo puma-logo"></div>`,
                options: ["Nike", "Adidas", "Puma", "Reebok"],
                hint: "A sportswear brand featuring a leaping big cat.",
                difficulty: "hard"
            },
            {
                name: "Honda",
                html: `<div class="logo honda-logo">H</div>`,
                options: ["Toyota", "Honda", "Hyundai", "Nissan"],
                hint: "A Japanese car manufacturer with a stylized 'H' logo.",
                difficulty: "hard"
            },
            {
                name: "IBM",
                html: `<div class="logo ibm-logo">IBM</div>`,
                options: ["Intel", "IBM", "HP", "Dell"],
                hint: "A technology company nicknamed 'Big Blue'.",
                difficulty: "hard"
            },
            {
                name: "Airbnb",
                html: `<div class="logo airbnb-logo"></div>`,
                options: ["Booking.com", "Airbnb", "Expedia", "VRBO"],
                hint: "A home rental platform with a symbol called the 'Bélo'.",
                difficulty: "hard"
            },
            {
                name: "Domino's",
                html: `<div class="logo dominos-logo"></div>`,
                options: ["Pizza Hut", "Domino's", "Papa John's", "Little Caesars"],
                hint: "A pizza chain with a logo resembling a domino game piece.",
                difficulty: "hard"
            },
            {
                name: "Reebok",
                html: `<div class="logo reebok-logo"></div>`,
                options: ["Nike", "Adidas", "Puma", "Reebok"],
                hint: "A sportswear brand known for fitness and CrossFit gear.",
                difficulty: "hard"
            },
            {
                name: "Under Armour",
                html: `<div class="logo underarmour-logo"></div>`,
                options: ["Nike", "Adidas", "Under Armour", "New Balance"],
                hint: "A sportswear brand with a logo resembling a 'U' and 'A' combined.",
                difficulty: "hard"
            },
            {
                name: "TikTok",
                html: `<div class="logo tiktok-logo"></div>`,
                options: ["Snapchat", "Instagram", "TikTok", "YouTube"],
                hint: "A video-sharing social network with a musical note-like logo.",
                difficulty: "hard"
            },
            {
                name: "UPS",
                html: `<div class="logo ups-logo">UPS</div>`,
                options: ["FedEx", "UPS", "DHL", "USPS"],
                hint: "A shipping company with brown trucks and a shield logo.",
                difficulty: "hard"
            },
            {
                name: "Hulu",
                html: `<div class="logo hulu-logo">hulu</div>`,
                options: ["Netflix", "Hulu", "Disney+", "HBO Max"],
                hint: "A streaming service with a green logo.",
                difficulty: "hard"
            },
            {
                name: "Costco",
                html: `<div class="logo costco-logo">Costco</div>`,
                options: ["Walmart", "Target", "Costco", "Sam's Club"],
                hint: "A membership warehouse club with a reputation for bulk items.",
                difficulty: "hard"
            },
            {
                name: "HBO Max",
                html: `<div class="logo hbomax-logo">HBO Max</div>`,
                options: ["Netflix", "Hulu", "Disney+", "HBO Max"],
                hint: "A streaming service offering content from Warner Bros.",
                difficulty: "hard"
            },
            {
                name: "Best Buy",
                html: `<div class="logo bestbuy-logo">Best Buy</div>`,
                options: ["Walmart", "Target", "Best Buy", "Costco"],
                hint: "An electronics retailer with a yellow price tag logo.",
                difficulty: "hard"
            },
            {
                name: "New Balance",
                html: `<div class="logo newbalance-logo">NB</div>`,
                options: ["Nike", "Adidas", "New Balance", "Asics"],
                hint: "A footwear brand with a logo featuring the letters 'N' and 'B'.",
                difficulty: "hard"
            },
            {
                name: "Paramount",
                html: `<div class="logo paramount-logo"></div>`,
                options: ["Universal", "Warner Bros", "Paramount", "Sony Pictures"],
                hint: "A film studio with a mountain peak logo.",
                difficulty: "hard"
            },
            {
                name: "Slack",
                html: `<div class="logo slack-logo">#</div>`,
                options: ["Discord", "Slack", "Microsoft Teams", "Zoom"],
                hint: "A workplace communication platform with a colorful hashtag-like logo.",
                difficulty: "hard"
            },
            {
                name: "Twitch",
                html: `<div class="logo twitch-logo">Twitch</div>`,
                options: ["YouTube", "Twitch", "Mixer", "Facebook Gaming"],
                hint: "A live streaming platform popular with gamers.",
                difficulty: "hard"
            },
            {
                name: "Salesforce",
                html: `<div class="logo salesforce-logo">SF</div>`,
                options: ["Oracle", "Salesforce", "SAP", "Microsoft"],
                hint: "A CRM platform with a cloud-shaped logo.",
                difficulty: "hard"
            }
        ];
        console.log(logos)
        // DOM elements
        const logoDisplay = document.getElementById('logo-display');
        const textInputContainer = document.getElementById('text-input-container');
        const optionsContainer = document.getElementById('options-container');
        const answerInput = document.getElementById('answer-input');
        const submitBtn = document.getElementById('submit-btn');
        const nextBtn = document.getElementById('next-btn');
        const hintBtn = document.getElementById('hint-btn');
        const hintText = document.getElementById('hint-text');
        const feedbackEl = document.getElementById('feedback');
        const scoreEl = document.getElementById('score');
        const questionNumberEl = document.getElementById('question-number');
        const currentLevelEl = document.getElementById('current-level');
        const difficultyBadgeEl = document.getElementById('difficulty-badge');
        const progressBarEl = document.getElementById('progress-bar');
        const gameOverEl = document.getElementById('game-over');
        const finalScoreEl = document.getElementById('final-score');
        const maxScoreEl = document.getElementById('max-score');
        const levelsCompletedEl = document.getElementById('levels-completed');
        const totalLevelsEl = document.getElementById('total-levels');
        const restartBtn = document.getElementById('restart-btn');
        const textModeBtn = document.getElementById('text-mode-btn');
        const optionsModeBtn = document.getElementById('options-mode-btn');
        
        // Initialize the game
        function initGame() {
            gameState.currentLevelIndex = 0;
            gameState.score = 0;
            gameState.hintsUsed = 0;
            gameState.answered = false;
            
            updateScoreDisplay();
            loadLevel(gameState.currentLevelIndex);
            
            // Reset game over screen
            gameOverEl.classList.add('hidden');
            
            // Show first level
            questionNumberEl.textContent = '1';
            currentLevelEl.textContent = '1';
            
            // Update max score and total levels
            maxScoreEl.textContent = gameState.totalLevels * 2;
            totalLevelsEl.textContent = gameState.totalLevels;
            
            // Reset progress bar
            updateProgressBar();
        }
        
        // Load a level
        function loadLevel(levelIndex) {
            if (levelIndex >= logos.length) {
                endGame();
                return;
            }
            
            const currentLogo = logos[levelIndex];
            
            // Update level number and difficulty badge
            questionNumberEl.textContent = levelIndex + 1;
            currentLevelEl.textContent = levelIndex + 1;
            
            // Update difficulty badge
            difficultyBadgeEl.className = `difficulty-badge ${currentLogo.difficulty}`;
            difficultyBadgeEl.textContent = currentLogo.difficulty.charAt(0).toUpperCase() + currentLogo.difficulty.slice(1);
            
            // Reset state
            gameState.answered = false;
            gameState.hintsUsed = 0;
            
            // Clear previous content
            logoDisplay.innerHTML = currentLogo.html;
            logoDisplay.className = 'logo-blur';
            hintText.textContent = '';
            feedbackEl.textContent = '';
            answerInput.value = '';
            answerInput.disabled = false;
            submitBtn.disabled = false;
            hintBtn.disabled = false;
            nextBtn.classList.add('hidden');
            
            // Load options for multiple choice
            optionsContainer.innerHTML = '';
            const shuffledOptions = shuffleArray([...currentLogo.options]);
            
            shuffledOptions.forEach(option => {
                const optionBtn = document.createElement('button');
                optionBtn.textContent = option;
                optionBtn.className = 'option-btn';
                optionBtn.addEventListener('click', () => checkAnswer(option));
                optionsContainer.appendChild(optionBtn);
            });
            
            // Show appropriate input method
            if (gameState.inputMode === 'text') {
                textInputContainer.classList.remove('hidden');
                optionsContainer.classList.add('hidden');
            } else {
                textInputContainer.classList.add('hidden');
                optionsContainer.classList.remove('hidden');
            }
            
            // Update progress bar
            updateProgressBar();
        }
        
        // Check the user's answer
        function checkAnswer(answer) {
            if (gameState.answered) return;
            
            const currentLogo = logos[gameState.currentLevelIndex];
            const userAnswer = answer || answerInput.value.trim().toLowerCase();
            const correctAnswer = currentLogo.name.toLowerCase();
            
            gameState.answered = true;
            
            // Reveal the logo
            logoDisplay.classList.remove('logo-blur');
            
            // Disable input and buttons
            answerInput.disabled = true;
            submitBtn.disabled = true;
            hintBtn.disabled = true;
            
            // Show next button
            nextBtn.classList.remove('hidden');
            
            // Check if answer is correct
            if (userAnswer.toLowerCase() === correctAnswer) {
                // Award points (2 without hint, 1 with hint)
                const pointsAwarded = gameState.hintsUsed > 0 ? 1 : 2;
                gameState.score += pointsAwarded;
                
                feedbackEl.textContent = `Correct! +${pointsAwarded} points`;
                feedbackEl.style.color = '#2ecc71';
                
                // If in multiple choice mode, highlight the correct option
                if (gameState.inputMode === 'options') {
                    const options = document.querySelectorAll('.option-btn');
                    options.forEach(option => {
                        if (option.textContent.toLowerCase() === correctAnswer) {
                            option.classList.add('correct');
                        }
                    });
                }
            } else {
                feedbackEl.textContent = `Incorrect. The answer is ${currentLogo.name}.`;
                feedbackEl.style.color = '#e74c3c';
                
                // If in multiple choice mode, highlight the incorrect and correct options
                if (gameState.inputMode === 'options') {
                    const options = document.querySelectorAll('.option-btn');
                    options.forEach(option => {
                        if (option.textContent.toLowerCase() === correctAnswer) {
                            option.classList.add('correct');
                        } else if (option.textContent.toLowerCase() === userAnswer.toLowerCase()) {
                            option.classList.add('incorrect');
                        }
                    });
                }
            }
            
            updateScoreDisplay();
        }
        
        // Move to the next level
        function nextLevel() {
            gameState.currentLevelIndex++;
            
            if (gameState.currentLevelIndex < logos.length) {
                loadLevel(gameState.currentLevelIndex);
            } else {
                endGame();
            }
        }
        
        // Show a hint
        function showHint() {
            if (gameState.hintsUsed > 0 || gameState.answered) return;
            
            const currentLogo = logos[gameState.currentLevelIndex];
            hintText.textContent = currentLogo.hint;
            gameState.hintsUsed++;
            
            // Disable hint button after use
            hintBtn.disabled = true;
        }
        
        // End the game
        function endGame() {
            gameOverEl.classList.remove('hidden');
            finalScoreEl.textContent = gameState.score;
            levelsCompletedEl.textContent = gameState.currentLevelIndex;
        }
        
        // Update the score display
        function updateScoreDisplay() {
            scoreEl.textContent = gameState.score;
        }
        
        // Update the progress bar
        function updateProgressBar() {
            const progress = (gameState.currentLevelIndex / gameState.totalLevels) * 100;
            progressBarEl.style.width = `${progress}%`;
        }
        
        // Helper function to shuffle arrays
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        
        // Event listeners
        submitBtn.addEventListener('click', () => checkAnswer());
        
        answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });
        
        nextBtn.addEventListener('click', nextLevel);
        
        hintBtn.addEventListener('click', showHint);
        
        restartBtn.addEventListener('click', initGame);
        
        // Input mode toggle
        textModeBtn.addEventListener('click', () => {
            gameState.inputMode = 'text';
            textModeBtn.classList.add('active');
            optionsModeBtn.classList.remove('active');
            textInputContainer.classList.remove('hidden');
            optionsContainer.classList.add('hidden');
        });
        
        optionsModeBtn.addEventListener('click', () => {
            gameState.inputMode = 'options';
            optionsModeBtn.classList.add('active');
            textModeBtn.classList.remove('active');
            textInputContainer.classList.add('hidden');
            optionsContainer.classList.remove('hidden');
        });
        
        // Start the game when the page loads
        window.addEventListener('load', initGame);
