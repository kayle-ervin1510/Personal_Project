export default function MissingPage({ message }) {
    return (
        
        <div>{message ?? "No such HTTP Cat with id of '{id}' exists."}</div>
        
    )
}