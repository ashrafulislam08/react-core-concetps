// function Todo({ task, isDone }) {
//   return (
//     <li>
//       Task: {task} {isDone ? "✔" : "❌"}
//     </li>
//   );
// }

// function Todo({ isDone, task }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work on: {task}</li>;
//   }
// }
// function Todo({ isDone, task }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work on"} : {task}
//     </li>
//   );
// }

// function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone && ": Done"}
//     </li>
//   );
// }
// function Todo({ task, isDone }) {
//   return (
//     <li>{task} {isDone || ": Do it"} </li>
//   );
// }

function Todo({ task, isDone }) {
  let listItems;
  if (isDone) {
    listItems = (
      <li>
        {task} {isDone && ": Done"}{" "}
      </li>
    );
  } else {
    listItems = (
      <li>
        {task} {isDone || ": Do it"}{" "}
      </li>
    );
  }

  return listItems;
}

export default Todo;
