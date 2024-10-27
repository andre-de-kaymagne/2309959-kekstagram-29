const containerElement = document.getElementById('root');

function App() {
  return (
    <h1>Hello, world!</h1>
  )
}


// Отрисуем элемент в контейнере
const root = ReactDOM.createRoot(containerElement);
root.render(<App />);