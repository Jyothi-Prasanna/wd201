
const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
     
      od = [];
      // eslint-disable-next-line no-undef
      for (let i = 0; i < all.length; i++) {
        if (all[i].dueDate < today) {
          od.push(all[i]);
        }
      }
      return od;
    };
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      dt = [];
      for (let i = 0; i < all.length; i++) {
        if (all[i].dueDate === today) {
          dt.push(all[i]);
        }
      }
      return dt;
    };
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      dl = [];
      for (let i = 0; i < all.length; i++) {
        if (all[i].dueDate > today) {
          dl.push(all[i]);
        }
      }
      return dl;
    };
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      out = [];
      for (i = 0; i < list.length; i++) {
        if (list[i].dueDate === today) {
          if (list[i].completed === false) {
            out.push(`[ ] ${list[i].title}`);
          } else {
            out.push(`[x] ${list[i].title}`);
          }
        } else {
          if (list[i].completed === false) {
            out.push(`[ ] ${list[i].title} ${list[i].dueDate}`);
          } else {
            out.push(`[x] ${list[i].title} ${list[i].dueDate}`);
          }
        }
      }
      return out.join("\n");
    };
  
    return {
      // eslint-disable-next-line no-undef
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  module.exports = todoList;
  
  /*

  
  const todos = todoList() */
  
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };
  
  // eslint-disable-next-line no-var
  var dateToday = new Date();
  const today = formattedDate(dateToday);
  /*
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log('My Todo-list\n')
  
  console.log('Overdue')
  // eslint-disable-next-line no-var
  var overdues = todos.overdue()
  // eslint-disable-next-line no-var
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log('\n')
  
  console.log('Due Today')
  // eslint-disable-next-line prefer-const
  let itemsDueToday = todos.dueToday()
  // eslint-disable-next-line prefer-const
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log('\n')
  
  console.log('Due Later')
  // eslint-disable-next-line prefer-const
  let itemsDueLater = todos.dueLater()
  // eslint-disable-next-line prefer-const
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log('\n\n')
  */
