import * as S from "./AllHeader.style";

const AllHeader = ({ input, BGcolor, icon, color, width }) => {
    const hasText = Boolean(input && input.trim());

    return (
        <S.Header 
            input = { input }
            hasText = { hasText }
            BGcolor = { BGcolor } 
            color = { color } 
            width = { width }
        >
            { icon && <img src = { icon } /> }
            { hasText && input }
        </S.Header>
    )
}

export default AllHeader;