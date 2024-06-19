import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className=" py-10 bg-slate-800 min-h-screen w-full text-slate-400 px-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
