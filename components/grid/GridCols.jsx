const GridCols = ({children, cols=1}) => {
  return <div className={`grid grid-cols-3 gap-6`}>{children}</div>
}

export default GridCols