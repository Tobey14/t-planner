import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Pagination = ({ data, pageSize, action, actionPayload }) => {

    const dispatch = useDispatch();
    const [paginator, setPaginator] = useState({pageIndex: 1, pageSize: pageSize});
    const pageNumbers = [...Array(Math.ceil(data.length/paginator.pageSize)).keys()].map(x => ++x);

    return (
            <div className="pagination">
                <p className="pagination_count">
                    Showing {((paginator.pageIndex - 1) * paginator.pageSize) + 1} to {data.length > (paginator.pageSize * paginator.pageIndex) ? paginator.pageSize * paginator.pageIndex : data.length} of {data.length} entries
                </p>

                <div className="pagination-btn-div">

                    {paginator.pageIndex > 3 ? <button>prev</button> : ''}
                    {pageNumbers.map((page) => {
                        
                        return (

                            <button key={page} className={paginator.pageIndex == page ? 'active' : ''}
                                onClick={() => {
                                    actionPayload.pageIndex = page;
                                    dispatch(action(actionPayload));
                                    setPaginator({ pageIndex: page, pageSize: paginator.pageSize })
                                }}
                            >
                                {page}
                            </button>
                        )
                    })}
                    {paginator.pageIndex > 3 ? <button>next</button> : ''}
                </div>
            </div>

    )
}

export default Pagination;
