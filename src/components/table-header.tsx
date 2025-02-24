export function TableHeader() {
  return (
    <thead className="bg-blue-primary">
      <tr className="text-white font-medium text-base uppercase">
        <th className="px-2 h-12 first:pl-8 text-left align-middle">Foto</th>
        <th className="px-2 h-12 text-left align-middle w-50">Nome</th>
        <th className="px-2 h-12 text-left align-middle w-[100px]">Cargo</th>
        <th className="px-2 h-12 text-left align-middle min-w-[167px]">
          Data de admissão
        </th>
        <th className="px-2 h-12 last:pr-8 text-left align-middle">Telefone</th>
      </tr>
    </thead>
  )
}

export function TableHeaderMobile() {
  return (
    <div className="bg-blue-primary rounded-t-lg p-4 flex justify-between items-center">
      <div className="font-medium text-base flex leading-5 tracking-normal text-white uppercase gap-6">
        <span className="w-11 block">Foto</span>
        <span>Nome</span>
      </div>
      <span className="size-2 rounded-full bg-white flex mr-3 ml-1" />
    </div>
  )
}
