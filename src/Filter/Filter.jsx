





export default function Filter ({value, onFilter}){
    return (
        <div>
            <p>search by name</p>
            <input type="text"
                value={value}
                onChange={(e) => onFilter(e.target.value)}
            />
        </div>
    )
}