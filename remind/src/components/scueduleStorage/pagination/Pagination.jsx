import React from 'react';
import * as S from './Pagination.style';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <S.PaginationWrapper>
      <S.Arrow disabled={currentPage === 1} onClick={handlePrev}>
        <FiChevronLeft />
      </S.Arrow>

      {[...Array(totalPages)].map((_, idx) => {
        const page = idx + 1;
        return (
          <S.PageButton
            key={page}
            isActive={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </S.PageButton>
        );
      })}

      <S.Arrow disabled={currentPage === totalPages} onClick={handleNext}>
        <FiChevronRight />
      </S.Arrow>
    </S.PaginationWrapper>
  );
};

export default Pagination;
