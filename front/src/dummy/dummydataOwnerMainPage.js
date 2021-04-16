import React, { useMemo } from 'react';

const dataLists = [
    {
        number:1,
        thumbnail: "image1",
        eventName: "eventname1",
        eventDetail: "eventDetail1",
        shopName: "shopName1",
        term: "04.01" + " ~ " + "04.05",
        enteredDate: "2021.04.01",
        state: "진행중"
    },
    {
        number:2,
        thumbnail: "image2",
        eventName: "eventname2",
        eventDetail: "eventDetail2",
        shopName: "shopName2",
        term: "04.02" + " ~ " + "04.04",
        enteredDate: "2021.04.02",
        state: "진행중"
    },
    {
        number:3,
        thumbnail: "image3",
        eventName: "eventname3",
        eventDetail: "eventDetail3",
        shopName: "shopName3",
        term: "03.29" + " ~ " + "03.31",
        enteredDate: "2021.03.29",
        state: "종료"
    },

]

const TableData = () => {
    const columns = useMemo(
        () => [
            {
                accessor: "number",
                Header: "번호"
            },
            {
                accessor: "thumbnail",
                Header: "썸네일"
            },
            {
                accessor: "eventName",
                Header: "이벤트명"
            },
            {
                accessor: "eventDetail",
                Header: "이벤트 상세"
            },
            {
                accessor: "shopName",
                Header: "가게명"
            },
            {
                accessor: "term",
                Header: "기간"
            },
            {
                accessor: "enteredDate",
                Header: "등록일"
            },
            {
                accessor: "state",
                Header: "상태"
            }
        ],
        []
    )

    const data = useMemo(
        () => 
            Array(10)
            .fill()
            .map(() => ({
                number: dataLists.number,
                thumbnail: dataLists.thumbnail,
                eventName: dataLists.eventName,
                eventDetail: dataLists.eventDetail,
                shopName: dataLists.shopName,
                term: dataLists.term,
                enteredDate: dataLists.enteredDate,
                state: dataLists.state
            }))
    
    )

    return(
        <OwnerMainPage columns={columns} data={data}/>
    )
}

export default TableData