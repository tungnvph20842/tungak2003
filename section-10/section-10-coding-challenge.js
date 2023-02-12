//coding challenge #1
// const poll ={
//     question: 'What is your favourite programming language?',
//     options: ['0: Javascrip', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answers = Number(
//             prompt(
//                 `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//             )
//         );
//         console.log(answers);
//                 typeof answers === 'number' && answers < this.answers.length && this.answers[answer]++;

//                 this.displayResults();
//                 this.displayResults('string');
//     },
//     displayResults(type= 'array' ){
//         if(type === 'array'){
//             console.log(thi.answer);
//         }else if (tyoe === 'string'){
//             console.log(`Poll results are ${this.answers.join(',')}`);
//         }
//     }
// };

//             document
//                 .querySelector('.poll')
//                 .addEventListener('click', poll.registerNewAnswer.bind(poll));
//             poll.displayResults.call({answer: [5 ,2 ,3]}, 'string');
//             poll.displayResults.call({answer: [1 ,5 ,3 ,9 ,6 ,1]}, 'string');
//             poll.displayResults.call({answer: [1 ,5 ,3 ,9 ,6 ,1]});
//coding challenge #2
(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click',function(){
        header.style.color='blue';
    });
})();
