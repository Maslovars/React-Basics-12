import "./Contact.css";

const Contact = ({ avatar, name, online }) => {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} alt="userAvatar" />
            <div>
                <p className="name">{name}</p>
                <div className="status">
                    <span className={online ? "status-online" : "status-offline"}></span>
                    <p className="status-text">{online ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;