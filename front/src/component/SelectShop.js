import React, {useState} from "react";
import ShopManageContainer from "../container/ShopManageContainer";

const SelectShop = (lists) => {
    const [selected, setSelected] = useState("");
    const [selectedId, setSelectedId] = useState(0);

    return (
        <>
            <select value={selected} onChange={(event) => {
                setSelected(event.target.value.name)
                setSelectedId(event.target.value.id)
            }}>
                {lists.map((shopname) => <option key={shopname.name} value={shopname}>{shopname.name}</option>)}
            </select>
            <ShopManageContainer id={selectedId}/>
        </>
    )
}

export default SelectShop