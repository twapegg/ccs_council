export default function TableData({ ID, NAME, COURSE, YEAR_LEVEL, UNITS }) {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td class="px-6 py-4">{NAME}</td>
      <td class="px-6 py-4">{COURSE}</td>
      <td class="px-6 py-4">{YEAR_LEVEL}</td>
      <td class="px-6 py-4">{UNITS}</td>
    </tr>
  );
}
