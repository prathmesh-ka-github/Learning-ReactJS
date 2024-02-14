import Student from "./Student.jsx"
function App() {

  return (
    <>
      <Student name="Spongebob" age="21" isstudent={true}/>
      <Student name="Patrik" age={20} isstudent={true}/>
      <Student name="Squidward" age={28} isstudent={false}/>
      <Student name="Mr Krabs" age={34} isstudent={false}/>
      <Student  isstudent={false}/>
    </>
  )
}

export default App
