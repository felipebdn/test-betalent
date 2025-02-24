import { useState } from 'react'
import type { collaboratorsType } from '../http/get-collaborators'
import { getDateFormatted } from '../utils/get-date-formatted'
import { getFormattedPhone } from '../utils/get-phone-formatted'

export function TableRow({
  admission_date,
  image,
  job,
  name,
  phone,
}: collaboratorsType) {
  const date = getDateFormatted(new Date(admission_date))
  const phoneFormatted = getFormattedPhone(phone)

  return (
    <tr className="border-b border-black/20 hover:bg-gray-10 bg-white font-normal">
      <td className="px-2 h-12 first:pl-8 text-left align-middle">
        <img
          className="rounded-full size-[34px]"
          src={image}
          alt="Foto de perfil do colaborador"
        />
      </td>
      <td className="px-2 h-12 text-left align-middle truncate">{name}</td>
      <td className="px-2 h-12 text-left align-middle">{job}</td>
      <td className="px-2 h-12 text-left align-middle">{date}</td>
      <td className="px-2 h-12 text-left align-middle">{phoneFormatted}</td>
    </tr>
  )
}

export function TableRowMobile({
  admission_date,
  image,
  job,
  name,
  phone,
}: collaboratorsType) {
  const date = getDateFormatted(new Date(admission_date))
  const phoneFormatted = getFormattedPhone(phone)
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="py-3.5 px-4 bg-white border-b border-black/20">
      <header
        onClick={() => setExpanded(!expanded)}
        className="flex gap-2 justify-between items-center"
        style={{ cursor: 'pointer' }}
      >
        <div className="font-medium text-base items-center flex leading-5 tracking-normal text-white uppercase gap-6">
          <img
            src={image}
            className="size-[34px] mr-[10px] block rounded-full"
          />
          <span className="font-normal truncate text-base text-black-neutral">
            {name}
          </span>
        </div>
        <img
          src="/icons/charm_chevron-down.svg"
          style={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'ease-in-out',
            transitionDuration: '100ms',
            transitionProperty: 'all',
          }}
        />
      </header>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: expanded ? 500 : 0,
        }}
      >
        <main className="py-8">
          <div className="flex flex-col text-base font-medium gap-2">
            <div className="border-b flex justify-between items-center border-dashed border-gray-10">
              <span>Cargo</span> {job}
            </div>
            <div className="border-b flex justify-between items-center border-dashed border-gray-10">
              <span>Data de admissão:</span> {date}
            </div>
            <div className="border-b flex justify-between items-center border-dashed border-gray-10">
              <span>Telefone:</span> {phoneFormatted}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
