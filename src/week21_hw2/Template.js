import {PiecesRow,PiecesColumn,Row,Column,VisualBoardWrapper,PiecesBoardWrapper,InformationWrapper,BoardWrapper} from "./Style.js";

export function Information({winner}){
  return(
   <InformationWrapper>
     <p>Winner is {winner}</p>
   </InformationWrapper>
  )
 };

export function Board ({board,handleClick}){
  return (
    <BoardWrapper>
      <VisualBoard/>
      <PiecesBoard board={board} handleClick={handleClick}/>
    </BoardWrapper>
  )
};
export function VisualBoard (){
  const board = Array(18).fill(Array(18).fill())
  let x = 0;
  let y= 0;
  return (
    <VisualBoardWrapper>
      {board.map(row => (
        <Row key={y++}>
          {row.map(column => <Column key={x++}></Column>)}
        </Row>
      ))}
    </VisualBoardWrapper>
  )
};

export function PiecesBoard ({board,handleClick}){
  let x = 0;
  let y= 0;
  return (
    <PiecesBoardWrapper>
      {board.map(row => (
        <PiecesRow key={y++}>
          {row.map(column => <PiecesColumn onClick={handleClick} color={column} key={x++}>{x}</PiecesColumn>)}
        </PiecesRow>
      ))}
    </PiecesBoardWrapper>
  )
};
