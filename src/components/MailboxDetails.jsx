import { useParams } from "react-router-dom"



const MailboxDetails = (props) => {
    const { mailboxesId } = useParams()

    const singleMailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxesId))

    if (!singleMailbox) {
        return <h1>Mailbox Not Found</h1>
    }

    return (
        <>
            <h2>{singleMailbox.boxholder}</h2>
            <dl>
                <dt>Box Number:</dt>
                <dd>{singleMailbox._id}</dd>
                <dt>Box size:</dt>
                <dd>{singleMailbox.boxsize}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails
