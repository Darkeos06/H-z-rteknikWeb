export default function AdminLogo() {
  return (
    <div className="flex items-center gap-2.5 py-1">
      <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-base shadow-md">
        HT
      </div>
      <div className="flex flex-col">
        <span className="text-base font-black tracking-tight text-white leading-none">
          HIZIR TEKNİK
        </span>
        <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
          Yönetim Paneli
        </span>
      </div>
    </div>
  )
}
