export default function TransactionStats() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Included Transactions */}
      <div className="bg-[#180930] rounded-lg p-4">
        <div className="text-[#A39DAC] text-xs mb-2">Included Transactions</div>
        <div className="text-white text-3xl font-bold">21</div>
      </div>

      {/* Reverted Transactions */}
      <div className="bg-[#180930] rounded-lg p-4">
        <div className="text-[#A39DAC] text-xs mb-2">Reverted Transactions</div>
        <div className="text-white text-3xl font-bold">21</div>
      </div>
    </div>
  );
}
