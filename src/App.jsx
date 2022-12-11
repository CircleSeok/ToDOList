import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  //state 만들기
  const [todos, setTodos] = useState(initialState);

  //title과 contents
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleSubmitClick = (event) => {
    //원래 onSubmit 이 가지고 있는 고유 기능을삭제함
    event.preventDefault();
    //alert("test");

    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };
    // newTodo를 todos에 넣어주자!!!!!
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };
  return (
    <>
      <header>ToDoList!</header>
      <main className='Main'>
        <section className='input_section'>
          <form onSubmit={handleSubmitClick}>
            할일 :
            <input
              placeholder='제목을 입력해주세요.'
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            내용 :
            <input
              placeholder='내용을 입력해주세요.'
              value={contents}
              onChange={(event) => {
                setContents(event.target.value);
              }}
            />
            {/* input들이 들어갈 곳
                        1. 인풋필드 2개 만들기 
                        2. 버튼 만들기 -> 누르면 input에 있는 값이
                        밑에있는 todolist로 들어가야함 
                   */}
            <button>추가</button>
          </form>
        </section>
        <p>할일 🔥</p>
        <section className='showTodo'>
          {/* todoList 해야할 것 */}
          {todos
            .filter((item) => item.isDone === false) // false인 애들만 가져오기
            .map((item) => {
              return (
                <div
                  className='todo'
                  key={item.id}
                  // map이 todos의 있는 내용을 빙글빙글 돌면서 return.
                  // div가 많기 때문에 div 컴포넌트에 key를 넣어줘야함
                >
                  <h4>{item.title}</h4>
                  <h4>{item.contents}</h4>
                  <button>완료</button>
                  <button>삭제</button>
                </div>
              );
            })}
        </section>
        <p>완료 ✅</p>
        <section className='showTodo'>
          {/* TodoList가 들어갈 곳(완료된 것) */}
          {todos
            .filter((item) => item.isDone === true)
            .map((item) => {
              return (
                <div className='todo'>
                  <h4>{item.title}</h4>
                  <h4>{item.contents}</h4>
                  <button>완료</button>
                  <button>삭제</button>
                </div>
              );
            })}
        </section>
      </main>
      <footer>오늘 하루도 화이팅</footer>
    </>
  );
}

const initialState = [
  {
    title: '리액트 공부',
    contents: '리액트 공부하기',
    isDone: false,
    id: uuidv4(),
  },
  {
    title: '자바스크립트 공부',
    contents: '자바스크립트 공부',
    isDone: true,
    id: uuidv4(),
  },
  {
    title: 'todolist 만들기',
    contents: 'todolist 만들기',
    isDone: false,
    id: uuidv4(),
  },
];

// id를 순차적으로 하게 되면, 지우고 더하는 과정 중에 꼬일 수 있음
// 그래서 id는 아주 유니크하게 만들자

export default App;
