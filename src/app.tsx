import { useCallback, useEffect, useState } from 'react'
import { Header } from './components/header'
import { Input } from './components/input'
import { TableHeader, TableHeaderMobile } from './components/table-header'
import { TableRow, TableRowMobile } from './components/table-row'
import {
  getCollaborators,
  type collaboratorsType,
} from './http/get-collaborators'
import { useMediaQuery } from './hooks/useMediaQuery'

export function App() {
  const [collaborators, setCollaborators] = useState<collaboratorsType[]>([])
  const [inputSearch, setInputSearch] = useState<string | undefined>()

  const handleGetCollaborators = useCallback(async () => {
    const response = await getCollaborators()
    setCollaborators(response)
  }, [])

  useEffect(() => {
    handleGetCollaborators()
  }, [])

  const collaboratorsFiltered = collaborators.filter(item => {
    if (!inputSearch) return true
    const isMatchJob = item.job
      .toLowerCase()
      .includes(inputSearch.toLowerCase())
    const isMatchName = item.name
      .toLowerCase()
      .includes(inputSearch.toLowerCase())
    const isMatchPhone = item.phone
      .toLowerCase()
      .includes(inputSearch.toLowerCase())
    return isMatchJob || isMatchName || isMatchPhone
  })

  const mediaQuery = useMediaQuery()

  return (
    <div className="flex items-center min-h-screen flex-col bg-gray-0">
      <Header />

      <main className="p-8 max-w-256 w-full space-y-8">
        <header className="w-full max-md:space-y-5 md:flex md:justify-between items-center">
          <h1 className="font-medium leading-6 text-xl">Funcionários</h1>
          <Input
            type="text"
            onChange={e => {
              setInputSearch(e.currentTarget.value)
            }}
          />
        </header>
        {collaborators.length > 0 &&
          (mediaQuery >= 768 ? (
            <table className="w-full overflow-hidden rounded-t-lg">
              <TableHeader />
              <tbody>
                {collaboratorsFiltered.map(collaborator => (
                  <TableRow key={collaborator.id} {...collaborator} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="w-full flex flex-col">
              <TableHeaderMobile />
              <div>
                {collaboratorsFiltered.map(collaborator => (
                  <TableRowMobile key={collaborator.id} {...collaborator} />
                ))}
              </div>
            </div>
          ))}
        {collaborators.length === 0 && (
          <div className="w-full flex flex-col items-center justify-center">
            <h3 className="text-3xl text-gray-20 font-semibold">Sem dados</h3>
            <span className="text-gray-20 text-sm">Verifique o servidor</span>
          </div>
        )}
      </main>
    </div>
  )
}
