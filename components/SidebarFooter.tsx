export default function SidebarFooter() {
  return (
    <div className="bg-[#110229] p-4">
      <div className="flex items-center justify-between">
        {/* User Info */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 bg-gradient-to-r from-[#D899F8] to-[#7E61E7] rounded-full flex items-center justify-center text-white font-bold text-sm">
            B
          </div>
          
          {/* Name and Status */}
          <div className="flex flex-col">
            <span className="text-white text-sm font-semibold">Boss-1#8087</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-[#36CD7B] rounded-full"></div>
              <span className="text-[#36CD7B] text-xs">Authenticated</span>
            </div>
          </div>
        </div>

        {/* Logout Icon */}
        <button className="text-[#A39DAC] hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>

      {/* Version */}
      <div className="text-[#A39DAC] text-xs mt-2">v2.0.0</div>
    </div>
  );
}
