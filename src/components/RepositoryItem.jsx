




export function RepositoryItem(props ){

    return (

        <li>
             <strong> {props.repository?.name ?? 'Default'} </strong>
             <p>{props.repository.subtittle}</p>
             <a href={props.repository.link}>acceder al repositorio</a>
        </li>
    )
}