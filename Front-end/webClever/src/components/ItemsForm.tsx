
type DivProps = {
    name: string;
  
}


export function ItemsForm(props : DivProps){
    return(
    <div className="items">
        <div className="item">
            <div>{props.name}</div>
       </div>
    </div>
    )
}