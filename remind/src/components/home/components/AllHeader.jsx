import * as S from "./AllHeader.style";

const AllHeader = ({ input, BGcolor, icon, color, width, onClick }) => {
    return (
        <S.Header 
            input = { input }
            BGcolor = { BGcolor } 
            color = { color } 
            width = { width }
            onClick = { onClick }
        >
            { icon && <img src = { icon } /> }
            { input }
        </S.Header>
    )
}

export default AllHeader;