import React from 'react'

function TableData({
  tableInfo,
  renderRow,
  className = '',
}: {
  tableInfo: {
    headers: string[]
    body: any
  }
  renderRow: any
  className?: string
}) {
  return (
    <table className={'table ' + className}>
      <thead>
        <tr>
          {tableInfo.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{tableInfo.body.map((item: any) => renderRow(item))}</tbody>
    </table>
  )
}

export default TableData
