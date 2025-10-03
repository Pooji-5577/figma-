export default function BalanceStats() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Total SOL */}
      <div className="bg-[#180930] rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
          <div className="text-[#A39DAC] text-xs">Total SOL</div>
        </div>
        <div className="text-white text-2xl font-bold">12.211</div>
      </div>

      {/* Total ETH */}
      <div className="bg-[#180930] rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          <div className="text-[#A39DAC] text-xs">Total ETH</div>
        </div>
        <div className="text-white text-2xl font-bold">12.211</div>
      </div>
    </div>
  );
}
