import { useState } from "react"
import { useNavigate } from "react-router-dom"


const initState = {
    boxholder: '',
    boxsize: ''
}


const MailboxForm = (props) => {
    const [mailboxData, setMailboxData] = useState(initState)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addMailbox(mailboxData)
        setMailboxData(initState)
        navigate('/mailboxes')
    }

    const handleChange = ({ target }) => {
        setMailboxData({...mailboxData, [target.name]: target.value})
    }

    return (
        <>
            <h2>Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Boxholder:</label>
                <input
                    type="text"
                    id='boxholder'
                    name='boxholder'
                    value={mailboxData.boxholder}
                    onChange={handleChange}
                />
                <label htmlFor="boxsize">Boxsize</label>
                <select name="boxsize" id="boxsize" value={mailboxData.boxsize} onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}


export default MailboxForm
