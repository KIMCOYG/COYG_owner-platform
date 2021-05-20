    import React from "react";
    import {useHistory} from "react-router-dom";

const SelectMyShops = ({lists}) => {
    let history = useHistory();
    return (
        <ul>
            {lists.map((s) => (
                <div onClick={() => history.push(`/owner/mypage/manageshop/${s.shop_id}`)}>
                    {s.name}
                </div>
            ))}
        </ul>
    )
}

export default SelectMyShops