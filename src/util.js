export const itemTypes = [
    { type: "text", label: "Texto Corto" },
    { type: "select", label: "Selección" },
    { type: "checkbox", label: "Check List"}
  ]

export function getAnswerObject(items) {
  const obj = {}

  items?.forEach(i => {
    obj[i.label] = undefined
  })

  return obj
}

export function joinResults(args) {
  const {
    form, 
    evaluations, 
    teachers
  } = args

  const results = []
  const TOTAL = evaluations
      .filter(evl=> evl.form == form.id)
      .length

  console.log({TOTAL});

  form?.items.forEach( (item, idx) => {
    const res = {}
    res.item = {...item}

    switch(item.type) {
      case 'text': {
        res.answers = evaluations.map( evl => {
          const answer = {}

          answer.teacher = teachers?.find( t => t.id == evl.teacher)
          answer.what = evl.answers?.[item?.label]
          return answer
        })
        break
      }

      case 'select': {
        const choices = []
    
        console.log({SELECT_TOTAL: TOTAL})

        item.options.forEach( op => {
          const chs = { option: op }

          // find teacher tha choice this option
          const IdsOfteachersForThisOp = evaluations
            .filter( evl => evl.answers[item.label] == op)
            .map( evl => evl.teacher )

          const teachersForThisOp = IdsOfteachersForThisOp
            .map( id => teachers.find( t => t.id == id))

          chs.teacher = teachersForThisOp

          const percent = 
            Math.round((teachersForThisOp.length / TOTAL) * 100)
          chs.percent = percent

          // calculate percentage of this options
          choices.push(chs)
        })

        res.choices = choices
        break
      }

      case 'checkbox': {
        const choices = {
          yes: {},
          no: {}
        }

        // YES
        const yesEvals = evaluations
          .filter( evl => evl.answers[item.label])

        choices.yes.teachers = yesEvals.map( evl => {
          return teachers
            .filter(t => t.id == evl.teacher)
        })

        choices.yes.percent = 
          Math.round((yesEvals.length / TOTAL) * 100)


        // NO
        const noEvals = evaluations
          .filter( evl => !(evl.answers[item.label]))

        choices.no.teachers = noEvals.map( evl => {
          return teachers
            .filter(t => t.id == evl.teacher)
        })

        choices.no.percent = 
          Math.round((noEvals.length / TOTAL) * 100)

        /*
        {
          yes {
            teachers
            percent
          }
          no {
            teachers
            percent
          }
        }
        */

        res.choices = choices
        break
      }
    }

    results.push(res)
  })


  const TOTAL_OF_TEACHER = teachers.length

  results.teachersEvaluatedPercent = 
    Math.round((TOTAL / TOTAL_OF_TEACHER) * 100)

  return results
}