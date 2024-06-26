

interface SquareProps
{
    value: null | string;
    onclick: () => void;
}

const Square : React.FC<SquareProps> = ({value, onclick}) =>
{
  return(
    <button className= "square" onClick={onclick} >{value}</button>
  )
}

export default Square;