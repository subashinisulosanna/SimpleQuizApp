const quizData=[
    {
        question:"A process that involves recognizing and focusing on the important characteristics of a situation or object is known as:",
        a:"Encapsulation",
        b:"Polymorphism",
        c:"Abstraction",
        d:"Inheritance",
        correct:"c"
    },
    {
        question:"Which statement is true regarding an object?",
        a:"An object is what classes instantiated are from",
        b:"An object is an instance of a class",
        c:"An object is a variable",
        d:"An object is a reference to an attribute",
        correct:"b"
    },{
        question:"In object-oriented programming, composition relates to",
        a:"The use of consistent coding conventions",
        b:"The organization of components interacting to achieve a coherent, common behavior",
        c:"The use of inheritance to achieve polymorphic behavior",
        d:"The use of data hiding to achieve polymorphic behavior.",
        correct:"b"
    },{
        question:" In object-oriented programming, new classes can be defined by extending existing classes. This is an example of:",
        a:"Encapsulation",
        b:"Polymorphism",
        c:"Abstraction",
        d:"Inheritance",
        correct:"d"
    },{
        question:"Which of the following does not belong: If a class inherits from some other class, it should",
        a:"Make use of the parent class’s capabilities",
        b:"Over-ride or add the minimum to accomplish the derived class’ purpose",
        c:"Over-ride all the methods of its parent class",
        d:"Make sure the result “IS-A-KIND-OF” its base class",
        correct:"c"
    },{
        question:"Object-oriented inheritance models the",
        a:" “is a kind of” relationship",
        b:"“has a” relationship",
        c:"“want to be” relationship",
        d:" “contains” of relationship.",
        correct:"a"
    },{
        question:"The wrapping up of data and functions into a single unit is called",
        a:"Encapsulation",
        b:"Polymorphism",
        c:"Abstraction",
        d:"Inheritance",
        correct:"a"
    },{
        question:"Refers to the ability of two or more objects belonging to different classes to respond to exactly the same message in different class-specific ways and simplifies code maintenance.",
        a:"Encapsulation",
        b:"Polymorphism",
        c:"Abstraction",
        d:"Inheritance",
        correct:"b"
    },{
        question:"A process that involves recognizing and focusing on the important characteristics of a situation or object is known as:",
        a:"Encapsulation",
        b:"Polymorphism",
        c:"Abstraction",
        d:"Inheritance",
        correct:"c"
    },{
        question:"In object-oriented programming, new classes can be defined by extending existing classes. This is an example of:",
        a:"Encapsulation",
        b:"Polymorphism",
        c:"Abstraction",
        d:"Inheritance",
        correct:"d"
    }


];

const answerEl=document.querySelectorAll(".answer");
const quesEl=document.getElementById('ques');
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitbtn=document.getElementById('submit')
const quiz=document.getElementById('quiz');

var curpos=0;
let score=0;
focus();
function focus(){
    deSelected();
    const quizSubData=quizData[curpos];
    quesEl.innerHTML=quizSubData.question;
    a_text.innerHTML=quizSubData.a;
    b_text.innerHTML=quizSubData.b;
    c_text.innerHTML=quizSubData.c;
    d_text.innerHTML=quizSubData.d;
    

}
function getItem(){
    let answer=undefined;
    answerEl.forEach((ans)=>{
        if(ans.checked)
        {
            answer=ans.id;
        }
    }
    );
    return answer;
}
function deSelected(){
    answerEl.forEach((answerEl)=>{
        answerEl.checked=false;
        
    });
}


submitbtn.addEventListener('click',()=>{
   const answerid=getItem();
   if(answerid)
   {
       if(answerid===quizData[curpos].correct)
       {
            score++;
       }
       curpos++;
       if(curpos<quizData.length)
       {
           focus();
       }
       else{
           quiz.innerHTML=`<h2>Your score is ${score} out of ${quizData.length}.</h2><button onClick="location.reload()">Reload</button>`
       }
   } 
});

