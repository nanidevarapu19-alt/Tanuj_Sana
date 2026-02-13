(function() {
    'use strict';

    var body = document.body;
    var bodyId = body ? body.id : '';

    // ---------- Index: Do you love me? (question-container + Yes/No) ----------
    var questionContainer = document.querySelector(".question-container");
    var resultContainer = document.querySelector(".result-container");
    var gifResult = document.querySelector(".gif-result");
    var heartLoader = document.querySelector(".cssload-main");
    var yesBtn = document.querySelector(".js-yes-btn");
    var noBtn = document.querySelector(".js-no-btn");
    if (questionContainer && resultContainer && yesBtn && noBtn) {
        noBtn.addEventListener("mouseover", function() {
            var newX = Math.floor(Math.random() * questionContainer.offsetWidth);
            var newY = Math.floor(Math.random() * questionContainer.offsetWidth);
            noBtn.style.left = newX + "px";
            noBtn.style.top = newY + "px";
        });
        yesBtn.addEventListener("click", function() {
            localStorage.setItem('playDuduSong', 'true');
            var duduSong = document.getElementById('dudu-song');
            if (duduSong) {
                duduSong.play().catch(function() {});
            }
            questionContainer.style.display = "none";
            if (heartLoader) heartLoader.style.display = "inherit";
            setTimeout(function() {
                if (heartLoader) heartLoader.style.display = "none";
                resultContainer.style.display = "inherit";
                if (gifResult) gifResult.play();
            }, 3000);
        });
        return;
    }

    // ---------- Do You Love Page: No button runs away ----------
    if (bodyId === 'page-do-you-love') {
        var btnNo = document.getElementById('btn-no');
        if (btnNo) {
            function moveNo() {
                var wrap = btnNo.closest('.do-you-love-buttons');
                if (!wrap) return;
                var rect = wrap.getBoundingClientRect();
                var maxX = Math.max(100, window.innerWidth - 120);
                var maxY = Math.max(80, window.innerHeight - 80);
                var x = Math.random() * (maxX - 40) + 20;
                var y = Math.random() * (maxY - 40) + 20;
                btnNo.style.position = 'fixed';
                btnNo.style.left = x + 'px';
                btnNo.style.top = y + 'px';
                btnNo.style.transform = 'translate(-50%, -50%)';
            }
            btnNo.addEventListener('mouseenter', moveNo);
            btnNo.addEventListener('click', moveNo);
        }
        return;
    }

    // ---------- Questions Page: Quiz ----------
    /*if (bodyId === 'page-questions') {
        var quizData = [
            {
                q: 'Where did we first connect?',
                options: ['LinkedIn', 'Instagram', 'College', 'WhatsApp'],
                correct: 0
            },
            {
                q: 'What did we watch on our first date?',
                options: ['A movie', 'A series', 'A match', 'Nothing'],
                correct: 0
            },
            {
                q: 'What did we share in the canteen?',
                options: ['Chicken samosa & noodles', 'Pizza', 'Coffee only', 'Nothing'],
                correct: 0
            },
            {
                q: 'What is our secret code?',
                options: ['#1234', '#9999', '#0000', '#5678'],
                correct: 0
            },
            {
                q: 'What do I call you sometimes?',
                options: ['Bangaram', 'Baby', 'Love', 'All of these'],
                correct: 3
            }
        ];

        var currentQ = 0;
        var score = 0;
        var quizContainer = document.getElementById('quiz-container');
        var quizResult = document.getElementById('quiz-result');
        var quizQuestionEl = document.getElementById('quiz-question');
        var quizOptionsEl = document.getElementById('quiz-options');
        var quizProgressText = document.getElementById('quiz-progress-text');
        var quizFeedback = document.getElementById('quiz-feedback');
        var quizResultTitle = document.getElementById('quiz-result-title');
        var quizResultMsg = document.getElementById('quiz-result-msg');

        function renderQuestion() {
            if (currentQ >= quizData.length) {
                showResult();
                return;
            }
            var d = quizData[currentQ];
            quizProgressText.textContent = 'Question ' + (currentQ + 1) + ' of ' + quizData.length;
            quizQuestionEl.textContent = d.q;
            quizFeedback.textContent = '';
            quizOptionsEl.innerHTML = '';
            d.options.forEach(function(opt, i) {
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.textContent = opt;
                btn.dataset.index = i;
                quizOptionsEl.appendChild(btn);
            });
            quizOptionsEl.querySelectorAll('button').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    var idx = parseInt(btn.dataset.index, 10);
                    var correct = d.correct === idx;
                    if (correct) score++;
                    quizOptionsEl.querySelectorAll('button').forEach(function(b) {
                        b.disabled = true;
                        if (parseInt(b.dataset.index, 10) === d.correct) b.classList.add('correct');
                        else if (b === btn && !correct) b.classList.add('wrong');
                    });
                    quizFeedback.textContent = correct ? 'Correct! 💕' : 'Wrong! The right answer was: ' + d.options[d.correct];
                    setTimeout(function() {
                        currentQ++;
                        renderQuestion();
                    }, 1200);
                });
            });
        }

        function sendQuizScoreToEmail(scoreVal, totalVal, pctVal) {
            var emailEl = document.getElementById('quiz-notify-email');
            var notifyEmail = emailEl ? emailEl.value.trim() : '';
            if (!notifyEmail) return;
            var formData = new FormData();
            formData.append('_subject', 'Valentine Quiz Score 💕');
            formData.append('_captcha', 'false');
            formData.append('Score', scoreVal + ' / ' + totalVal);
            formData.append('Percentage', pctVal + '%');
            formData.append('Message', 'She got ' + scoreVal + ' out of ' + totalVal + ' questions right!');
            formData.append('_template', 'table');
            fetch('https://formsubmit.co/' + encodeURIComponent(notifyEmail), {
                method: 'POST',
                body: formData
            }).catch(function() {});
        }

        function showResult() {
            quizContainer.style.display = 'none';
            quizResult.style.display = 'block';
            var pct = Math.round((score / quizData.length) * 100);
            quizResultTitle.textContent = 'You got ' + score + ' / ' + quizData.length + '!';
            if (pct >= 80) quizResultMsg.textContent = 'You know us so well! 💖 Perfect!';
            else if (pct >= 60) quizResultMsg.textContent = 'Good job! You remember a lot 💕';
            else quizResultMsg.textContent = 'A for effort! I still love you 💕';
            sendQuizScoreToEmail(score, quizData.length, pct);
        }

        if (quizQuestionEl && quizOptionsEl) renderQuestion();
        return;
    }*/

// ---------- Questions Page: Quiz ----------
// ---------- Questions Page: Quiz ----------
if (bodyId === 'page-questions') {

    var quizData = [
        {
            q: 'Where did we first connect?',
            options: ['Instagram 📸', 'LinkedIn 💼', 'College 🏫', 'WhatsApp 💬'],
            correct: 1
        },
        {
            q: "🎬❤️ Which movie was our very first movie date?",
            options: ["OG 🍿", "Baahubali ⚔️", "Raja Saab 👑", "Avatar 🌊"],
            correct: 0
        },
        {
            q: "🍽️😋 What did we eat for the first time together in the canteen?",
            options: ["Chicken samosa 🥟", "Biryani 🍛", "Manchuria 🍜", "None ❌"],
            correct: 0
        },
        {
            q: "🎮😄 Which was the first game we played together?",
            options: ["Free Fire 🔫", "Ludo 🎲", "Pepelo 🃏", "1234 🔢"],
            correct: 3
        },
        {
            q: "💖🫶 What do I sometimes call you with love?",
            options: ["Bangaram 💎", "Nannu 🥹", "Nanna 🤍", "All of these 😍"],
            correct: 3
        },
        {
            q: "🍗❤️ What is my favourite food?",
            options: ["Chicken 🍗", "Egg 🥚", "Veg 🥦", "Pappu 🍲"],
            correct: 0
        },
        {
            q: "🎥✨ Who is my favourite hero?",
            options: ["Prabhas 🔥", "Pawan Kalyan ⚡", "Nani 🌸", "Balakrishna 🦁"],
            correct: 0
        },
        {
            q: "🎞️💥 Which movie is my all-time favourite?",
            options: ["Baahubali 🏹", "Saalar 🔥", "Yogi 🕶️", "KGF ⛏️"],
            correct: 1
        },
        {
            q: 'What do you like the most about my behaviour??',
            options: ['🌸 The way I care deeply and genuinely', '😊 My calm and understanding nature', '💬 How I communicate honestly and openly', '😄 My positive vibe and sense of humor','❤️ The way I make you feel comfortable and valued','None'],
            correct: 5
        }
    ];

    var currentQ = 0;
    var score = 0;
    var wrongAnswers = []; // 👈 store wrong answers

    var quizContainer = document.getElementById('quiz-container');
    var quizResult = document.getElementById('quiz-result');
    var quizQuestionEl = document.getElementById('quiz-question');
    var quizOptionsEl = document.getElementById('quiz-options');
    var quizProgressText = document.getElementById('quiz-progress-text');
    var quizFeedback = document.getElementById('quiz-feedback');
    var quizResultTitle = document.getElementById('quiz-result-title');
    var quizResultMsg = document.getElementById('quiz-result-msg');
    var quizWrap = document.getElementById('quiz-wrap');

    // Check if dudu song should play
    if (localStorage.getItem('playDuduSong') === 'true') {
        var duduSong = document.getElementById('dudu-song');
        if (duduSong) {
            duduSong.addEventListener('canplay', function() {
                duduSong.play().catch(function() {});
            });
        }
    }

    function shuffleArray(arr) {
        var a = arr.slice();
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
        return a;
    }

    function renderQuestion() {
        if (currentQ >= quizData.length) {
            showResult();
            return;
        }

        var d = quizData[currentQ];
        var shuffledOptions = shuffleArray(d.options);
        var newCorrectIndex = shuffledOptions.indexOf(d.options[d.correct]);

        quizProgressText.textContent =
            'Question ' + (currentQ + 1) + ' of ' + quizData.length;

        quizQuestionEl.textContent = d.q;
        quizFeedback.textContent = '';
        quizOptionsEl.innerHTML = '';
        if (quizWrap) {
            quizWrap.classList.remove('quiz-celebrate', 'quiz-sad');
        }

        shuffledOptions.forEach(function (opt, i) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = opt;
            btn.dataset.index = i;
            quizOptionsEl.appendChild(btn);
        });

        quizOptionsEl.querySelectorAll('button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var idx = parseInt(btn.dataset.index, 10);
                var correct = newCorrectIndex === idx;

                if (correct) {
                    score++;
                    if (quizWrap) quizWrap.classList.add('quiz-celebrate');
                    showReaction('celebrate');
                } else {
                    wrongAnswers.push({
                        question: d.q,
                        selected: shuffledOptions[idx],
                        correct: shuffledOptions[newCorrectIndex]
                    });
                    if (quizWrap) quizWrap.classList.add('quiz-sad');
                    showReaction('sad');
                }

                quizOptionsEl.querySelectorAll('button').forEach(function (b) {
                    b.disabled = true;
                    if (parseInt(b.dataset.index, 10) === newCorrectIndex)
                        b.classList.add('correct');
                    else if (b === btn && !correct)
                        b.classList.add('wrong');
                });

                quizFeedback.textContent = correct
                    ? 'Correct! 💕'
                    : 'Wrong! The right answer was: ' + shuffledOptions[newCorrectIndex];

                setTimeout(function () {
                    currentQ++;
                    renderQuestion();
                }, 1200);
            });
        });
    }

    function showReaction(type) {
        var el = document.createElement('div');
        el.className = 'quiz-reaction ' + (type === 'celebrate' ? 'quiz-reaction-celebrate' : 'quiz-reaction-sad');
        el.textContent = type === 'celebrate' ? '💕🎉' : '😢';
        el.setAttribute('aria-hidden', 'true');
        document.body.appendChild(el);
        setTimeout(function () {
            if (el.parentNode) el.parentNode.removeChild(el);
        }, 1200);
    }

    /*function sendQuizScoreToEmail(scoreVal, totalVal, wrongList) {
        var notifyEmail = "tanujdevavarapu@gmail.com";

        var wrongText = wrongList.length === 0
            ? 'None 🎉 She got everything right!'
            : wrongList.map(function (w, i) {
                return (i + 1) + '. ' + w.question +
                    '\n   Chosen: ' + w.selected +
                    '\n   Correct: ' + w.correct;
            }).join('\n\n');

        var formData = new FormData();
        formData.append('_subject', 'Valentine Quiz Result 💕');
        formData.append('_captcha', 'false');
        formData.append('_template', 'table');

        formData.append('Score', scoreVal + ' / ' + totalVal);
        formData.append('Wrong Answers', wrongText);

        fetch('https://formsubmit.co/' + notifyEmail, {
            method: 'POST',
            body: formData
        }).catch(function () {});
    }*/
        function showResult() {
            quizContainer.style.display = 'none';
            quizResult.style.display = 'block';

            quizResultTitle.textContent =
                'You got ' + score + ' / ' + quizData.length + '!';

            quizResultMsg.textContent =
                score === quizData.length
                    ? 'Perfect score! You know us so well 💖'
                    : 'Still cute, still loved 💕';

            // Stop dudu song when quiz is completed
            var duduSong = document.getElementById('dudu-song');
            if (duduSong) {
                duduSong.pause();
                duduSong.currentTime = 0;
            }
            localStorage.removeItem('playDuduSong');
        }

    if (quizQuestionEl && quizOptionsEl) {
        renderQuestion();
    }
}

// Function to stop dudu song
function stopDuduSong() {
    var duduSong = document.getElementById('dudu-song');
    if (duduSong) {
        duduSong.pause();
        duduSong.currentTime = 0;
    }
}


    // ---------- Hearts Page: canvas heart animation (init runs at end of file when #heart exists) ----------
    if (bodyId === 'page-hearts') {
        // no early return; heart canvas init is below
    }

    // ---------- Main Page ----------
    if (bodyId === 'page-main') {

        // Set music source from URL ?song=... – auto-play when coming from song select
        var params = new URLSearchParams(window.location.search);
        var songChoice = (params.get('song') || '').toLowerCase().replace(/\s+/g, '-');
        var bgMusic = document.getElementById('bg-music');
        if (bgMusic) {
            var songMap = {
                'chinnadana': 'images/Chinnadana Neekosam - SenSongsmp3.Co.mp3',
                'priya': 'images/Oh Priya Priya - SenSongsmp3.Co.mp3',
                'raataan-lambiyana': 'images/Raataan Lambiyana(KoshalWorld.Com).mp3',
                'andhamaa': 'images/Andhamaa Andhamaa(KoshalWorld.Com).mp3',
                'ishq-hai': 'images/Ishq Hai(KoshalWorld.Com).mp3',
                'tenu-sang-rakhna': 'images/Tenu Sang Rakhna Jigra 128 Kbps.mp3',
                'samayama': 'images/Samayama.mp3',
                'tere-vaaste': 'images/Tere Vaaste Zara Hatke Zara Bachke 128 Kbps.mp3',
                'tum-ho-toh': 'images/Tum Ho Toh Saiyaara 128 Kbps.mp3',
                'gaaju-bomma': 'images/Gaaju Bomma.mp3',
                'madhuram': 'images/Madhuram Madhuram-SenSongsMp3.Co.mp3',
                'rambai': 'images/Rambai Neemeedha Naku.mp3',
                'yemito': 'images/Yemito - SenSongsmp3.Co.mp3',
                'gehra': 'images/Gehra Hua (PenduJatt.Com.Se).mp3'
            };
            var src = songMap[songChoice] || songMap['chinnadana'];
            var srcEl = bgMusic.querySelector('source');
            if (srcEl) {
                srcEl.src = src;
                bgMusic.load();
            }
            bgMusic.volume = 0.3;
            if (songChoice && songMap[songChoice]) {
                bgMusic.muted = false;
                bgMusic.addEventListener('canplay', function autoPlayFromSongSelect() {
                    bgMusic.removeEventListener('canplay', autoPlayFromSongSelect);
                    bgMusic.muted = false;
                    bgMusic.volume = 0.3;
                    bgMusic.play().catch(function() {});
                });
            }
        }

        // Hearts rising from bottom
        var heartsContainer = document.getElementById('hearts-container');
        if (heartsContainer) {
            var heartChars = ['❤️', '💕', '💗', '💖', '💓', '💝'];
            function createRisingHeart() {
                var heart = document.createElement('div');
                heart.className = 'heart-float';
                heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (8 + Math.random() * 6) + 's';
                heart.style.fontSize = (1 + Math.random() * 1.5) + 'em';
                heartsContainer.appendChild(heart);
                var duration = parseFloat(heart.style.animationDuration) * 1000;
                setTimeout(function() { heart.remove(); }, duration);
            }
            setInterval(createRisingHeart, 400);
            for (var i = 0; i < 8; i++) setTimeout(createRisingHeart, i * 200);
        }

        // Gallery animation
        document.querySelectorAll('.gallery-img').forEach(function(img, index) {
            img.style.animationDelay = index * 0.2 + 's';
        });

        // Music toggle and volume
        (function() {
            var music = document.getElementById('bg-music');
            var toggleBtn = document.getElementById('music-toggle');
            var volumeInput = document.getElementById('music-volume');
            if (!music) return;
            function updateToggleLabel() {
                if (!toggleBtn) return;
                toggleBtn.textContent = music.paused ? '🔇 Music Off' : '🔊 Music On';
                toggleBtn.classList.toggle('off', music.paused);
            }
            if (songChoice) {
                music.addEventListener('playing', function onAutoPlayStart() {
                    music.removeEventListener('playing', onAutoPlayStart);
                    updateToggleLabel();
                }, { once: true });
            }
            document.addEventListener('click', function startMusicOnce() {
                if (music.paused) {
                    music.muted = false;
                    music.volume = volumeInput ? Number(volumeInput.value) / 100 : 0.3;
                    music.play();
                    updateToggleLabel();
                }
            }, { once: true });
            if (toggleBtn) {
                toggleBtn.addEventListener('click', function() {
                    if (music.paused) { music.muted = false; music.play(); } else music.pause();
                    updateToggleLabel();
                });
            }
            if (volumeInput) {
                volumeInput.addEventListener('input', function() {
                    music.volume = Math.max(0, Math.min(1, Number(volumeInput.value) / 100));
                });
            }
            updateToggleLabel();
        })();

        // Secret – password protected kisses
        (function() {
            var SECRET_PASSWORD = 'love@1503';
            var revealBtn = document.getElementById('reveal-btn');
            var secretMsg = document.getElementById('secret-msg');
            var kissesSlot = document.getElementById('kisses-slot');
            var kissesGallery = document.getElementById('kisses-gallery');
            var kissUpload = document.getElementById('kiss-upload');
            if (!revealBtn || !kissesSlot) return;
            revealBtn.addEventListener('click', function() {
                var password = prompt('Enter the password to reveal 💕');
                if (password === null) return;
                if (password.trim().toLowerCase() === SECRET_PASSWORD.toLowerCase()) {
                    secretMsg.style.display = 'block';
                    kissesSlot.style.display = 'block';
                    revealBtn.style.display = 'none';
                } else alert('Wrong password. Try again! 💕');
            });
            if (kissUpload && kissesGallery) {
                kissUpload.addEventListener('change', function(e) {
                    var files = e.target.files;
                    if (!files || files.length === 0) return;
                    for (var i = 0; i < files.length; i++) {
                        (function(file) {
                            if (!file.type.startsWith('image/')) return;
                            var reader = new FileReader();
                            reader.onload = function(ev) {
                                var div = document.createElement('div');
                                div.className = 'kiss-frame';
                                div.innerHTML = '<img src="' + ev.target.result + '" alt="Kiss">';
                                kissesGallery.appendChild(div);
                            };
                            reader.readAsDataURL(file);
                        })(files[i]);
                    }
                    kissUpload.value = '';
                });
            }
        })();

        // Videos slot – only one video plays at a time; pause background music while video plays, resume when done
        (function initVideoSection() {
            var videosSlot = document.querySelector('.videos-slot');
            var bgMusic = document.getElementById('bg-music');
            var musicTimeBeforeVideo = 0;
            var videoThatPausedMusic = null;

            function pauseAllVideosExcept(playingVideo) {
                if (!videosSlot) return;
                var players = videosSlot.querySelectorAll('.videos-player');
                for (var i = 0; i < players.length; i++) {
                    if (players[i] !== playingVideo) players[i].pause();
                }
            }

            function onVideoPlay(e) {
                var video = e.target;
                if (!video || !video.classList || !video.classList.contains('videos-player')) return;
                pauseAllVideosExcept(video);
                if (bgMusic && !bgMusic.paused) {
                    musicTimeBeforeVideo = bgMusic.currentTime;
                    bgMusic.pause();
                    videoThatPausedMusic = video;
                }
            }

            function onVideoPauseOrEnd(e) {
                var video = e.target;
                if (!video || video !== videoThatPausedMusic) return;
                if (bgMusic) {
                    bgMusic.currentTime = musicTimeBeforeVideo;
                    bgMusic.play().catch(function() {});
                }
                videoThatPausedMusic = null;
            }

            if (videosSlot) {
                videosSlot.addEventListener('play', onVideoPlay, true);
                videosSlot.addEventListener('pause', onVideoPauseOrEnd, true);
                videosSlot.addEventListener('ended', onVideoPauseOrEnd, true);
            }

            // Add more videos (upload)
            var videoUpload = document.getElementById('video-upload');
            if (!videoUpload || !videosSlot) return;
            videoUpload.addEventListener('change', function(e) {
                var files = e.target.files;
                if (!files || files.length === 0) return;
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    if (!file.type.startsWith('video/')) continue;
                    var url = URL.createObjectURL(file);
                    var frame = document.createElement('div');
                    frame.className = 'video-frame';
                    frame.innerHTML = '<video class="videos-player" controls playsinline preload="metadata">' +
                        '<source src="' + url + '" type="' + file.type + '">Your browser does not support the video tag.</video>';
                    videosSlot.appendChild(frame);
                }
                videoUpload.value = '';
            });
        })();

        // Countdown
        /*var startDate = new Date('2025-07-01');
        var today = new Date();
        var days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
        var daysEl = document.getElementById('days-count');
        if (daysEl) daysEl.textContent = "We've been in love for " + days + ' beautiful days ❤️';*/
        var startDate = new Date('2025-07-01');
        var today = new Date();
        
        // total days
        var totalDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
        
        // months & days
        var months =
            (today.getFullYear() - startDate.getFullYear()) * 12 +
            (today.getMonth() - startDate.getMonth());
        
        var days = today.getDate() - startDate.getDate();
        
        if (days < 0) {
            months--;
            var prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
        }
        
        var daysEl = document.getElementById('days-count');
        
        function animateValue(el, mTarget, dTarget, tTarget, duration) {
            let start = 0;
            let startTime = null;
        
            function animate(timestamp) {
                if (!startTime) startTime = timestamp;
                let progress = Math.min((timestamp - startTime) / duration, 1);
        
                let m = Math.floor(progress * mTarget);
                let d = Math.floor(progress * dTarget);
                let t = Math.floor(progress * tTarget);
        
                el.textContent =
                    "It's been " +
                    m + " months " +
                    d + " days — that is " +
                    t + " days ❤️";
        
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
        
            requestAnimationFrame(animate);
        }
        
        if (daysEl) {
            animateValue(daysEl, months, days, totalDays, 2000); // 2 sec animation
        }
        

        // Polaroid angles
        document.querySelectorAll('.polaroid').forEach(function(p) {
            p.style.setProperty('--polaroid-angle', (Math.random() * 6 - 3) + 'deg');
        });

        // Letter – open envelope to reveal letter, then type out text
        var envelopeClosed = document.getElementById('envelope-closed');
        var letterOpen = document.getElementById('letter-open');
        var envelopeOpenBtn = document.getElementById('envelope-open-btn');
        var letterTextEl = letterOpen ? letterOpen.querySelector('.letter-text') : null;

        function escapeHtml(s) {
            return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        function runTypingEffect() {
            if (!letterTextEl) return;
            var fullHtml = letterTextEl.innerHTML;
            var fullText = fullHtml.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
            var index = 0;
            var html = '';

            function typeChar() {
                if (index >= fullText.length) {
                    letterTextEl.innerHTML = html;
                    var sig = document.getElementById('letter-signature');
                    if (sig) {
                        sig.classList.add('is-visible');
                        sig.setAttribute('aria-hidden', 'false');
                    }
                    return;
                }
                var c = fullText.charAt(index);
                index += 1;
                if (c === '\n') {
                    html += '<br>';
                } else {
                    html += escapeHtml(c);
                }
                letterTextEl.innerHTML = html + '<span class="letter-type-cursor" aria-hidden="true">|</span>';
                setTimeout(typeChar, 26);
            }
            letterTextEl.innerHTML = '<span class="letter-type-cursor" aria-hidden="true">|</span>';
            setTimeout(typeChar, 350);
        }

        if (envelopeOpenBtn && envelopeClosed && letterOpen) {
            envelopeOpenBtn.addEventListener('click', function() {
                envelopeClosed.classList.add('is-hidden');
                letterOpen.classList.add('is-visible');
                letterOpen.setAttribute('aria-hidden', 'false');
                runTypingEffect();
            });
        }
    }

    // ---------- Heart canvas (hearts page): run when #heart exists ----------
    (function heartCanvasInit() {
        var canvas = document.getElementById('heart');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        if (!ctx) return;
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(cb) { return window.setTimeout(cb, 16); };
        var isDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test((navigator.userAgent || navigator.vendor || window.opera || '').toLowerCase()));
        var mobile = isDevice;
        var koef = mobile ? 0.5 : 1;
        var width = canvas.width = koef * innerWidth;
        var height = canvas.height = koef * innerHeight;
        var rand = Math.random;
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fillRect(0, 0, width, height);
        var heartPosition = function(rad) {
            return [Math.pow(Math.sin(rad), 3), -(15 * Math.cos(rad) - 5 * Math.cos(2 * rad) - 2 * Math.cos(3 * rad) - Math.cos(4 * rad))];
        };
        var scaleAndTranslate = function(pos, sx, sy, dx, dy) {
            return [dx + pos[0] * sx, dy + pos[1] * sy];
        };
        window.addEventListener('resize', function() {
            width = canvas.width = koef * innerWidth;
            height = canvas.height = koef * innerHeight;
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fillRect(0, 0, width, height);
        });
        var traceCount = mobile ? 20 : 50;
        var pointsOrigin = [];
        var i, dr = mobile ? 0.3 : 0.1;
        for (i = 0; i < Math.PI * 2; i += dr) pointsOrigin.push(scaleAndTranslate(heartPosition(i), 210, 13, 0, 0));
        for (i = 0; i < Math.PI * 2; i += dr) pointsOrigin.push(scaleAndTranslate(heartPosition(i), 150, 9, 0, 0));
        for (i = 0; i < Math.PI * 2; i += dr) pointsOrigin.push(scaleAndTranslate(heartPosition(i), 90, 5, 0, 0));
        var heartPointsCount = pointsOrigin.length;
        var targetPoints = [];
        var pulse = function(kx, ky) {
            for (i = 0; i < pointsOrigin.length; i++) {
                targetPoints[i] = [];
                targetPoints[i][0] = kx * pointsOrigin[i][0] + width / 2;
                targetPoints[i][1] = ky * pointsOrigin[i][1] + height / 2;
            }
        };
        var e = [];
        for (i = 0; i < heartPointsCount; i++) {
            var x = rand() * width;
            var y = rand() * height;
            e[i] = { vx: 0, vy: 0, R: 2, speed: rand() + 5, q: ~~(rand() * heartPointsCount), D: 2 * (i % 2) - 1, force: 0.2 * rand() + 0.7, f: "hsla(0," + ~~(40 * rand() + 100) + "%," + ~~(60 * rand() + 20) + "%,.3)", trace: [] };
            for (var k = 0; k < traceCount; k++) e[i].trace[k] = { x: x, y: y };
        }
        var config = { traceK: 0.4, timeDelta: 0.01 };
        var time = 0;
        var loop = function() {
            var n = -Math.cos(time);
            pulse((1 + n) * 0.5, (1 + n) * 0.5);
            time += ((Math.sin(time)) < 0 ? 9 : (n > 0.8) ? 0.2 : 1) * config.timeDelta;
            ctx.fillStyle = "rgba(0,0,0,.1)";
            ctx.fillRect(0, 0, width, height);
            for (i = e.length; i--;) {
                var u = e[i];
                var q = targetPoints[u.q];
                var dx = u.trace[0].x - q[0];
                var dy = u.trace[0].y - q[1];
                var length = Math.sqrt(dx * dx + dy * dy);
                if (10 > length) {
                    if (0.95 < rand()) u.q = ~~(rand() * heartPointsCount);
                    else {
                        if (0.99 < rand()) u.D *= -1;
                        u.q += u.D;
                        u.q %= heartPointsCount;
                        if (0 > u.q) u.q += heartPointsCount;
                    }
                }
                u.vx += -dx / length * u.speed;
                u.vy += -dy / length * u.speed;
                u.trace[0].x += u.vx;
                u.trace[0].y += u.vy;
                u.vx *= u.force;
                u.vy *= u.force;
                for (var k = 0; k < u.trace.length - 1;) {
                    var T = u.trace[k];
                    var N = u.trace[++k];
                    N.x -= config.traceK * (N.x - T.x);
                    N.y -= config.traceK * (N.y - T.y);
                }
                ctx.fillStyle = u.f;
                for (k = 0; k < u.trace.length; k++) {
                    ctx.fillRect(u.trace[k].x, u.trace[k].y, 1, 1);
                }
            }
            window.requestAnimationFrame(loop);
        };
        loop();
    })();
})();
