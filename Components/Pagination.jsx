import React from 'react'
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/dist/client/router';

function Pagination({noOfPages,currentCategory}) {
    const router = useRouter()
    const paginationHandler = (e) =>{
        router.push(`/${currentCategory}/${e.selected+1}`)
            console.log(e.selected)
    }
    return (
        <div>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                subContainerClassName={"pages pagination"}
                pageCount={noOfPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(e)=>paginationHandler(e)}
            />
        </div>
    )
}

export default Pagination
