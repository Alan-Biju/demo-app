// components/Table.js

const ListTable = ({ columns, data }) => {
    return (
        <div className="w-screen px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg mt-10">
              <thead>
                <tr>
                  {columns && columns.map((col, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {col.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr key={index}>
                    {Object.values(item).map((value, idx) => (
                      <td
                        key={idx}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
};

export default ListTable;
