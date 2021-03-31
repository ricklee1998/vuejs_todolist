import getDate from "./../../assets/commonJS/getDate";

// 아이템 하나 추가
const addOneItem = (state, todoItem) => {
  var value = {
    item: todoItem,
    date: `${getDate().date} ${getDate().week}`,
    time: getDate().time,
    completed: false
  };
  localStorage.setItem(todoItem, JSON.stringify(value));
  if (state.todoOldestOrder === false) {
    state.todoItems.unshift(value);
  } else {
    state.todoItems.push(value);
  }
}
// 아이템 하나 삭제
const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1);
}
// 아이템 하나 완료 토글
const toggleOneItem = (state, payload) => {
  payload.todoItem.completed = !payload.todoItem.completed;
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
// 모든 아이템 삭제
const clearAllItem = (state) => {
  const name = state.userName;
  state.todoItems = [];
  localStorage.clear();
  localStorage.setItem("userName", name);
}
// 최신순 정렬
const sortTodoLatest = (state) => {
  state.todoOldestOrder = false;
  state.todoItems.sort(function (a, b) {
    return b.time - a.time;
  });
}
// 오래된 순 정렬
const sortTodoOldest = (state) => {
  state.todoOldestOrder = true;
  state.todoItems.sort(function (a, b) {
    return a.time - b.time;
  });
}
// 사용자 이름 추가
const setUserName = (state, userName) => {
  localStorage.setItem("userName", userName);
  state.userName = userName;
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItem, sortTodoLatest, sortTodoOldest, setUserName };