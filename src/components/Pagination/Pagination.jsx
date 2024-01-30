import "./Pagination.css";
export default function Pagination({item, totalItems, type}) {
    return(
        <div className="pagination">
            <span className="current">{item}</span>
            <span> {type === 'word'? ' of' : " /" }</span>
            <span className="total">{totalItems}</span>
        </div>
    )
}