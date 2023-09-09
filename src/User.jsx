export default function User({ user }) {
    const {name, id, username, email} = user;
    return (
        <div style={{border:'1px solid blue',margin:'10px',padding:'10px'}}>
            <h5> Name : {name}</h5>
            <h5> Email : {email}</h5>
            <h5> Username : {username}</h5>
            <h5> ID : {id}</h5>
        </div>
    )
}




