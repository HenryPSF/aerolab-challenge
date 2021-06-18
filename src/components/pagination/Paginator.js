import Pagination from "@material-ui/lab/Pagination";

import { PaginationContainer, PaginationText } from './paginationStyle';

const Paginator = ({ currentPage, pagesToRender, setCurrentPage, isPaginationBottom }) =>
{
    const handlePagination = (_event, selectedPage) =>
    {
        setCurrentPage(selectedPage);
    }

    return (
        <PaginationContainer>
            {!isPaginationBottom &&
                <PaginationText>
                    Page {currentPage} of {pagesToRender}
                </PaginationText>}
            <Pagination
                count={pagesToRender}
                variant="outlined"
                page={currentPage}
                onChange={handlePagination}
            />
        </PaginationContainer>
    )
}

export default Paginator;