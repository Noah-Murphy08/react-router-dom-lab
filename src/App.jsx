import { useState } from "react";
import NavBar from './components/NavBar'
import { Route, Routes } from "react-router-dom";
import MailboxList from './components/MailboxList'
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";

const App = () => {

  const [mailboxes, setMailboxes] = useState([])

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailboxData])
  }


  return (
    <>
      <NavBar />
      <h1>Mailbox</h1>
      <Routes>
        <Route path='/' element={<h2>Post Office</h2>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/mailboxes/:mailboxesId' element={<MailboxDetails mailboxes={mailboxes}/>} />
        <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>}/>
        <Route path='*' element={<h2>Theres Nothing Here For You</h2>}/>
      </Routes>
    </>
  )
};

export default App;
