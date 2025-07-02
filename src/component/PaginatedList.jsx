import { useState, useEffect } from "react"
import ReactPaginate from 'react-paginate';
import '../assets/PaginationList.css'

function PaginatedList ({ dataRecipe, itemPerPage, handlePage }) {
 const [pageOffset, setPageOffset] = useState(0);
 const endOffset = pageOffset + itemPerPage;
  // console.log(`Loading items from ${pageOffset} to ${endOffset}`);
 const currentPageData = dataRecipe.slice(pageOffset, endOffset);
 const pageCount = Math.ceil(dataRecipe.length / itemPerPage);


 useEffect(() => {
    handlePage(currentPageData);
 }, [currentPageData, handlePage]);

 const handlePageClick = (event) => {
   const newOffset = (event.selected * itemPerPage) % dataRecipe.length;
  
   setPageOffset(newOffset);
   
 }
 return (
   <>
   <ReactPaginate
   breakLabel="..."
   nextLabel=" >"
   onPageChange={handlePageClick}
   pageRangeDisplayed={3}
   marginPagesDisplayed={2}
   breakAriaLabels={"break page"}
   pageCount={pageCount}
   previousLabel= "<"
   renderOnZeroPageCount={null}
   pageClassName="page-item"
   pageLinkClassName="page-link"
   previousClassName="page-item"
   previousLinkClassName="page-link"
   nextClassName="page-item"
   nextLinkClassName="page-link"
   breakClassName="page-item"
   breakLinkClassName="page-link"
   activeClassName="active"
   className="pagination"
   />
   </>
 )
}

export default PaginatedList
