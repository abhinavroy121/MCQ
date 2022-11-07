

export const userId =(payload)=>{
  return {
      type: 'USERID',
      payload
  }
}

export const quizQuestion =(payload)=>{
    return {
        type: 'QUIZ',
        payload
    }
}

export const singlequestion = (payload)=>{
    return {
        type: 'ONEQUESTION',
        payload
    }
}