export default function UserInfoCard() {
  return (
    <div className="bg-[#180930] rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-[#D899F8] to-[#7E61E7] rounded-full flex items-center justify-center text-white font-bold">
            B
          </div>
          <div>
            <div className="text-white font-semibold">Boss-1#8087</div>
            <div className="flex items-center gap-1 text-xs text-[#A39DAC]">
              <span className="text-[#36CD7B]">✓</span>
              <span>NFT verified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
        <div>
          <div className="text-[#A39DAC] text-xs">User Since</div>
          <div className="text-white text-sm font-semibold">Jan 2024</div>
        </div>
        <div>
          <div className="text-[#A39DAC] text-xs">Membership</div>
          <div className="text-white text-sm font-semibold">Monthly</div>
        </div>
      </div>
    </div>
  );
}
