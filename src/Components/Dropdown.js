export default function Dropdown(props) {

    const wrapperEl = document.querySelector('[data-id=wrapper]'); 
    const toggleEl = document.querySelector('[data-id=toggle]');
  
    toggleEl.addEventListener('click', e => {
      e.preventDefault();
      wrapperEl.classList.toggle('open');
    });

    return (
        <button data-id="toggle" className="btn" onClick = { e => {
                props.setDropdownState(props.dropdownState == 0 ? 1 : 0)
            }}>
            <span>{ props.selected }</span>
            <i className="material-icons">public</i>
        </button>
    );
}