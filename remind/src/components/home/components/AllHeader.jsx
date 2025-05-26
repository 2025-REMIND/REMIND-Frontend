import * as S from "./AllHeader.style";

const AllHeader = ({ input, BGcolor, icon, iconWidth, color, weight, width, onClick }) => {
    return (
        <S.Header 
            input = { input }
            BGcolor = { BGcolor } 
            color = { color } 
            weight = { weight }
            width = { width }
            onClick = { onClick }
            iconWidth = { iconWidth }
        >
            { icon && <img src = { icon } /> }
            { input }
        </S.Header>
    )
}

export default AllHeader;