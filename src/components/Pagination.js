import React from 'react'
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import PropTypes from 'prop-types'
import Home from '../screens/home'

const Paginations = ({ count, handlePageClick}) => {
  
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  return (
    <div> 
      <Pagination
      onChange={handlePageClick} 
      page={page}
      count={count}
      renderItem={(item) => (
        <PaginationItem
          
          component={Link}
          to={`/characters${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  
    </div>
  )
}

function PaginationLink() {
  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
}

Paginations.propTypes = {
  count: PropTypes.number,
}

Paginations.defaultProps = {
  count: 10,

}

export default Paginations