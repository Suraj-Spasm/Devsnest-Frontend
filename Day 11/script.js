
const questions = [
    {
      quest: " How long does the heist on the Royal Mint last?",
      answer: "0",
      options: ["10 DAYS", "11 DAYS","12 DAYS","13 DAYS"],
    },
    {
      quest: "Who is the youngest member of the original eight robbers?",
      answer: "0",
      options: ["DENVER", "NAIROBI", "RIO", "TOKY0"],
    },
    {
      quest: "How are Oslo & Helsinki related?",
      answer: "1",
      options: ["BROTHERS", "COUSINS", "LOVERS", "THEY WEREN'T RELATED"],
    },
    {
      quest: "Which robber actually saves Nairobi’s life during the surgery?",
      answer: "3",
      options: ["HELSINKI", "TOKYO", "PALMERO", "STOCKHOLM"],
    },
  ];
  const ques = document.querySelector(".quest");
  const opt = document.querySelectorAll(".opt");
  const nxt = document.querySelector(".next");
  
  let i = 0;
  let score = 0;
  // console.log(ques, btn, opt, opt[0])
  
  let question = questions[i];
  ques.innerHTML = `${i + 1}. ${question.quest}`;
  opt[0].innerHTML += "a-> " + question.options[0];
  opt[1].innerHTML += "b-> " + question.options[1];
  opt[2].innerHTML += "c-> " + question.options[2];
  opt[3].innerHTML += "d-> " + question.options[3];
  let flag = false;
  
  nxt.addEventListener("click", () => {
    i += 1;
    if (i === questions.length) {
      alert("Quiz Completed");
      window.location.reload();
    }
    let question = questions[i]; //
    ques.innerHTML = `${i + 1}. ${question.quest}`;
    opt[0].innerHTML = "a-> " + question.options[0];
    opt[1].innerHTML = "b-> " + question.options[1];
    opt[2].innerHTML = "c-> " + question.options[2];
    opt[3].innerHTML = "d-> " + question.options[3];
  });
  
  let y = document.getElementsByTagName("button");
  console.log(y);
  for (let j = 0; j < y.length - 1; j++) {
    // Array.from(y).forEach((item) => {
    let item = y[j];
    item.addEventListener("click", () => {
      let ans = item.getAttribute("id");
      console.log(ans);
      let question = questions[i];
      if (question.answer === ans) {
        score++;
        alert(`Correct answer. Your score is ${score}`);
      } else alert("Wrong answer");
    });
  }
  // });









