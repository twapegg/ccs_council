import Table from "@/components/Table.jsx";
import shirtSizing from "../../data/studentList.js";

export default function Tracker() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CCS Student Tracker</h1>

      <p>to add:</p>
      <ul>
        <li>search bar</li>
        <li>filter</li>
        <li>sort</li>
        <li>clean pagination</li>
      </ul>

      <Table data={shirtSizing} />
    </main>
  );
}
