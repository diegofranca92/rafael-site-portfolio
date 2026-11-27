'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

import {
  createPublication,
  deletePublication,
  togglePublicationStatus,
  updatePublication
} from '@/src/lib/actions/publications'

import type { Publication, PublicationInput } from '@/src/types/publication'

const emptyForm: PublicationInput = {
  title: '',
  description: '',
  category: '',
  institution: '',
  image: '',
  alt: '',
  link: '',
  order: 0,
  published: false
}

type Props = {
  initialPublications: Publication[]
}

export function PublicationsManager({ initialPublications }: Props) {
  const router = useRouter()

  const [publications, setPublications] = useState(initialPublications)
  const [form, setForm] = useState<PublicationInput>(emptyForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formOpen, setFormOpen] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [isPending, startTransition] = useTransition()

  function resetForm() {
    setForm(emptyForm)
    setEditingId(null)
    setFormOpen(false)
    setError('')
  }

  function openCreateForm() {
    setForm({
      ...emptyForm,
      order: publications.length + 1
    })

    setEditingId(null)
    setError('')
    setSuccess('')
    setFormOpen(true)
  }

  function openEditForm(publication: Publication) {
    setForm({
      title: publication.title,
      description: publication.description,
      category: publication.category,
      institution: publication.institution,
      image: publication.image,
      alt: publication.alt,
      link: publication.link || '',
      order: publication.order,
      published: publication.published
    })

    setEditingId(publication.id)
    setError('')
    setSuccess('')
    setFormOpen(true)
  }

  function handleChange(
    field: keyof PublicationInput,
    value: string | boolean
  ) {
    setForm(current => ({
      ...current,
      [field]: field === 'order' ? Number(value) : value
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setError('')
    setSuccess('')

    startTransition(async () => {
      try {
        if (editingId) {
          await updatePublication(editingId, form)

          setPublications(current =>
            current.map(publication =>
              publication.id === editingId
                ? { ...publication, ...form }
                : publication
            )
          )

          setSuccess('Publicação atualizada com sucesso.')
        } else {
          const result = await createPublication(form)

          const newPublication: Publication = {
            ...form,
            id: result.id
          }

          setPublications(current =>
            [...current, newPublication].sort((a, b) => a.order - b.order)
          )

          setSuccess('Publicação criada com sucesso.')
        }

        resetForm()
        router.refresh()
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Não foi possível salvar a publicação.'
        )
      }
    })
  }

  function handleDelete(publication: Publication) {
    const confirmed = window.confirm(
      `Tem certeza que deseja excluir "${publication.title}"? Essa ação não pode ser desfeita.`
    )

    if (!confirmed) return

    setError('')
    setSuccess('')

    startTransition(async () => {
      try {
        await deletePublication(publication.id)

        setPublications(current =>
          current.filter(item => item.id !== publication.id)
        )

        setSuccess('Publicação excluída com sucesso.')
        router.refresh()
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Não foi possível excluir a publicação.'
        )
      }
    })
  }

  function handleToggleStatus(publication: Publication) {
    setError('')
    setSuccess('')

    startTransition(async () => {
      try {
        await togglePublicationStatus(publication.id, !publication.published)

        setPublications(current =>
          current.map(item =>
            item.id === publication.id
              ? { ...item, published: !item.published }
              : item
          )
        )

        setSuccess(
          publication.published
            ? 'Publicação desativada.'
            : 'Publicação ativada.'
        )

        router.refresh()
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Não foi possível alterar o status.'
        )
      }
    })
  }

  return (
    <section className='w-full flex flex-col gap-6'>
      {/* CABEÇALHO */}
      <header className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold'>Publicações</h1>

          <p className='mt-2'>
            Gerencie os materiais, artigos e produções do portfólio.
          </p>
        </div>

        <button
          type='button'
          onClick={openCreateForm}
          className='btn btn-primary'
          disabled={isPending}>
          + Nova publicação
        </button>
      </header>

      {/* FEEDBACK */}
      {error && (
        <div className='alert alert-error'>
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div className='alert alert-success'>
          <span>{success}</span>
        </div>
      )}

      {/* FORMULÁRIO */}
      {formOpen && (
        <div className='card border shadow-sm'>
          <div className='card-body'>
            <h2 className='card-title'>
              {editingId ? 'Editar publicação' : 'Nova publicação'}
            </h2>

            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <label className='label font-semibold'>Título</label>

                <input
                  type='text'
                  className='input input-bordered w-full'
                  placeholder='Título da publicação'
                  value={form.title}
                  onChange={e => handleChange('title', e.target.value)}
                  required
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='label font-semibold'>Descrição</label>

                <textarea
                  className='textarea textarea-bordered w-full min-h-32'
                  placeholder='Descrição da publicação'
                  value={form.description}
                  onChange={e => handleChange('description', e.target.value)}
                  required
                />
              </div>

              <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex flex-col gap-2 flex-1'>
                  <label className='label font-semibold'>Categoria</label>

                  <input
                    type='text'
                    className='input input-bordered w-full'
                    placeholder='Ex.: Livro, Cartilha, Artigo'
                    value={form.category}
                    onChange={e => handleChange('category', e.target.value)}
                    required
                  />
                </div>

                <div className='flex flex-col gap-2 flex-1'>
                  <label className='label font-semibold'>Instituição</label>

                  <input
                    type='text'
                    className='input input-bordered w-full'
                    placeholder='Instituição ou veículo'
                    value={form.institution}
                    onChange={e => handleChange('institution', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label className='label font-semibold'>URL da imagem</label>

                <input
                  type='url'
                  className='input input-bordered w-full'
                  placeholder='https://...'
                  value={form.image}
                  onChange={e => handleChange('image', e.target.value)}
                  required
                />

                {form.image && (
                  <div className='mt-2 rounded-xl overflow-hidden border max-w-xs'>
                    {/* Preview da imagem */}
                    <img
                      src={form.image}
                      alt='Preview da publicação'
                      className='w-full h-48 object-cover'
                    />
                  </div>
                )}
              </div>

              <div className='flex flex-col gap-2'>
                <label className='label font-semibold'>
                  Texto alternativo da imagem (Alt)
                </label>

                <input
                  type='text'
                  className='input input-bordered w-full'
                  placeholder='Descreva a imagem para acessibilidade'
                  value={form.alt}
                  onChange={e => handleChange('alt', e.target.value)}
                  required
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='label font-semibold'>
                  Link externo (opcional)
                </label>

                <input
                  type='url'
                  className='input input-bordered w-full'
                  placeholder='https://...'
                  value={form.link || ''}
                  onChange={e => handleChange('link', e.target.value)}
                />
              </div>

              <div className='flex flex-col md:flex-row md:items-center gap-4'>
                <div className='flex flex-col gap-2 w-full md:w-40'>
                  <label className='label font-semibold'>Ordem</label>

                  <input
                    type='number'
                    min={0}
                    className='input input-bordered w-full'
                    value={form.order}
                    onChange={e => handleChange('order', e.target.value)}
                    required
                  />
                </div>

                <label className='label cursor-pointer flex justify-start gap-3 mt-4 md:mt-7'>
                  <input
                    type='checkbox'
                    className='toggle toggle-primary'
                    checked={form.published}
                    onChange={e => handleChange('published', e.target.checked)}
                  />

                  <span className='label-text font-medium'>
                    Publicar no site
                  </span>
                </label>
              </div>

              <div className='flex flex-col-reverse sm:flex-row justify-end gap-3 mt-3'>
                <button
                  type='button'
                  className='btn btn-ghost'
                  onClick={resetForm}
                  disabled={isPending}>
                  Cancelar
                </button>

                <button
                  type='submit'
                  className='btn btn-primary'
                  disabled={isPending}>
                  {isPending ? (
                    <>
                      <span className='loading loading-spinner loading-sm' />
                      Salvando...
                    </>
                  ) : editingId ? (
                    'Salvar alterações'
                  ) : (
                    'Cadastrar publicação'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* LISTAGEM */}
      <div className='w-full overflow-x-auto rounded-xl border'>
        {publications.length === 0 ? (
          <div className='flex flex-col items-center justify-center py-16 px-6 text-center gap-3'>
            <span className='text-4xl'>📚</span>

            <h3 className='font-bold text-lg'>Nenhuma publicação cadastrada</h3>

            <p className='text-content/60'>
              Comece adicionando sua primeira publicação.
            </p>

            <button
              type='button'
              className='btn btn-primary btn-sm mt-2'
              onClick={openCreateForm}>
              Criar publicação
            </button>
          </div>
        ) : (
          <table className='table'>
            <thead>
              <tr>
                <th>Publicação</th>
                <th>Instituição</th>
                <th>Status</th>
                <th>Ordem</th>
                <th className='text-right'>Ações</th>
              </tr>
            </thead>

            <tbody>
              {publications.map(publication => (
                <tr key={publication.id}>
                  <td>
                    <div className='flex items-center gap-3 min-w-64'>
                      <div className='avatar'>
                        <div className='w-14 h-14 rounded-lg'>
                          <img src={publication.image} alt={publication.alt} />
                        </div>
                      </div>

                      <div className='flex flex-col gap-1'>
                        <span className='font-semibold'>
                          {publication.title}
                        </span>

                        <span className='text-xs opacity-60'>
                          {publication.category}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>{publication.institution}</td>

                  <td>
                    <span
                      className={`badge ${
                        publication.published ? 'badge-success' : 'badge-ghost'
                      }`}>
                      {publication.published ? 'Publicado' : 'Rascunho'}
                    </span>
                  </td>

                  <td>{publication.order}</td>

                  <td>
                    <div className='flex justify-end gap-2'>
                      <button
                        type='button'
                        className='btn btn-sm btn-ghost'
                        onClick={() => openEditForm(publication)}
                        disabled={isPending}
                        title='Editar'>
                        Editar
                      </button>

                      <button
                        type='button'
                        className={`btn btn-sm ${
                          publication.published ? 'btn-warning' : 'btn-success'
                        }`}
                        onClick={() => handleToggleStatus(publication)}
                        disabled={isPending}
                        title={
                          publication.published ? 'Despublicar' : 'Publicar'
                        }>
                        {publication.published ? 'Desativar' : 'Ativar'}
                      </button>

                      <button
                        type='button'
                        className='btn btn-sm btn-error btn-outline'
                        onClick={() => handleDelete(publication)}
                        disabled={isPending}
                        title='Excluir'>
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* RESUMO */}
      <div className='flex flex-wrap gap-3 text-sm'>
        <span>Total: {publications.length}</span>

        <span>Publicadas: {publications.filter(p => p.published).length}</span>

        <span>Rascunhos: {publications.filter(p => !p.published).length}</span>
      </div>
    </section>
  )
}
