




export function RepositoryItem(props ){

    return (

        <li>
             <strong> {props.repository?.name ?? 'Default'} </strong>
             <p>{props.repository.language}</p>
             <a href={props.repository.html_url}>Acceder al repositorio</a>
        </li>
    )
}