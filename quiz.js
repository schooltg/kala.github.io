function check()    {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if (q1=="Biology")   {c++}
    if (q2=="None")   {c++}
    if (q3=="All")   {c++}
        document.write(c);
quiz.style.display="none";
   
    if (c<=2)   {
        result.textContent='Your result is ${c}. Below Passmark. Try Again.'
    }   else {
        result.textContent='Your result is ${c}. Excellent!!'
    }
}