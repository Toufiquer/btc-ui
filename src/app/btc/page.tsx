import { BTCResearch, columns } from "./columns";
import { DataTable } from "./data-table";
import btc_2022 from "@/lib/btc-data/btc-2022.json";
async function getData(): Promise<BTCResearch[]> {
  // Fetch data from your API here.
  const data: BTCResearch[] = [...btc_2022];
  return [...data];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className=" py-10 bg-slate-900 min-h-screen w-full text-slate-400 px-4">
      btc
      <DataTable columns={columns} data={data} />
    </div>
  );
}
