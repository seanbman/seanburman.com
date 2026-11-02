export default function Icon({name}:{name:'systems'|'integrations'|'operations'}){
  const common={viewBox:'0 0 64 64',fill:'none',stroke:'currentColor',strokeWidth:3,'aria-hidden':true as const}
  if(name==='systems')return <svg {...common}><path d="M32 5 56 18v28L32 59 8 46V18L32 5Z"/><path d="m8 18 24 14 24-14M32 32v27"/></svg>
  if(name==='integrations')return <svg {...common}><path d="M32 4 59 18 32 32 5 18 32 4ZM5 30l27 14 27-14M5 43l27 14 27-14"/></svg>
  return <svg {...common}><path d="M7 35h12v22H7zM26 23h12v34H26zM45 7h12v50H45z"/></svg>
}
