import React from 'react';

function TableData({
  tableInfo,
  renderRow,
  className = '',
  children,
}: {
  tableInfo: {
    headers?: string[];
    body: any;
  };
  renderRow: (item: any, index: number | string) => void;
  className?: string;
  children?: any;
}) {
  return !tableInfo.body.length ? (
    <div>No data</div>
  ) : (
    <table className={'table ' + className}>
      {tableInfo.headers && (
        <thead>
          <tr>
            {tableInfo.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {tableInfo.body.map((item: any, index: any) => renderRow(item, index))}
        {children}
      </tbody>
    </table>
  );
}

export default TableData;
