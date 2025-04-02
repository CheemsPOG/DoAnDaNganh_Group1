import Image from "next/image";

export default async function TempPage() {
    const res = await fetch('http://127.0.0.1:8000/temp/history', {
      cache: 'no-store', // Prevents caching
    });
    const data = await res.json();
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-xl font-bold">Temperature History</h1>
          {data && Array.isArray(data) ? (
            data.map((item, index) => (
              <div
                key={index}
                className="bg-blue-100 p-4 rounded-md shadow-md w-full"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold">Value:</span> {item.value}
                  </div>
                  <div>
                    <span className="font-semibold">Timestamp:</span> {item.timestamp}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </main>
      </div>
    );
  }
  