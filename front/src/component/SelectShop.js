    import React, {useState} from "react";

const SelectShop = ({lists}) => {
    const [selected, setSelected] = useState("");
    const [selectedId, setSelectedId] = useState(0);

    return (

            <select value={selected} onChange={(event) => {
                setSelected(event.target.value.name)
                setSelectedId(event.target.value.id)
            }}>
                {lists.map((s) => <option key={s.name} value={s}>{s.name}</option>)}
            </select>
    )
}

export default SelectShop