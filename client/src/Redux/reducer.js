
const initStore = {
   userid:[],
   quizquestion:[],
   singlequestion:[]
}

export const reducer = (store =initStore ,{type,payload}) => {
      switch(type) {
        case "USERID" : return {
              ...store,
              userid:[payload]
        }

        case "QUIZ" : return {
            ...store,
            quizquestion:payload
      }

      case "ONEQUESTION" :return {
          ...store,
          singlequestion:payload
      }

         default : return store
      }
}