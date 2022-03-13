export function RepositoryItem(props){
    return(
        <li>
            <a href={props.repository.html_url}>
                <strong>{props.repository.name}</strong>
            </a>
            <p>{props.repository.description}</p>
        </li>
    );
}