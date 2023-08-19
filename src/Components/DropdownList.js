export default function DropdownList(props) {

    return (
        <ul data-id="dropdown" className="dropdown">
            {props.list.map((item, index) => (
                <li className = {index == props.selected ? 'active': ''}>
                    <a href="#" onClick={(e) => { 
                        props.setSelectedState(index)
                    }}>{item}</a>
                </li>
            ))}
        </ul>
    );
}