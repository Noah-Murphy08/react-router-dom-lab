import { Link } from "react-router-dom"



const MailboxList = (props) => {
    return (
        <>
            <h2>Mailboxes</h2>
            <ul>
                {props.mailboxes.map((mailbox) => (
                    <li key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`}>
                            <h3>Box Number: {mailbox._id}</h3>
                            <p>Owner: {mailbox.boxholder}</p>
                            
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MailboxList
