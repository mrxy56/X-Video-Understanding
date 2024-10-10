import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './VideoPagination.css';

export const VideoPagination = () => {
  return (
    <>
        <div className="video-pagination">
            <Pagination className="pagination" aria-label="Page navigation">
              <PaginationItem><PaginationLink href="#" previous/></PaginationItem>
              <PaginationItem active><PaginationLink href="#">1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">5</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#" next/></PaginationItem>
            </Pagination>
        </div>
   </>
  )
}
