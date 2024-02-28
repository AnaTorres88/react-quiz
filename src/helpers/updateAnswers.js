let answers = [];

function pushToArray(answer) {
    if(!answers.includes(answer)) {
        answers.push(answer);
    } else {
        const newAnswerArray = answers.filter(item=> answer!==item);
        answers=newAnswerArray;
    }
}
export const updateAnswers = (answer, index, questions, setQuestions) => {
    const parent ={ ...questions[index], answer};
    const updatedList = questions.map((item, i) => {
      if(index===i) {
        item = parent
      }
      return item
    });

    setQuestions(updatedList);
  }

  export const updateCheckboxAnswer = (answer, index, questions, setQuestions) => {
    pushToArray(answer);
    const parent ={ ...questions[index], answer:answers};

    const updatedList = questions.map((item, i) => {
        if(index===i) {
          item = parent
        }
        return item
      });
  
      setQuestions(updatedList);
  }
  