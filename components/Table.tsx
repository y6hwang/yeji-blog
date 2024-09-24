export default function Table({headers, items}: {
  headers: { text: string, value: string }[],
  items?: any[],
}) {
  if (!headers || !headers.length) {
    throw new Error("<Table /> header is required.");
  }

  const headerKey = headers.map((header) => header.value);
  return (
    <table className='w-full my-4'>
      <thead>
        <tr className='bg-slate-100 text-center'>
          {headers.map((header, index) => (
              <th key={`header${index}`} className='py-1'>
                {header.text}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <tr key={`item${index}`}>
            {headerKey.map((key) =>
            <td key={`${key}${index}`} className='py-1'>
              {item[key]}
            </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}