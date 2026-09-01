document.addEventListener('DOMContentLoaded', function() {
    // The nav shrink functionality is already handled in Header.js, so the redundant code is removed.

    // Dynamic Text Typing Effect
    const dynamicTextElement = document.querySelector('.banner-subtext');
    if (dynamicTextElement) {
        const texts = ["Software Engineering graduate", "IEEE-published in computer vision", "Building on AWS and Google Cloud"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentText = texts[textIndex];
            const bannerSubtext = currentText.substring(0, charIndex);
            dynamicTextElement.textContent = bannerSubtext;
            
            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            
            charIndex += isDeleting ? -1 : 1;

            const typingSpeed = isDeleting ? 50 : 150;
            setTimeout(typeEffect, typingSpeed);
        }
        typeEffect();
    }

    // Function to calculate item width based on screen size
    function getItemWidth() {
        if (window.innerWidth <= 576) {
            return 120;
        } else if (window.innerWidth <= 768) {
            return 140;
        } else if (window.innerWidth <= 992) {
            return 160;
        } else if (window.innerWidth <= 1200) {
            return 180;
        } else {
            return 200;
        }
    }

    let itemWidth = getItemWidth();

    function setupSlider(sliderSelector, itemSelector, interval) {
        const slider = document.querySelector(sliderSelector);
        if (!slider) return;

        const items = slider.querySelectorAll(itemSelector);
        const itemCount = items.length;
        if (itemCount === 0) return;

        let currentIndex = 0;

        // Clone items for seamless loop
        for (let i = 0; i < itemCount; i++) {
            const clone = items[i].cloneNode(true);
            slider.appendChild(clone);
        }

        function slide() {
            currentIndex++;
            slider.style.transition = 'transform 0.5s ease-in-out';
            slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

            if (currentIndex >= itemCount) {
                setTimeout(() => {
                    slider.style.transition = 'none';
                    currentIndex = 0;
                    slider.style.transform = 'translateX(0)';
                }, 500); // Wait for the transition to end
            }
        }
        setInterval(slide, interval);
    }

    setupSlider('.slider-items', '.slider-item', 3000);
    setupSlider('.slider-items-frameworks', '.slider-item-frameworks', 2500);
    
    window.addEventListener('resize', () => {
        itemWidth = getItemWidth();
    });

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;

                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Certificate lightbox
    const certDialog = document.getElementById('cert-lightbox');
    const certImg = document.getElementById('cert-lightbox-img');
    const certCloseBtn = certDialog ? certDialog.querySelector('.cert-lightbox-close') : null;
    let certLastTrigger = null;

    if (certDialog && certImg && certCloseBtn) {
        let certClosed = false;

        function closeCertLightbox() {
            if (certClosed) return;
            certClosed = true;
            certDialog.close();
            certImg.src = '';
            if (certLastTrigger) certLastTrigger.focus({ preventScroll: true });
        }

        document.querySelectorAll('.credential-view-btn, .credential-view-link').forEach(btn => {
            btn.addEventListener('click', () => {
                certLastTrigger = btn;
                certClosed = false;
                certImg.src = btn.dataset.certSrc;
                certImg.alt = btn.dataset.certAlt;
                certImg.width = btn.dataset.certW;
                certImg.height = btn.dataset.certH;
                certDialog.showModal();
            });
        });

        certCloseBtn.addEventListener('click', closeCertLightbox);

        certDialog.addEventListener('click', (e) => {
            if (e.target === certDialog) {
                closeCertLightbox();
            }
        });

        // Catch-all for the native Esc-key close path, which bypasses the handlers above.
        certDialog.addEventListener('close', closeCertLightbox);
    }

    // Chatbot functionality
    const chatInput = document.getElementById('chat-input');
    const sendChatBtn = document.getElementById('send-chat-btn');
    const chatMessages = document.getElementById('chat-messages');

    if (chatInput && sendChatBtn && chatMessages) {
        sendChatBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        function sendMessage() {
            const userMessage = chatInput.value.trim();
            if (userMessage === '') return;

            appendMessage(userMessage, 'user-message');
            chatInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                appendMessage(botResponse, 'bot-message');
            }, 500);
        }

        function appendMessage(message, type) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', type);
            messageElement.innerHTML = `<p>${message}</p>`;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
        }

        function getBotResponse(userMessage) {
            const lowerCaseMessage = userMessage.toLowerCase();

            if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
                return 'Hello there! How can I assist you today?';
            } else if (lowerCaseMessage.includes('name')) {
                return 'I am MeheroseAI, a chatbot designed to answer questions about this portfolio.';
            } else if (lowerCaseMessage.includes('research') || lowerCaseMessage.includes('paper') || lowerCaseMessage.includes('publication')) {
                return 'Meherose is the first author of "MSRA-Net", a paper on attention-based CNNs for diabetic retinopathy classification, published at IEEE EICT 2025. See the Research & Publications section for details.';
            } else if (lowerCaseMessage.includes('skills') || lowerCaseMessage.includes('tech stack')) {
                return 'Meherose specializes in ML & deep learning (TensorFlow, Keras, PyTorch), generative AI & cloud (Amazon Bedrock, AWS Lambda), and full-stack development (Python, React, Django REST, FastAPI). See the Skills section for the full breakdown.';
            } else if (lowerCaseMessage.includes('projects')) {
                return 'Meherose has worked on projects like "Mtuber" (CNN-based defect detection), a "Customer Support Chatbot" built on Amazon Bedrock Flows, "Daycare Connect", and "EduSphere". You can find more details in the Projects section.';
            } else if (lowerCaseMessage.includes('education')) {
                return 'Meherose holds a Bachelor of Science in Software Engineering from Daffodil International University (2022–2026), graduating with a CGPA of 3.97/4.00.';
            } else if (lowerCaseMessage.includes('experience')) {
                return 'Meherose led a team through the NASA Space Apps Challenge 2024, apprenticed at Geeky Solutions through Learnathon 3.0, trained students at the DIU Software Engineering Club, and took part in the World Friends Korea IT Volunteer Programme.';
            } else if (lowerCaseMessage.includes('contact')) {
                return 'You can reach Meherose via email at mhtasnia@gmail.com or connect on LinkedIn and GitHub. The social media links are available in the footer.';
            } else if (lowerCaseMessage.includes('cv') || lowerCaseMessage.includes('resume')) {
                return "You can view Meherose's CV by clicking the \"View CV\" button in the About Me section.";
            } else if (lowerCaseMessage.includes('thank you') || lowerCaseMessage.includes('thanks')) {
                return "You're welcome! Is there anything else I can help you with?";
            } else {
                return 'Sorry, I am not relevant to that question. I can only answer questions based on the information available in this portfolio.';
            }
        }
    }
});
