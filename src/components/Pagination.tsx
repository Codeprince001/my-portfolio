// components/Pagination.tsx
import { Button, HStack } from '@chakra-ui/react';
import React from 'react';

interface Props {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  if (totalPages === 1) return null;

  return (
    <HStack justify="center" flexWrap="wrap">
      {[...Array(totalPages)].map((_, i) => (
        <Button
          key={i}
          onClick={() => onPageChange(i + 1)}
          variant={currentPage === i + 1 ? 'solid' : 'outline'}
          size="sm"
          colorScheme="orange"
        >
          {i + 1}
        </Button>
      ))}
    </HStack>
  );
};

export default Pagination;
