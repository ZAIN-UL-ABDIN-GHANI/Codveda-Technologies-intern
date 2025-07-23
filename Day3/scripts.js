
        // Counter Application - JavaScript
        // Created by Zain Ul Abdin Ghani
        
        class CounterApp {
            constructor() {
                this.counter = 0;
                this.counterDisplay = document.getElementById('counterDisplay');
                this.incrementBtn = document.getElementById('incrementBtn');
                this.decrementBtn = document.getElementById('decrementBtn');
                this.resetBtn = document.getElementById('resetBtn');
                
                this.initializeEventListeners();
                this.createParticles();
                this.updateDisplay();
            }
            
            initializeEventListeners() {
                // Increment button event listener
                this.incrementBtn.addEventListener('click', () => {
                    this.increment();
                });
                
                // Decrement button event listener
                this.decrementBtn.addEventListener('click', () => {
                    this.decrement();
                });
                
                // Reset button event listener
                this.resetBtn.addEventListener('click', () => {
                    this.reset();
                });
                
                // Keyboard shortcuts
                document.addEventListener('keydown', (e) => {
                    switch(e.key) {
                        case 'ArrowUp':
                        case '+':
                            e.preventDefault();
                            this.increment();
                            break;
                        case 'ArrowDown':
                        case '-':
                            e.preventDefault();
                            this.decrement();
                            break;
                        case 'r':
                        case 'R':
                        case '0':
                            e.preventDefault();
                            this.reset();
                            break;
                    }
                });
            }
            
            increment() {
                this.counter++;
                this.updateDisplay();
                this.addUpdateAnimation();
                this.createBurstEffect('increment');
            }
            
            decrement() {
                // Ensure counter doesn't go below zero
                if (this.counter > 0) {
                    this.counter--;
                    this.updateDisplay();
                    this.addUpdateAnimation();
                    this.createBurstEffect('decrement');
                } else {
                    this.shakeEffect();
                }
            }
            
            reset() {
                this.counter = 0;
                this.updateDisplay();
                this.addUpdateAnimation();
                this.createBurstEffect('reset');
            }
            
            updateDisplay() {
                this.counterDisplay.textContent = this.counter;
                
                // Add visual feedback based on counter value with beautiful gradients
                if (this.counter === 0) {
                    this.counterDisplay.style.background = 'linear-gradient(45deg, #6c757d, #868e96)';
                    this.counterDisplay.style.backgroundSize = '200% 200%';
                } else if (this.counter > 0 && this.counter <= 10) {
                    this.counterDisplay.style.background = 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)';
                    this.counterDisplay.style.backgroundSize = '300% 300%';
                } else if (this.counter > 10 && this.counter <= 50) {
                    this.counterDisplay.style.background = 'linear-gradient(45deg, #11998e, #38ef7d, #2dd4bf)';
                    this.counterDisplay.style.backgroundSize = '300% 300%';
                } else {
                    this.counterDisplay.style.background = 'linear-gradient(45deg, #f093fb, #f5576c, #ff9a56)';
                    this.counterDisplay.style.backgroundSize = '300% 300%';
                }
                
                // Re-apply the animation
                this.counterDisplay.style.animation = 'gradientFlow 4s ease infinite';
            }
            
            addUpdateAnimation() {
                this.counterDisplay.classList.add('updated', 'bounce');
                
                setTimeout(() => {
                    this.counterDisplay.classList.remove('updated', 'bounce');
                }, 600);
            }
            
            shakeEffect() {
                this.counterDisplay.style.animation = 'shake 0.5s ease-in-out';
                
                setTimeout(() => {
                    this.counterDisplay.style.animation = '';
                }, 500);
            }
            
            createBurstEffect(type) {
                const colors = {
                    increment: 'linear-gradient(45deg, #11998e, #38ef7d)',
                    decrement: 'linear-gradient(45deg, #ff416c, #ff4757)',
                    reset: 'linear-gradient(45deg, #f093fb, #f5576c)'
                };
                
                for (let i = 0; i < 12; i++) {
                    this.createParticle(colors[type], true);
                }
            }
            
            createParticles() {
                const particlesContainer = document.getElementById('particles');
                
                setInterval(() => {
                    if (Math.random() < 0.3) {
                        const gradientColors = [
                            'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                            'linear-gradient(45deg, #667eea, #764ba2)',
                            'linear-gradient(45deg, #f093fb, #f5576c)',
                            'linear-gradient(45deg, #11998e, #38ef7d)',
                            'linear-gradient(45deg, #ff9a56, #ff6b6b)'
                        ];
                        const randomGradient = gradientColors[Math.floor(Math.random() * gradientColors.length)];
                        this.createParticle(randomGradient, false);
                    }
                }, 2000);
            }
            
            createParticle(color, isBurst = false) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.background = color;
                particle.style.left = isBurst ? '50%' : Math.random() * 100 + '%';
                particle.style.bottom = isBurst ? '50%' : '-10px';
                particle.style.width = particle.style.height = (Math.random() * 8 + 4) + 'px';
                particle.style.animationDuration = (Math.random() * 4 + 3) + 's';
                particle.style.animationDelay = Math.random() * 2 + 's';
                
                if (isBurst) {
                    particle.style.transform = `translate(-50%, -50%) translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px)`;
                }
                
                document.getElementById('particles').appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, isBurst ? 1000 : 6000);
            }
        }
        
        // Add shake animation to CSS dynamically
        const shakeKeyframes = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = shakeKeyframes;
        document.head.appendChild(styleSheet);
        
        // Initialize the application when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new CounterApp();
            
            // Add welcome message
            console.log('%c🚀 Counter App Initialized Successfully!', 'color: #00e5ff; font-size: 16px; font-weight: bold;');
            console.log('%c Created by Zain Ul Abedin Ghani', 'color: #4caf50; font-size: 14px;');
            console.log('%c Keyboard Shortcuts: ↑/+ (increment), ↓/- (decrement), R/0 (reset)', 'color: #ff9800; font-size: 12px;');
        });
        
        // Service Worker Registration (for PWA capabilities)
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                // Service worker would be registered here in a full implementation
                console.log('%c PWA Ready!', 'color: #9c27b0; font-size: 12px;');
            });
        }
    