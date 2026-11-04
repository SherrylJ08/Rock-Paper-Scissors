let score=JSON.parse(localStorage.getItem('score')) || {wins:0, losses:0, ties:0};
            document.querySelector('.js-score').innerText = 'Wins:    ' + score.wins + ', Losses: ' + score.losses + ', Ties: ' + score.ties;
            let computerMove = '';
            const videoElement = document.querySelector('.js-result-video');
            console.log(videoElement)
            function playGame(playerMove) {
                document.querySelector('.js-result-video').style.display='block';

                
                let result = '';
                

                if (playerMove === computerMove) {
                    videoElement.src = 'tie_final.mp4';
                    score.ties++;

                } else if (
                    (playerMove === '✊' && computerMove === '✌️') ||
                    (playerMove === '✋' && computerMove === '✊') ||
                    (playerMove === '✌️' && computerMove === '✋')
                ) {
                     videoElement.src = 'victory_final.mp4';
                    score.wins++;
                } else {
                    videoElement.src = 'defeat_final.mp4';
                    score.losses++;
                }
                localStorage.setItem('score', JSON.stringify(score));
                videoElement.load();
                videoElement.classList.add('result-video');
                videoElement.play();
                document.querySelector('.js-move').innerText='you chose '+playerMove+', computer chose '+computerMove;
                document.querySelector('.js-score').innerText='Wins: '+score.wins+', Losses: '+score.losses+', Ties: '+score.ties;
                
            }
            function pickComputerMove() {
                const randomNumber = Math.random();

                let computerMove = '';

                if (randomNumber >= 0 && randomNumber < 1 / 3) {
                    computerMove = '✊';
                } 
                else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = '✋';
                } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = '✌️';
                }

                return computerMove;
            }
            

            function homepage(){
                document.querySelector('.Home-Page').style.display='block'
                document.querySelector('.countdown').style.display = 'none';
                document.querySelector('.play-again').style.display='none';


                document.querySelector('.choose-Screen').style.display = 'none';
            }
            function startGame(){
                document.querySelector('.Home-Page').style.display='none'
                document.querySelector('.countdown').style.display = 'none';

                document.querySelector('.choose-Screen').style.display = 'block';
                document.querySelector('.play-again').style.display='none';


            }
            
            function countdown(playermove){
                computerMove=pickComputerMove();
                document.querySelector('.choose-Screen').style.display = 'none';
                document.querySelector('.countdown').style.display = 'block';
                document.querySelector('.js-player-move').innerHTML=playermove;
                const timer=document.querySelector('.js-timer');
                
                timer.innerText = 'ROCK';
                timer.style.color='#1E90FF';
                timer.style.fontWeight='bold';
                timer.style.fontSize='55px';

               
                setTimeout(function(){

                    timer.innerText = 'PAPER';
                    timer.style.color='#F44336';
                    timer.style.fontWeight='bold';
                    timer.style.fontSize='55px';



                },1000);

                setTimeout(function(){

                    timer.innerText = 'SCISSORS';
                    timer.style.color='#4CAF50';
                    timer.style.fontWeight='bold';
                    timer.style.fontSize='55px';

                },2000);

                setTimeout(function(){

                    timer.innerText = 'SHOOT!';
                    timer.style.color='#FFFFFF';
                    timer.style.fontWeight='bold';
                    timer.style.fontSize='55px';
                },3000);
                setTimeout(function(){

                    revealComputerMove();
                    playGame(playermove)
                    document.querySelector('.play-again').style.display='block';
                    document.querySelector('.js-timer')
                        .innerText = '';

                },3500);

                }
                function revealComputerMove(){
                    document.querySelector('.js-computer-move').innerHTML=computerMove

                }
                function playagain(){
                    document.querySelector('.js-move').innerHTML='';
                    videoElement.classList.remove('result-video');
                    document.querySelector('.js-computer-move').innerHTML='?';
                    document.querySelector('.js-result-video').style.display='none';
                    
                }

                document.addEventListener('keydown', (event) => {

                     const icons = document.querySelector('.icons');

                    if (icons.style.display !== 'none') {

                        if (event.key.toLowerCase() === 'r') {
                            countdown('✊');
                        }

                        if (event.key.toLowerCase() === 'p') {
                            countdown('✋');
                        }

                        if (event.key.toLowerCase() === 's') {
                            countdown('✌️');
                        }
                    }
                });