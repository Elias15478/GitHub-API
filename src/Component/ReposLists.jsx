export default function ReposLists(props) {
return (
        <div>
            <li className="ReposLists">
                {/* <a href={props.x.html_url}>{props.x.name}</a> :  {props.x.description} */}
                <a href={props.x.clone_url}>{props.x.name}</a> :  {props.x.description}
            </li>
        </div>
    )
}